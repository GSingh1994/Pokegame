import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'
class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {
        let array = this.props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ));
        function randomPokemon() {
            let random = array[Math.floor(Math.random() * array.length)]
            return random;
        }

        return (
            <div className='Pokedex'>
                <h1>POKEDEX</h1>
                {randomPokemon()}
                {randomPokemon()}
                {randomPokemon()}
                {randomPokemon()}
            </div>
        );
    }
}

export default Pokedex;























// import React, { Component } from 'react';
// import Pokecard from './Pokecard';
// class Pokedex extends Component {
//     render() {
//         return (
//             <div>
//                 <Pokecard
//                     name="pickachu"
//                     image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
//                     type="electric"
//                     base_experience="55"
//                 />
//             </div>
//         );
//     }
// }

// export default Pokedex;