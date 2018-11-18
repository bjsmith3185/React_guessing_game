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
    this.shuffle(this.state.friends);
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
  };
  

  clickImage = id => {

    const friends = id;
    console.log("here bro")
    console.log(friends);

    this.checkClickedValue(id, this.state.friends);

    // this.updateClickedValue(id, this.state.friends);
    console.log(this.state.friends)
    // this.shuffle(this.state.friends);

  };

  checkClickedValue = (id, friends) => {
    for (var i in friends) {
      if (friends[i].id === id) {

        if (friends[i].clicked === true) {
          // they already clicked this one
          console.log("they already clicked this one")
          this.resetGame();


        } else{
          // set the clicked value to "true"
          console.log("first time clicking this one")
          friends[i].clicked = true;

          this.setState({
            friends: friends
          })

          //--------------------------------
          // for ( var k in friends) {
          //   if ( friends[k].checked === true ) {
          //     count++
          //     if (count === friends.length) {
          //       // game has been won
          //       console.log("Winner winner chicken dinner")
          //     }
          //   }
          // }

          // var count = 0;




          //----------------------------------

          this.increaseScore();
          console.log("score is... ")
          console.log(this.state.score);

          return friends;
        }
   
        }
    }
  };


  increaseScore = () => {
    this.setState({
      score: this.state.score + 1
    })

    this.setTopScore(this.state.score);

    if (this.state.score === this.state.friends.length) {
      console.log("winner winner");
      // function to end game

    } else {
      this.shuffle(this.state.friends);
    }



  };

  setTopScore = currentScore => {
    if ( currentScore > this.state.topScore) {
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

// function to check if the player gets all 12 correct
checkForWin = id => {





}





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
