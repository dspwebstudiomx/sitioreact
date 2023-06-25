import './App.css'
import { DiseñoWeb } from './components/Secciones/DiseñoWeb/DiseñoWeb'
import { WebDevelopment } from './components/Secciones/DesarrolloWeb/WebDevelopment'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DiseñoWeb />
      <WebDevelopment />
    </>
  )
}

export default App
