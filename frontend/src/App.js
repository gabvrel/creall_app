import React, { Component, useEffect, useState } from "react";
import './App.css';

function App() {
  const initialState = {
    data: {},
    isloading: true
  };
  const [state, setState] = useState(initialState);
  const getInfo = async () => {
    try {
      const response = await fetch("/getInfo");

      setState({ ...state, data: response, isloading: false })
    } catch (err) {
      console.error(err)
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      {state.isloading == true ?
        <p>loading..</p> :
        <p>loaded</p>}
    </div>
  )
}

export default App;