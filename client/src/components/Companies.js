import React from 'react';
import { Button } from 'antd';

const Companies = (props) => {
    const { companies, activeCompanyId, handleClick } = props;

    return(
        <div className='Container'>
        {companies.map((company, index) => {
            const type = (activeCompanyId === index) ? 'primary' : 'secondary';
            return <Button type={type} onClick={() => handleClick(index)}>{company}</Button>})}
        </div>
    )
}

export default Companies;