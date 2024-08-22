import { ToastifyButtonStyle } from "./style"

function ToastifyButton({ closeToast }) {
    return (
        <ToastifyButtonStyle onClick={closeToast} aria-label={'close toast'}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L8 8M13 13L8 8M8 8L13 3L3 13" stroke="white" strokeWidth="2" />
            </svg>
        </ToastifyButtonStyle>
    )
}

export default ToastifyButton