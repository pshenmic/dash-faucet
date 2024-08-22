import { ConfirmationsStyle } from "./style"
import { useEffect } from "react"
import { useRouter } from "next/router"
import useGlobalStore from "../../../../store/store"
import Image from "next/image"

function Confirmations () {
    const quantity = useGlobalStore(state => state.quantity)
    const setQuantity = useGlobalStore(state => state.setQuantity)
    const router = useRouter()

    useEffect(() => {
        if (quantity === 2) { 
            router.push('/receipt')
            return
        }
        setTimeout(() => {setQuantity(quantity + 1)}, 5000)
    }, [quantity]);
  
    return(
        <ConfirmationsStyle>
            <p>{quantity}/2</p>
            <div className={`WrapperImg ${quantity === 2 ? 'WrapperImgSucseses' : ''}`}>
                <Image src={'/community/loading.svg'} className={quantity === 2 ? 'WrapperImg__FadeOut' : ''} width={26} height={26} alt={'loading'}/>
                <Image src={'/toastIcons/sucseses.svg'} className={quantity === 2 ? 'WrapperImg__Emergence' : 'WrapperImg__FadeOut'} width={26} height={26} alt={'sucseses'}/>
            </div>
        </ConfirmationsStyle>
    )
}

export default Confirmations
