// import PropTypes from 'prop-types'

const Layout = ( { children } ) => {
    // const Layout = ({ children }) => {
    //     Layout.propTypes = {
    //       children: PropTypes.node.isRequired,
    //     }

    return(
        <div className='h-screen bg-[url("https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg"),_url("https://images.pexels.com/photos/5625110/pexels-photo-5625110.jpeg")] bg-contain flex items-center flex-col mt-20 md:mt-20'>
            {children}
        </div>
    )
}

export default Layout