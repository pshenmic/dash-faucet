import { DownloadStyle } from "./style"
import DarkWrapper from "../UI/DarkWrapper/DarkWrapper"
import useGlobalStore from "../../store/store"
import Image from "next/image"

function Download () {
    const loader = useGlobalStore(state => state.loader)
    
    return (
        <DarkWrapper open={loader}>
            <DownloadStyle>
                <Image src={'/community/loading2.svg'} style={!loader ? {animation: 'none'} : {}} width={64} height={64} alt={'loading'}/>
            </DownloadStyle>
        </DarkWrapper>
    )
}

export default Download
