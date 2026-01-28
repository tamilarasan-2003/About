import React from "react";
import profile from "./assets/abouttamil.png";
import axn from "./assets/axn.jpeg";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const App = () => {
  return (
    /* ===== BACKGROUND WITH IMAGE ===== */
    <div
      className="min-h-screen flex items-center justify-center px-6 lg:px-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${axn})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-10 items-center lg:items-start">

        {/* ================= LEFT ABOUT CARD ================= */}
        <div
          className="
            w-full lg:max-w-lg
            rounded-[36px]
            bg-[#1f2328]/90
            p-8
            shadow-2xl
            border border-white/10
            transition-all duration-500 ease-out
            hover:-translate-y-1
            hover:shadow-blue-500/20
          "
        >
          <h2 className="text-4xl font-bold leading-tight text-white">
            Tamilarasan J
            <br />
            <span className="text-blue-500 text-2xl">
              Axn Infotech Pvt Ltd
            </span>
          </h2>

         <p className="mt-6 text-sm leading-relaxed text-gray-300"> 
          I am a passionate Software Developer with hands-on experience in building modern, scalable, and user-focused web applications. I began my journey by learning core programming fundamentals and gradually advanced into full-stack development through continuous learning and real-world project implementation.
           </p> 
           <p className="mt-4 text-sm leading-relaxed text-gray-300">
             At present, I work extensively with JavaScript, React.js, and modern frontend technologies to design responsive and high-performance user interfaces. On the backend, I have experience developing APIs, handling databases, and integrating frontend applications with server-side logic to deliver complete, functional solutions. 
             </p>
              <p className="mt-6 text-sm leading-relaxed text-gray-300"> 
                Software Developer specializing in React.js and modern web technologies, focused on building scalable, user-friendly applications with clean UI and efficient backend integration. 

          </p>
        </div>

        {/* ================= RIGHT PROFILE CARD ================= */}
        <div
          className="
            w-full lg:max-w-lg
            rounded-[36px]
            bg-[#1f2328]/90
            p-8
            shadow-2xl
            transition-all duration-500 ease-out
            hover:shadow-blue-500/20
          "
        >
          {/* TOP PROFILE */}
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 rounded-3xl bg-[#2a2f36] flex items-center justify-center overflow-hidden">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-white">
                Tamilarasan
              </h2>
              <p className="text-base text-gray-400 mt-1">
                Software Developer
              </p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {[
              { icon: FaFacebookF, color: "hover:bg-blue-600" },
              { icon: FaInstagram, color: "hover:bg-pink-600" },
              { icon: FaWhatsapp, color: "hover:bg-green-600" },
              { icon: FaTwitter, color: "hover:bg-sky-500" },
            ].map(({ icon: Icon, color }, i) => (
              <div
                key={i}
                className={`
                  w-9 h-9
                  flex items-center justify-center
                  rounded-lg
                  bg-[#2a2f36]
                  text-gray-300
                  ${color}
                  hover:text-white
                  transition-all duration-300
                  hover:scale-110
                `}
              >
                <Icon size={13} />
              </div>
            ))}
          </div>

          {/* PROFESSIONAL DETAILS */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-blue-400 mb-4">
              Professional Details
            </h3>

            <div className="grid grid-cols-2 gap-y-5 gap-x-6 text-xs">
              <Detail label="First Name" value="Tamilarasan" />
              <Detail label="Last Name" value="J" />
              <Detail label="Phone" value="+91 8778002775" />
              <Detail label="Email" value="tamilarasan860574@gmail.com" />
              <Detail label="Job Title" value="Software Developer" />
              <Detail label="Level" value="Junior" />
              <Detail label="Location" value="
No, 13 Dharapuram Road, Opp.Supreme Paradise, Tirupur - 641604, 
Tamil Nadu" />
              <Detail label="Country" value="India" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-gray-200 font-medium">{value}</p>
  </div>
);

export default App;
