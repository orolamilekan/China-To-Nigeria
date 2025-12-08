import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./Components/Home/Header";
import Hero from "./Components/Home/Hero";
// import NewArrivalsSlider from "./Components/Home/NewArrivalsSlider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    {/* <NewArrivalsSlider /> */}
  </StrictMode>,
)
