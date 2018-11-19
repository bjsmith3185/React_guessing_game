import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Ending from "./components/Ending";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    friends,
    score: 0,
    topScore: 0,
    gameOver: false,
    winner: false,

  };

  componentDidMount() {
    this.resetGame()
    this.startRound()
  };

  startRound = () => {
    console.log(this.state.friends);
    if (this.checkForTrueValue(this.state.friends)) {
      console.log("game is over with a winner")
      this.endGame();
    } else {
      console.log("keep Playing!!!")
      this.shuffle(friends);
    }
  };

  checkForTrueValue = (friends) => {
    for (var i in friends)
      if (!friends[i].clicked) return false; // game not over

    return true; // game is over!!!
  };

  shuffle = friends => {

    var currentIndex = friends.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = friends[currentIndex];
      friends[currentIndex] = friends[randomIndex];
      friends[randomIndex] = temporaryValue;
    }

    this.setState({ friends: friends });
    console.log(this.state.friends);
  };


  clickImage = id => {
    console.log(` this is the id: ${id}.`);
    // check if it has been clicked before
    // if true: then end the game
    // if false: then update clicked:true
    // uncrease score
    // start another round
    for (var i in friends) {
      if (friends[i].id === id) {
        if (friends[i].clicked === true) {
          console.log("too bad, it has already been guessed")
          // it has already been guessed here
          this.endGame("lose")
        } else {
          // sset the value to true
          console.log("before updating clicked: ")
          console.log(this.state.friends)

 

          friends[i].clicked = true;
     

          // this.setState({
          //   friends: friends
          // })

          console.log("after updating clicked: ")
          console.log(this.state.friends)
          this.increaseScore();
          this.startRound();
        }

      }
    }
  };

 

  endGame = (status) => {

    if (status === "lose") {
      // end of game with looser status
      this.setState({
        gameOver: true
      })
    } else {
      // end of game with winnet status
      this.setState({
        gameOver: true,
        winner: true,
      })
    }

  }


  increaseScore = () => {
    this.setState({
      score: this.state.score + 1
    })
    // console.log(`the score is: ${this.state.score}.`)
    if (this.state.score > this.state.topScore) {
      // console.log(`new top score: ${currentScore}!`)
      this.setState({
        topScore: this.state.score
      })
    }
  };


  resetGame = () => {

   let resetFriends = this.state.friends.map(friend => {
      return friend.clicked = false;
    })

    this.setState({
      friends: resetFriends,
      gameOver: false,
      winner: false,
      score: 0,
    })

  };







  render() {
    return (
      <Wrapper>

        <Title score={this.state.score} topScore={this.state.topScore}>Friends List</Title>

     
        {this.state.gameOver ? (

          <Ending />

        ) : (
            this.state.friends.map(friend => (
                <Card
                  clickImage={this.clickImage}
                  id={friend.id}
                  key={friend.id}
                  image={friend.image}
                />
              ))
          )}



      </Wrapper>
    );
  }
}

export default App;




// return (
//   <Wrapper>

//     <Title score={this.state.score} topScore={this.state.topScore}>Friends List</Title>


//     {this.state.friends.map(friend => (
//       <Card
//         clickImage={this.clickImage}
//         id={friend.id}
//         key={friend.id}
//         image={friend.image}
//       />
//     ))}
//   </Wrapper>
// );
