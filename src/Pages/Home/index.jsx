import {useContext} from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
//setItems toma la informacion y la guarda en items.
const context = useContext(ShoppingCartContext)

const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>No results.</div>
      )
    }
  }

  return (
      <Layout>
        <div className='flex w-80 relative items-center justify-center'>
            <h1>
                Home
            </h1>
        </div>
        <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
        <div className='grid gap-4 grid-cols-1 w-auto max-w-screen-lg md:grid-cols-4'>
        {renderView()}
        </div>
        <ProductDetail/>
      </Layout>
  )
}

export default Home
