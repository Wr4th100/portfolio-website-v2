import React from "react";
import {
  UilGithub,
  UilInstagram,
  UilTwitter,
  UilLinkedin,
  UilWhatsapp,
} from "@iconscout/react-unicons";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className={` w-screen bg-black font-ikaros sm:min-h-full sm:h-full min-h-full border-b-4 border-[#DEAD4F] mr-6 p-6 pb-10 flex flex-col justify-center item-center`}
    >
      <div className=" flex sm:flex-row sm:justify-center sm:items-center items-center py-2 flex-col sm:px-32">
        <p className="text-lg text-white mx-3 mb-1">Follow me on my socials</p>
        <div className="flex">
          <a href="https://github.com/Wr4th100" target="_black">
          <UilGithub size="40" className="text-white mx-2" />
          </a>
          <a href="https://www.instagram.com/roshan10.rj/">
          <UilInstagram size="40" className="text-white mx-2" />
          </a>
          <a ><UilTwitter size="40" className="text-white mx-2" /></a>
          <a href="https://www.linkedin.com/in/roshan-jagadish/"  target="_black"><UilLinkedin size="40" className="text-white mx-2" /></a>
          <a href="https://wa.me/918667326199" target="_black"><UilWhatsapp size="40" className="text-white mx-2" /></a>
        </div>
      </div>

      <div className="w-full flex justify-center item-center ">
        <p className="text-lg text-white mx-3 mt-6 items-center">
          Made with ❤️ by <span className="text-[#DEAD4F]">Roshan</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
