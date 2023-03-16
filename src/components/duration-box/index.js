import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

import './style.scss'

/** @jsx h */

/**@param {{
 * selectedDuration: number;
 * setDuration: (duration: number) => void;
 * }} props */
export default ({ selectedDuration, setDuration }) => {

  const durations = [
    {
      value: 12,
      display: '12 months',
    },
    {
      value: 24,
      display: '24 months',
    },
    {
      value: 36,
      display: '36 months',
    },
    {
      value: 48,
      display: '48 months',
    },
  ]

  const handleFindOutMoreButtonClick = () => {
    const oldButton = document.querySelector('.finance-info')
    if (oldButton)
      oldButton.click()
  }

  return (
    <div className="dy-finance-calculator-widget__duration-box">
      {durations.map((duration) => (
        <button
          className={`dy-finance-calculator-widget__duration-box__button ${selectedDuration === duration.value && "dy-finance-calculator-widget__duration-box__button-selected"}`}
          onClick={() => setDuration(duration.value)}
        >
          {duration.display}
        </button>
      ))}
      <p onClick={handleFindOutMoreButtonClick}>
        Find out more
      </p>
    </div>
  )
}
