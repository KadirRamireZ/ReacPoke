import React from 'react';
import { searchIcon } from '../utils/icons';

const Modal = ({ pokemon, onHandleModal }) => {
  const colors = ['#FC6B6E', '#2196F3', '#094BE8', '#2196F3', '#3ED1E0', '#CF9B48'];




  return (
    <div className='modal'>
      <button className='modal__close' onClick={onHandleModal}>Cerrar X</button>
      <div className='modal__content'>
        <div className="modal__content-features" style={{ backgroundColor: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})` }}>
          <div className="modal__content-featuresRight">
            <span className='modal__content-featuresHabitat'>
              <img className='modal__content-featuresImage' src={searchIcon(pokemon.types[0].type.name)} alt="" />
              {pokemon.types[0].type.name}
            </span>
            {pokemon['past_types'].length > 0 && <span className='modal__content-featuresGeneration'>{pokemon['past_types'][0].generation.name}</span>}
          </div>
          <div className="modal__content-featuresLeft">
            <span className='modal__content-featuresHeight'>Altura: {pokemon.height / 10} m</span>
            <span className='modal__content-featuresWeight'>Peso: {pokemon.weight / 10} kg</span>
            {pokemon['past_types'].length > 0 && <span className='modal__content-featuresGeneration'>{pokemon['past_types'][0].generation.name}</span>}
          </div>
        </div>
        <div className="modal__content-description">
          <img className='modal__content-descriptionImage' src={pokemon.sprites.other.home.front_default} alt="" />
          <h3 className='modal__content-descriptionTitle'>{pokemon.name}</h3>
          <p className='modal__content-descriptionParagraph'>Te mostraremos las habilidades de este pokémon</p>
        </div>

        <div className="modal__content-other">
          <div className="modal__content-otherBreadcrumb">
            <h4 className='modal__content-otherBreadcrumbAbilities'>Habilidades</h4>
            {pokemon.abilities.map(({ ability }) => (
              <span key={ability.name} className='modal__content-otherBreadcrumbAbility'>{ability.name}</span>
            ))}
          </div>
          <div className="modal__content-otherStats">
            <h4 className='modal__content-otherStatsTitle'>Estadísticas</h4>
            {pokemon.stats.map((stat, index) => (
              <div className='modal__content-otherStat' key={stat.stat.name}>
                <div className='modal__content-otherStatContent'>
                  <span className='modal__content-otherStatContentPower'>{stat.stat.name}</span>
                  <span className='modal__content-otherStatContentValue'>{stat.base_stat}</span>
                </div>
                <div className='modal__content-otherStatTimeLine'>
                  <div className='modal__content-otherStatTimeLineStat' style={{ width: stat.base_stat >= 100 ? '100%' : `${stat.base_stat}%`, backgroundColor: colors[index] }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
