import React, { Component } from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import '../App.css';

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

  selectRow = (row) => {
    window.open(row.link, '_blank');
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div>
          {data ? <h3 style={{paddingTop:'10px'}}>{data.length} open roles</h3> : ''}
        </div>
        <div className='table'>
          {data ?
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 50 }} 
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