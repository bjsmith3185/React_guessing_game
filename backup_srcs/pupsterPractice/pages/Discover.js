import React, { Component } from "react";
import FriendViewer from "../components/FriendViewer/FriendViewer";
import API from "../utils/API";
import Alert from "../components/Alert/Alert";


class Discover extends Component {

  state = {
    randomImage: "",
    match: false,
    count: 0,

  };

  componentDidMount() {
    this.getRandomDog();
  };

  getRandomDog = () => {
    API.randomDog()
      .then(res => {
        console.log(res.data.message);
        const data = res.data.message;
        this.setState({
          randomImage: data
        })
      })
      .catch(err => console.log(err));
  };

  handleFormDisLike = event => {
    const thisValue = event.target.attributes.getNamedItem("data-value").value;

    console.log(thisValue)

    this.setState({
      match: false
    });
    this.getRandomDog()
  };


  handleFormLike = event => {
    this.setState({
      match: false
    });

    const thisValue = event.target.attributes.getNamedItem("data-value").value;

    console.log(thisValue)

    const randomNumber = Math.floor((Math.random() * 5));
    if (randomNumber === 0) {
      this.setState({
        match: true,
        count: this.state.count + 1
      })
    }

    this.getRandomDog();

  };

  render() {
    // console.log(this.state.breeds);
    // {console.log(this.state.results)}
    // console.log(this.handleFormLike);

    return (

      <div>
        <h1>Discover Dog Friends Page</h1>
        <p>
          Click like to see if you are a match
          </p>

        <FriendViewer image={this.state.randomImage}
          click={this.handleFormLike}
          skip={this.handleFormDisLike}
        />

        <div> Did the dog like you???</div>

        {this.state.match ? <Alert number={this.state.count} /> : null}



      </div>
    );
  }


};

export default Discover;



