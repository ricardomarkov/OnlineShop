import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping cart ~ increase + qty
    const [count, setCount] = useState(0)

    //Product detail ~ show/hide product details
    const [isProductDetailOpen, setProductDetailOpen] = useState(false)
    const openProductDetail= ()=> setProductDetailOpen(true)
    const closeProductDetail= ()=> setProductDetailOpen(false)

    //Product detail ~ show product
    const [productToShow, setProductToShow] = useState({})

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}