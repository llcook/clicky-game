import React, { Component } from 'react';
import NavBar from "./components/NavBar/index";
import Wrapper from "./components/Wrapper/index";
import ImageCard from './components/ImageCard/index';
import cards from "./cards.json";

class App extends Component {

  state = {
    cards
  }

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
                />
              ))}
            </Wrapper>
          </>
    );
  }
}

export default App;
