// used in (/src/components/Header/Header.jsx)
export const dataHeader = {
    logo: {
        icon: '/community/logoDash.svg',
        alt: 'dash',
        subname: 'Testnet'
    },
    socialNetworks: [
        { name: 'Telegram', href: '', src: '/networks/telegram.svg', alt: 'telegram', ariaLabel: 'Go to Telegram' },
        { name: 'Github', href: 'https://github.com/pshenmic/platform-explorer/', src: '/networks/github.svg', alt: 'github', ariaLabel: 'Go to GitHub' },
        { name: 'X.com', href: 'https://x.com/Dashpay', src: '/networks/twitter.svg', alt: 'twitter', ariaLabel: 'Go to X(twitter)' },
        { name: 'Discord', href: 'https://discord.gg/GeH3ug5G', src: '/networks/discord.svg', alt: 'discord', ariaLabel: 'Go to Discord' }
    ]
}

// used in (/src/components/Footer/Footer.jsx)
export const dataFooter = (year) => {
    return {
        listLink: [
            { name: 'Dash Mainnet', href: '', ariaLabel: 'Go to Dash Mainnet' },
            { name: 'Privacy Policy', href: '', ariaLabel: 'Go to Privacy Policy' },
            { name: 'Tearm of Use', href: '', ariaLabel: 'Go to Terms of Use' }
        ],
        copyrights: `©${year} · Dash Testnet Faucet`
    }
}

// used in (/src/components/Authorize/Authorize.jsx)
export const dataAuthorize = {
    buttonList: [
        { name: 'Github', icon: '/networks/github.svg', alt: 'Github', ariaLabel: 'Sign in via Github' },
        { name: 'X.com', icon: '/networks/twitter.svg', alt: 'Twitter', ariaLabel: 'Sign in via Twitter' },
        { name: 'Discord', icon: '/networks/discord.svg', alt: 'Discord', ariaLabel: 'Sign in via Discord' }
    ],
    title: 'Authorize to claim 1,000 DASH',
    subtitle: 'Use one of this social network to connect',
    iconDash: {
        src: '/community/dashLogo.svg',
        alt: 'dash'
    }
}

// used in (/src/components/Claim/CoinsSent/CoinsSent.jsx)
export const dataCoinsSent = (numberOfTasks) => {
    return {
        claimHeader: {
            firstTitle: 'Claim DASH ',
            secondTitle: 'Testnet Faucet:',
            description: 'Complete simple tasks and claim free faucet DASH coins:'
        },
        title: `Your transaction is being verified,
please be patient`,
        conditions: [
            {name: 'Checking the tasks', value: `${numberOfTasks}/${numberOfTasks} tasks done`},
            {name: 'Sending the transaction', value: 'd8295c5e882cdc1a5950f8f254c20f3f4da57f83d80c573e59a2e37189582d50'}
        ],
        button: [
            {name: 'Open explorer', ariaLabel: 'Open explorer', url: '/' }
        ],
        confirmationsName: 'Confirmations',
        textInstantSend: 'InstantSend locked'
    }
}

// used in (/src/components/Claim/Cheque/Cheque.jsx)
export const dataCheque = (walletInput) => {
    return {
        claimHeader: {
            firstTitle: 'Claim DASH ',
            secondTitle: 'Testnet Faucet:',
            description: 'Complete simple tasks and claim free faucet DASH coins:'
        },
        title: `Congratulations! DASH Faucet sent
successful. Please check your wallet:`,
        conditions: [
            { name: 'Your Wallet', value: walletInput},
            { name: 'Amount sent', value: `100 DASH` },
            { name: 'Sending the transaction', value: 'd8295c5e882cdc1a5950f8f254c20f3f4da57f83d80c573e59a2e37189582d50' }
        ],
        button: [
            { name: 'Open explorer', ariaLabel: 'Open explorer', url: '/' },
            { name: 'Request more DASH', ariaLabel: 'Request more DASH', url: '/' }
        ],
        confirmationsName: 'Confirmations',
        textInstantSend: 'InstantSend locked'
    }
}

// used in (/src/components/Claim/Claim.jsx)
export const dataClaim = {
    claimHeader: {
        firstTitle: 'Claim DASH ',
        secondTitle: 'Testnet Faucet:',
        description: 'Complete simple tasks and claim free faucet DASH coins:'
    },
    dataRadioButtons: [
        { name: '13.37', value: '1' },
        { name: '1,000.00', value: '2' },
        { name: '4,000.00', value: '3' }
    ],
    claimInput: {
        subtitle: 'Insert your DASH wallet:',
        nameButton: 'Paste',
        placeholder: 'Dash wallet...'
    }
}

// used in (/src/components/Claim/FllowClaim/FllowClaim.jsx)
export const dataFllowClaim = (amountDash) => {
    return {
        claimHeader: {
            firstTitle: 'Claim DASH ',
            secondTitle: 'Testnet Faucet:',
            description: 'Complete simple tasks and claim free faucet DASH coins:'
        },
        callToAction: `Because you decided to claim <b>${amountDash} Dash</b>, additional action are required. Please follow next steps to claim:`
    }
}