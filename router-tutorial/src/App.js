import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile'
import Article from './pages/Article'
import Articles from './pages/Articles'
import Layout from './Layout';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profiles/:username" element={<Profile/>}></Route>
      </Route>
      <Route path="/articles" element={<Articles/>}>
        <Route path=":id" element={<Article/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/mypage' element={<MyPage/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  );
}

export default App;
