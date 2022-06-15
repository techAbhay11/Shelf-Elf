import React from 'react';
import Dragon from '../assets/img/dragon.png';
import Fairy from '../assets/img/fairy.png';
import Hiker from '../assets/img/hiker.png';
import Hydra from '../assets/img/hydra.png';
import King from '../assets/img/king.png';
import Mermaid from '../assets/img/mermaid.png';
import Unicorn from '../assets/img/unicorn.png';
import Wizard from '../assets/img/wizard.png';

const RandomPic = (WrappedComponent) => {
  const pics = [Dragon, Fairy, Hiker, Hydra, King, Mermaid, Unicorn, Wizard];
  const randomPic = pics[Math.floor(Math.random()*8)];

  return (props) => {
    return (
      <WrappedComponent randomPic={randomPic} {...props}/>
    )
  }
}

export default RandomPic;
