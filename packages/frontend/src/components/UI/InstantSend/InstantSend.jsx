import Image from 'next/image'
import { InstantSendStyle } from './style'

function InstantSend ({ text }) {
    return(
        <InstantSendStyle>
            <Image src={'/community/sucseses2.svg'} width={18} height={18} alt={'tick'}/>
            <p>{text}</p>
        </InstantSendStyle>
    )
}

export default InstantSend
