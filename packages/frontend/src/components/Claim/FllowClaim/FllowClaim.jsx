import { FllowClaimStyle } from "./style"
import { useEffect, useMemo, useState } from "react"
import { stepData } from "../../../lib/stepData.js"
import { parseCookies } from "nookies"
import { dataClaim, dataFllowClaim } from "../../../lib/data.js"
import AuthorizeWith from "../Components/AuthorizeWith/AuthorizeWith.jsx"
import CallToAction from "../Components/CallToAction/CallToAction.jsx"
import ClaimHeader from "../Components/ClaimHeader/ClaimHeader"
import useGlobalStore from "../../../store/store.js"
import Step from "../Components/Step/Step.jsx"
import AnimationY from "../../Animated/Block/AnimationY/AnimationY.jsx"
import Line from "../../UI/Line/Line.jsx"

function FllowClaim() {
    const selectedRadioValue = useGlobalStore(state => state.selectedRadioValue)
    const setNumberOfTasks = useGlobalStore(state => state.setNumberOfTasks)
    const [numbeOfUncompletedTasks, setNumbeOfUncompletedTasks] = useState(null)
    const cookies = parseCookies()

    const amountDash = useMemo(() => {
      const amount = dataClaim.dataRadioButtons.find((_) => _.value === selectedRadioValue)
      return amount.name
    },[selectedRadioValue, dataClaim])

    const data = dataFllowClaim(amountDash)
    const stepsData = stepData(cookies.authMethodDashFaucet)

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

    return (
        <FllowClaimStyle>
            { data?.claimHeader
              ? <ClaimHeader
                  firstTitle={data.claimHeader.firstTitle || ''}
                  secondTitle={data.claimHeader.secondTitle || ''}
                  description={data.claimHeader.description || ''}
                />
              : null
            }
            <Line />
            <AuthorizeWith />
            { data?.callToAction
              ? <CallToAction>
                  <AnimationY delay={400} duration={1000}>
                    <p dangerouslySetInnerHTML={{ __html: data.callToAction }}></p>
                  </AnimationY>
                </CallToAction>
              : null
            }
            { stepsData?.length > 0
              ? stepsData.map((_, i) => (
                <Step 
                  numbeOfUncompletedTasks={numbeOfUncompletedTasks}
                  handleTaskCompletion={() => setNumbeOfUncompletedTasks(prev => prev - 1)}
                  title={_.title}
                  subtitle={_.subtitle}
                  dataButton={_.button}
                  key={i} 
                />
            ))
            : null}
        </FllowClaimStyle>
    )
}

export default FllowClaim
