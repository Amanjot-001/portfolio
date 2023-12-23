import '../assets/styles/app.css'
import Header from './Header';
import Intro from './Intro';

function App() {
  return (
    <div className="app relative flex flex-col w-full bg-bgLight px-24 py-40">
      <Header />
      <Intro />
    </div>
  )
}

export default App;
