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
      case 12:
        setDuration('12 months');
        return;
      case 24:
        setDuration('24 months');
        return;
      case 36:
        setDuration('36 months');
        return;
      case 48:
        setDuration('48 months');
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