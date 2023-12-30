import '../../assets/styles/app.css'
import Header from './Header';
import Intro from './Intro';
import Mid from './Mid';
import Projects from './Projects';

function App() {
  return (
    <div className="app flex flex-col w-full bg-bgLight px-24 py-40">
      <Header />
      <Intro />
      <Mid />
      <Projects />
    </div>
  )
}

export default App;
