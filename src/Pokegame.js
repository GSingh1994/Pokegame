import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css'
class Pokegame extends Component {
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
        let handOne = [];
        let handTwo = [...this.props.pokemon];
        let handOneExp = 0;
        let handTwoExp = 0;
        while (handOne.length < handTwo.length) {
            let randomIdx = Math.floor(Math.random() * handTwo.length);
            let randPokemon = handTwo.splice(randomIdx, 1)[0];
            handOne.push(randPokemon);
        };
        for (let i = 0; i < handOne.length; i++) {
            handOneExp += handOne[i].base_experience;
        }
        for (let i = 0; i < handTwo.length; i++) {
            handTwoExp += handTwo[i].base_experience;
        }
        return (
            <div className="Pokegame">
                <h1 className="Pokegame-title">POKEGAME</h1>
                <Pokedex pokemon={handOne} totalExp={handOneExp} result={handOneExp > handTwoExp} />
                <Pokedex pokemon={handTwo} totalExp={handTwoExp} result={handTwoExp > handOneExp} />
            </div>
        );
    }
}

export default Pokegame;