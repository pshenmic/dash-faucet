import { destroyCookie, setCookie } from 'nookies'
import useGlobalStore from '../store/store';

const setQuantity = useGlobalStore.getState().setQuantity;

export const authorization = async (method) => {
    const jwt = 'jwt-dash-faucet'
    setQuantity(0)
    return new Promise((resolve) => {
        destroyCookie(null, 'jwtDashFaucet')
        destroyCookie(null, 'authMethodDashFaucet')
        setCookie(null, 'jwtDashFaucet', jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
            sameSite: 'None',
            secure: true,
        })
        setCookie(null, 'authMethodDashFaucet', method, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
            sameSite: 'None',
            secure: true,
        })

        setTimeout(() => resolve(true), 3000)
    })
}