import Image from "next/image";
import ToastifyButton from "../components/UI/Button/ToastifyButton/ToastifyButton";
import { toast } from 'react-toastify';

export const showToast = (type, message) => {
    switch (type) {
        case 'error':
            toast.error( 
                <p>{message}</p>, 
                {
                    icon: () => <Image src={'/toastIcons/error.svg'} width={22} height={22} alt={'error'}/>,
                    closeButton: <ToastifyButton />
                }
            )
            break;
        case 'success':
            toast.success( 
                <p>{message}</p>, 
                {
                    icon: () => <Image src={'/toastIcons/sucseses.svg'} width={22} height={22} alt={'error'}/>,
                    closeButton: <ToastifyButton />
                }
            )
            break;
        case 'warn':
            toast.warn( 
                <p>{message}</p>, 
                {
                    icon: () => <Image src={'/toastIcons/warning.svg'} width={22} height={22} alt={'error'}/>,
                    closeButton: <ToastifyButton />
                }
            )
            break;
        case 'info':
            toast.info( 
                <p>{message}</p>, 
                {
                    icon: () => <Image src={'/toastIcons/information.svg'} width={22} height={22} alt={'error'}/>,
                    closeButton: <ToastifyButton />
                }
            )
            break;
        default:
            toast.error( 
                <p>Error, try again later</p>, 
                {
                    icon: () => <Image src={'/toastIcons/error.svg'} width={22} height={22} alt={'error'}/>,
                    closeButton: <ToastifyButton />
                }
            )
            break;
    }
}
