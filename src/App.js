import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

class App extends Component {

  state = {
    images,
    score: 0,
    topscore: 0,
    message: ""
  };

  shuffleData = data => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
  }

  componentDidMount(){
    this.setState({images: this.shuffleData(this.state.images)});
  }

  handleCorrectGuess = data => {
    const newScore = this.state.score +1;
    let newTopScore;
    if (newScore > this.state.topscore) {
      newTopScore = newScore;
    } else {
      newTopScore = this.state.topscore;
    }
    this.setState({
      images: this.shuffleData(data),
      score: newScore,
      topscore: newTopScore
    });
  }

  handleIncorrectGuess = data => {
    const resetData = data.map (item => ({...item, clicked: false}));
    this.setState({
      images: resetData,
      score: 0
    });
  }

  handleCardClick = id => {
    console.log(id);
    let guessCorrect = false;
    const updatedCards = this.state.images.map(image => {
      const currentCard = image;
      if (currentCard.id === id) {
        if (currentCard.clicked === false) {
          currentCard.clicked = true;
          guessCorrect = true;
        }
      }
      return currentCard;
    })
    if (guessCorrect === true) {
      this.handleCorrectGuess(updatedCards);
    } else {
      this.handleIncorrectGuess(updatedCards);
    }
  }

  render() {
    return (
      <Wrapper>
        <Title> 
          Memory Game <br />
          Top Score: {this.state.topscore} <br />
          Score: {this.state.score}
        </Title>
          {this.state.images.map(image => (
            <GameCard
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              handleClick={this.handleCardClick}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;