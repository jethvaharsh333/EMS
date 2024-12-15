import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing';
import { Button } from './components/ui/button';

function App() {
  return(<div className='h-full bg-red-700'>
    <Landing/>
    {/* <Button>Click me</Button> */}
    </div>
    );
}

export default App
