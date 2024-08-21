export const platformExplorerTestFunction = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.setItem('platformExplorerDone', 'true')
            resolve(true)
        }, 2000)
    })
}

export const platformTestFunction = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.setItem('platformDone', 'true')
            resolve(true)
        }, 2000)
    })
}

export const testFunctionClaim = async () => {
    const platformExplorerDone = localStorage.getItem('platformExplorerDone')
    const platformDone = localStorage.getItem('platformDone')
    const now = new Date()
    if (platformExplorerDone && platformDone) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
                localStorage.setItem('dashMissionAccomplished', 'true')
                localStorage.setItem('dataClear', `${now.getTime() + 86400000}`)
            }, 2000)
        })
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(false)
            }, 2000)
        })
    }
}
