import { useEffect } from "react"
import { useRouter } from "next/router"
import { dataCoinsSent } from "../../../lib/data"
import useGlobalStore from "../../../store/store"
import FaucetCoinsSent from "../Components/FaucetCoinsSent/FaucetCoinsSent"

function CoinsSent () {
    const numberOfTasks = useGlobalStore(state => state.numberOfTasks)
    const selectedRadioValue = useGlobalStore(state => state.selectedRadioValue)
    const router = useRouter()

    const data = dataCoinsSent(numberOfTasks)

    useEffect(() => {
        const dashMissioAccomplished = localStorage.getItem('dashMissioAccomplished')
        if ( !dashMissioAccomplished && selectedRadioValue !== '1' ) {
            router.push('/')
        }
    },[selectedRadioValue])

    return(
        <FaucetCoinsSent data={data} />
    )
}

export default CoinsSent
