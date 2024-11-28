import { useState } from 'react';
import { ModalWindow } from '../components/modalWindow/ModalWindow';

function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <div className="App">
        <ModalWindow call={modalState} onDestroy={() => setModalState(false)}/>
        
        <button onClick={() => setModalState(true)}>Open Modal</button>
      </div>
    </>
  )
}

export default App
