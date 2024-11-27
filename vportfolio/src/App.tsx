import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import Navbar from './components/navbar'
import Page from './Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
    <TooltipProvider delayDuration={0}>
      <Page />
      <Navbar />
    </TooltipProvider>
  </ThemeProvider>
     
  )
}

export default App
