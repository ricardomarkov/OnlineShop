// import PropTypes from 'prop-types'

const Layout = ( { children } ) => {
    // const Layout = ({ children }) => {
    //     Layout.propTypes = {
    //       children: PropTypes.node.isRequired,
    //     }

    return(
        <div className='flex items-center flex-col mt-20'>
            {children}
        </div>
    )
}

export default Layout