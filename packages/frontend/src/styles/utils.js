export const varTemplate = (key, type = 'color') => `--${type}-${key}`
export const toVars = (values) => {
    const newValues = {}
    for (const key in values) {
        newValues[key] = `var(${varTemplate(key)})`
    }
    return newValues
}
export const printVars = (vars, type) => {
    let string = ''
    for (const key in vars) {
        string += `${varTemplate(key, type)}: ${vars[key]};\n`
    }
    return string
}