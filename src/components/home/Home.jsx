import Intro from './Intro';
import Mid from './Mid';
import Projects from './Projects';

const Home = () => {
    return (
        <div className="home flex flex-col w-full bg-bgLight px-24 py-40">
            <Intro />
            <Mid />
            <Projects />
        </div>
    )
}

export default Home;