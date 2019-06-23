import React, { Component} from 'react';
import Companies from './components/Companies';
import JobBoard from './components/JobBoard';
import MainPage from './components/MainPage';
import './App.css';

class App extends Component {
  state = {
    companies : ['Twilio', 'AirBnB', 'Yext'],
    companiesKeys : ['twilio', 'airbnb', 'yext'],
    cacheData: {},
    activeCompanyId: null
  }

  handleClick = async(index) => {
    await this.setState({ activeCompanyId : index})
    this.getJobsDataByCompany()
  }

  getJobsDataByCompany = (index=null) => {
    const { companiesKeys, activeCompanyId, cacheData } = this.state;
    console.log(index)
    const company = (index === null) ? companiesKeys[activeCompanyId] : companiesKeys[index];
    if (cacheData.hasOwnProperty(company)) {
      this.setState({ data: cacheData[company]})
    } else {
      fetch(`jobs/${company}`, {
        method: 'GET',
      })
      .then((response) => response.json())
      .then(data => {
        this.setState({
          cacheData: {...cacheData, [company]: data}
        })})
      .catch( error => null)
    }
  }

  componentDidMount() {
    this.state.companiesKeys.forEach((_, index) => {
      this.getJobsDataByCompany(index)
    })
  }

  render() {
    const { companies, activeCompanyId, cacheData, companiesKeys } = this.state;
    return (
      <div className="App">
        <Companies companies={companies} activeCompanyId={activeCompanyId} handleClick={this.handleClick}/>
      <div>
        {(activeCompanyId === null) ? <MainPage/> : <JobBoard data={cacheData[companiesKeys[activeCompanyId]]}/>}
      </div>
      </div>
    );
  }
}

export default App;
