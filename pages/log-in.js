import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {
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

  const onLogoContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onRectangleClick = useCallback(() => {
    router.push("/admin-page");
  }, [router]);

  const onRegisterNowTextClick = useCallback(() => {
    router.push("/register");
  }, [router]);

  const onAboutTextClick = useCallback(() => {
    router.push("/a-b-o-u-t");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/b-l-o-g");
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push("/c-o-n-t-a-c-t-u-s");
  }, [router]);

  const onSearchContainerClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onBasketContainerClick = useCallback(() => {
    router.push("/cart");
  }, [router]);

  return (
    <div className="w-full relative bg-grayscale-white h-[1563px] overflow-hidden text-left text-lg text-grayscale-white font-quicksand">
      <div
        className="absolute top-[706px] left-[92px] flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] text-center text-16xl text-darkorange-600 font-pacifico"
        data-animate-on-scroll
      >
        <div className="w-[1304px] rounded-3xs h-[560px] flex flex-col items-center justify-center py-6 px-5 box-border gap-[26px] bg-[url('/text@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch relative leading-[52px] capitalize">
            get started
          </div>
          <b className="relative text-41xl leading-[66px] capitalize font-quicksand text-grayscale-white">
            <p className="m-0">{`Great Customers Are Using The `}</p>
            <p className="m-0">Confectionery Shop</p>
          </b>
          <div className="w-[442px] rounded-11xl bg-grayscale-white h-[57px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[64px] text-left text-base text-black font-rubik">
            <div className="flex-1 relative capitalize font-light">
              enter your email address
            </div>
            <div className="rounded-xl bg-darkorange-900 flex flex-row items-center justify-center py-[11.5px] px-6 text-sm text-grayscale-white">
              <b className="relative capitalize">subscribe</b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1300px] left-[0px] w-[1440px] h-[263px] text-black font-pacifico">
        <div
          className="absolute top-[0px] left-[64px] w-[157px] h-12 cursor-pointer"
          onClick={onLogoContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] w-[157px] h-12">
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
          <div className="absolute top-[82px] left-[1147px] rounded-xl bg-darkorange-600 w-[152px] h-[42px] flex flex-row items-center justify-center py-2 px-6 box-border text-3xl text-grayscale-white font-rubik">
            <b className="relative capitalize">follow us</b>
          </div>
          <div className="absolute top-[193px] left-[0px] w-[1440px] h-[70px] flex flex-row items-center justify-center py-0 pr-[88px] pl-8 box-border gap-[34px] text-center">
            <div className="flex-1 flex flex-row items-center justify-center p-2.5 gap-[10px]">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                alt=""
                src="/copyright.svg"
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
      <div className="absolute top-[238px] left-[832px] w-[255px] h-[273px] flex flex-col items-center justify-center">
        <img
          className="w-44 relative h-[186.4px]"
          alt=""
          src="/keyillustration.svg"
        />
      </div>
      <div className="absolute top-[299px] left-[427px] box-border w-80 h-[42px] overflow-hidden text-xl text-gainsboro-200 font-rubik border-[1px] border-solid border-miscellaneous-floating-tab-text-selected">
        <div className="absolute top-[9px] left-[10px] capitalize inline-block w-[300px] h-[23px]">
          Username
        </div>
      </div>
      <div className="absolute top-[354px] left-[427px] box-border w-80 h-[42px] overflow-hidden text-xl text-gainsboro-200 font-rubik border-[1px] border-solid border-miscellaneous-floating-tab-text-selected">
        <div className="absolute top-[9px] left-[10px] capitalize inline-block w-[300px] h-[23px]">
          Passward
        </div>
      </div>
      <i className="absolute top-[155px] left-[555.3px] text-29xl inline-block font-bold font-inria-sans text-darkorange-300 w-[240.1px] h-[53.1px] [transform:_rotate(0.3deg)] [transform-origin:0_0]">
        Welcome!
      </i>
      <img
        className="absolute top-[64px] left-[25px] w-[344.2px] h-[227.5px] object-contain"
        alt=""
        src="/group-31@2x.png"
      />
      <div
        className="absolute top-[632px] left-[1204px] rounded-[17px] bg-mediumpurple w-[170px] h-[47px] cursor-pointer"
        onClick={onRectangleClick}
      />
      <b
        className="absolute top-[643px] left-[1227px] text-xl capitalize inline-block text-black w-[131px] h-9 cursor-pointer"
        onClick={onRectangleClick}
      >
        Admin Log in
      </b>
      <div className="absolute top-[403px] left-[437px] text-sm capitalize font-rubik text-blueviolet inline-block w-[119px] h-4">
        Forgot password
      </div>
      <div
        className="absolute top-[475px] left-[437px] text-sm capitalize font-rubik text-blueviolet inline-block w-[95px] h-4 cursor-pointer"
        onClick={onRegisterNowTextClick}
      >
        register now
      </div>
      <div className="absolute top-[442px] left-[427px] bg-colors-indigo w-80 h-[26px] overflow-hidden text-sm font-rubik">
        <div className="absolute top-[6px] left-[138px] capitalize inline-block w-[43px] h-3.5">
          Log in
        </div>
      </div>
      <div className="absolute top-[-1px] left-[calc(50%_-_720px)] bg-darkorange-1000 w-[1440px] h-[93px] flex flex-row items-center justify-center py-[25px] px-[66px] box-border gap-[104px] text-sm font-segoe-ui">
        <div className="w-[498px] hidden flex-row items-center justify-start gap-[10px]">
          <div className="w-[115px] rounded-3xs h-11 flex flex-row items-baseline justify-start gap-[247px]">
            <img
              className="w-9 relative rounded-2xl h-9 object-cover hidden"
              alt=""
              src="/pdf-candy--png1@2x.png"
            />
            <div className="flex-1 h-11 flex flex-col items-start justify-center gap-[1px]">
              <b className="w-[71px] relative capitalize hidden">phlox</b>
              <div className="w-[162px] relative text-5xl capitalize font-pacifico hidden">
                Harrow Bakery
              </div>
            </div>
          </div>
          <div className="w-[504px] flex flex-row items-center justify-center gap-[10px] text-lg font-quicksand">
            <div className="flex-1 h-[47px] flex flex-row items-center justify-center p-2.5 box-border">
              <img
                className="w-0 relative h-[27px] hidden"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b className="relative [text-decoration:underline] capitalize">
                home
              </b>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b
                className="relative capitalize cursor-pointer"
                onClick={onAboutTextClick}
              >
                about
              </b>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b className="relative capitalize">shop</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <b className="relative capitalize">blog</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick1}
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
            <b className="relative capitalize">Login</b>
            <img
              className="w-6 relative rounded-3xs h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/search.svg"
            />
          </div>
          <div
            className="rounded-7xl bg-darkorange-300 flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer"
            onClick={onBasketContainerClick}
          >
            <b className="relative capitalize">basket (0)</b>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/shopping-cart.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[3px] left-[14px] text-13xl capitalize font-pacifico inline-block w-[253px] h-[58px]">
        Harrow bakery
      </div>
      <b className="absolute top-[34px] left-[417px] capitalize inline-block w-16 h-[21px]">
        Home
      </b>
      <b className="absolute top-[34px] left-[511px] capitalize inline-block w-16 h-[22px]">
        About
      </b>
      <b className="absolute top-[34px] left-[614px] capitalize inline-block w-[49px] h-[21px]">
        Shop
      </b>
      <b className="absolute top-[32px] left-[702px] capitalize inline-block w-[46px] h-5">
        Blog
      </b>
      <b className="absolute top-[34px] left-[778px] capitalize inline-block w-[78px] h-[25px]">
        Contact
      </b>
      <div className="absolute top-[-1px] left-[calc(50%_-_720px)] bg-darkorange-1000 w-[1440px] h-[93px] flex flex-row items-center justify-center py-[25px] px-[66px] box-border gap-[104px] text-sm font-segoe-ui">
        <div className="w-[498px] hidden flex-row items-center justify-start gap-[10px]">
          <div className="w-[115px] rounded-3xs h-11 flex flex-row items-baseline justify-start gap-[247px]">
            <img
              className="w-9 relative rounded-2xl h-9 object-cover hidden"
              alt=""
              src="/pdf-candy--png1@2x.png"
            />
            <div className="flex-1 h-11 flex flex-col items-start justify-center gap-[1px]">
              <b className="w-[71px] relative capitalize hidden">phlox</b>
              <div className="w-[162px] relative text-5xl capitalize font-pacifico hidden">
                Harrow Bakery
              </div>
            </div>
          </div>
          <div className="w-[504px] flex flex-row items-center justify-center gap-[10px] text-lg font-quicksand">
            <div className="flex-1 h-[47px] flex flex-row items-center justify-center p-2.5 box-border">
              <img
                className="w-0 relative h-[27px] hidden"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b className="relative [text-decoration:underline] capitalize">
                home
              </b>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b
                className="relative capitalize cursor-pointer"
                onClick={onAboutTextClick}
              >
                about
              </b>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center p-2.5">
              <b className="relative capitalize">shop</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <b className="relative capitalize">blog</b>
            </div>
            <div
              className="flex-1 flex flex-row items-center justify-center p-2.5 cursor-pointer"
              onClick={onFrameContainerClick1}
            >
              <b className="relative capitalize">contact</b>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[22px] font-rubik">
          <div
            className="rounded-7xl bg-sandybrown hidden flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer"
            onClick={onSearchContainerClick}
          >
            <b className="relative capitalize">Login</b>
            <img
              className="w-6 relative rounded-3xs h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/search.svg"
            />
          </div>
          <div
            className="rounded-7xl bg-darkorange-300 flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer"
            onClick={onBasketContainerClick}
          >
            <b className="relative capitalize">basket (0)</b>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/shopping-cart.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[3px] left-[14px] text-13xl capitalize font-pacifico inline-block w-[253px] h-[58px]">
        Harrow bakery
      </div>
      <b
        className="absolute top-[34px] left-[417px] capitalize inline-block w-16 h-[21px] cursor-pointer"
        onClick={onLogoContainerClick}
      >
        Home
      </b>
      <b
        className="absolute top-[34px] left-[511px] capitalize inline-block w-16 h-[22px] cursor-pointer"
        onClick={onAboutTextClick}
      >
        About
      </b>
      <b className="absolute top-[34px] left-[614px] capitalize inline-block w-[49px] h-[21px]">
        Shop
      </b>
      <b
        className="absolute top-[32px] left-[702px] capitalize inline-block w-[46px] h-5 cursor-pointer"
        onClick={onFrameContainerClick}
      >
        Blog
      </b>
      <b
        className="absolute top-[34px] left-[778px] capitalize inline-block w-[78px] h-[25px] cursor-pointer"
        onClick={onFrameContainerClick1}
      >
        Contact
      </b>
    </div>
  );
};

export default Login;
