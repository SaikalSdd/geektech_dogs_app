import { useState } from "react";

function App() {
  const [dogs, setDogs] = useState([]);

  const fetchData = async () => {
    await fetch("https://api.thedogapi.com/v1/breeds?limit=10")
      .then((res) => res.json())
      .then((data) => setDogs(data));
  };

  console.log("DOGS", dogs);

  return (
    <div>
      <h1>Dogs App</h1>
      <button onClick={fetchData}>Get data</button>
      <div>
        {dogs.map((dog) => (
          <div>
            <img src={dog.image.url} width={300} height={300} />
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
