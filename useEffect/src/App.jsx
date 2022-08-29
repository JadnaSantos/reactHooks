import { useEffect, useState } from 'react'
import sytles from './App.module.css'

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchResourceType = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      
      const responseJSON =  await response.json()

      setItems(responseJSON)
    }
    fetchResourceType()
  }, [resourceType])

  useEffect(() => {
    //componentDidMount
    console.log('componentDidMount')
    return () => {
      //componentWillUnmout 
      console.log('componentWillUnmout')
    }
   
  }, [])

  const changeResourceType = (value) => {
    setResourceType(value)
  }

  return (
    <div>
      <h1>{resourceType}</h1>
      <div>
        <button onClick={() => changeResourceType('posts')}>Posts</button>
        <button onClick={() => changeResourceType('users')}>Users</button>
        <button onClick={() => changeResourceType('comments')}>Comments</button>
      </div>

      {items.map(item => <p>{item.id}</p>)}
    </div>
  )
}

export default App
