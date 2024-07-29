import { ClaimInputStyle } from "@/components/Claim/Components/ClaimInput/style";
import { createWithEqualityFn } from "zustand/traditional";

const useGlobalStore = createWithEqualityFn (
    ( set, get ) => ({ 
        openAuthorizePopUp: false,
        setOpenAuthorizePopUp: (openAuthorizePopUp) => set({ openAuthorizePopUp }),

        walletInput: '',
        setWalletInput: (walletInput) => set({ walletInput }),
    })
)

export default useGlobalStore