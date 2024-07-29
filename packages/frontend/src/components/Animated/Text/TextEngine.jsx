import React, { useEffect, memo, useRef, useMemo, MutableRefObject, useState, useCallback, forwardRef, ReactNode, CSSProperties, ElementType, useImperativeHandle } from 'react'
import { NextPage } from 'next';
import { SpringConfig, useInView, useSprings } from '@react-spring/web';
import { animated } from '@react-spring/web';
import ResizeObserver from 'resize-observer-polyfill';

// export interface EngineProps {
//     enabled?: boolean,
//     columnGap?: number
//     mode?: 'once' | 'forward' | 'always'
//     className?: string
//     wrapLineClassName?: string
//     lineClassName?: string
//     wrapWordClassName?: string
//     wordClassName?: string
//     wrapLetterClassName?: string
//     letterClassName?: string
//     overflow?: boolean
//     wrapLineIn?: { [key: string]: any }
//     wrapLineOut?: { [key: string]: any }
//     lineIn?: { [key: string]: any }
//     lineOut?: { [key: string]: any }
//     letterIn?: { [key: string]: any }
//     letterOut?: { [key: string]: any }
//     wrapLetterIn?: { [key: string]: any }
//     wrapLetterOut?: { [key: string]: any }
//     wordIn?: { [key: string]: any }
//     wordOut?: { [key: string]: any }
//     wrapWordIn?: { [key: string]: any }
//     wrapWordOut?: { [key: string]: any }
//     lineConfig?: SpringConfig
//     wordConfig?: SpringConfig
//     letterConfig?: SpringConfig
//     lineDelayIn?: number
//     letterDelayIn?: number
//     wordDelayIn?: number
//     lineCoeff?: number
//     wordCoeff?: number
//     letterCoeff?: number
//     delayOut?: number
//     tag?: HtmlTextTags
//     immediateOut?: boolean
//     children?: any
// }

const TextEngine = memo(function Text({
    // Distance between words in "em"
    columnGap = 0.3,
    // Mode (always=play always, forward=play only on scroll from top to bottom, once=once per page load)
    mode = 'always',
    // Animation plays only if true (useful to play animation after page loaded state change)
    enabled = true,

    // ClassNames
    className,
    wrapLineClassName,
    lineClassName,
    wrapWordClassName,
    wordClassName,
    wrapLetterClassName,
    letterClassName,

    // Ability to crop text while animation
    overflow = false,

    // Springs Values for Letters & Words & their wrappers
    wrapLineIn = {},
    wrapLineOut = {},
    lineIn = {},
    lineOut = {},
    wrapWordIn = {},
    wrapWordOut = {},
    wordIn = {},
    wordOut = {},
    wrapLetterIn = {},
    wrapLetterOut = {},
    letterIn = {},
    letterOut = {},

    // Spring Configs for Letters & Words
    lineConfig,
    wordConfig,
    letterConfig,

    // Delay after which play animation after text is on the screen for Letters & Words & Lines
    lineDelayIn = 0,
    letterDelayIn = 0,
    wordDelayIn = 0,

    // Coefficient to change delay based on lines' or words' or texts' index
    lineCoeff = 0.02,
    letterCoeff = 0.02,
    wordCoeff = 0.02,

    // Delay after which immidiately set animation to Out state after text is Not on the screen for ALL
    delayOut = 0,

    // Change the tag is would be used as a parent ("span" by default)
    tag = 'span',

    // Change the ability to play animation smoothly on Out
    immediateOut = true,

    // Text to display
    children,

    ...props
}) {
    const [ref, inView] = useInView()
    const played = useRef(false) // fixes issue with auto animation on resize
    const scrolledDown = useRef(false)

    const words = useMemo(() => children.toString().split(' ').map((word) => word.split('')), [children])
    const letters = useMemo(() => words.flat(), [words])
    const [lines, _setLines] = useState([])
    const setLines = useCallback(() => void _setLines(calcLinesRefs(ref)), [_setLines])
    useEffect(() => void setLines(), [letters, setLines])
    useResizeObserver(ref, setLines)

    // Only for "FORWARD" mode
    useEffect(() => {
        if (mode !== 'forward') { return }
        function handler() {
            if (ref.current) {
                if (ref.current.getBoundingClientRect().top > 0) {
                    scrolledDown.current = false
                } else {
                    scrolledDown.current = true
                }
            }
        }
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [mode])

    // Only for "ONCE" mode
    useEffect(() => {
        if (inView && enabled && mode === 'once') {
            scrolledDown.current = true
        }
    }, [inView, enabled])

    const [wrapLineSprings, wrapLineApi] = useSprings(lines.length, () => ({
        ...wrapLineOut,
    }));
    const wrapLineStyle = useCallback((wordIndex) => {
        const index = lines.flat().find(_ => _.index === wordIndex)?.lineIndex || 0
        return wrapLineSprings[index]
    }, [wrapLineSprings, lines])
    const [lineSprings, lineApi] = useSprings(lines.length, () => ({
        ...lineOut,
    }));
    const lineStyle = useCallback((wordIndex) => {
        const index = lines.flat().find(_ => _.index === wordIndex)?.lineIndex || 0
        return lineSprings[index]
    }, [lineSprings, lines])
    const [wrapWordSprings, wrapWordApi] = useSprings(words.length, () => ({
        ...wrapWordOut,
    }));
    const [wordSprings, wordApi] = useSprings(words.length, () => ({
        ...wordOut,
    }));
    const [wrapLetterSprings, wrapLetterApi] = useSprings(letters.length, () => ({
        ...wrapLetterOut,
    }));
    const [letterSprings, letterApi] = useSprings(letters.length, () => ({
        ...letterOut,
    }));

    const delayOutTimeoutOut = useRef()
    useEffect(() => {
        if (inView && enabled) {
            // line
            wrapLineApi.start(index => ({
                ...wrapLineIn,
                delay: lineDelayIn + index * lineCoeff * 1000,
                config: lineConfig,
                immediate: played.current === true
            }));
            lineApi.start(index => ({
                ...lineIn,
                delay: lineDelayIn + index * lineCoeff * 1000,
                config: lineConfig,
                immediate: played.current === true
            }));
            // word
            wrapWordApi.start(index => ({
                ...wrapWordIn,
                delay: wordDelayIn + index * wordCoeff * 1000,
                config: wordConfig,
                immediate: played.current === true
            }));
            wordApi.start(index => ({
                ...wordIn,
                delay: wordDelayIn + index * wordCoeff * 1000,
                config: wordConfig,
                immediate: played.current === true
            }));
            // letter
            wrapLetterApi.start(index => ({
                ...wrapLetterIn,
                delay: letterDelayIn + index * letterCoeff * 1000,
                config: letterConfig,
                immediate: played.current === true
            }));
            letterApi.start(index => ({
                ...letterIn,
                delay: letterDelayIn + index * letterCoeff * 1000,
                config: letterConfig,
                immediate: played.current === true
            }));
            played.current = true
        } else if (!scrolledDown.current) {
            clearTimeout(delayOutTimeoutOut.current)
            delayOutTimeoutOut.current = setTimeout(() => {
                // line
                wrapLineApi.start(() => ({
                    ...wrapLineOut,
                    immediate: immediateOut,
                }));
                lineApi.start(() => ({
                    ...lineOut,
                    immediate: immediateOut,
                }));
                // word
                wrapWordApi.start(() => ({
                    ...wrapWordOut,
                    immediate: immediateOut,
                }));
                wordApi.start(() => ({
                    ...wordOut,
                    immediate: immediateOut,
                }));
                // letter
                wrapLetterApi.start(() => ({
                    ...wrapLetterOut,
                    immediate: immediateOut,
                }));
                letterApi.start(() => ({
                    ...letterOut,
                    immediate: immediateOut,
                }));
                played.current = false
            }, delayOut)
        }
    }, [inView, letterApi, wordApi, lineApi, letterIn, letterOut, wordIn, wordOut, lineIn, lineOut, wordConfig, letterConfig, lineConfig, delayOut, wordDelayIn, letterDelayIn, lineDelayIn, wordCoeff, letterCoeff, lineCoeff, wrapWordOut, wrapWordIn, wrapLetterOut, wrapLetterIn, wrapLineIn, wrapLineOut, wrapLineApi]);

    return (
        <VarTextTag tag={tag} ref={ref} style={{ columnGap: `${columnGap}em`, display: 'flex', flexWrap: 'wrap' }} className={className} {...props}>
            {words.map((word, wordIndex) => (
                <animated.span style={{ ...wrapLineStyle(wordIndex), ...{ overflow: overflow ? 'hidden' : 'initial' } }} className={'line-word' + (wrapLineClassName ? ' ' + wrapLineClassName : '')} key={wordIndex}>
                    <animated.span style={lineStyle(wordIndex)} className={lineClassName}>
                        <animated.span style={{ ...wrapWordSprings[wordIndex], ...{ overflow: overflow ? 'hidden' : 'initial' } }} className={wrapWordClassName}>
                            <animated.span style={wordSprings[wordIndex]} className={wordClassName}>
                                {word.map((letter, letterIndex) => {
                                    const index = words.slice(0, wordIndex).flat().length + letterIndex;
                                    return (
                                        <animated.span key={letterIndex} style={{ ...wrapLetterSprings[index], ...{ overflow: overflow ? 'hidden' : 'initial' } }} className={wrapLetterClassName}>
                                            <animated.span style={letterSprings[index]} className={letterClassName} >
                                                {letter}
                                            </animated.span>
                                        </animated.span>
                                    );
                                })}
                            </animated.span>
                        </animated.span>
                    </animated.span>
                </animated.span>
            ))}
        </VarTextTag>
    );
});


// export type HtmlTextTags =
//     | "p"
//     | "span"
//     | "h1"
//     | "h2"
//     | "h3"
//     | "h4"
//     | "h5"
//     | "h6"
//     | "a"
//     | "strong"
//     | "em"
//     | "b"
//     | "i"
//     | "u"
//     | "small"
//     | "del"
//     | "ins"
//     | "sub"
//     | "sup"
//     | "mark"
//     | "abbr"
//     | "cite"
//     | "q"
//     | "time"
//     | "code"
//     | "var"
//     | "samp"
//     | "kbd"
//     | "pre"
//     | "blockquote";

// export interface VarTextTagProps {
//     tag?: HtmlTextTags;
//     children: ReactNode;
//     className?: string;
//     style?: CSSProperties;
// }

export const VarTextTag = forwardRef(
    ({ tag = 'span', children, className, style, ...props }, outerRef) => {
        const ref = useRef(null);
        useImperativeHandle(outerRef, () => ref.current)
        const Tag = tag;

        return (
            <Tag ref={ref} className={className} style={style} {...props}>
                {children}
            </Tag>
        );
    }
);
VarTextTag.displayName = 'VarTextTag'

export const useResizeObserver = (trigger, rerender) => {
    const width = useRef(0)

    useEffect(() => {
        const divElement = trigger.current
        if (!divElement) return

        const handleResize = (entries) => {
            for (let entry of entries) {
                if (entry.target === divElement) {
                    const oldWidth = width.current
                    const newWidth = entry.contentRect.width
                    width.current = newWidth
                    rerender(newWidth, oldWidth)
                }
            }
        };

        const resizeObserver = new ResizeObserver(handleResize)
        resizeObserver.observe(divElement)

        return () => {
            resizeObserver.unobserve(divElement)
        }
    }, [rerender])
}

function calcLinesRefs(containerRef) {
    if (!containerRef.current) { return [] }
    const { top: containerTop } = containerRef.current.getBoundingClientRect()
    const _words = containerRef.current.querySelectorAll('.line-word')
    if (!_words.length) { return [] }
    const lines = []
    // IMPORTANT: Calc lines count based on height, be carefull with adding *row-gap*
    // IMPORTANT: *All words same height*
    const wordHeight = _words[0].getBoundingClientRect().height

    _words.forEach((w, index) => {
        const { top: wordTop } = w.getBoundingClientRect()
        const lineIndex = Math.floor((wordTop - containerTop) / wordHeight)
        lines[lineIndex] = [...(lines[lineIndex] || []), { word: w, index, lineIndex }]
    })

    return lines
}

export default TextEngine;