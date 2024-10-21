import React from "react";
import { Link } from "react-router-dom";
import { BrowserView } from "react-device-detect";

// Sample static data for projects
const dummyProjects = [
  {
    _id: "1",
    title: "Hospital Appointment Manager - Web Development",
    description: "This is a brief description of Project One.This responsive web platform allows users to seamlessly book appointments with doctors at their preferred hospitals. It offers a user-friendly interface where patients can browse available doctors, view time slots, and schedule appointments effortlessly. The platform ensures smooth coordination between users and hospitals, improving appointment management. Built with HTML, CSS for front-end, Node.js for backend, and Firebase for data storage, the system supports real-time updates and secure data handling.",
    Thumbnail_link: "/assets/project1.jpg",
    date: "2022-09-01",
  },
  {
    _id: "2",
    title: "Inspiring Go - Full Stack Development (MERN)",
    description: "This is a brief description of Project Two. A full-stack platform revolutionizing the delivery and access of consultancy services. It connects consultants with clients from diverse industries, catering to both experienced professionals and students seeking expert guidance. The platform streamlines consultations, making expert advice more accessible and enhancing the client-consultant experience.",
    Thumbnail_link: "/assets/project3.avif",
    date: "2023-06-13",
  },
  {
    _id: "3",
    title: "Glaucoma Diagnosis using Retinal Fundus Images",
    description: "This is a brief description of Project Three.This project focuses on early diagnosis of glaucoma using retinal fundus images and various classifiers. It compares the effectiveness of several algorithms, including Support Vector Machine, Random Forest, and Decision Trees, to determine their performance in detecting the disease. The study also investigates advanced classifiers like AdaBoost and Convolutional Neural Networks (CNN) to enhance diagnostic accuracy. By analyzing key metrics, the project aims to highlight the strengths and weaknesses of each classification technique.",
    Thumbnail_link: "/assets/project3.avif",
    date: "2024-03-30",
  },
  {
    _id: "4",
    title: "Crop Master - NLP",
    description: "This is a brief description of Project Four. Crop Master is a machine learning-based platform that analyzes various farming parameters to provide insights and recommendations. The system leverages advanced algorithms to measure factors like soil health, crop conditions, and environmental data, helping farmers optimize their practices. By processing large datasets, Crop Master delivers data-driven insights that contribute to improved yield and sustainable farming.",
    Thumbnail_link: "/assets/project4.avif",
    date: "2024-01-12",
  },
  {
    _id: "5",
    title: "Rock Paper Scissor - JS Game",
    description: "This is a brief description of Project Five. It showcases creative design and functionality. A simple yet engaging JavaScript-coded game where players choose rock, paper, or scissors to compete against the computer. The game implements classic rules with a modern, interactive design, providing immediate feedback and results for an enjoyable user experience.",
    Thumbnail_link: "/assets/project5.jpg",
    date: "2023-05-22",
  },
  {
    _id: "6",
    title: "ZenMate: Mental Health Chat System using Gen AI",
    description: "This is a brief description of Project Six. It demonstrates innovative technology and solutions. ZenMate is a MERN stack-based platform that leverages AI to support mental health by providing users with a chat assistant for guidance and emotional support. It includes tools to analyze mental health trends over time, offering graphical reports on well-being. ZenMate aims to make mental health care more accessible and less stigmatized, using GenAI models for meaningful user interactions. The project aligns with the UN’s SDG 3 (Good Health and Well-being) and combines AI, web development, and psychology to create a scalable, supportive mental health solution.",
    Thumbnail_link: "/assets/project6.avif",
    date: "2024-08-29",
  },
];

export default function Projects() {
  return (
    <div
      className="mt-8"
      style={{
        backgroundImage: 'url(../assets/cover.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="flex flex-row justify-between mr-12">
        <BrowserView className="hidden md:block mt-2">
          <img className="absolute max-w-xl mt-32 ml-20 mr-16 animate-slideIn" src="/assets/coding.svg" alt="an_svg" id="coding"/>
        </BrowserView>
        <div className="flex flex-col justify-between mt-28 mb-16">
          {dummyProjects.map((project, index) => (
            <div key={project._id} style={{ animation: `slideUp 0.5s ease-in-out ${index * 0.1}s` }}>
              <Link
                to={`/projects/${project._id}/view`}
                state={{ project }}
                className="flex flex-col pl-2 m-3 items-center border rounded-lg shadow md:flex-row md:h-60 md:max-w-4xl border-gray-700 bg-gray-800 hover:bg-gray-600"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-2/3 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg pt-1"
                  src={project.Thumbnail_link}
                  alt={project.title}
                />
                <div className="font-sans flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h5>
                  <p className="mb-3 font-serif text-white">
                    {project.description.slice(0, 350)}...
                    <span className="mb-3 font-serif text-blue-200">read more</span>
                  </p>
                  <p className="font-normal text-white mb-3">
                    Date: {project.date}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
