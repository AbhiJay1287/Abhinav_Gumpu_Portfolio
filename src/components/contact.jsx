import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay for fade-in effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-10xl px-10 "
      style={{
        backgroundImage: 'url(../assets/unsplash_admin_bg.jpg)', // Update this path to your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure full page height
      }}>
      <div className="flex justify-center">
        <section className={`bg-gradient-to-r mt-32 mb-16 from-black to-gray-900 w-full md:w-3/4 rounded-xl shadow-lg transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="py-8 lg:py-16 px-6 mx-auto max-w-screen-md">
            <h2 className="mb-6 text-4xl font-extrabold text-center text-white">
              Contact Me
            </h2>
            <p className="mb-8 font-light text-center text-gray-300 sm:text-lg">
              Have any questions or comments? Please do drop them here!
              <br />
              Email: <a href="mailto:jayenthg@gmail.com" className="text-blue-400">jayenthg@gmail.com</a>
            </p>
            <form
              id="contactform"
              target="_blank"
              action="https://formsubmit.co/jayenthg@gmail.com"
              method="POST"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="block w-full p-3 text-sm rounded-lg bg-gray-600 border border-gray-800 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="block w-full p-3 text-sm rounded-lg bg-gray-600 border border-gray-800 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your Response
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your Response"
                  className="block w-full p-3 text-sm rounded-lg bg-gray-600 border border-gray-800 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  name="message"
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full my-4 text-white font-medium rounded-lg text-sm px-5 py-3 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
