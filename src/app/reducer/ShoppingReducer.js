import { TYPES } from "@/app/actions/ShoppingActions";

export const shoppingInitialState = {

    products: [],

    cart: [],
}
export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return { //objeto del estado
                products: action.payload.products,
                cart: action.payload.cart
            }
        }

        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload.id) // encuentra un producto cuyo id sea igual al que nos pasaron por payload

            let itemInCart = state.cart.find(item => item.id === newItem.id)

            return itemInCart
                ? {
                    ...state, // guarda una copia del estado
                    cart: state.cart.map(item => item.id === newItem.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                        )
                  
                }
                : {
                    ...state, // guarda una copia del estado
                    cart: [...state.cart, { ...newItem, quantity: 1 }] // guarda una copia del carrito 
                }
        }
        case TYPES.REMOVE_ONE_PRODUCT: {
            let itemToRemove = state.cart.find(item => item.id === action.payload)

            // itemToRemove.quantity = itemToRemove.quanitity-1

            return itemToRemove.quantity > 1 
            ? {
                ...state,
                cart: state.cart.map(item =>
                    item.id===itemToRemove.id
                    ? {...item, quantity: item.quantity - 1}
                    : item
                )
            } 
            :{
                ...state,
                cart: state.cart.filter (item => item.id !== itemToRemove.id)
            }
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState
        }
        default:
            return state;
    }


}