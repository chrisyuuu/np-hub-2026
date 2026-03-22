import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Hub from './pages/Hub'
import Strategy from './pages/Strategy'
import Deck from './pages/Deck'
import DeckLight from './pages/DeckLight'
import Charter from './pages/Charter'
import Builder from './pages/Builder'
import Engineer from './pages/Engineer'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Hub />} />
        <Route path="strategy" element={<Strategy />} />
        <Route path="deck" element={<Deck />} />
        <Route path="deck-light" element={<DeckLight />} />
        <Route path="charter" element={<Charter />} />
        <Route path="builder" element={<Builder />} />
        <Route path="engineer" element={<Engineer />} />
      </Route>
    </Routes>
  )
}
