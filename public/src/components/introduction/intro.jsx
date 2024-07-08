export default function Intro() {
    return (
      <main className="relative flex flex-col min-h-screen bg-black">
        <div className="text-left mb-4">
          <h5 className="text-white font-bold text-3xl">ABOUT</h5>
        </div>
        <div className="flex items-center justify-center space-x-10 mx-auto mb-9">
          <img src="/1.jpg" style={{ width: '200px', height: 'auto' }} alt="Profile" />
          <h3 className="text-white pr-5 pl-5">
            I am a graduate of Technological University of the Philippines Cavite with a Bachelor of Engineering Technology, 
            Major in Computer Engineering Technology. I have developed web applications using JavaScript and Python, particularly with the NextJS framework, and created desktop applications using VB.NET. While I have a solid foundation in these programming languages, I am continually exploring and expanding my skill set.
          </h3>
        </div>
        <div className="flex items-center justify-center space-x-4 mx-auto">
          <h3 className="text-white pr-5 pl-5">
            Currently, I work at McDonald's Ventura as a Service Crew, a position I have held for over a year. Balancing my job with my studies, I have honed my time management and multitasking skills. Despite my job responsibilities, I prioritize my personal growth in programming, continuously learning new languages and technologies. My goal is to develop web and desktop applications that simplify tasks and enhance productivity.
          </h3>
          <img src="/2.jpg" style={{ width: '200px', height: 'auto' }} alt="Work" />
        </div>
      </main>
    );
  }
  