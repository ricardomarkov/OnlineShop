import {useState, useEffect} from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

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

fetch('https://fakestoreapi.com/products/1')
.then(res=>res.json())
.then(data=>console.log(data))
  },[])

  return (
      <Layout>
        Home
        {
          data?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </Layout>
  )
}

export default Home
