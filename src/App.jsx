import Title from "./components/Title";
import Form from "./components/Form";
import Result from "./components/Result";
import {useState} from "react";

const App = () => {
  const [city, setCity] = useState("");
  const getWeather = (e) => {
    e.preventDefault();
    fetch("")
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result />
    </div>
  );
};

export default App;
