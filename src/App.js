import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Ending from "./components/Ending";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    gameArray: [],
    score: 0,
    topScore: 0,
    gameOver: false,
    winner: false,

  };

  beginGameReset() {
    this.setState({
      gameArray: friends,
      score: 0,
      gameOver: false,
      winner: false,
    })

  }

  componentDidMount() {
    this.beginGameReset();

  };

  startRound = () => {

    // console.log(this.state.gameArray);
    var shuffledArray = this.shuffle(this.state.gameArray)
    this.setState({
      gameArray: shuffledArray
    })
    console.log(this.state.gameArray);
  };


  checkForTrueValue = (array) => {
    for (var i in array)
      if (!array[i].clicked) return false; // game not over

    return true; // game is over!!!
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
      this.endGame()
    } else {
      console.log("this one has not been clicked before")
      for (var i = 0; i < newGameArray.length; i++) {
        if (newGameArray[i].name === name) {
          newGameArray[i].clicked = true;
          break;

        }
      }
      console.log("below is the newgamearray");
      console.log(newGameArray);



      this.setState({
        gameArray: newGameArray,
        score: this.state.score + 1,
        topScore: this.state.topScore + 1
      })


      this.startRound();
    }

    // }
    // }
    // }





    // for (var i in this.state.gameArray) {
    //   if (this.state.gameArray[i].id === id) {
    //     if (this.state.gameArray[i].clicked === true) {
    //       console.log("too bad, it has already been guessed")
    //       // it has already been guessed here
    //       // this.endGame("lose")
    //     } else {
    //       // console.log("it has not been clicked")
    //       // sset the value to true
    //       // console.log("before updating clicked: ")
    //       // console.log(this.state.gameArray)

    // let newGameArray = [];

    // newGameArray = this.state.gameArray;
    // // console.log("this is the temp game array")
    // // console.log(newGameArray)
    // console.log(`this is the clicked id: ${id}`)
    // // console.log(newGameArray[i].id)

    // newGameArray[i].clicked = true;

    // // console.log(newGameArray[i])

    // this.setState({
    //   gameArray: newGameArray,
    //   score: this.state.score + 1,
    //   topScore: this.state.topScore + 1
    // })

    //       this.startRound();
    //     }

    //   }
    // }
  };

  //==================================================================

  // clickImage = id => {
  //   console.log(` this is the id: ${id}.`);

  //   for (var i in this.state.gameArray) {
  //     if (this.state.gameArray[i].id === id) {
  //       if (this.state.gameArray[i].clicked === true) {
  //         console.log("too bad, it has already been guessed")
  //         // it has already been guessed here
  //         // this.endGame("lose")
  //       } else {
  //         // console.log("it has not been clicked")
  //         // sset the value to true
  //         // console.log("before updating clicked: ")
  //         // console.log(this.state.gameArray)

  //         let newGameArray = [];
  //         newGameArray = this.state.gameArray;
  //         // console.log("this is the temp game array")
  //         // console.log(newGameArray)
  //         console.log(`this is the clicked id: ${id}`)
  //         // console.log(newGameArray[i].id)

  //         newGameArray[i].clicked = true;

  //         // console.log(newGameArray[i])

  //         this.setState({
  //           gameArray: newGameArray,
  //           score: this.state.score + 1,
  //           topScore: this.state.topScore + 1
  //         })



  //         // this.seeResults();

  //         // this.increaseScore();

  //         // this.increaseScore();
  //         this.startRound();
  //       }

  //     }
  //   }
  // };

  seeResults() {
    console.log("this is the gamearray")
    console.log(this.state.gameArray)
    console.log(`this is the score ${this.state.score}`)
  }

  // increaseScore() {
  //   this.setState({
  //     score: this.state.score + 1
  //   })

  //  this.startRound()

  // }

  // checkForAWin() {
  //   console.log(`this is the score: ${this.state.score}`)
  //     if (this.state.score < this.state.gameArray.length) {
  //       console.log("keep guessing bro")
  //     } else {
  //       console.log("winner winner")
  //     }
  // }


  // checkAnswers() {

  //  let count = 0
  //     for (var i=0; i < this.state.gameArray.length; i++) {
  //         if (this.state.gameArray[i].clicked === false) {
  //             // console.log("there is still a false in there")
  //           count++

  //           // this.continueGame()
  //           // break;
  //         }
  //         // this.endGame()
  //     }
  //     console.log(count);
  // this.endGame()


  // for (var i in this.state.gameArray)
  //   if (!this.state.gameArray[i].clicked) {
  //     console.log("keep playing")
  //     // if one of these is false the game is still going on.

  //     // return false; // game not over
  //   } else {
  //     // return true; // game is over!!!
  //     console.log("you win, all answers are true")

  //   }
  // };


  endGame() {
    console.log("game over")
  }

  // continueGame() {
  //   console.log('continue game')
  // }

  // endGame = (status) => {

  //   if (status === "lose") {
  //     // end of game with looser status
  //     this.setState({
  //       gameOver: true
  //     })
  //   } else {
  //     // end of game with winnet status
  //     this.setState({
  //       gameOver: true,
  //       winner: true,
  //     })
  //   }

  // }


  // increaseScore = () => {
  //   this.setState({
  //     score: this.state.score + 1
  //   })
  //   // console.log(`the score is: ${this.state.score}.`)
  //   if (this.state.score > this.state.topScore) {
  //     // console.log(`new top score: ${currentScore}!`)
  //     this.setState({
  //       topScore: this.state.score
  //     })
  //   }
  // };


  // resetGame = () => {

  //  let resetFriends = this.state.friends.map(friend => {
  //     return friend.clicked = false;
  //   })

  //   this.setState({
  //     friends: resetFriends,
  //     gameOver: false,
  //     winner: false,
  //     score: 0,
  //   })

  // };







  render() {
    return (
      <Wrapper>

        <Title score={this.state.score} topScore={this.state.topScore}>Friends List</Title>

        {/*      
        {this.state.gameOver ? (

          <Ending />

        ) : ( */}


        {this.state.gameArray.map(item => (
          <Card
            clickImage={this.clickImage}
            name={item.name}
            key={item.name}
            image={item.image}
          />
        ))
        }

        {/* )} */}



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
