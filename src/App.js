import { useState, useEffect } from "react";
import DogAPIService from "./services/dogapi-service";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
    a++;
  };

  const updateTitleOfPage = (count) => {
    document.title = `Вы запустили ${count} раз`;
  };

  useEffect(() => {
    fetchData();
    updateTitleOfPage(count);
    setInterval();

    return () => clearInterval();
  }, [count]);

  const [dogs, setDogs] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [dogImage, setDogImage] = useState("");

  const dogApi = new DogAPIService();

  const fetchData = () => {
    dogApi.getAllDogs().then((data) => setDogs(data));
  };

  const searchDogByName = (name) => {
    dogApi.searchDogByName(name).then((data) => setDogs(data));
  };

  const getDogImage = async (id) => {
    dogApi.getDogImage(id).then((data) => setDogImage(data.url));
  };

  const getSearchedDog = () => {
    searchDogByName(searchName);
    const dogImageId = dogs.filter((item) => item.name === searchName)[0].image
      .id;

    getDogImage(dogImageId);
  };

  const onChangeHandler = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div>
      <h1>Dogs App</h1>
      <h2>Count: {count}</h2>
      <input type="text" placeholder="Search" onChange={onChangeHandler} />
      <button onClick={getSearchedDog}>Search</button>
      <button onClick={incrementCount}>Increment</button>

      <div>
        {dogs.map((dog) => (
          <div>
            <img src={dog.image?.url || dogImage} width={300} height={300} />)
            <h1>{dog.name}</h1>
            <ul>
              {dog.breed_group && <li>{dog.breed_group}</li>}
              {dog.bred_for && <li>{dog.bred_for}</li>}
              {dog.origin ? <li>{dog.origin}</li> : null}
              <li>{dog.life_span}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
