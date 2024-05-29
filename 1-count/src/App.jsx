import { useState } from 'react'
import ButtonP02 from './components/ButtonP02'

function App() {
  const [nClicks, setNClicks] = useState(0)

  const addClick = () => {
    setNClicks(nClicks + 1);
  }

  const resetNum = () => {
    setNClicks(0)
  }

  return (
    <>
      <div style={{margin: 'auto', textAlign: 'center'}}>
        <p>{nClicks}</p>
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <ButtonP02 text="Click" onClick={addClick} esClick={true}></ButtonP02>
        <ButtonP02 text="Reset" onClick={resetNum} esClick={false}></ButtonP02>
        </div>
      </div>
    </>
  )
}

export default App;