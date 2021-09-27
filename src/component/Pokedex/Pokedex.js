import React, { useState,useEffect } from 'react';
import List from '../List/List';
import Pokemon from '../Pokemon/Pokemon';
import './Pokedex.css';

const Pokedex = () => {
    const [pokemons , setPokemons] =useState([]);
    const [list ,setList] =useState([]);

    useEffect(()=>{
        fetch('./pokemon.JSON')
        .then(res => res.json())
        .then(data =>setPokemons(data))
    },[])

    const handleAddToList =(pokemon) =>{
        // console.log(pokemon.name);
        const newList = [...list,pokemon];
        setList(newList);
    }
    return (
        <div className="pokedex">

            <div className="pokemon-container">
                {
                    pokemons.map(pokemon=><Pokemon 
                        key = {pokemon._id}
                        pokemon={pokemon}
                        handleAddToList={handleAddToList}></Pokemon>)
                }
            </div>

            <div className="cart-container">
                <List list={list}></List>
            </div>
        </div>
    );
};

export default Pokedex;