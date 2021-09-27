import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faInfoCircle,faPlay } from '@fortawesome/free-solid-svg-icons';
import './Pokemon.css';

const Pokemon = (props) => {
    // console.log(props.pokemon);
    const {name,img,type,cost,level,weight} = props.pokemon;
    const element = <FontAwesomeIcon icon={faPlusCircle} />;
    const element2 = <FontAwesomeIcon icon={faInfoCircle} />;
    const element4 = <FontAwesomeIcon icon={faPlay} />;
    return (
            <div className="row g-1 card-height-custom">
                <div className="card h-100 card-list">
                        <img src={img} className="card-img-top img-width" alt="" />
                        <div className="card-body d-flex flex-column justify-content-evenly align-items-center">
                            <h2 className="card-title">{name}</h2>
                            <p className="card-text">Type : {type}</p>
                            <p className="card-text">Weight : {weight}</p>
                            <p className="card-text">Experience Level : {level}</p>
                            <p className="card-text">Pokemon Cost : ${cost}</p>
                            <button onClick={()=>props.handleAddToList(props.pokemon)} className="btn btn-outline-success">{element} Add To List</button>
                            <p className="card-text">{element2} {element4}</p>
                        </div>
                </div>
            </div>
    );
};

export default Pokemon;