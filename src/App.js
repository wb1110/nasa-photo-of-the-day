import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Content from "./components/Content";

function App() {
  
  const [nasa, setNasa] = useState();

  useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=FjrmJzNeziBJDn5r5sMIcFB4fmw3zwqVbo8VrhB7')
  .then(res => {
    setNasa(res.data);
  })
  .catch(err => {
    console.log(err)
  })
}, [])
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {nasa ? <Content nasa={nasa} /> : null}
    </div>
  );
}

export default App;
