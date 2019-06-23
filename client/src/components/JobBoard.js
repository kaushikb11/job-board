import React, { Component } from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import '../App.css';

const columns = [{
  title: 'Role',
  dataIndex: 'title',
  }, {
  title: 'Company',
  dataIndex: 'company',
  }, {
  title: 'Location',
  dataIndex: 'location',
}];

const loaderDivStyle = {
  textAlign: 'center',
  marginTop: '120px'
}

class JobBoard extends Component {

  selectRow = (row) => {
    window.open(row.link, '_blank');
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div>
          {data ? <h2>{data.length} open roles</h2> : ''}
        </div>
        <div className='table'>
          {data ?
          <Table
            columns={columns}
            dataSource={data}
            onRow={(row) => ({
              onClick: () => {
                this.selectRow(row);
              }
            })}/> :<Button style={loaderDivStyle} size="large" shape="circle" loading />}
        </div>
      </div>
    )
  }
}

export default JobBoard;