import { useCallback, useEffect } from "react";
import "antd/dist/antd.min.css";
import { useRouter } from "next/router";
import Navbar from "../component/Navbar";

const HOME = () => {
  const router = useRouter();

 

  


  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      { 
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="w-full relative bg-grayscale-white h-[5873px] overflow-hidden text-center text-5xl text-grayscale-white font-pacifico">
      <img
        className="absolute top-[106px] left-[0px] w-[1440px] h-[1907px] hidden"
        alt=""
        src="/bg.svg"
      />
      <Navbar />
      <div className="absolute top-[2100px] left-[62px] bg-gainsboro-200 w-[1312px] h-[720px] hidden" />
      <div className="absolute top-[4984px] left-[68px] w-[1304px] h-[560px] flex flex-col items-start justify-start text-16xl">
        <div className="w-[1304px] rounded-3xs h-[560px] flex flex-col items-center justify-center py-6 px-5 box-border gap-[26px] bg-[url('/text@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch relative leading-[52px] capitalize text-darkorange-300">
            get started
          </div>
          <b className="relative text-41xl leading-[66px] capitalize font-quicksand">
            <p className="m-0">{`Great Customers Are Using The `}</p>
            <p className="m-0">Confectionery Shop</p>
          </b>
          <div className=" rounded-11xl bg-grayscale-white h-[57px] flex flex-row items-center justify-center py-0 px-5 box-border gap-16 text-left text-sm font-rubik">
           
            <div className="rounded-xl bg-darkorange-400 flex flex-row items-center justify-center py-[11.5px] px-6">
              <b className="relative capitalize">subscribe</b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5609px] left-[64px] bg-gainsboro-200 w-[1312px] h-[265px] hidden" />
      <div className="absolute top-[5607px] left-[0px] w-[1440px] h-[263px] text-left text-lg text-black">
        <div className="absolute top-[0px] left-[64px] w-[157px] h-12">
          <div className="absolute top-[0px] left-[0px] w-[157px] h-12">
            <div className="absolute top-[0px] left-[36px] w-8 h-[22px]" />
          
          </div>
        </div>
      
      </div>
      
      <div className="absolute top-[1084px] left-[1386px] flex flex-row items-center justify-center p-2.5">
        <div className="overflow-hidden flex flex-row items-start justify-start py-0.5 px-[5px]">
          <img className="w-2.5 relative h-4" alt="" src="/vector3.svg" />
        </div>
      </div>
    
    
    {/* <SliderComponent/> */}
      <div
        className="absolute top-[1244px] left-[101px] w-[477px] h-[285px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-31@2x.png"
        />
        <div className="absolute w-[51.99%] top-[calc(50%_-_103.5px)] right-[34.17%] left-[13.84%] flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-3.5">
              <div className="self-stretch flex flex-col items-start justify-center gap-0.5">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">coffe</div>
                </div>
                <div className="flex flex-row items-center justify-center text-16xl font-quicksand">
                  <div className="relative capitalize font-semibold">
                    local donuts
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[22px] capitalize font-medium font-quicksand text-left">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
              </div>
            </div>
            <div
              className="rounded-xl bg-darkorange-200 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer text-left text-sm font-rubik"
            >
              <div className="relative capitalize">browse shop</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[1244px] left-[624px] rounded-3xs w-[337px] h-[285px] flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[337px] relative rounded-3xs h-[285px] object-cover"
          alt=""
          src="/rectangle-34@2x.png"
        />
      </div>
      <div
        className="absolute top-[1560px] left-[101px] rounded-3xs w-[337px] h-[285px] flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[337px] relative rounded-3xs h-[285px] object-cover"
          alt=""
          src="/rectangle-341@2x.png"
        />
      </div>
      <div
        className="absolute top-[1560px] left-[484px] rounded-3xs w-[477px] h-[285px] flex flex-col items-center justify-center gap-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-11xl text-darkorange-300 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[477px] relative rounded-3xs h-[285px] object-cover z-[0]"
          alt=""
          src="/rectangle-32@2x.png"
        />
        <div className="!m-[0] absolute top-[31px] left-[37px] flex flex-col items-start justify-start z-[1]">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-3.5">
              <div className="self-stretch flex flex-col items-start justify-center gap-0.5">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">which one</div>
                </div>
                <div className="flex flex-row items-center justify-center text-16xl text-grayscale-white font-quicksand">
                  <div className="relative capitalize font-semibold">
                    choco cherry
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[22px] capitalize font-light font-roboto text-grayscale-white text-left">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
              </div>
            </div>
            <div
              className="rounded-xl bg-darkorange-200 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer text-left text-sm text-grayscale-white font-rubik hover:bg-peru-100"
            >
              <div className="relative capitalize">browse shop</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1912px] left-[492px] flex flex-col items-center justify-center text-16xl text-darkorange-100">
        <div className="w-[457px] relative leading-[52.5px] capitalize flex items-center justify-center">
          best seller
        </div>
        <b className="w-[457px] relative text-21xl tracking-[-1.2px] leading-[72px] capitalize flex font-quicksand text-black items-center justify-center">
          best seller this week!
        </b>
      </div>
      <div
        className="absolute top-[1238px] left-[1007px] rounded-3xs w-[331px] h-[607px] flex flex-row items-center justify-center gap-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-11xl hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[331px] relative rounded-3xs h-[607px] object-cover z-[0]"
          alt=""
          src="/rectangle-311@2x.png"
        />
        <div className="!m-[0] absolute top-[14px] left-[31px] flex flex-col items-center justify-center z-[1]">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-3.5">
              <div className="self-stretch flex flex-col items-start justify-center gap-0.5">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">breakfast</div>
                </div>
                <div className="flex flex-row items-center justify-center text-left text-16xl font-quicksand">
                  <b className="w-[219px] relative capitalize inline-block shrink-0">
                    <p className="m-0">chocolate</p>
                    <p className="m-0">cake</p>
                  </b>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[22px] capitalize font-medium font-quicksand text-left">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
              </div>
            </div>
            <div
              className="rounded-xl bg-darkorange-200 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer text-left text-sm font-rubik hover:bg-peru-300"
            >
              <div className="relative capitalize">browse shop</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[2854px] left-[67px] w-[1309px] h-[687px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-26xl hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="absolute h-full w-[58.32%] top-[0%] right-[0%] bottom-[0%] left-[41.68%] rounded-xl max-w-full overflow-hidden max-h-full object-cover hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
          alt=""
          src="/unsplashytbfht9-ihy@2x.png"
        />
        <img
          className="absolute h-full w-[40.15%] top-[0%] right-[59.85%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/unsplashw0-w3n-hg00@2x.png"
        />
        <div className="absolute h-[52.11%] w-[18.95%] top-[18.92%] right-[78.31%] bottom-[28.97%] left-[2.74%] flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-center gap-0.5">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">cup cakes</div>
                </div>
                <div className="flex flex-row items-center justify-center text-16xl font-quicksand">
                  <div className="relative capitalize font-semibold" />
                </div>
              </div>
              <div className="self-stretch relative leading-[47px] capitalize text-left mt-[-22px] font-quicksand">
                <p className="m-0">{`Unique `}</p>
                <p className="m-0 font-semibold">Sweets</p>
                <p className="m-0">
                  <b>For</b>
                </p>
                <p className="m-0 font-medium">Lovers</p>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-[11.5px] px-6 bg-darkorange-200 rounded-xl flex flex-row items-center justify-center hover:bg-peru-400"
            >
              <b className="relative text-sm capitalize font-quicksand text-grayscale-white text-left">
                Shop now
              </b>
            </button>
          </div>
        </div>
        <div className="absolute h-[46.87%] w-[28.47%] top-[23.73%] right-[26.94%] bottom-[29.4%] left-[44.58%] flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-center gap-[26px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-3.5">
              <div className="self-stretch flex flex-col items-start justify-center gap-0.5">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative capitalize">Shop Confecrionery</div>
                </div>
                <div className="flex flex-row items-center justify-center text-left font-quicksand">
                  <div className="relative capitalize">
                    <p className="m-0">
                      <span className="font-semibold font-quicksand">{`Raspberry `}</span>
                      <span className="font-medium font-quicksand">French</span>
                      <span className="font-semibold">{` `}</span>
                    </p>
                    <p className="m-0 font-semibold">Macaron Cake</p>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[24px] capitalize font-medium font-quicksand text-left">
                The quick, brown fox jumps over a lazy dog.
              </div>
            </div>
            <div
              className="rounded-xl bg-darkorange-200 flex flex-row items-center justify-center py-[11.5px] px-6 cursor-pointer text-left text-sm font-quicksand hover:bg-chocolate-400"
            >
              <b className="relative capitalize">shop now</b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[4334px] left-[508px] w-[424px] flex flex-col items-center justify-center text-16xl text-darkorange-100">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[52.5px] capitalize">
            which one
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-21xl text-black font-quicksand">
          <b className="flex-1 relative tracking-[-1.2px] leading-[72px] capitalize">
            shop by category
          </b>
        </div>
      </div>
      <div
        className="absolute top-[4519px] left-[61px] rounded-3xs w-[400px] h-[400px] flex flex-row items-center justify-center gap-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg text-black font-quicksand hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[400px] relative rounded-3xs h-[400px] object-cover z-[0]"
          alt=""
          src="/rectangle-9@2x.png"
        />
        <div className="!m-[0] absolute top-[calc(50%_-_54px)] left-[56px] rounded-3xs bg-grayscale-white flex flex-col items-center justify-center p-2.5 gap-3.5 z-[1]">
          <b className="relative [text-decoration:underline] capitalize">
            march 2023
          </b>
          <div className="relative text-xl lowercase">
            <p className="m-0">interior inspiration</p>
            <p className="m-0">hidden to in the middle of....</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[4520px] left-[518px] rounded-3xs w-[400px] h-[400px] flex flex-row items-center justify-center gap-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg text-black font-quicksand hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[400px] relative rounded-3xs h-[400px] object-cover z-[0]"
          alt=""
          src="/rectangle-91@2x.png"
        />
        <div className="!m-[0] absolute top-[calc(50%_-_54px)] left-[56px] rounded-3xs bg-grayscale-white flex flex-col items-center justify-center p-2.5 gap-3.5 z-[1]">
          <b className="relative [text-decoration:underline] capitalize">
            march 2023
          </b>
          <div className="relative text-xl lowercase">
            <p className="m-0">interior inspiration</p>
            <p className="m-0">hidden to in the middle of....</p>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[4520px] left-[976px] rounded-3xs w-[400px] h-[400px] flex flex-row items-center justify-center gap-2.5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-lg text-black font-quicksand hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[400px] relative rounded-3xs h-[400px] object-cover z-[0]"
          alt=""
          src="/rectangle-92@2x.png"
        />
        <div className="!m-[0] absolute top-[calc(50%_-_54px)] left-[56px] rounded-3xs bg-grayscale-white flex flex-col items-center justify-center p-2.5 gap-3.5 z-[1]">
          <b className="relative [text-decoration:underline] capitalize">
            march 2023
          </b>
          <div className="relative text-xl lowercase">
            <p className="m-0">interior inspiration</p>
            <p className="m-0">hidden to in the middle of....</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[3636px] left-[433px] w-[574px] flex flex-col items-center justify-center text-16xl text-darkorange-100">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[52.5px] capitalize">
            Testimonial
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-21xl text-black font-quicksand">
          <b className="flex-1 relative tracking-[-1.2px] capitalize">
            We Care About Our Customers Experience Too
          </b>
        </div>
      </div>
      
      <div
        className="absolute top-[2466px] left-[69px] rounded-3xs bg-chocolate-100 w-[303px] h-[307px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-quicksand hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-30@2x.png"
        />
        <div className="relative capitalize font-semibold">
          chocolate lollipop
        </div>
      </div>
      <div
        className="absolute top-[2466px] left-[571px] rounded-3xs bg-chocolate-100 w-[303px] h-[307px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-quicksand hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-301@2x.png"
        />
        <div className="relative capitalize font-semibold">
          chocolate cookie
        </div>
      </div>
      <div
        className="absolute top-[2467px] left-[1073px] rounded-3xs bg-chocolate-100 w-[303px] h-[307px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-quicksand hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-302@2x.png"
        />
        <div className="relative capitalize font-semibold">muffin's</div>
      </div>
      <div
        className="absolute top-[2100px] left-[69px] rounded-3xs bg-chocolate-100 w-[303px] h-[307px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-quicksand hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-303@2x.png"
        />
        <div className="relative capitalize font-semibold">caramel donut</div>
      </div>
      <div
        className="absolute top-[2100px] left-[569px] rounded-3xs bg-chocolate-100 w-[303px] h-[307px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-quicksand hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-30@2x.png"
        />
        <div className="relative capitalize font-semibold">
          chocolate lollipop
        </div>
      </div>
      <div
        className="absolute top-[2100px] left-[1069px] rounded-3xs bg-chocolate-100 w-[303px] h-[307px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] font-quicksand hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover"
          alt=""
          src="/rectangle-304@2x.png"
        />
        <div className="relative capitalize font-semibold">
          whole wheat bread
        </div>
      </div>
      <div className="absolute top-[3896px] left-[calc(50%_-_668px)] w-[1332px] h-[372px] text-xl text-black font-roboto">
        <div className="absolute top-[0px] left-[0px] w-[182px] h-[372px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-200 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-0.5">
                  <div className="self-stretch relative capitalize font-semibold">
                    bruce hardy
                  </div>
                  <div className="w-[123px] relative text-lg capitalize hidden" />
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-8@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[230px] w-[183px] h-[372px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-200 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-0.5">
                  <div className="self-stretch relative capitalize font-semibold">
                    kae
                  </div>
                  <div className="w-[123px] relative text-lg capitalize hidden">
                    google inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-81@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[460px] w-[183px] h-[372px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-200 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-0.5">
                  <div className="self-stretch relative capitalize font-semibold">
                    alice
                  </div>
                  <div className="w-[123px] relative text-lg capitalize hidden">
                    apple inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-82@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[690px] w-[183px] h-[372px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-200 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-0.5">
                  <div className="self-stretch relative capitalize font-semibold">
                    hardy
                  </div>
                  <div className="w-[123px] relative text-lg capitalize hidden">
                    vivo inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-83@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[920px] w-[183px] h-[372px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-200 w-[183px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-0.5">
                  <div className="self-stretch relative capitalize font-semibold">
                    {" "}
                    hardy
                  </div>
                  <div className="self-stretch relative text-lg capitalize">
                    paypal inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-84@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[1150px] w-[183px] h-[372px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-grayscale-white overflow-hidden">
            <div className="absolute top-[70px] left-[0px] rounded-xl bg-gray-200 w-[183px] h-[302px] flex flex-col items-center justify-center p-[45px] box-border gap-[21px]">
              <div className="w-[123px] flex flex-col items-center justify-start gap-[17px]">
                <div className="self-stretch flex flex-col items-center justify-center gap-0.5">
                  <div className="self-stretch relative capitalize font-semibold">
                    sakura
                  </div>
                  <div className="self-stretch relative text-lg capitalize">
                    jutsu inc.
                  </div>
                </div>
                <div className="self-stretch relative text-base capitalize font-light">
                  When, while lovely valley teems with vapour around meand
                  meridian sun strikes
                </div>
              </div>
              <img className="w-[90px] relative h-3.5" alt="" src="/star.svg" />
            </div>
            <img
              className="absolute top-[0px] left-[49px] rounded-[50%] w-[85px] h-[85px] object-cover"
              alt=""
              src="/ellipse-85@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1088px] left-[492px] flex flex-col items-center justify-center text-16xl text-darkorange-100">
        <div className="w-[457px] relative leading-[52.5px] capitalize flex items-center justify-center">
          best seller
        </div>
        <b className="w-[457px] relative text-21xl tracking-[-1.2px] leading-[72px] capitalize flex font-quicksand text-black items-center justify-center">
          best seller this week!
        </b>
      </div>
     
     
     
      <div className="absolute top-[5825px] left-[472px] text-base tracking-[0.05em] capitalize font-light font-quicksand text-black">
        Copyright © 2024 Prabisha Consulting Limited. All Rights Reserved
      </div>
      <div className="absolute top-[28px] left-[123px] capitalize text-left inline-block w-[172px] h-[41px]">
        Harrow Bakery
      </div>
    </div>
  );
};

export default HOME;
