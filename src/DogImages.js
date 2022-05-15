import { Component } from "react";

class DogImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  dogApi = new DogAPIService();

  getDogImage = () => {
    dogApi.getDogImage.then((data) => console.log(data));
  };

  render() {
    return (
      <div>
        <h1>Dog Image</h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default DogImages;
