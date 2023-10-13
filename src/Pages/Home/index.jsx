import {useState, useEffect} from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {
//setItems toma la informacion y la guarda en items.
  const [items, setItems] = useState(null)

  useEffect(()=>{
fetch('https://dummyjson.com/products')
.then( response => response.json())
.then( data => setItems(data))
  },[])
  return (
      <Layout>
        Home
        {
          items?.map(item=>(
          <Card key={item.id} data={item}/>
          ))
        }
      </Layout>
  )
}

export default Home
