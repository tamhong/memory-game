import React, { Component } from 'react';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";
import "./App.css";

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        <Title> Memory Game </Title>
          {this.state.images.map(image => (
            <GameCard
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
            />
          ))}
      </Wrapper>
    );
  }
}

export default App;