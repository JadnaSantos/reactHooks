import {useState} from "react"
import { DeleteContent } from "./components/DeleteContent/index"
import styles from './App.module.css'


function App() {
  const [showContent, setShowContent] = useState(false)

  function handleContent ()  {
    setShowContent(!showContent)
  }

  return (
    <>
      <DeleteContent showContent={showContent}/>
      <button onClick={handleContent}>{showContent ? 'Click para esconder o conteudo' : 'Click para exibir o conteudo'}</button>
    </>
  )
}

export default App