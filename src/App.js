import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0


  };

  componentDidMount() {
    this.startRound()
  };

  startRound = () => {

    if(this.checkClickedValue(this.state.friends)) {
      console.log("game is over")
    } else {
      console.log("keep Playing!!!")
      this.shuffle(friends);
    }


  }

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
          // it has already been guessed here
          this.endGame()
        } else {
          // sset the value to true
          friends[i].clicked = true;

          this.setState({
            friends: friends
          })

          this.increaseScore();
          this.startRound();
        }

      }
    }



  };

  checkClickedValue = (friends) => {
    // run thru to see if all clicked: true
      // if true, call endGame()
      // if false call shuffle()
 
        for(var i in friends)
            if(!friends[i].clicked) return false; // game not over
          
        return true; // game is over!!!
     
  };

  endGame = () => {

  }


  increaseScore = () => {
    this.setState({
      score: this.state.score + 1
    })
    console.log(`the score is: ${this.state.score}.`)

    this.setTopScore(this.state.score);

  };

  setTopScore = currentScore => {
    if (currentScore > this.state.topScore) {
      console.log(`new top score: ${currentScore}!`)
      this.setState({
        topScore: currentScore
      })
    }
  };


  resetScore = () => {
    this.setState({
      score: 0
    })
  };


  resetGame = () => {

    const resetFriends = this.state.friends.map(friend => {
      return friend.clicked = false;
    })

    this.setState({
      friends: resetFriends
    })

    this.resetScore();
  };







  render() {
    return (
      <Wrapper>

        <Title score={this.state.score} topScore={this.state.topScore}>Friends List</Title>


        {this.state.friends.map(friend => (
          <Card
            clickImage={this.clickImage}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
