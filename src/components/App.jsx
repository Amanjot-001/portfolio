import '../assets/styles/app.css'
import Header from './Header';
import Intro from './Intro';
import Mid from './Mid';

function App() {
  return (
    <div className="app relative flex flex-col w-full bg-bgLight px-24 py-40">
      <Header />
      <Intro />
      <Mid />
    </div>
  )
}

export default App;
