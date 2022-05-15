export default class DogAPIService {
  apiBase = "https://api.thedogapi.com/v1";

  getData = async (url) => {
    const res = await fetch(`${this.apiBase}/${url}`);

    if (!res.ok) {
      return console.error("Произошла ошибка!");
    }

    return res.json();
  };

  getAllDogs = async () => {
    const dogs = this.getData("breeds?limit=10");
    return dogs;
  };

  searchDogByName = async (name) => {
    const dog = this.getData(`breeds/search?q=${name}`);

    return dog;
  };

  getDogImage = async (imageId) => {
    const dogImage = this.getData(`images/${imageId}`);

    return dogImage;
  };
}
