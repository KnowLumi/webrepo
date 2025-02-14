import { useRef, useEffect } from "react";
import Footer from "../landingpage/Footer";
import FaqSection from "../landingpage/FaqSection";
import HeroSection from "../landingpage/HeroSection";
import Testimonials from "../landingpage/Testimonials";
import About from "../landingpage/About";
// import Companies from "../landingpage/Companies";
// import Enroll from "../landingpage/Enroll";
// import Action from "../landingpage/Action";
// import Process from "../landingpage/Process";
import Program from "../landingpage/Program";
// import WhyKnowLumi from "../landingpage/WhyKnowLumi";
// import Included from "../landingpage/Included";
import Navigation from "../landingpage/Navigation";
import Recognized from "../landingpage/Recognized";
import HandPickedTitles from "./HandPickedTitles";
// import HowItsWorks from "../landingpage/HowItsWorks";
import { MdArrowForward } from "react-icons/md";
import aboutbar from "../assets/about_bar1.png";

const LandingPage = () => {

  const includedRef = useRef(null);
  const processRef = useRef(null);
  const mainContainerRef = useRef(null);

  const scrollToIncluded = () => {
    includedRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      <Navigation />
      <div ref={mainContainerRef} className="flex flex-col bg-[#F7F7F7]">
        <HeroSection scrollToIncluded={scrollToIncluded} />
        <HandPickedTitles />
        {/*         <Companies /> */}
        <div className="mt-12">
          <Recognized />
        </div>
        <div className="">
          {/* <HowItsWorks/> */}
          {/* <About /> */}
        </div>
        

        {/* How Knowlumi Works
        <Process ref={processRef} /> */}
        
        {/* <Action /> */}
        {/* <WhyKnowLumi scrollToIncluded={scrollToIncluded} /> */}
        {/* <Included ref={includedRef} /> */}
        {/* <Enroll /> */}
        <About />
        <Program scrollToIncluded={scrollToIncluded} />
        {/* <Testimonials /> */}
        <FaqSection />
        
        <div className=" flex flex-col items-center justify-center px-4 py-16">
          {/* Loading indicator */}
          {/* <div className="absolute top-24 right-24">
            <div className="w-3 h-3 rounded-full bg-[#88DB1B] animate-pulse" />
          </div> */}

          {/* Main content */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Knowlumi
            </h1>

            <p className="text-zinc-600 text-base md:text-lg leading-relaxed mx-auto max-w-3xl">
            Not sure about your career path? KnowLumi helps you discover the most suitable career based on your skills and aspirations.
            Explore opportunities, build relevant skills, and get expert guidance to shape your future.
            </p>

            <div className="pt-4 flex justify-center items-center">
              <a
              href="https://knowlumi.com/"
                className="bg-[#88DB1B] hover:bg-black  text-white flex flex-row justify-center items-center p-3 rounded uppercase group"
              >
                Find Your Path with KnowLumi
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-200">
                  <MdArrowForward className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
