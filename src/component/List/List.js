import React from 'react';
import './List.css';

const List = (props) => {
    const {list} =props;
    let total = 0;
    for(const pokemon of list){
        total = total+ pokemon.cost;
    } 
    return (
        <div>
            <h3>Order Summary</h3>
            <br />
            <h5>Pokemon Added : {props.list.length} </h5>
            <br />
            <h5>Total : ${total}</h5>
        </div>
    );
};

export default List;