import React, { Component } from 'react';
import NavBar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";
import ImageCard from './components/ImageCard/index';
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    topScore: 0,
    wins: 0
  }

  // FUNCTIONS CALLED ON PAGE LOAD
  // shuffleDeck
  componentDidMount() {
    this.setState({ cards: this.shuffleDeck(this.state.cards) });
  }

  // FUNCTIONS

  shuffleDeck = cards => {
    let shuffledCards = cards.sort(function( a, b){return 0.5 - Math.random()});
    return shuffledCards;
  };

  resetDeck = cards => {
    const resetCards = cards.map(card => ({ ...card, isClicked: false}));
    return this.shuffleDeck(resetCards);
  }

  handleClick = id => {

  };

  // OUTPUT
  render() {
    return (
          <>
            <NavBar />
            <Wrapper>
              {this.state.cards.map(card => (
                <ImageCard
                  image={card.image}
                  key={card.id}
                  id={card.id}
                  onClick={this.handleClick}
                />
              ))}
            </Wrapper>
          </>
    );
  }
}

export default App;
