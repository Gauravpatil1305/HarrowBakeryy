import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const onCandyTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/a-b-o-u-t");
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push("/s-h-o-p");
  }, [router]);

  const onFrameContainerClick2 = useCallback(() => {
    router.push("/b-l-o-g");
  }, [router]);

  const onFrameContainerClick3 = useCallback(() => {
    router.push("/c-o-n-t-a-c-t-u-s");
  }, [router]);

  const onSearchContainerClick = useCallback(() => {
    router.push("/log-in");
  }, [router]);

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
    <div className="w-full relative bg-grayscale-white h-[1563px] overflow-hidden text-left text-sm text-grayscale-white font-pacifico">
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-darkorange-500 w-[1440px] h-[97px] flex flex-row items-center justify-center py-[25px] px-[66px] box-border gap-[104px] font-segoe-ui">
        <div className="flex-1 flex flex-row items-center justify-start gap-[210px]">
          <div className="w-[115px] flex flex-row items-center justify-start gap-2">
            <img
              className="w-9 relative rounded-2xl h-9 object-cover"
              alt=""
              src="/pdf-candy--png1@2x.png"
            />
            <div className="flex-1 h-11 flex flex-col items-start justify-center gap-px">
              <b className="w-[38px] relative capitalize hidden">phlox</b>
              <div
                className="w-[122px] relative text-lg capitalize font-pacifico hidden cursor-pointer"
                onClick={onCandyTextClick}
              >
                Harrow Bakery
              </div>
            </div>
          </div>
          <div className="w-[504px] flex flex-row items-center justify-center gap-2.5 text-lg font-quicksand">
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <img
                className="w-[5px] relative max-w-full overflow-hidden h-[27px]"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onCandyTextClick}
            >
              <b className="relative capitalize">home</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <b className="relative capitalize">about</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick1}
            >
              <b className="relative [text-decoration:underline] capitalize">
                shop
              </b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick2}
            >
              <b className="relative capitalize">blog</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick3}
            >
              <b className="relative capitalize">contact</b>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[22px] font-rubik">
          <div
            className="rounded-7xl bg-sandybrown flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer"
            onClick={onSearchContainerClick}
          >
            <b className="relative capitalize">log in</b>
            <img
              className="w-6 relative rounded-3xs h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/search.svg"
            />
          </div>
          <div className="rounded-7xl bg-darkorange-800 flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px]">
            <b className="relative capitalize">basket (0)</b>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/shopping-cart.svg"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute top-[724px] left-[69px] w-[1304px] h-[551px] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center text-16xl text-darkorange-300"
        data-animate-on-scroll
      >
        <div className="w-[1304px] rounded-3xs h-[560px] flex flex-col items-center justify-center py-6 px-5 box-border gap-[26px] bg-[url('/text1@3x.png')] bg-cover bg-no-repeat bg-[top]">
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
      <div className="absolute top-[1304.3px] left-[0px] w-[1440px] h-[258.7px] text-lg text-black">
        <div
          className="absolute top-[0px] left-[64px] w-[157px] h-[47.2px] cursor-pointer"
          onClick={onCandyTextClick}
        >
          <div className="absolute top-[0px] left-[0px] w-[157px] h-[47.2px]">
            <div className="absolute top-[0px] left-[36px] w-8 h-[21.6px]" />
            <div className="absolute top-[11.8px] left-[0px] w-[157px] h-[35.4px]">
              <div className="absolute top-[4px] left-[35px] capitalize inline-block w-[122px] h-[31.5px]">
                Harrow Bakery
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-9 h-[35.4px] object-cover"
                alt=""
                src="/pdf-candy--png2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[258.7px] text-base font-quicksand">
          <div className="absolute top-[37.4px] left-[261px] capitalize inline-block w-[125.3px] h-[102.3px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">{`universal cake `}</p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              candy
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              confectionery
            </p>
            <p className="m-0">gifts</p>
          </div>
          <b className="absolute top-[0px] left-[261px] text-xl capitalize inline-block w-[125.3px] h-[24.6px]">
            product
          </b>
          <div className="absolute top-[41.3px] left-[703px] capitalize inline-block w-[125.3px] h-[122px]">
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              condition
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">
              open a shop
            </p>
            <p className="[margin-block-start:0] [margin-block-end:8px]">{`licensing & terms`}</p>
            <p className="m-0">technology</p>
          </div>
          <b className="absolute top-[3.9px] left-[703px] text-xl capitalize inline-block w-[125.3px] h-[24.6px]">
            company
          </b>
          <div className="absolute top-[39.4px] left-[482px] capitalize inline-block w-[125.3px] h-[102.3px]">
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
          <b className="absolute top-[2px] left-[482px] text-xl capitalize inline-block w-[125.3px] h-[24.6px]">
            about
          </b>
          <div className="absolute top-[40.3px] left-[926px] capitalize inline-block w-[125.3px] h-[122px]">
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
          <b className="absolute top-[3px] left-[926px] text-xl capitalize inline-block w-[125.3px] h-[24.6px]">
            support
          </b>
          <img
            className="absolute top-[189.8px] left-[68px] max-h-full w-[1304.5px]"
            alt=""
            src="/vector-121.svg"
          />
          <div className="absolute top-[80.7px] left-[1147px] rounded-xl bg-darkorange-300 w-[152px] h-[41.3px] flex flex-row items-center justify-center py-2 px-6 box-border text-3xl text-grayscale-white font-rubik hover:bg-chocolate-800">
            <b className="relative capitalize">follow us</b>
          </div>
          <div className="absolute top-[189.8px] left-[0px] w-[1440px] h-[68.9px] flex flex-row items-center justify-center py-0 pl-8 pr-[88px] box-border gap-[34px] text-center">
            <div className="flex-1 flex flex-row items-center justify-center p-2.5 gap-2.5">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
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
      <i className="absolute top-[153.5px] left-[555.3px] text-29xl inline-block font-bold font-inria-sans text-darkorange-800 w-[240.1px] h-[52.2px] [transform:_rotate(0.3deg)] [transform-origin:0_0]">
        Welcome!
      </i>
      <img
        className="absolute top-[64px] left-[25px] w-[344.2px] h-[223.8px] object-contain"
        alt=""
        src="/group-3@2x.png"
      />
      <input
        className="border-miscellaneous-floating-tab-text-selected border-[1px] border-solid [outline:none] font-rubik text-xl bg-[transparent] absolute top-[271px] left-[486px] box-border w-[342px] h-[41px] overflow-hidden py-[9px] px-2.5 text-gainsboro-200"
        placeholder="Full Name"
        type="text"
      />
      <input
        className="border-miscellaneous-floating-tab-text-selected border-[1px] border-solid [outline:none] font-rubik text-xl bg-[transparent] absolute top-[341px] left-[486px] box-border w-[342px] h-[42px] overflow-hidden pt-[9px] px-2.5 pb-2.5 text-gainsboro-200"
        placeholder="Email"
        type="text"
      />
      <input
        className="border-miscellaneous-floating-tab-text-selected border-[1px] border-solid [outline:none] font-rubik text-xl bg-[transparent] absolute top-[412px] left-[486px] box-border w-[342px] h-[42px] overflow-hidden pt-[9px] px-2.5 pb-2.5 text-gainsboro-200"
        placeholder="phone"
        type="text"
      />
      <input
        className="border-miscellaneous-floating-tab-text-selected border-[1px] border-solid [outline:none] font-rubik text-xl bg-[transparent] absolute top-[483px] left-[486px] box-border w-[342px] h-[41px] overflow-hidden py-[9px] px-2.5 text-gainsboro-200"
        placeholder="Set passward"
        type="text"
      />
      <button className="cursor-pointer border-miscellaneous-floating-tab-text-selected border-[1px] border-solid p-0 bg-[transparent] absolute top-[581px] left-[572px] rounded-2xl box-border w-[149px] h-[42px] overflow-hidden hover:border-goldenrod hover:border-[1px] hover:border-solid hover:box-border hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <b className="absolute top-[9px] left-[36px] text-xl capitalize inline-block font-rubik text-black text-left w-[78px] h-[23px]">
          SUBMIT
        </b>
      </button>
      <div className="absolute top-[28px] left-[123px] text-5xl capitalize inline-block w-[172px] h-[41px]">
        Harrow Bakery
      </div>
    </div>
  );
};

export default Register;
