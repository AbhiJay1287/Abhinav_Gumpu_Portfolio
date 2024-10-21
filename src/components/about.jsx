import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

export default function About() {
  return (
    <div
      className="flex justify-center items-center "
      style={{
        backgroundImage: 'url(../assets/bg_blue.webp)', // Update this path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure full page height
      }}
    >
      <div
        className="relative mt-36 mb-36 flex bg-clip-border rounded-xl bg-[#111827] text-gray-700 shadow-md w-5/6 flex-row bg-opacity-40 animate-expand"
      >
        <BrowserView className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-[#111827] rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src="/assets/mypic.jpeg"
            alt="card-image"
            className="object-cover w-full h-full rounded-xl"
            style={{ animation: 'slideInGrow 0.65s ease-in-out' }} // Apply the new slide-in and grow effect
          />
        </BrowserView>

        <div className="p-6">
          <h1
            className="block mb-4 font-sans antialiased font-semibold leading-relaxed tracking-normal text-blue-300 uppercase text-center text-2xl"
            style={{ animation: 'slideUp 0.5s ease-in-out ' }} // Ensure single slide-up animation
          >
            About Me
          </h1>
          <MobileView>
            <img
              src="/assets/mypic.jpg"
              alt="card-image"
              className="object-cover h-[5rem] w-20 rounded-md animate-slideIn"
              style={{ animation: 'slideUp 0.2s ease-in-out ' }} // Slower mobile image slide-in effect
            />
          </MobileView>
          <h4
            className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-300 text-center mb-5"
            style={{ animation: 'slideUp 0.5s ease-in-out ' }} // Ensure single slide-up animation for subtitle
          >
            "Tech Enthusiast | Innovator & Problem Solver"
          </h4>
          <p
            className="block text-lg mb-8 font-sans text-base antialiased font-normal leading-relaxed text-white"
            style={{ animation: 'slideUp 0.6s ease-in-out' }} // Slide up for paragraph
          >
            A highly motivated tech enthusiast from Hyderabad, Telangana, India. With a Bachelor's of Computer Science degree from Gokaraju Rangaraju Institute of Engineering and Technology, where I maintained an standing CGPA of 9.2, I've earned recognition for my academic excellence, securing a full scholarship for four years. Throughout my academic journey, I have developed a strong foundation in computer science principles, including programming languages, algorithms, and software development methodologies. My passion lies in leveraging technology to solve real-world problems and drive innovation.
            <hr className="mt-6 mb-6" style={{ animation: 'slideUp 0.7s ease-in-out' }} />
            My tech stack primarily includes languages like Java, C, JavaScript, and Python for backend and frontend development. I'm proficient in web development as a back-end developer, as well as React for building interactive user interfaces. For database management, I often work with SQL databases like PostgreSQL and MySQL, along with some experience in NoSQL databases like MongoDB. Additionally, I'm comfortable working with Git, and I'm always eager to explore new technologies and frameworks to expand my skill set further.
            Some of my key strengths are good problem-solving skills, effective work, being empathetic, taking initiatives, and the ability to work well in a team. I am also a quick learner and easily adapt to new environments.
          </p>
          <Link to="/contact" className="inline-block">
            <button
              className="flex text-xl items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-blue-200 uppercase align-middle transition-all duration-300 rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-white hover:text-black"
              style={{ animation: 'slideUp 0.8s ease-in-out' }} // Slide up for button
              type="button"
            >
              Contact ME
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
