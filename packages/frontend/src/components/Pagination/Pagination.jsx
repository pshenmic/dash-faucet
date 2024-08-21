import { createRef, useEffect, useRef, useState } from "react"
import { PaginationStyle } from "./style"
import { useRouter } from "next/router"
import { animated, easings, useSpring } from "@react-spring/web"
import { animationLinePagination } from "../Animated/Block/CommonAnimations/CommonAnimations"
import { colors } from "../../styles"

function Pagination ({ data }) {
    const router = useRouter()
    const [activeIndex, setActiveIndex] = useState(0)
    const [indexLine, setIndexLine] = useState(0)
    const interval = useRef(null)
    const refsArray = useRef([])

    useEffect(() => {
        if (!data?.length) { return }
        refsArray.current = data.map((_, i) => refsArray.current[i] || createRef())

        // spacing value for line width
        interval.current = 100 / (data?.length - 1)

        data.forEach((_, i) => {
            if (_.pagination.path === router.asPath) {
                setActiveIndex(i - 1)
                setIndexLine(i)
            }
            if (router.asPath === '/receipt') {
                setActiveIndex(data.length + 1)
                setIndexLine(data.length - 1)
            }
        })
    },[data, router])

    useEffect(() => {
        if (!refsArray.current.length > 0) {return} 
        refsArray.current.forEach((_, i) => {
            if (!_.current) {return}
            if (i < activeIndex){
                _.current.style.backgroundColor = colors.green100
            } else {
                _.current.style.backgroundColor = colors.white150
            }
        })
        const currentRef = refsArray.current[activeIndex];
        if (currentRef?.current) {
            currentRef.current.style.backgroundColor = colors.green100;
        }
    }, [activeIndex])

    const animationLine = animationLinePagination(interval, indexLine)

    return(
        <PaginationStyle>
            { data?.length > 0 ?
                data.map((_, i) => (
                    <div key={i} ref={refsArray.current[i]} className={'Circle'}>
                        <p>{_.name}</p>
                    </div>
                ))
            : null }
            <div className={'Line'}>
                <animated.div style={animationLine} className={'Line__Green'}></animated.div>
            </div>
        </PaginationStyle>
    )
}

export default Pagination
