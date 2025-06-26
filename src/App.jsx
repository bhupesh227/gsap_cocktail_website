import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';


gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div className='bg-red-400'>App</div>
  )
}

export default App