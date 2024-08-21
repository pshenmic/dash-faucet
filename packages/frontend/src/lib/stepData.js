import { platformExplorerTestFunction, platformTestFunction, testFunctionClaim } from "../tests/followGithub";

export const stepData = (type) => {
    switch (type) { 
        case 'Discord':
            return  [
                {
                    title: 'STEP 1:',
                    subtitle: 'Subscribe to our Discord projects and Star them:',
                    button: [
                        { text: '/platform-explorer', leftIcon: { src: '/networks/github.svg', alt: 'Discord' }, ariaLabel: 'Sign in Discord', handleClick: platformExplorerTestFunction },
                        { text: '/platform', leftIcon: { src: '/networks/github.svg', alt: 'Discord' }, ariaLabel: 'Sign in Discord', handleClick: platformTestFunction },
                    ]
                },
                {
                    title: 'STEP 2:',
                    subtitle: 'Claim your free faucet:',
                    button: [
                        { text: 'Check and claim 10,000', rightIcon: { src: '/community/dashIcon.svg', alt: 'Dash'}, ariaLabel: 'Claim your free faucet', handleClick: testFunctionClaim, finished: '/faucet' },
                    ]
                }
            ]
        case 'Github':
            return  [
                {
                    title: 'STEP 1:',
                    subtitle: 'Subscribe to our Github projects and Star them:',
                    button: [
                        { text: '/platform-explorer', leftIcon: { src: '/networks/github.svg', alt: 'Github' }, ariaLabel: 'Sign in Github', handleClick: platformExplorerTestFunction },
                        { text: '/platform', leftIcon: { src: '/networks/github.svg', alt: 'Github' }, ariaLabel: 'Sign in Github', handleClick: platformTestFunction },
                    ]
                },
                {
                    title: 'STEP 2:',
                    subtitle: 'Claim your free faucet:',
                    button: [
                        { text: 'Check and claim 10,000', rightIcon: { src: '/community/dashIcon.svg', alt: 'Dash'}, ariaLabel: 'Claim your free faucet', handleClick: testFunctionClaim, finished: '/faucet' },
                    ]
                }
            ]
        case 'X.com':
            return [
                {
                    title: 'STEP 1:',
                    subtitle: 'Subscribe to our Github projects and Star them:',
                    button: [
                        { text: '/platform-explorer', leftIcon: { src: '/networks/twitter.svg', alt: 'Github' }, ariaLabel: 'Sign in Github', handleClick: platformExplorerTestFunction },
                        { text: '/platform', leftIcon: { src: '/networks/twitter.svg', alt: 'Github' }, ariaLabel: 'Sign in Github', handleClick: platformTestFunction },
                    ]
                },
                {
                    title: 'STEP 2:',
                    subtitle: 'Claim your free faucet:',
                    button: [
                        { text: 'Check and claim 10,000', rightIcon: { src: '/community/dashIcon.svg', alt: 'Dash'}, ariaLabel: 'Claim your free faucet', handleClick: testFunctionClaim, finished: '/faucet' },
                    ]
                }
            ]
    }
}

export const stepHeader = (type) => {
    switch (type) {
        case 'Discord':
            return {
                text: 'Authorized with Discord',
                src: '/networks/github.svg',
                alt: 'Discord'
            }
        case 'Github':
            return {
                text: 'Authorized with Github',
                src: '/networks/github.svg',
                alt: 'Github'
            }
        case 'X.com':
            return {
                text: 'Authorized with X.com',
                src: '/networks/twitter.svg',
                alt: 'X.com'
            }
    }
}