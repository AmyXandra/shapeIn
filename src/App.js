import React, {useEffect} from 'react';
import AppLayout from './Components/AppLayout';
import { useSelector } from 'react-redux';

export default function App() {
  // const state = useSelector(state => state);
  // useEffect(() => {
  //   hydrateStateWithLocalStorage();
  //   console.log("component mounted", state)
  // }, [hydrateStateWithLocalStorage, state])


  
    return (
      <div className="App">
        <AppLayout />
      </div>
    );
  }



// export default App;
