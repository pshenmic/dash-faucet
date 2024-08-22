import { ButtonStepStyle } from './style'
import { useCallback, useEffect, useRef, useState } from 'react'
import { animated, easings, useSpring } from '@react-spring/web'
import { useRouter } from 'next/router'
import { showToast } from '../../../../lib/showToast'
import useGlobalStore from "@/store/store"
import Image from 'next/image'
import useRipple from '../../../../hooks/useRipple'

// leftIcon & rightIcon = {src, alt}
// finished - path to the next step
function ButtonStep({ text, leftIcon, rightIcon, handleClick, ariaLabel = '', finished, numbeOfUncompletedTasks, handleTaskCompletion, ...props }) {
    const rippleRefClick = useRipple()
    const [approved, setApproved] = useState(false);
    const setLoader = useGlobalStore(state => state.setLoader)
    const router = useRouter()
    const inProcess = useRef(false)

    const click = useCallback(async () => {
        if (!handleClick || approved || inProcess.current === true) { return }
        inProcess.current = true
        if (finished && numbeOfUncompletedTasks !== 0) {
            showToast('info', 'You have not completed the tasks, follow the instructions')
            return
        }
        setLoader(true)
        try {
            await handleClick()
            setApproved(true)
            if (typeof numbeOfUncompletedTasks === 'number' && numbeOfUncompletedTasks !== 0 && handleTaskCompletion) {
                handleTaskCompletion()
            }
            setLoader(false)
        } catch (error) {
            setApproved(false);
            setLoader(false)
            inProcess.current = false
        }
    }, [handleClick, numbeOfUncompletedTasks, handleTaskCompletion, approved, inProcess.current])

    useEffect(() => {
        if (approved && finished){
            router.push(finished)
        }
    }, [approved])

    const animationApproved = useSpring({
        to: {
            maxWidth: approved ? '100%' : '0%',
            opacity: approved ? 1 : 0
        },
        config: {
            duration: 2000,
            easing: easings.easeOutQuad
        },
    })

    const ImageAnimated = animated(Image)

    return (
        <ButtonStepStyle ref={rippleRefClick} {...props}>
            <button 
                className={`${approved ? 'ButtonActive' : '' } ${finished && numbeOfUncompletedTasks > 0 ? 'ButtonNoActive' : '' }`} 
                onClick={click} aria-label={ariaLabel}
            >
                {leftIcon
                    ? <Image className={'Icon'} src={leftIcon.src} width={22} height={22} alt={leftIcon.alt} />
                    : null}
                <p>{text}</p>
                {rightIcon
                    ? <Image className={'Icon'} src={rightIcon.src} width={22} height={22} alt={rightIcon.alt} />
                    : <ImageAnimated style={animationApproved} className={'Approved'} src={'/community/approved.svg'} width={18} height={18} alt={'approved'} />}
            </button>
        </ButtonStepStyle>
    )
}

export default ButtonStep
