import React, { Component } from 'react';
import './Pokecard.css';

// Function to pad id numbers.
Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}

const pokemonApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props;
        let imgSrc = `${pokemonApi}${(id).pad(3)}.png`
        return (
            < div className='Pokecard'>
                <h1 className="Pokecard-title">{name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={name} />
                </div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">EXP: {exp}</div>
            </div >
        );
    }
};

export default Pokecard;