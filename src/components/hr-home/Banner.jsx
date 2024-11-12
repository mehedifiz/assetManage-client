import React from "react";
import { FaUserCircle } from "react-icons/fa"; // You can use icons for user profile images
import SectionTitle from "../sectionTitle/SectionTitle"; // Import your SectionTitle component if used
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

function Banner() {
    const {userData} = useUserData()
    console.log()

    const {user} = useAuth()
  const hrName =user.displayName ; 
  const company =userData.company_name  

  return (
    <div className="relative bg-gradient-to-r from-blue-100 to-teal-100 text-gray-700 py-16 px-8 max-w-7xl mx-auto text-center rounded-lg shadow-xl">
      {/* Banner Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('https://your-image-url.com/banner.jpg')` }}></div>

      {/* Banner Content */}
      <div className="relative z-10">
        <FaUserCircle className="mx-auto text-white text-6xl mb-4" />
        <SectionTitle sectionTitle={`Hello, ${hrName}`} />
        <p className="text-xl font-semibold my-2">
          Welcome to the HR Dashboard. We're glad to have you here.
        </p>
        <p className="text-md mt-4 text-gray-500 opacity-80">
          <span className="font-semibold">Company:</span> {company}
        </p>
      </div>
    </div>
  );
}

export default Banner;