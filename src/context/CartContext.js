import { createContext, useState } from "react";


const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setCart(newProducts)
        }
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })
        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const productos = cart.filter(prod => prod.id !== id)
        setCart(productos)
    }

    const getQuantityProd = (id) => {
        return cart.find(prod => prod.id === id)?.quantity
    }

    const getTotal = () => {
        let total  = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.precio
        })
        return total
    }

    return(
        <CartContext.Provider value={{
         cart,
         addItem,
         getQuantity,
         isInCart,
         clearCart,
         removeItem,
         getQuantityProd,
         getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext