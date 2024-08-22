import { parseCookies } from "nookies"

const cookies = parseCookies()
export const dataPagination = (type) => {
    switch (type) { 
        case '1':
            return [
                {
                    name: 'Provide Address',
                    pagination: {
                        path: '',
                    }
                },
                {
                    name: 'OAuth Connect',
                    pagination: {
                        path: '',
                    }
                },
                {
                    name: 'Faucet Coins Sent',
                    pagination: {
                        path: '/faucet',
                    }
                }
            ]
        default:
            return [
                {
                  name: 'Provide Address',
                  pagination: {
                    path: '',
                  }
                },
                {
                  name: 'OAuth Connect',
                  pagination: {
                    path: '',
                  }
                },
                {
                  name: `Follow ${cookies.authMethodDashFaucet}`,
                  pagination: {
                    path: '/follow',
                  }
                },
                {
                  name: 'Faucet Coins Sent',
                  pagination: {
                    path: '/faucet',
                  }
                }
            ]
    }
}