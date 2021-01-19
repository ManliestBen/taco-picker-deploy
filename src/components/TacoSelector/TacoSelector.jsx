import React from 'react'
import './TacoSelector.css'

const TacoSelector = (props) => {
  return (
    <div className='TacoSelector'>
      {props.tacoNo.map((taco, idx) =>
        <button
          key={taco}
          className={props.selectedTacoIdx === idx ? 'selected' : 'color'}
          onClick={() => props.handleTacoSelection(idx)}
        >
          {props.selectedTacoIdx === idx ? `Taco ${idx+1} Selected` : `Select Taco ${idx+1}`}
        </button>
      )}
    </div>
  );
}
 
export default TacoSelector;