import { FllowClaimStyle } from "./style"
import { useMemo } from "react"
import { dataClaim, dataFllowClaim } from "../../../lib/data.js"
import AuthorizeWith from "../Components/AuthorizeWith/AuthorizeWith.jsx"
import CallToAction from "../Components/CallToAction/CallToAction.jsx"
import ClaimHeader from "../Components/ClaimHeader/ClaimHeader"
import useGlobalStore from "../../../store/store.js"
import Step from "../Components/Step/Step.jsx"
import AnimationY from "../../Animated/Block/AnimationY/AnimationY.jsx"
import Line from "../../UI/Line/Line.jsx"

function FllowClaim ({ setNumbeOfUncompletedTasks, numbeOfUncompletedTasks, stepsData  }) {
    const selectedRadioValue = useGlobalStore(state => state.selectedRadioValue)

    const amountDash = useMemo(() => {
      const amount = dataClaim.dataRadioButtons.find((_) => _.value === selectedRadioValue)
      return amount.name
    },[selectedRadioValue, dataClaim])

    const data = dataFllowClaim(amountDash)

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
