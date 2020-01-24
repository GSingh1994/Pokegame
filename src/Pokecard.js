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
                <h2>{name}</h2>
                <img src={imgSrc} alt="name" />
                <p>Type: {type}</p>
                <p>EXP: {exp}</p>
            </div >
        );
    }
}

export default Pokecard;



















// import React, { Component } from 'react';
// // import Pokedex from './Pokedex';
// class pokecard extends Component {
//     static defaultProps = [
//         { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
//         { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
//         { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
//         { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
//         { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
//         { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
//         { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
//         { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
//     ];
//     render() {
//         const { image, name, type, base_experience } = this.props;
//         return (
//             <div>
//                 <h1>{name}</h1>
//                 <img {image} />
//                 <p>{type}</p>
//                 <p>{base_experience}</p>
//             </div>
//         );
//     }
// }

// export default pokecard;