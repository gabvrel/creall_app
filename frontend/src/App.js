import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import { ReactComponent as Logo} from "./assets/roller.svg";

function App() {
  const initialState = {
    data: {},
    isloading: true,
    title: "Cuentas 2018 - 2019 Yapa"
  };
  const [state, setState] = useState(initialState);
  const getInfo = async () => {
    try {
      const response = await fetch("/getInfo");
      const responseJson = await response.json();
      console.log("launch");
      setState({ ...state, data: responseJson, isloading: false })
    } catch (err) {
      console.error(err)
    }
  };

  const sales = async () => {
    try {
      const response = await fetch("/sales");
      const responseJson = await response.json();
      console.log("launch");
      setState({ ...state, data: responseJson, isloading: false })
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
        <div className="loader">
        <Logo/> 
        </div>
        :
        <div>
        <Header/>
        <h1 class="display-3 text-center">{state.title}</h1>
        <table className="table table-hover">
          <tr className="table-primary">
            {Object.keys(state.data[0]).map(element =>
              <th>{element}</th>
            )}
          </tr>

          {state.data.map(ele =>
            <tr>
              {Object.values(ele).map(el => <td>{el}</td>)}
            </tr>)}
        </table>
      </div>
      }
      <button onClick={sales}>2</button>
    </div>
  )
}

export default App;