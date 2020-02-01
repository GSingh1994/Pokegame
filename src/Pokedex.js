import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'
class Pokedex extends Component {
    render() {
        const { pokemon, totalExp, result } = this.props;
        let title;
        if (result) {
            title = <h3 className="Pokedex-winner">Winning hand</h3>
        } else {
            title = <h3 className="Pokedex-loser">Losing hand</h3>
        }
        return (
            <div className='Pokedex'>
                <div className="Pokedex-cards">
                    {pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))
                    }
                </div>
                <h3>Total Experience: {totalExp}</h3>
                {title}
            </div>
        );
    }
}

export default Pokedex;