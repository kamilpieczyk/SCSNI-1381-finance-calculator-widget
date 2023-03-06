import { h, Fragment } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import ProductController from '@controllers/product.controller'
import Topbar from '@components/topbar'
import DurationBox from '@components/duration-box'

import './style.scss'

/** @jsx h */

const Container = () => {
  const [instalment, setInstalment] = useState(0)
  const [duration, setDuration] = useState(6)

  const product = new ProductController();

  const getInstalment = () => {
    const price = product.price;
    const instalment = price/duration;
    setInstalment(instalment)
  }

  useEffect(() => {
    getInstalment();
  }, [duration])

  return (
    <Fragment>
      <Topbar instalment={instalment} selectedDuration={duration}/>
      <DurationBox setDuration={setDuration} selectedDuration={duration}/>
    </Fragment>
  )
}

export default Container;