import React, {Component} from 'react';
import './App.css';
import Membre from './components/Membre';
import Button from './components/Button';

const famille = {
  membre1: {
    nom: 'Maxime',
    age: 21
  },
  membre2: {
    nom: 'Baptiste',
    age: 23
  },
  membre3: {
    nom: 'Jérèmy',
    age: 26
  },
  membre4: {
    nom: 'Aline',
    age: 52
  },
}

class App extends Component {

  state = {
    famille,
    agePlus: 2,
  };

  handleClick = () => {
    const famille = {...this.state.famille}
    famille.membre1.age += this.state.agePlus;
    this.setState({ famille });
  };

  handleChange = event => {
    const famille = {...this.state.famille}
    const nom = event.target.value;
    famille.membre1.nom = nom;
    this.setState({famille})
  };

  render(){
    const { titre } = this.props;
    const { famille } = this.state;
    return (
      <div className="App">
        <h1>{ titre }</h1>
        <input value={famille.membre1.nom} onChange={this.handleChange} type="text" />
        <Membre 
          age={famille.membre1.age} 
          nom={famille.membre1.nom} 
        />
        <Membre 
          age={famille.membre2.age} 
          nom={famille.membre2.nom} 
        />
        <Membre 
          age={famille.membre3.age} 
          nom={famille.membre3.nom} 
        />
        <Membre 
          age={famille.membre4.age} 
          nom={famille.membre4.nom}
        >
          <strong>Je suis la mère</strong>
        </Membre>
        <Button
          veillir={this.handleClick}
          agePlus={this.state.agePlus} 
        />
      </div>
    );
  }
}

export default App;
