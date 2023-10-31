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

    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory ) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }
    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

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
            filteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}