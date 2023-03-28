import { GlobalStyle } from './GlobalStyles';
import { Component } from 'react';
import { fetchBreeds } from 'api';
import { Dog } from './Dog';
import { BreedSelect } from './BreedSelect';

export class App extends Component {
  state = { breeds: [], dog: null, error: null };

  async componentDidMount() {
    try {
      const breeds = await fetchBreeds();
      this.setState({ breeds: breeds });
    } catch (error) {
      this.setState({ error: 'Uppsss' });
    }
  }

  selectBreed = ( value ) => {
    return this.state.breeds.map(breed => {
      if (breed.id === value) {
        return this.setState({ dog: breed });
      }
    });
  };

  render() {
    const { dog, error, breeds } = this.state;

    return (
      <>
        <BreedSelect breeds={breeds} onChange={this.selectBreed} />
        {error && <div>{error}</div>}
        {dog && <Dog dog={dog} />}
        <GlobalStyle />
      </>
    );
  }
}
