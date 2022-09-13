import { createContext, useContext, useState} from 'react'

const CyclesActive = createContext()

function NewCycleForm () {
  const {activeCycle, setActiveCyle} = useContext(activeCycle)
  return (
    <><h1>NewCycle: {activeCycle}</h1><button onClick={() => {
      setActiveCyle(2)
    } } /></>
}

function CountDown () {
  const {activeCycle, setActiveCyle} = useContext(activeCycle)
  return (
    <h1>CountDown: {availableCycles}</h1>
  )
}


export function App () {
  const [activeCycle, setActiveCyle] = useState(0)

  return (
    <CyclesActive.Provider value={{ activeCycle, setActiveCyle }}>
      <div>
        <NewCycleForm/>
        <CountDown />
      </div>
    </CyclesActive.Provider>
  )
}