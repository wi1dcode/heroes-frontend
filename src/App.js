import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Hero from "./pages/Hero"
import Power from "./pages/Power"

const App = () => {
  return (
    <BrowserRouter>
      <h1>My Heroes</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Hero />} />
        <Route path="/:slug/power" element={<Power />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
