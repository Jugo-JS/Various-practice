const reducer = (state, action) => {

    if(action.type === 'LOADING') {
        return { ...state, loading: true}
    }

    if(action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload, loading: false }
    }

    if(action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if(action.type === 'REMOVE_ITEM') {
       const newCart = state.cart.filter((item) => item.id !== action.payload);
       return { ...state, cart: newCart }
    }

    if(action.type === 'INCREASE') {
        let newCart = state.cart.map((item) => {
            if(item.id === action.payload) {
                return { ...item, amount: item.amount + 1 }
            } return { ...item }
        })
        return { ...state, cart: newCart }
    }

    if(action.type === 'DECREASE') {
        let newCart = state.cart.map((item) => {
            if(item.id === action.payload) {
                return { ...item, amount: item.amount - 1 }
            } 
            return { ...item }
        }).filter((item) => item.amount > 0)
        return { ...state, cart: newCart }
    }

    if(action.type === 'GET_TOTALS') {
        let { amount, total } =  state.cart.reduce((cartTotal, cartItem) => {
            const { amount, price } = cartItem;
            cartTotal.amount += amount;
            cartTotal.total += (amount * price)

            return cartTotal;

        }, {
            amount: 0,
            total: 0
        })
        total = parseFloat(total.toFixed(2))
        
        return { ...state, amount, total }
    }

    return state;
}

export default reducer;