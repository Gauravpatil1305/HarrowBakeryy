import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../component/Navbar";

const CONTACTUS = () => {
  const router = useRouter();

  const onCandyTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  

  const onRectangleImageClick = useCallback(() => {
    window.open(
      "https://www.google.com/maps/place/Shegaon,+Maharashtra+444203/@20.7878056,76.6685518,14z/data=!3m1!4b1!4m6!3m5!1s0x3bd745a444fa9447:0x2791161465d1bb15!8m2!3d20.7929874!4d76.6910458!16zL20vMDN2cTZ4?entry=ttu"
    );
  }, []);

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

  const onMeetusContainerClick = useCallback(() => {
    window.location.href = "mailto:info@prabisha.com?subject=Demo";
  }, []);

  return (
    <div className="w-full relative bg-grayscale-white h-[2130px] overflow-hidden text-left text-lg text-black font-pacifico">
     <Navbar />
      <img
        className="absolute top-[187px] left-[0px] w-[1410px] h-[1907px]"
        alt=""
        src="/bg2.svg"
      />
      <div className="absolute top-[161px] left-[407px] w-[574px] h-[197px] flex flex-col items-center justify-center text-center text-16xl text-darkorange-100">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[52.5px] capitalize">
            contact us
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-21xl text-black font-quicksand">
          <b className="flex-1 relative tracking-[-1.2px] leading-[72px] capitalize">
            <p className="m-0">don’t google</p>
            <p className="m-0">design question’s</p>
          </b>
        </div>
      </div>
      <div className="absolute top-[418px] left-[56px] text-[13px] leading-[52.5px] capitalize font-medium font-quicksand flex items-center w-[436px] h-[71px]">
        Your email address will not be published. Required fields are marked*
      </div>
      <input
        className="[border:none] [outline:none] font-light font-rubik text-base bg-darkorange-1200 absolute top-[489px] left-[64px] rounded-11xl w-[296px] h-[57px] flex flex-row items-center justify-center py-[19px] px-5 box-border text-grayscale-white"
        placeholder="your name"
        type="text"
      />
      <input
        className="[border:none] [outline:none] font-light font-rubik text-base bg-darkorange-1200 absolute top-[489px] left-[376px] rounded-11xl w-[280px] h-[57px] flex flex-row items-center justify-center py-[19px] px-5 box-border text-grayscale-white"
        placeholder="your email"
        type="text"
      />
      <input
        className="[border:none] [outline:none] font-light font-rubik text-base bg-darkorange-1200 absolute top-[576px] left-[64px] rounded-xl w-[592px] h-[350px] flex flex-row items-start justify-start py-[30px] px-[22px] box-border text-grayscale-white"
        placeholder="Questions*"
        type="text"
      />
      <img
        className="absolute top-[421px] left-[729px] rounded-xl w-[643px] h-[563px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] cursor-pointer"
        alt=""
        src="/rectangle-14@2x.png"
        onClick={onRectangleImageClick}
        data-animate-on-scroll
      />
      <button className="cursor-pointer [border:none] py-[11.5px] px-6 bg-darkorange-400 absolute top-[946px] left-[501px] rounded-xl w-40 flex flex-row items-center justify-center box-border hover:bg-peru-700">
        <b className="relative text-sm capitalize font-rubik text-grayscale-white text-left">
          send a message
        </b>
      </button>
      <div className="absolute top-[1044px] left-[57px] w-[310px] flex flex-row items-start justify-start font-quicksand">
        <div className="w-[311px] rounded-xl bg-grayscale-white flex flex-row items-center justify-center p-6 box-border gap-[26px]">
          <img
            className="w-[54px] relative h-[54px]"
            alt=""
            src="/group-1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
            <div className="self-stretch relative capitalize font-semibold">
              meet us in office :
            </div>
            <div className="self-stretch relative text-mini capitalize">
              Patricia C. 4401 Waldeck Street Harrow
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[1044px] left-[559px] w-[311px] flex flex-row items-start justify-start cursor-pointer font-quicksand"
        onClick={onMeetusContainerClick}
      >
        <div className="w-[311px] rounded-xl bg-grayscale-white flex flex-row items-center justify-center p-6 box-border gap-[26px]">
          <img
            className="w-[54px] relative h-[54px]"
            alt=""
            src="/group-1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
            <div className="self-stretch relative capitalize font-semibold">
              our email address:
            </div>
            <div className="self-stretch relative text-mini capitalize">{`info@prabisha.com `}</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1044px] left-[1062px] w-[310px] flex flex-row items-start justify-start font-quicksand">
        <div className="w-[311px] rounded-xl bg-grayscale-white flex flex-row items-center justify-center p-6 box-border gap-[26px]">
          <img
            className="w-[54px] relative h-[54px]"
            alt=""
            src="/group-1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
            <div className="self-stretch relative capitalize font-semibold">
              meet us in office :
            </div>
            <div className="self-stretch relative text-mini capitalize">
              Patricia C. 444203
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[1244px] left-[70px] w-[1302px] h-[560px] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center text-16xl text-darkorange-300"
        data-animate-on-scroll
      >
        <div className="w-[1304px] rounded-3xs h-[560px] flex flex-col items-center justify-center py-6 px-5 box-border gap-[26px] bg-[url('/text4@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch relative leading-[52px] capitalize">
            get started
          </div>
          <b className="relative text-41xl leading-[66px] capitalize font-quicksand text-grayscale-white">
            <p className="m-0">{`Great Customers Are Using The `}</p>
            <p className="m-0">Confectionery Shop</p>
          </b>
          <div className="w-[442px] rounded-11xl bg-grayscale-white h-[57px] flex flex-row items-center justify-center py-0 px-5 box-border gap-16 text-left text-base text-black font-rubik">
            <div className="flex-1 relative capitalize font-light">
              enter your email address
            </div>
            <div className="rounded-xl bg-darkorange-400 flex flex-row items-center justify-center py-[11.5px] px-6 text-sm text-grayscale-white">
              <b className="relative capitalize">subscribe</b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1866px] left-[2px] w-[1438px] h-[264px]">
        <div
          className="absolute top-[12px] left-[63.9px] w-[162.8px] h-[36.1px] cursor-pointer"
          onClick={onCandyTextClick}
        >
          <div className="absolute top-[0px] left-[0px] w-[162.8px] h-[36.1px]">
            <div className="absolute top-[0px] left-[0px] w-[162.8px] h-[36.1px]">
              <div className="absolute top-[4px] left-[35px] capitalize inline-block w-[127.8px] h-8">
                Harrow Bakery
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-9 h-[36.1px] object-cover"
                alt=""
                src="/pdf-candy--png5@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1438px] h-[264px] text-base font-quicksand">
          <div className="absolute top-[38.1px] left-[260.6px] capitalize inline-block w-[125.1px] h-[104.4px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">{`universal cake `}</p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              candy
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              confectionery
            </p>
            <p className="m-0">gifts</p>
          </div>
          <b className="absolute top-[0px] left-[260.6px] text-xl capitalize inline-block w-[125.1px] h-[25.1px]">
            product
          </b>
          <div className="absolute top-[42.2px] left-[702px] capitalize inline-block w-[125.1px] h-[124.5px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              condition
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              open a shop
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">{`licensing & terms`}</p>
            <p className="m-0">technology</p>
          </div>
          <b className="absolute top-[4px] left-[702px] text-xl capitalize inline-block w-[125.1px] h-[25.1px]">
            company
          </b>
          <div className="absolute top-[40.2px] left-[481.3px] capitalize inline-block w-[125.1px] h-[104.4px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              our mission
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              our story
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              our culture
            </p>
            <p className="m-0">team</p>
          </div>
          <b className="absolute top-[2px] left-[481.3px] text-xl capitalize inline-block w-[125.1px] h-[25.1px]">
            about
          </b>
          <div className="absolute top-[41.2px] left-[924.7px] capitalize inline-block w-[125.1px] h-[124.5px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              getting started
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              help center
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              suggest a feature
            </p>
            <p className="m-0">report a bug</p>
          </div>
          <b className="absolute top-[3px] left-[924.7px] text-xl capitalize inline-block w-[125.1px] h-[25.1px]">
            support
          </b>
          <img
            className="absolute top-[193.7px] left-[67.9px] max-h-full w-[1302.7px]"
            alt=""
            src="/vector-123.svg"
          />
          <div className="absolute top-[82.3px] left-[1145.4px] rounded-xl bg-darkorange-300 w-[151.8px] h-[42.2px] flex flex-row items-center justify-center py-2 px-6 box-border text-3xl text-grayscale-white font-rubik hover:bg-chocolate-1000">
            <b className="relative capitalize">follow us</b>
          </div>
          <div className="absolute top-[193.7px] left-[0px] w-[1438px] h-[70.3px] flex flex-row items-center justify-center py-0 pl-8 pr-[88px] box-border gap-[34px] text-center">
            <div className="flex-1 flex flex-row items-center justify-center p-2.5 gap-2.5">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/copyright2.svg"
              />
              <div className="relative tracking-[0.05em] capitalize font-light">
                Copyright © 2024 Prabisha Consulting Limited. All Rights
                Reserved
              </div>
            </div>
            <div className="hidden flex-row items-center justify-center gap-[18px]">
              <img
                className="w-[18px] relative h-[18px]"
                alt=""
                src="/vector.svg"
              />
              <img
                className="w-[13.5px] relative h-[13.5px]"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="w-[13.5px] relative h-[13.5px]"
                alt=""
                src="/vector2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[28px] left-[123px] text-5xl capitalize text-grayscale-white inline-block w-[172px] h-[41px]">
        Harrow Bakery
      </div>
    </div>
  );
};

export default CONTACTUS;
