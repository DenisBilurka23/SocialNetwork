export const required = value => value || typeof value === 'number' ? undefined : 'Required'
export const maxLength = (maxValue) => (value) => value.length < maxValue ?
    undefined : `max length is ${maxValue} symbols`