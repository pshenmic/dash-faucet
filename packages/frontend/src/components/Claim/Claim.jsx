import ClaimInput from "../ui/claimComponents/ClaimInput/ClaimInput.jsx"
import { ClaimStyle } from "./style.js"
import ClaimAmount from "../ui/claimComponents/ClaimAmount/ClaimAmount.jsx"
import useGlobalStore from "@/store/store"
import ClaimHeader from "../ui/claimComponents/ClaimHeader/ClaimHeader.jsx"

const dataRadioButtons = [
    { name: '13.37', value: '1' },
    { name: '1,000.00', value: '2' },
    { name: '4,000.00', value: '3' }
]

function Claim () {
    const setOpenAuthorizePopUp = useGlobalStore(state => state.setOpenAuthorizePopUp)
    const walletInput = useGlobalStore(state => state.walletInput)
    const setWalletInput = useGlobalStore(state => state.setWalletInput)

    const handlePasteClick = async () => {
        try {
            const text = await navigator.clipboard.readText()
            setWalletInput(walletInput + text)
        } catch (error) {
            console.error('Failed to read clipboard contents: ', error)
        }
    };

    return(
        <ClaimStyle>
            <div className={'Container'}>
                <ClaimHeader 
                    firstTitle={'Claim DASH '} 
                    secondTitle={'Testnet Faucet:'}
                    description={'Complete simple tasks and claim free faucet DASH coins:'}  
                />
                <ClaimInput 
                    subtitle={'Insert your DASH wallet:'}
                    nameButton={'Paste'}
                    inputValue={walletInput}
                    setInputValue={setWalletInput}
                    placeholder={'Dash wallet...'}
                    handleClick={handlePasteClick}
                />
                <ClaimAmount
                    text={'Amount'}
                    dataRadioButtons={dataRadioButtons}
                    buttonName={'Claim'}
                    handleClick={() => setOpenAuthorizePopUp(true)}
                    wallet={walletInput}
                />
            </div>
        </ClaimStyle>
    )
}

export default Claim