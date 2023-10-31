import { createContext, useState, useEffect } from 'react';

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

    //Shopping cart ~ Order
    const [order, addOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)


      // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])
    console.log('filteredItems: ', filteredItems)
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
            order,
            addOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}