import { NextPage } from "next"
import { useRouter } from "next/router"
import Link from "next/link"
import { AnchorHTMLAttributes, createContext, forwardRef, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import { TransitionBg } from "./TransitionBg"

const AnimatedRouterContext = createContext({})
export const AnimatedRouterLayout = ({ children }) => {
    const changing = useRef(false)
    const router = useRouter()
    const transitionRef = useRef({ show: () => {}, hide: () => {} })
    const [rerouting, setRerouting] = useState(false)

    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            // console.log('change start')
        })
        router.events.on('routeChangeComplete', () => {
            routeChangeComplete()
            changing.current = false
        })
        router.events.on('routeChangeError', (error) => {
            console.warn('[AnimatedRouter]: Error during routing', error)
            routeChangeComplete()
            changing.current = false
        })
    }, [])

    const routeChangeStart = (href) => {
        if (changing.current) { return }
        changing.current = true
        setRerouting(true)
        transitionRef.current?.show(() => {
            router.push(href)
        })
    }
    const routeChangeComplete = () => {
        transitionRef.current?.hide()
        setRerouting(false)
    }

    const value = {
        routeChangeStart,
        routeChangeComplete,
        rerouting
    }

    return (
        <AnimatedRouterContext.Provider value={value}>
            <TransitionBg ref={transitionRef}/>
            {children}
        </AnimatedRouterContext.Provider>
    )
}

export const useAnimatedRouter = () => {
    const context = useContext(AnimatedRouterContext)
    return context
}



export const AnimLink = forwardRef(({onClick, ...props}, outerRef) => {
    const ref = useRef<HTMLAnchorElement | null>(null)
    useImperativeHandle(outerRef, () => ref.current)
    const router = useAnimRouter()
    return (
        <Link
            ref={ref}
            onClick={(e) => { e.preventDefault(); router.push(e); onClick && onClick(e) }}
            {...props}
        >
            {props.children}
        </Link>
    )
})
AnimLink.displayName = 'AnimLink'


export const useAnimRouter = () => {
    const router = useRouter()
    const { routeChangeStart, rerouting } = useAnimatedRouter()
    return useMemo(() => ({
        ...router,
        push: (href) => {
            routeChangeStart(href)
        },
        isRerouting: rerouting
    }), [routeChangeStart, router, rerouting])
}

export const useIsRerouting = (delayIn = 2000, delayOut = 2000) => {
    const { rerouting: _rerouting } = useAnimatedRouter()
    const [rerouting, setRerouting] = useState(_rerouting)
    const tmIn = useRef()
    const tmOut = useRef()
    useEffect(() => {
        clearTimeout(tmIn.current)
        clearTimeout(tmOut.current)
        if (_rerouting) {
            tmIn.current = setTimeout(() => {
                setRerouting(true)
            }, delayIn)
            return
        }
        tmOut.current = setTimeout(() => {
            setRerouting(false)
        }, delayOut)
    }, [_rerouting, setRerouting])
    return rerouting
}