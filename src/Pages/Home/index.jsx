import {useState, useEffect} from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
//setItems toma la informacion y la guarda en items.
  const [data, setItems] = useState(null)

  useEffect(()=>{
//fetch('https://dummyjson.com/products')
//fetch('https://api.escuelajs.co/api/v1/products')
// fetch('https://fakestoreapi.com/products/1')
//.then( response => response.json())
// .then( data => setItems(data))
//   },[])

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>setItems(data))
  },[])

  return (
      <Layout>
        Home
        <div className='grid gap-2 grid-cols-4 w-full max-w-screen-md'>
        {
          data?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
        </div>
        <ProductDetail/>
      </Layout>
  )
}

export default Home
