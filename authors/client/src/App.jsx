import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import AddOne from './components/AddOne';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import Edit from './components/Edit'


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<AddOne/>}></Route>
        <Route path="/update/:_id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
