import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
    </main>
  )
}

export default App