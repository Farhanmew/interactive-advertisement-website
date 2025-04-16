import video5 from "../assets/video5.mp4"
import video4 from "../assets/video4.mp4"
import{
  PhoneCall
} from "lucide-react";

const HeroSection = ({ onBookIntro }) => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
     <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
     Interactive Advertisement {" "}
     <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">
     {"   "}
     Proven Results.
   </span>
    </h1>

    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
    No matter your industry, we have tailored solutions to meet the needs of brands and agency partners.
</p>

<div className="flex justify-center my-10">
  <button 
    onClick={onBookIntro}
    className="bg-gradient-to-r from from-blue-500  to-blue-800 py-3 px-4 mx-3  rounded-md"
  >
   Book an Intro 
  </button> 
  <a href="https://www.linkedin.com/company/teambixy/" className="py-3 px-4 rounded-md border">
    Know About us 
  </a>
</div>

<div className="flex mt-10 justify-center">
  <video 
    autoPlay 
    loop
    muted
     className="rounded-lg w-1/2 border-blue-700 shadow
  shadow-blue-400 mx-2 my-4"
>
<source src={video5} type="video/mp4" />
your browser does not support the videp tag.
</video>
<video 
    autoPlay 
    loop
    muted
     className="rounded-lg w-1/2 border-blue-700 shadow
  shadow-blue-400 mx-2 my-4"
>
<source src={video4} type="video/mp4" />
your browser does not support the videp tag.
</video>
</div>
</div> )
}

export default HeroSection;
