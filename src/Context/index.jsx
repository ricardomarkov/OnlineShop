import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping cart ~ increase + qty
    const [count, setCount] = useState(0)

    //Product detail ~ show/hide product details
    const [isProductDetailOpen, setProductDetailOpen] = useState(false)
    const openProductDetail= ()=> setProductDetailOpen(true)
    const closeProductDetail= ()=> setProductDetailOpen(false)

    //Checkout side menu ~ show/hide details
    const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu= ()=> setCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu= ()=> setCheckoutSideMenuOpen(false)


    //Product detail ~ show product
    const [productToShow, setProductToShow] = useState({})

    //Shopping cart ~ add products
    const [cartProducts, addCartProducts] = useState([])

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            addCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}