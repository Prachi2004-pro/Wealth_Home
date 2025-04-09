import aboutSection from "../assets/Aboutsection.png";
import { MdDone } from "react-icons/md";

const AboutSection = () => {
  return (
    <div className="flex flex-col w-full h-[650px]">
      <div id="About" className="text-center m-10 p-2 text-4xl tracking-wider font-extrabold">
        About Us
      </div>

      <div className="w-full flex mb-20">
        <div className="text-2xl text-justify w-1/2 tracking-wide">
          <p className="px-11 pt-10">
            Welcome to UPONLY FINSERV, where our mission is to empower you to
            achieve your financial goals and build a secure future. With years
            of experience in wealth management and financial planning, our team
            is dedicated to providing personalized strategies that align with
            your unique needs and aspirations.
          </p>
          <div className="px-11 pt-3 flex flex-col gap-4">
            <p className="flex gap-4">
              <MdDone className="text-blue-500 mt-2"/> Personalized Approach
            </p>
            <p className="flex gap-4">
              <MdDone className="text-blue-500 mt-2" /> Holistic Solutions
            </p>
            <p className="flex gap-4">
              <MdDone className="text-blue-500 mt-2" /> Proactive Guidance
            </p>
            <p className="flex gap-4">
              <MdDone className="text-blue-500 mt-2" /> Commitment to Excellence
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img className="p-4 w-4/5" src={aboutSection} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
