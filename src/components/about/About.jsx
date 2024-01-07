import ScrollTag from '../home/ScrollTag'
import skills from '../../utils/about/skills.js'
import education from '../../utils/about/education.js'

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
      <div className='skills flex flex-col justify-center gap-8 text-about mt-[40vh] font-bitter'>
        <h1 className='text-6xl font-bold'>
          Skills
        </h1>
        <div className='flex flex-col justify-center items-start gap-8'>
          {skills.map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-start gap-4'>
              <div className='title text-4xl'>
                {item.title}
              </div>
              <div className='flex flex-wrap items-center gap-8 ms-8'>
                {item.stack.map((tech, idx) => (
                  <div key={idx} className='flex flex-col justify-center font-mono text-sm items-start gap-4'>
                    <span className='w-8'>
                      <img src={tech.image} alt='tech logo' />
                    </span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='education flex flex-col justify-center gap-8 text-about font-bitter'>
        <h1 className='text-6xl font-bold'>Education</h1>
        <ul className='flex flex-col justify-center gap-4 list-disc ms-8'>
          {education.map((item, index) => (
            <li key={index}>
              <div className='degree text-xl font-bold'>{item.degree}</div>
              <div className='branch'>{item.branch}</div>
              <div className='duration'>{item.duration}</div>
              <div className='gpa'>{item.gpa}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className='achievements flex flex-col justify-center gap-8 text-about font-bitter'>
        <h1 className='text-6xl font-bold'>Achievements</h1>
        <ul className='list-disc flex flex-col justify-center gap-2 ms-8 w-1/2'>
          <li>
            Solved <span className='font-bold'>400+</span> coding questions on various platforms like <span className='font-bold'>Leetcode</span>
            , <span className='font-bold'>Codeforces</span>, <span className='font-bold'>Cses</span>, etc. Showing expertise in problem solving capabilities.
          </li>
          <li>
            I have successfully completed several <span className='font-bold'>full-stack</span> projects during my college life and actively contributed
            to the learning experiences of fellow students by providing assistance and support in their endeavors."
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
 
 
 
 
 
 
 
