import React, { Component} from 'react';
import Companies from './components/Companies';
import MainPage from './components/MainPage';
import './App.css';

class App extends Component {
  state = {
    companies : ['Twilio', 'AirBnB', 'Yext'],
    activeCompanyId: null
  }

  handleClick = (index) => {
    this.setState({ activeCompanyId : index })
  }

  render() {
    const { companies, activeCompanyId} = this.state;
    return (
      <div className="App">
        <Companies companies={companies} activeCompanyId={activeCompanyId} handleClick={this.handleClick}/>
      <div>
        {(activeCompanyId === null) ? <MainPage/> : ''}
      </div>
      </div>
    );
  }
}

export default App;
