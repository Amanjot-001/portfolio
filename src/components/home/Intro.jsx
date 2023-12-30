import ScrollTag from "./ScrollTag";

const Intro = () => {
    return (
        <div className="intro relative flex flex-col justify-center items-start w-max font-bitter text-primary gap-8">
            <div className="name">
                <p className="text-6xl">Hi, my name is</p> <br />
                <p className="text-6xl font-bold">Amanjot Singh</p>
            </div>
            <div className="profile text-xl">
                <p>I'm a <span className="font-bold">fullstack software developer</span> from</p>
                <p>U.P, India</p>
            </div>
            <ScrollTag />
        </div>
    )
}

export default Intro;