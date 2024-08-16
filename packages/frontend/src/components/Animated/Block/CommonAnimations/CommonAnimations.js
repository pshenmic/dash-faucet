import { easings, useSpring, useTransition } from "@react-spring/web";
import { colors } from "@/styles"

export const animationEllipse = () => useSpring({
    from: {
      transform: 'translate(-50%, 100%)',
      opacity: 0,
    },
    to: {
      transform: 'translate(-50%, 0%)',
      opacity: 1,
    },
    config: {
      duration: 1500,
      easing: easings.easeOutQuad,
    },
    delay: 300,
})

export const animationPopUp = (openAuthorizePopUp) => useTransition(openAuthorizePopUp, {
    from: { transform: 'translate(-50%, -30%)', opacity: 0 },
    enter: { transform: 'translate(-50%, -50%)', opacity: 1 },
    leave: { transform: 'translate(-50%, -70%)', opacity: 0 },
    config: { duration: 600, easing: easings.easeInOutCubic },
    trail: 200,
    exitBeforeEnter: true
})

export const animationLinePagination = (interval, indexLine) => useSpring({
    from: {
        width: '0%',
    },
    to: {
        width: `${interval.current * indexLine}%` || '0%',
    },
    config: {
        easing: easings.easeOutQuad,
        duration: 1000
    },
    delay: 100,
})
