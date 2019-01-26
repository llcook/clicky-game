import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import ImageCard from './components/ImageCard/index';
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    count: 0
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <>
            <NavBar />
            <Wrapper>
              {this.state.cards.map(card => (
                <ImageCard
                  image={card.image}
                  key={card.id}
                  id={card.id}
                  onClick={this.handleIncrement}
                />
              ))}
            </Wrapper>
          </>
        </header>
      </div>
    );
  }
}

export default App;
