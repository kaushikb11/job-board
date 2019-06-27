import React, { Component } from 'react';
import { Table, Button, Input, Select } from 'antd';
import PropTypes from 'prop-types';


const columns = [{
  title: 'Role',
  dataIndex: 'title',
  width: 500
  }, {
  title: 'Company',
  dataIndex: 'company',
  width: 400
  }, {
  title: 'Location',
  dataIndex: 'location',
}];

const loaderDivStyle = {
  textAlign: 'center',
  marginTop: '120px'
}

class JobBoard extends Component {

  state = {
    query: '',
    columnQuery: 'title'
  }

  selectRow = (row) => {
    window.open(row.link, '_blank');
  }

  searchText = (text) => {
    this.setState({ query: text.toLowerCase() })
  }

  handleChange = (value) => {
    this.setState({ columnQuery: value, query: '' })
  }

  render() {
    let { data } = this.props;
    const { Search } = Input;
    const { Option } = Select;
    const { columnQuery, query } = this.state;
    data = data ? data.filter(job => job[columnQuery].toString()
      .toLowerCase().includes(query)) : null;
    return (
      <div>
        <div>
          {data ? <h3 style={{paddingTop:'10px'}}>{data.length} open roles</h3> : ''}
        </div>
        <div className='table'>
          {data ?
          <div>
          <Search placeholder="Search" style={{ width: 300, paddingRight: '20px', paddingBottom: '15px' }}
            onSearch={value => this.searchText(value)} enterButton />
          <Select defaultValue="title" style={{ width: 120, paddingBottom: '15px' }} onChange={this.handleChange}>
            <Option value="location">Location</Option>
            <Option value="title">Title</Option>
          </Select>
          <br/>
          <Table
            columns={columns}
            dataSource={data} 
            onRow={(row) => ({
              onClick: () => {
                this.selectRow(row);
              }
            })}/></div>: <Button style={loaderDivStyle} size="large" shape="circle" loading />}
        </div>
      </div>
    );
  }
}

JobBoard.propTypes = {
  data: PropTypes.array
};

export default JobBoard;