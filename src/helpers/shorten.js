export const shorten = (string) => {
    const shortendString = string.split(" ")
    const newString = `${shortendString[0]} ${shortendString[1]}`
    return newString
} 