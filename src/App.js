import { Route, Routes, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Count from './pages/Count'
import List from './pages/List'
import Movie from './pages/Movie'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">홈</Link> &nbsp;
        <Link to="/About">소개</Link> &nbsp;
        <Link to="/Count">카운터</Link> &nbsp;
        <Link to="/List">리스트</Link> &nbsp;
        <Link to="/Movie">영화목록</Link> &nbsp;
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Count" element={<Count />} />
        <Route path="/List" element={<List />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </div>
  )
}

export default App
