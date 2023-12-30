import { Outlet } from 'react-router-dom';
import '../assets/styles/app.css'
import Header from './home/Header';

function App() {
  return (
    <div className="app flex flex-col w-full grow">
      <Header />
      <Outlet />
    </div>
  )
}

export default App;
