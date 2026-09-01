import React from 'react'
import Header from './components/Header'
import Greetings from './components/Greetings'
import PrimaryButton, {IconButton } from './components/Buttons'
import Footer from './components/Footer'
import ThisDemo from './components/JsxDemo'

const App = () => {
  return (
  <div>
  <Header />
  <Greetings />
  <PrimaryButton />
  <IconButton />
  <Footer />
  <ThisDemo />
  </div>
  )
}

export default App