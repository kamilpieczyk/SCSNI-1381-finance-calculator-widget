import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

import './style.scss'

/** @jsx h */

/**@param {{
 * instalment: Number;
 * selectedDuration: Number;
 * }} props */
export default ({ instalment, selectedDuration }) => {
  const [duration, setDuration ] = useState('')

  const handleDisplayedDuration = () => {
    switch(selectedDuration) {
      case 6:
        setDuration('6 months');
        return;
      case 12:
        setDuration('1 year');
        return;
      case 18:
        setDuration('18 months');
        return;
      case 24:
        setDuration('2 years');
        return;
      case 36:
        setDuration('3 years');
        return;
      case 48:
        setDuration('4 years');
        return;
    }
  }

  useEffect(() => {
    handleDisplayedDuration();
  }, [selectedDuration])

  return (
    <div className="dy-finance-calculator-widget__topbar">
      <p>
        <span>£{instalment.toFixed(2)}</span> a month for <strong>{duration}</strong> | 0% APR - £0 deposit
      </p>
    </div>
  )
}