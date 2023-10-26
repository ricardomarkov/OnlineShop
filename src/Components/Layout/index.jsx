// import PropTypes from 'prop-types'

const Layout = ( { children } ) => {
    // const Layout = ({ children }) => {
    //     Layout.propTypes = {
    //       children: PropTypes.node.isRequired,
    //     }

    return(
        <div className='bg-gradient-to-r from-indigo-950 to-white flex items-center flex-col mt-20 md:mt-20'>
            {children}
        </div>
    )
}

export default Layout