import {useState} from "react";

const Form = () => {
  const [city, setCity] = useState("");
  const getWeather = (e) => {
    e.preventDefault();
    fetch("")
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <form>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} />
      <button type="submit" onClick={getWeather}>Get Weather</button>
    </form>
  );
}

export default Form;