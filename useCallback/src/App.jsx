import {useState, useCallback} from "react"
import styles from './App.module.css'


function App() {
  const [task, setTask] = useState('')
  const [newTask, setNewTask] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    setNewTask([...newTask, task])

    setNewTask('')
  }

  const listModifier = useCallback((list) => {
    const spacedList = list.map((item) => item.split('').join(' '))

    return spacedList
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </form>
      <TaskList list={newTask} listModifier={listModifier}/>
    </div>
  )
}

export default App