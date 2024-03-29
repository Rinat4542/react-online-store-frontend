import {React, useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '../index';


const TypeBar = () => {
    const {device} = useContext(Context)
    return (
    <ListGroup>
        {device.types.map(type => 
            <ListGroup.Item 
              style={{cursor: 'pointer'}}
              active={type.id === device.selectedType.id} 
              onClick={() =>device.setSelectedType(type)}
              key={type.id}
              >{type.name}
            </ListGroup.Item>
        )}
    </ListGroup>
    );
};

export default TypeBar;