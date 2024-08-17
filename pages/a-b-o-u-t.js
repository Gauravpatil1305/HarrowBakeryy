import {useEffect } from "react";
import Navbar from "../component/Navbar";

const ABOUT = () => {
 

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
    <div className="w-full relative bg-grayscale-white h-[2602px] overflow-hidden text-left text-17xl text-black font-quicksand">
     <Navbar/>
      <div className="absolute top-[165px] left-[470px] w-[482px] flex flex-col items-center justify-center text-center text-16xl text-darkorange-100 font-pacifico">
        <div className="w-[247px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[52.5px] capitalize">
            about us
          </div>
        </div>
        <div className="w-[247px] flex flex-row items-center justify-center text-21xl text-black font-quicksand">
          <b className="flex-1 relative tracking-[-1.2px] leading-[72px] capitalize">
            our story
          </b>
        </div>
      </div>
      <img
        className="absolute top-[387px] left-[724px] max-w-full overflow-hidden h-[1259px]"
        alt=""
        src="/vector-6.svg"
      />
      <img
        className="absolute top-[383px] left-[68px] rounded-xl w-[625px] h-[340px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        alt=""
        src="/rectangle-11@2x.png"
        data-animate-on-scroll
      />
      <img
        className="absolute top-[1282px] left-[64px] rounded-xl w-[625px] h-[340px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        alt=""
        src="/rectangle-11@2x.png"
        data-animate-on-scroll
      />
      <img
        className="absolute top-[773px] left-[752px] rounded-xl w-[619px] h-[340px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        alt=""
        src="/rectangle-12@2x.png"
        data-animate-on-scroll
      />
      <div className="absolute top-[446px] left-[716px] rounded-[50%] bg-darkorange-600 w-[15px] h-[15px]" />
      <div className="absolute top-[1346px] left-[717px] rounded-[50%] bg-darkorange-600 w-[15px] h-[15px]" />
      <div className="absolute top-[807px] left-[716px] rounded-[50%] bg-darkorange-600 w-[15px] h-[15px]" />
      <img
        className="absolute top-[455px] left-[752px] max-h-full w-[52px]"
        alt=""
        src="/vector-7.svg"
      />
      <img
        className="absolute top-[1354px] left-[748px] max-h-full w-[52px]"
        alt=""
        src="/vector-7.svg"
      />
      <img
        className="absolute top-[815px] left-[651px] max-h-full w-[52px]"
        alt=""
        src="/vector-7.svg"
      />
      <b className="absolute top-[432px] left-[835px] capitalize">1978</b>
      <b className="absolute top-[1331px] left-[831px] capitalize">2024</b>
      <b className="absolute top-[792px] left-[563px] capitalize">1996</b>
      <div className="absolute top-[356px] left-[956px] w-[341px] flex flex-col items-start justify-start gap-5 text-21xl">
        <b className="self-stretch relative capitalize">
          <p className="m-0">Harrow Bakery.</p>
          <p className="m-0">Your Local baker</p>
        </b>
        <div className="self-stretch relative text-xl capitalize">
          <p className="m-0">Harrow Bakery. Your Local Baker.</p>
          <p className="m-0">The quick, brown fox jumps over a lazy dog.</p>
          <p className="m-0 whitespace-pre-wrap">{`  `}</p>
        </div>
      </div>
      <div className="absolute top-[1255px] left-[952px] w-[400px] h-[245px] flex flex-col items-start justify-start gap-5 text-21xl">
        <b className="self-stretch relative capitalize">
          <p className="m-0">Harrow Bakery.</p>
          <p className="m-0">Your Local baker</p>
        </b>
        <div className="self-stretch relative text-xl capitalize">
          At Harrow Bakery, we believe in the art of precision. Each pastry is
          crafted with exact measurements and attention to detail, ensuring a
          perfect balance of flavors and textures.
        </div>
      </div>
      <div className="absolute top-[893px] left-[78px] w-[485px] h-[245px] flex flex-col items-start justify-start gap-5 text-21xl">
        <b className="self-stretch relative capitalize">
          Pastry Is Different from Cooking.
        </b>
        <div className="self-stretch relative text-xl capitalize">
          <p className="m-0">
            Pastry requires precise measurements and exact timing. Ingredients
            must be weighed accurately, and slight variations can lead to
            significant changes in the final product.
          </p>
          <p className="m-0">{` `}</p>
        </div>
      </div>
      <div
        className="absolute top-[1709px] left-[68px] w-[1304px] h-[560px] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center text-16xl text-darkorange-300 font-pacifico"
        data-animate-on-scroll
      >
        <div className="w-[1304px] rounded-3xs h-[560px] flex flex-col items-center justify-center py-6 px-5 box-border gap-[26px] bg-[url('/text6@3x.png')] bg-cover bg-no-repeat bg-[top]">
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
      <div className="absolute top-[2338px] left-[0px] w-[1440px] h-[263px] text-lg font-pacifico">
        <div
          className="absolute top-[0px] left-[64px] w-[157px] h-12 cursor-pointer"
        >
          <div
            className="absolute top-[0px] left-[0px] w-[157px] h-12 cursor-pointer"
          >
            <div className="absolute top-[0px] left-[36px] w-8 h-[22px]" />
            <div className="absolute top-[12px] left-[0px] w-[157px] h-9">
              <div className="absolute top-[4px] left-[35px] capitalize">
                Harrow Bakery
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-9 h-9 object-cover"
                alt=""
                src="/pdf-candy--png@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[263px] text-base font-quicksand">
          <div className="absolute top-[38px] left-[261px] capitalize inline-block w-[125.3px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">{`universal cake `}</p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              candy
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              confectionery
            </p>
            <p className="m-0">gifts</p>
          </div>
          <b className="absolute top-[0px] left-[261px] text-xl capitalize inline-block w-[125.3px]">
            product
          </b>
          <div className="absolute top-[42px] left-[703px] capitalize inline-block w-[125.3px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              condition
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              open a shop
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">{`licensing & terms`}</p>
            <p className="m-0">technology</p>
          </div>
          <b className="absolute top-[4px] left-[703px] text-xl capitalize inline-block w-[125.3px]">
            company
          </b>
          <div className="absolute top-[40px] left-[482px] capitalize inline-block w-[125.3px]">
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
          <b className="absolute top-[2px] left-[482px] text-xl capitalize inline-block w-[125.3px]">
            about
          </b>
          <div className="absolute top-[41px] left-[926px] capitalize inline-block w-[125.3px]">
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
          <b className="absolute top-[3px] left-[926px] text-xl capitalize inline-block w-[125.3px]">
            support
          </b>
          <img
            className="absolute top-[193px] left-[68px] max-h-full w-[1304.5px]"
            alt=""
            src="/vector-12.svg"
          />
          <div className="absolute top-[82px] left-[1147px] rounded-xl bg-darkorange-300 w-[152px] h-[42px] flex flex-row items-center justify-center py-2 px-6 box-border text-3xl text-grayscale-white font-rubik hover:bg-peru-600">
            <b className="relative capitalize">follow us</b>
          </div>
          <div className="absolute top-[193px] left-[0px] w-[1440px] h-[70px] flex flex-row items-center justify-center py-0 pl-8 pr-[88px] box-border gap-[34px] text-center">
            <div className="flex-1 flex flex-row items-center justify-center p-2.5 gap-2.5">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/copyright1.svg"
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
      <div className="absolute top-[28px] left-[123px] text-5xl capitalize font-pacifico text-grayscale-white inline-block w-[172px] h-[41px]">
        Harrow Bakery
      </div>
    </div>
  );
};

export default ABOUT;
