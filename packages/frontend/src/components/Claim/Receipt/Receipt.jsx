import { useRouter } from "next/router"
import { useEffect } from "react"
import { dataReceipt } from "../../../lib/data"
import useGlobalStore from "../../../store/store"
import FaucetCoinsSent from "../Components/FaucetCoinsSent/FaucetCoinsSent"

function Receipt () {
    const walletInput = useGlobalStore(state => state.walletInput)
    const quantity = useGlobalStore(state => state.quantity)
    const router = useRouter()

    const data = dataReceipt(walletInput)

    useEffect(() => {
        if(quantity !== 2) {
            router.push('/')
        }
    }, [])

    return (
        <FaucetCoinsSent data={data} />
    )
}

export default Receipt