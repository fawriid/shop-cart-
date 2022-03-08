// this function will shorten long string for us we use it for long titles or alt of images
const shorten = (string) => {
    const shortendString = string.split(" ");
    const newString = `${shortendString[0]} ${shortendString[1]}`;
    return newString;
};

// this function will return a boolian so we can notice if that item is in araray or not
// !! will change answer to boolian
const isInCart = (state, id) => {
    const result = !!state.selectedItems.find((item) => item.id === id);
    return result;
};

// this function will give us quantity for showing buttons
//  findIndex is like find method but it will return the index of item in array
const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id);
    if (index === -1) {
        return false;
    } else {
        const count = state.selectedItems[index].quantity;
        return count;
    }
};

// a function for counting total price and total items in cartcontext state
const sum = (item) => {
    const counter = item.reduce((count, product) => count + product.quantity, 0);
    const total = item
        .reduce((count, product) => count + product.price * product.quantity, 0)
        .toFixed(2);
    return { counter, total };
};

export { shorten, isInCart, quantityCount, sum };
