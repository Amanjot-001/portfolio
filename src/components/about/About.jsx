import ScrollTag from '../home/ScrollTag'

const About = () => {
  return (
    <div className="about flex flex-col w-full bg-bgAbout px-24 py-40 gap-8">
      <div className="text-about text-6xl font-bold font-bitter" >
        About me <span className="text-[#73cadc]">.</span>
      </div>
      <div className="w-16 h-[2px] bg-[#73cadc]"></div>
      <div className="font-bitter text-about text-xl w-1/2 leading-relaxed">
        Enthusiastic computer science engineering student deeply passionate about <span className="font-bold"> programming </span>,
        <span className="font-bold"> web development </span>, and <span className="font-bold"> software engineering </span>.
        Join me as I unveil a world of skills and projects in the realm of technology.
      </div>
      <div className='w-1/4 relative'>
        <ScrollTag />
      </div>
      <div className='skills flex'>
        <div className='Languages flex'>
          <div>
            Javascript
            <span>
              <img src='' alt='tech logo' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
