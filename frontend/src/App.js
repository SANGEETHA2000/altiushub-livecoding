import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRegistration from './components/UserRegistration';
import BaseLayout from './components/BaseLayout';

function App() {

  return (
    <Routes>
      <Route path='' element={ <UserRegistration/> } />
      <Route path='/dashboard' element={ <BaseLayout/> } />
    </Routes>
  );
}

export default App;
