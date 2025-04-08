// import React from "react";
// import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
//           <div className="flex-1 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">Yousaf</h3>
//             <p className="text-gray-400">
//               Full-Stack Developer based in the USA, specializing in web and
//               software development.
//             </p>
//           </div>
//           <div className="flex-1 w-full">
//             <form className="flex items-center justify-center">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
//                 focus:outline-none focus:border-green-400"
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
//                 py-2 rounded-r-lg"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div
//           className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
//           justify-between items-center"
//         >
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} Yousaf. All rights reserved.
//           </p>
//           <div className="flex space-x-4 my-4 md:my-0">
//             Link to="#" className="text-gray-400 hover:text-white">
//               <FaFacebook />
//             </a>
//             Link to="#" className="text-gray-400 hover:text-white">
//               <FaTwitter />
//             </a>
//             Link to="#" className="text-gray-400 hover:text-white">
//               <FaLinkedin />
//             </a>
//             Link to="#" className="text-gray-400 hover:text-white">
//               <FaGithub />
//             </a>
//           </div>
//           <div className="flex space-x-4">
//             Link to="#" className="text-gray-400 hover:text-white">
//               Privacy
//             </a>
//             Link to="#" className="text-gray-400 hover:text-white">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useState } from "react";
// import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubscribe = async (e) => {
//     e.preventDefault();

//     if (!email || !email.includes("@")) {
//       setMessage("Please enter a valid email address.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("access_key", "876a540e-69fd-4f28-b851-d465f6eb2007");
//     formData.append("subject", "New Subscriber 📧");
//     formData.append("email", email);
//     formData.append("message", `New subscriber: ${email}`);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();

//     if (result.success) {
//       setMessage("Thanks for subscribing! ✅");
//       setEmail("");
//     } else {
//       setMessage("Subscription failed. ❌ Please try again.");
//       console.error(result);
//     }
//   };

//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
//           <div className="flex-1 mb-4 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">Fikremariam</h3>
//             <p className="text-gray-400">
//               Full-Stack Developer based in Ethiopia, specializing in web application Development.
//             </p>
//           </div>

//           <div className="flex-1 w-full">
//             <form onSubmit={handleSubscribe} className="flex items-center justify-center">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email"
//                 className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
//                 focus:outline-none focus:border-green-400"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
//                 py-2 rounded-r-lg"
//               >
//                 Subscribe
//               </button>
//             </form>
//             {message && <p className="text-green-400 mt-2">{message}</p>}
//           </div>
//         </div>

//         {/* Socials and copyright */}
//         <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} Fikremariam. All rights reserved.
//           </p>
//           <div className="flex space-x-4 my-4 md:my-0">
//             Link to="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
//             Link to="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
//             Link to="https://www.linkedin.com/in/fikremariam-mekonnnen/" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
//             Link to="https://github.com/Fikremariam21" className="text-gray-400 hover:text-white"><FaGithub /></a>
//           </div>
//           <div className="flex space-x-4">
//             Link to="#" className="text-gray-400 hover:text-white">Privacy</a>
//             Link to="#" className="text-gray-400 hover:text-white">Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "876a540e-69fd-4f28-b851-d465f6eb2007");
    formData.append("subject", "New Subscriber 📧");
    formData.append("email", email);
    formData.append("message", `New subscriber: ${email}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setEmail("");
        toast.success("Thanks for subscribing! ✅", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error("Subscription failed. ❌ Please try again.", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.error(result);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error(error);
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Fikremariam</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in Ethiopia, specializing in web application Development.
            </p>
          </div>

          <div className="flex-1 w-full">
            <form onSubmit={handleSubscribe} className="flex items-center justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Socials and copyright */}
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Fikremariam. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
           <a href="https://web.facebook.com/fikremariam.mekonnen" className="text-gray-400 hover:text-white" target="_blank"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/fikremariam-mekonnnen/" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
            <Link to="https://github.com/Fikremariam21" className="text-gray-400 hover:text-white"><FaGithub /></Link>
          </div>
          <div className="flex space-x-4">
           <Link to="#" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link to="#" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;