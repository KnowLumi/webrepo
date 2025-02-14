// import { Progress } from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { MdArrowForward, MdLock } from "react-icons/md";
import { Button } from "react-scroll";
import IndividualCourseData from "./individualCourseData";
import { Dot } from "lucide-react";
import { CircleDotDashed } from "lucide-react";
import { Target } from "lucide-react";


const IndividualTracksTwo = ({itemShow = IndividualCourseData.length}) => {

  

  const displayCourse = IndividualCourseData.slice(0, itemShow);
  return (
    <div id="courses" className="min-h-screen  ">
     
      <p className="max-w-2xl text-sm text-center mx-auto mt-3">
        {/* Have you ever felt limited by the resources available for your
        educational journey? KnowLumi breaks down these barriers, offering a
        diverse range of courses and programs that transcend traditional
        boundaries. */}
      </p>
      <div className="flex flex-wrap max-w-4xl mx-auto gap-5 justify-center mt-4 lg:mt-4">
        {displayCourse.map((item, i) => (
          <div
            key={`progress_c_${i + 1}`}
            // className="rounded-2xl bg-white mb-12 md:w-[22.5rem] w-[19.75rem] flex flex-col items-start pb-5 px-5"

            className="rounded-2xl bg-white mb-4  md:w-[16rem] w-[16rem] flex flex-col items-start pb-2 px-2"
          >
            {/* <div className="relative w-[15.5rem] md:w-56 h-[7.75rem] md:h-[9rem] bg-[#88DB1B66] mt-8 mb-4 md:mt-9 ml-3 rounded-xl"> */}

            <div className="relative w-[6rem] md:w-20 h-[5.0rem] md:h-[4rem] bg-[#88DB1B66] mt-8 mb-4 md:mt-9 ml-3 rounded-xl">
              <div  
                style={{ backgroundImage: `url('${item.banner}')` }}
                className="absolute flex justify-end items-start -translate-x-3  -translate-y-4 bg-contain bg-no-repeat w-50 md:w-96 h-[5.0rem] md:h-[5.0rem]"
              ></div>
            </div>
            <span className="font-normal text-[14px] tracking-wide mt-2 mb-3">
              {item.title}
            </span>
            {/* <span className="text-[#01010199] font-light text-xs my-4">
              {item.desc}
            </span> */}

            <div className="flex gap-3 items-center mb-3">
              {item.skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex items-center md:justify-between"
                >
                  <div className="flex flex-col items-center gap-2">
                    <i className="flex justify-center items-center w-3 h-3 md:w-4 md:h-4    ">
                      <img loading="lazy" src={skill.image} alt="" className="" />
                    </i>
                    {/* <span className="font-light tracking-wider text-[10px] md:text-xs w-14 text-center">
                      {skill.skill}
                    </span> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex text-gray-500 mb-2 items-center gap-2">
              <span className="text-black text-[12px]">Beginner to Advanced</span>
              {/* <svg
                width="49"
                height="9"
                viewBox="0 0 49 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1377_5459"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="9"
                  height="9"
                >
                  <rect x="0.5" y="0.75" width="8" height="8" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1377_5459)">
                  <path
                    d="M2.44169 7.75008L2.98335 5.40841L1.16669 3.83341L3.56669 3.62508L4.50002 1.41675L5.43335 3.62508L7.83335 3.83341L6.01669 5.40841L6.55835 7.75008L4.50002 6.50842L2.44169 7.75008Z"
                    fill="#FF9F1C"
                  />
                </g>
                <mask
                  id="mask1_1377_5459"
                  maskUnits="userSpaceOnUse"
                  x="10"
                  y="0"
                  width="9"
                  height="9"
                >
                  <rect x="10.5" y="0.75" width="8" height="8" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask1_1377_5459)">
                  <path
                    d="M12.4417 7.75008L12.9834 5.40841L11.1667 3.83341L13.5667 3.62508L14.5 1.41675L15.4334 3.62508L17.8334 3.83341L16.0167 5.40841L16.5584 7.75008L14.5 6.50842L12.4417 7.75008Z"
                    fill="#FF9F1C"
                  />
                </g>
                <mask
                  id="mask2_1377_5459"
                  maskUnits="userSpaceOnUse"
                  x="20"
                  y="0"
                  width="9"
                  height="9"
                >
                  <rect x="20.5" y="0.75" width="8" height="8" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask2_1377_5459)">
                  <path
                    d="M22.4417 7.75008L22.9834 5.40841L21.1667 3.83341L23.5667 3.62508L24.5 1.41675L25.4334 3.62508L27.8334 3.83341L26.0167 5.40841L26.5584 7.75008L24.5 6.50842L22.4417 7.75008Z"
                    fill="#FF9F1C"
                  />
                </g>
                <mask
                  id="mask3_1377_5459"
                  maskUnits="userSpaceOnUse"
                  x="30"
                  y="0"
                  width="9"
                  height="9"
                >
                  <rect x="30.5" y="0.75" width="8" height="8" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask3_1377_5459)">
                  <path
                    d="M32.4417 7.75008L32.9834 5.40841L31.1667 3.83341L33.5667 3.62508L34.5 1.41675L35.4334 3.62508L37.8334 3.83341L36.0167 5.40841L36.5584 7.75008L34.5 6.50842L32.4417 7.75008Z"
                    fill="#FF9F1C"
                  />
                </g>
                <mask
                  id="mask4_1377_5459"
                  maskUnits="userSpaceOnUse"
                  x="40"
                  y="0"
                  width="9"
                  height="9"
                >
                  <rect x="40.5" y="0.75" width="8" height="8" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask4_1377_5459)">
                  <path
                    d="M45.55 6.36675L45.275 5.16675L46.2 4.36675L44.9834 4.25841L44.5 3.12508V5.72508L45.55 6.36675ZM42.4417 7.75008L42.9834 5.40841L41.1667 3.83341L43.5667 3.62508L44.5 1.41675L45.4334 3.62508L47.8334 3.83341L46.0167 5.40841L46.5584 7.75008L44.5 6.50842L42.4417 7.75008Z"
                    fill="#FF9F1C"
                  />
                </g>
              </svg> */}
              {/* <span>20 reviews</span> */}
            </div>

            <div className=" flex flex-col align-left justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 ">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1377_5395"
                    //
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="17"
                  >
                    <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1377_5395)">
                    <path
                      d="M7.66667 10.1666L12.3333 7.16658L7.66667 4.16659V10.1666ZM5.33333 12.4999C4.96667 12.4999 4.65278 12.3694 4.39167 12.1083C4.13055 11.8471 4 11.5333 4 11.1666V3.16659C4 2.79992 4.13055 2.48603 4.39167 2.22492C4.65278 1.96381 4.96667 1.83325 5.33333 1.83325H13.3333C13.7 1.83325 14.0139 1.96381 14.275 2.22492C14.5361 2.48603 14.6667 2.79992 14.6667 3.16659V11.1666C14.6667 11.5333 14.5361 11.8471 14.275 12.1083C14.0139 12.3694 13.7 12.4999 13.3333 12.4999H5.33333ZM2.66667 15.1666C2.3 15.1666 1.98611 15.036 1.725 14.7749C1.46389 14.5138 1.33333 14.1999 1.33333 13.8333V4.49992H2.66667V13.8333H12V15.1666H2.66667Z"
                      fill="#88DB1B"
                    />
                  </g>
                </svg>
                <p className="text-gray-500 text-xs ">Live Mentorship</p>
              </div>

              <div >
                <span className="text-gray-500 flex space-x-2 items-center text-xs gap-2"> 
                <Target className="text-[#88DB1B] h-3 w-3" />
                  Hands On Projects</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-3 w-full">
              {/* <Button className="flex bg-[#88DB1B]  justify-center items-center gap-2 w-full rounded-lg text-white capitalize font-archivo font-semibold text-sm py-2.5 px-7"> */}
              <a  href={`/course/title/${item.id}`} className="flex bg-[#88DB1B]  justify-center items-center gap-2  rounded-lg text-white capitalize font-archivo font-semibold text-sm py-1 px-2">
                Enroll Now
              </a>
              {/* </Button> */}

              {/* <a href={`/course/title/${item.id}`} className="flex bg-white border border-[#88DB1B] text-[#88DB1B]  justify-center items-center gap-2 w-full rounded-lg capitalize font-archivo font-semibold text-sm py-2.5 px-7">
                Learn More
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndividualTracksTwo;