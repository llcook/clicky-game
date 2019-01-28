import React, { Component } from 'react';
import NavBar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";
import ImageCard from './components/ImageCard/index';
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    topScore: 0
  }

  // FUNCTIONS CALLED ON PAGE LOAD
  
  componentDidMount() {
    this.setState({ cards: this.shuffleCards(this.state.cards) });
  }

  // FUNCTIONS

  shuffleCards = cards => {
    let shuffledCards = cards.sort(function(a, b){return 0.5 - Math.random()});
    return shuffledCards;
  };

  resetCards = cards => {
    const resetCards = cards.map(card => ({ ...card, isClicked: false}));
    return this.shuffleCards(resetCards);
  }

  firstClick = newData => {
    let newScore = this.state.score;
    newScore++;
    let newTopScore = Math.max(newScore, this.state.topScore);

    this.setState({
      cards: this.shuffleCards(newData),
      score: newScore,
      topScore: newTopScore,
    })
  }

  repeatClick = newData => {
    this.setState({
        cards: this.resetCards(newData),
        score: 0
    })
  }

  handleClick = id => {
    let correctGuess = false;
    const newData = this.state.cards.map(card => {
      if (card.id === id) {
        if (!card.isClicked) {
          card.isClicked = true;
          correctGuess = true;
          console.log(`${id}: isClicked true`)
        }
      }
      return card;
    });

    correctGuess ? this.firstClick(newData) : this.repeatClick(newData);

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
                  clicked={card.isClicked}
                  handleClick={this.handleClick}
                />
              ))}
            </Wrapper>
          </>
    );
  }
}

export default App;
