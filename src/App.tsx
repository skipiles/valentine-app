import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/Home/HomePage'
import PhotosPage from './pages/Photos/PhotosPage'
import MemoriesPage from './pages/Memories/MemoriesPage'
import StoryPage from './pages/Story/StoryPage'
import FallingPetals from './components/FallingPetals/FallingPetals'

function App() {
  return (
    <BrowserRouter>
      <FallingPetals />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
