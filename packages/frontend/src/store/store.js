import { createWithEqualityFn } from "zustand/traditional";

const useGlobalStore = createWithEqualityFn (
    ( set, get ) => ({ 
        openAuthorizePopUp: false,
        setOpenAuthorizePopUp: (openAuthorizePopUp) => set({ openAuthorizePopUp }),

        walletInput: '',
        setWalletInput: (walletInput) => set({ walletInput }),

        selectedRadioValue: '1',
        setSelectedRadioValue: (selectedRadioValue) => set({ selectedRadioValue }),

        numberOfTasks: 0,
        setNumberOfTasks: (numberOfTasks) => set({ numberOfTasks }),

        quantity: 0,
        setQuantity: (quantity) => set({ quantity }),

        loader: false,
        setLoader: (loader) => set({ loader }),
    }) 
)

export default useGlobalStore