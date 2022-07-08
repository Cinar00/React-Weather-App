import React from "react"
import SelectBox from "./components/selectBox/SelectBox"
import Content from "./components/content/Content"
import { useState } from "react"


function App(responseObj) {
   
  const [selectedWeather, setSelectedWeather] = useState([]);
  
    return (
      <div>
         
        <SelectBox  setSelectedWeather={setSelectedWeather} />
        <Content selectedWeather={selectedWeather} />
      </div>
    );
 
}

export default App;
