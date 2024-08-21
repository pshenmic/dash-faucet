import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/router"
import { parseCookies } from 'nookies'
import { useTransition, animated, easings } from "@react-spring/web"
import { dataPagination } from "../../lib/dataPagination"
import { stepData } from "../../lib/stepData"
import useGlobalStore from "../../store/store"
import CoinsSent from "../../components/Claim/CoinsSent/CoinsSent"
import FllowClaim from "../../components/Claim/FllowClaim/FllowClaim"
import Pagination from "../../components/Pagination/Pagination"
import useInnerWidth from "../../hooks/useWidthWindow"
import Receipt from "../../components/Claim/Receipt/Receipt"

export default function Page() {
  const router = useRouter()
  const [verification, setVerification] = useState(false)
  const cookies = parseCookies()
  const ref = useRef(null)
  const [heightWrapper, setHeightWrapper] = useState(0)
  const walletInput = useGlobalStore(state => state.walletInput)
  const selectedRadioValue = useGlobalStore(state => state.selectedRadioValue)
  const setNumberOfTasks = useGlobalStore(state => state.setNumberOfTasks)
  const [numbeOfUncompletedTasks, setNumbeOfUncompletedTasks] = useState(null)

  const windowWidth = useInnerWidth()

  const stepsData = stepData(cookies.authMethodDashFaucet)
  console.log(cookies.authMethodDashFaucet)
  useEffect(() => {
    if (!stepsData?.length) { return }
    const countButtonsWithoutFaucet = stepsData.reduce((count, step) => {
      const buttonsWithoutFaucet = step.button.filter(btn => !btn.finished)
      return count + buttonsWithoutFaucet.length
    }, 0);
    if (countButtonsWithoutFaucet) {
      setNumbeOfUncompletedTasks(+countButtonsWithoutFaucet || 0)
      setNumberOfTasks(+countButtonsWithoutFaucet || 0)
    }
  },[])

  useEffect(() => {
    if(!cookies.jwtDashFaucet && !cookies.authMethodDashFaucet || !walletInput || !selectedRadioValue){
      setVerification(false)
      router.push('/')
    } else {
      setVerification(true)
    }
  },[cookies, walletInput, selectedRadioValue])

  const currentPage = useMemo(() => {
    if (!verification) { return }
    switch(router.asPath) {
      case '/follow':
        return <FllowClaim setNumbeOfUncompletedTasks={setNumbeOfUncompletedTasks}
        numbeOfUncompletedTasks={numbeOfUncompletedTasks} stepsData={stepsData}/>
      case '/faucet': 
        return <CoinsSent />
      case '/receipt':
        return <Receipt />
      default: 
        return <p>Off course</p>
    }
  },[router.asPath, verification])

  const transitions = useTransition(currentPage, {
    from: { opacity: 0 },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.85)' },
    config: { duration: 500, easing: easings.ease },
    trail: 200,
    exitBeforeEnter: true,
  })

  useEffect(() => {
    if (ref.current) {
      const innerHeightElement = ref.current.getBoundingClientRect().height;
      if (innerHeightElement) {
        setHeightWrapper(innerHeightElement);
      }
    }
  },[currentPage, ref.current, transitions, windowWidth])

  return (
    <div style={{height: `${heightWrapper}px`, transition: 'height ease 0.4s' }}>
      {transitions((style, item) =>
          <animated.div ref={ref} style={{ ...style, display: 'flex', justifyContent: 'center'}}>
            {item}
          </animated.div>
      )}
    </div>
  )
}

const MyComponent = ({ page }) => {
  const selectedRadioValue = useGlobalStore(state => state.selectedRadioValue);
  const data = dataPagination(selectedRadioValue);

  return (
    <main className={'WrapperFollow'}>
      <Pagination data={data} />
      {page}
    </main>
  );
};

Page.getLayout = function getLayout(page) {
  return (
    <MyComponent page={page} />
  )
}
