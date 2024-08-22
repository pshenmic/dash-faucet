import { ClaimStyle } from "./style.js"
import { useCallback } from "react"
import { dataClaim } from "../../lib/data.js"
import ClaimAmount from "./Components/ClaimAmount/ClaimAmount.jsx"
import useGlobalStore from "@/store/store"
import ClaimHeader from "./Components/ClaimHeader/ClaimHeader.jsx"
import ClaimInput from "./Components/ClaimInput/ClaimInput.jsx"

function Claim () {
    const data = dataClaim
    const setOpenAuthorizePopUp = useGlobalStore(state => state.setOpenAuthorizePopUp)
    const walletInput = useGlobalStore(state => state.walletInput)
    const setWalletInput = useGlobalStore(state => state.setWalletInput)

    const handlePasteClick = useCallback( async () => {
        try {
            const text = await navigator.clipboard.readText()
            setWalletInput(text)
        } catch (error) {
            console.error('Failed to read clipboard contents: ', error)
        }
    },[])

    const setInputValue = useCallback((value) => {
        setWalletInput(value);
    }, []);
    
    return(
        <ClaimStyle>
            <div className={'Container'}>
                { data?.claimHeader
                    ? <ClaimHeader 
                        firstTitle={data.claimHeader?.firstTitle || ''} 
                        secondTitle={data.claimHeader?.secondTitle || ''}
                        description={data.claimHeader?.description || ''}  
                       />
                    : null
                }
                { data?.claimInput
                    ? <ClaimInput 
                        subtitle={data.claimInput?.subtitle || ''}
                        nameButton={data.claimInput?.nameButton || 'Paste'}
                        inputValue={walletInput}
                        setInputValue={setInputValue}
                        placeholder={data.claimInput?.placeholder || 'wallet...'}
                        handleClick={handlePasteClick}
                    />
                    : null
                }
                { data?.dataRadioButtons
                    ? <ClaimAmount
                        text={'Amount'}
                        dataRadioButtons={data.dataRadioButtons}
                        buttonName={'Claim'}
                        handleClick={() =>  setOpenAuthorizePopUp(true)}
                        wallet={walletInput}
                    />
                    : null
                }
            </div>
        </ClaimStyle>
    )
}

export default Claim
