import { useRouter } from "next/router"
import { useEffect } from "react"
import { dataCheque } from "../../../lib/data"
import useGlobalStore from "../../../store/store"
import FaucetCoinsSent from "../Components/FaucetCoinsSent/FaucetCoinsSent"

function Cheque () {
    const walletInput = useGlobalStore(state => state.walletInput)
    const quantity = useGlobalStore(state => state.quantity)
    const router = useRouter()

    const data = dataCheque(walletInput)

    useEffect(() => {
        if(quantity !== 2) {
            router.push('/')
        }
    }, [])

    return (
        <FaucetCoinsSent data={data} />
    )
}

export default Cheque