import React, { useState } from "react";
import { DiAptana } from "react-icons/di";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [pass, setPass] = useState(null);

  const Submit = (e) => {
    e.preventDefault();
    axios
      .get(`https://portfolio-server-pearl.vercel.app/admin/${username + "_" + pass}`)
      .then((result) => {
        if (result.data) {
          console.log("Successful login");
          navigate("/projects/ksvxbvebroybacfvhbjlnxmsbcxvxkb/create");
        } else {
          console.log("Unsuccessful login");
          location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-lvh items-center justify-center bg-gradient-to-r from-gray-900 to-black mt-8">
      <div className="rounded-xl bg-gradient-to-r from-wheat to-yellow-300 bg-opacity-80 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <DiAptana size={60} />
            <h1 className="mb-2 text-2xl">Portfolio</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          {/* form start *************************/}

          <form onSubmit={Submit}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-gray-500 bg-opacity-60 px-6 py-2 text-center text-inherit placeholder-gray-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="admin@email.com"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-gray-500 bg-opacity-60 px-6 py-2 text-center text-inherit placeholder-gray-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                name="name"
                placeholder="********"
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>
            <div className="mt-8 flex justify-center text-lg">
              <button
                type="submit"
                className="rounded-3xl bg-yellow-600 bg-opacity-80 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Login
              </button>
            </div>
          </form>
          {/* form end *************************/}
        </div>
      </div>
    </div>
  );
}
