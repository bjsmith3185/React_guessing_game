import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Ending from "./components/Ending";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    gameArray: [],
    score: 0,
    topScore: 0,
    gameOver: false,
    condition: "",

  };

  beginGameReset() {
    console.log("this array should be empty");
    console.log(this.state.gameArray);
    this.setState({
      gameArray: friends,
      score: 0,
      gameOver: false,
      condition: "",
    })

  }

  componentDidMount() {
    this.beginGameReset();

  };

  startRound = () => {

    //======================================
    console.log("starting the checkfortruevalue()")
    this.checkForWinner(this.state.gameArray)





//=========================================

    // var shuffledArray = this.shuffle(this.state.gameArray)
    // this.setState({
    //   gameArray: shuffledArray
    // })
    // console.log(this.state.gameArray);
  };


  checkForWinner = (array) => {
   
    let numberArray = [];

    for (var i in array) {
    if (!array[i].clicked) {
    // game not over
      numberArray.push("false")
     } 
    };

    if (numberArray.length === 0) {
      console.log("game is over, winner winner");
      this.endGame("winner");
    } else {
      console.log("keep on guessing bro")
      var shuffledArray = this.shuffle(this.state.gameArray)
      this.setState({
        gameArray: shuffledArray
      })
      console.log(this.state.gameArray);
    }
   
  };


  shuffle = (array) => {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  clickImage = name => {
    console.log(` this is the name: ${name}.`);

    // try to get away from using the array index. go straight to the main array and update the properties

    // var arrayLocation;
    var newGameArray = {};
    newGameArray = this.state.gameArray;
    var hasBeenClicked = false;

    for (var k = 0; k < newGameArray.length; k++) {
      if (newGameArray[k].name === name) {
        if (newGameArray[k].clicked === true) {
          console.log("already been clicked");
          // this.endGame();
          hasBeenClicked = true;
          //  return false;
        }

        // break;

      }
    };

    if (hasBeenClicked) {
      this.endGame("loser")
    } else {
      console.log("this one has not been clicked before")
      for (var i = 0; i < newGameArray.length; i++) {
        if (newGameArray[i].name === name) {
          newGameArray[i].clicked = true;
          break;

        }
      }
      // console.log("below is the newgamearray");
      // console.log(newGameArray);



      this.setState({
        gameArray: newGameArray,
        score: this.state.score + 1,
        topScore: this.state.topScore + 1
      })

      


      this.startRound();
    }
  };

    endGame = (status) => {
      console.log("inside endGame()");
      // show a component for the end of game
      // your score with a message, winner or loser
      // add a button to play again
     let condition;
      if (status === "loser") {
        condition = "loser"
      } else {
        condition = "winner"
      }


      this.setState({
        gameOver: true,
        condition: condition
      })
    };

    restart =() => {
      console.log("you just clicked restart")

      let resetGameArray = this.state.gameArray.map(item => {
        return item.clicked = false;
      });

      this.setState({
        gameArray: resetGameArray
      })
      
      this.beginGameReset();
    };



  seeResults = () =>  {
    console.log("this is the gamearray")
    console.log(this.state.gameArray)
    console.log(`this is the score ${this.state.score}`)
  };

  


  render= () => {
    return (
      <Wrapper>

        <Title score={this.state.score} topScore={this.state.topScore} >Friends List</Title>

             
        {this.state.gameOver ? (

          <Ending score={this.state.score} condition={this.state.condition} restart={this.restart}/>

        ) : (


        this.state.gameArray.map(item => (
          <Card
            clickImage={this.clickImage}
            name={item.name}
            key={item.name}
            image={item.image}
          />
        ))
     

         )} 



      </Wrapper>
    );
  };
};

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
