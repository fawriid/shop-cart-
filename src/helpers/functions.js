const shorten = (string) => {
    const shortendString = string.split(" ")
    const newString = `${shortendString[0]} ${shortendString[1]}`
    return newString
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find((item) => item.id === id);
    return result
}


const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id);
    if (index === -1) {
        return false
    } else {
        const count = state.selectedItems[index].quantity
        return count
    }
}


export {shorten,isInCart, quantityCount}