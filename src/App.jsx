import { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";

import "./App.css";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items,setItems]= useState([])

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if(!response) throw Error("data not recieved")
        const data = await response.json();
        console.log(data,"data--");
        setItems(data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchItem()
  },[reqType]);

  return (
    <>
      <div className="App">
        <Form reqType={reqType} setReqType={setReqType} />
        <List items={items}/>
      </div>
    </>
  );
}

export default App;
