/*
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import EditCards from './pages/EditCards/EditCards.jsx;
import ViewCards from './pages/ViewCards/ViewCards.jsx'
import QuickView from './pages/QuickView.jsx'

export default function App() {
return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards/add" element={<AddCard />} />
      <Route path="/cards/edit" element={<EditCards />} />
      <Route path="/cards/view" element={<ViewCards />} />
      <Route path="/cards/quick-view" element={<ViewCards />} />
    </Routes>
  </>
)
  }
