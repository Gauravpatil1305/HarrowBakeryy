import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";


const Iteminfo = () => {
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

  const onBasketContainerClick = useCallback(() => {
    router.push("/cart");
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
    <div className="w-full relative bg-grayscale-white h-[2246px] overflow-hidden text-center text-5xl text-grayscale-white font-quicksand">
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-darkorange-500 w-[1440px] h-[97px] flex flex-row items-center justify-center py-[25px] px-[66px] box-border gap-[104px] text-left text-sm font-segoe-ui">
        <div className="w-[498px] h-[47px] flex flex-row items-center justify-start gap-[210px]">
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
          <div className="w-[504px] h-[47px] flex flex-row items-center justify-center gap-2.5 text-lg font-quicksand">
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
        <div className="flex-1 h-11 flex flex-row items-center justify-end gap-[22px] font-rubik">
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
          <div
            className="rounded-7xl bg-darkorange-800 flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer"
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
      <img
        className="absolute top-[177px] left-[64px] rounded-3xs w-[550px] h-[550px] object-cover"
        alt=""
        src="/rectangle-42@2x.png"
      />
      <div className="absolute top-[237px] left-[668px] flex flex-col items-center justify-center gap-4 text-left text-29xl text-black">
        <div className="w-[407px] flex flex-col items-start justify-start gap-4">
          <b className="relative capitalize">Choclate donut</b>
          <b className="relative capitalize text-darkorange-1300">
            <span>₹120.00</span>
            <span className="text-black">{` `}</span>
          </b>
          <img
            className="w-[150px] relative h-[30px]"
            alt=""
            src="/star1.svg"
          />
          <div className="flex flex-row items-center justify-center gap-16 text-3xl text-grayscale-white">
            <div className="rounded-19xl bg-darkorange-1300 flex flex-row items-center justify-center py-3.5 px-8">
              <b className="relative capitalize">buy now</b>
            </div>
            <div className="rounded-19xl bg-gray-300 border-black border-[1px] border-solid flex flex-row items-center justify-center py-3.5 px-8 gap-5 text-darkorange-300">
              <div className="w-5 relative rounded-[11px] h-5 overflow-hidden shrink-0">
                <div className="absolute top-[-8px] left-[-8px] bg-darkorange-300 flex flex-row items-center justify-center p-2.5">
                  <img className="w-4 relative h-4" alt="" src="/vector4.svg" />
                </div>
              </div>
              <b className="relative capitalize [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                1
              </b>
              <div className="rounded-7xl bg-darkorange-300 flex flex-row items-start justify-start p-2.5">
                <img className="w-4 relative h-4" alt="" src="/vector5.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-19xl bg-darkorange-1300 flex flex-row items-center justify-center py-3.5 px-8 gap-2.5 text-3xl text-grayscale-white">
          <b className="relative capitalize">add to cart</b>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/shoppingcartoutline.svg"
          />
        </div>
      </div>
      <b className="absolute top-[816px] left-[602px] text-21xl tracking-[-1.2px] leading-[72px] capitalize flex text-black items-center justify-center w-[375px]">
        related products
      </b>
      <div
        className="absolute top-[991px] left-[71px] rounded-3xs bg-chocolate-100 w-[303px] h-[353px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-30@2x.png"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/shopping-cart2.svg"
        />
        <div className="relative capitalize font-semibold z-[2]">
          chocolate lollipop
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[991px] left-[1063px] rounded-3xs bg-chocolate-100 w-[303px] h-[353px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-301@2x.png"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/shopping-cart2.svg"
        />
        <div className="relative capitalize font-semibold z-[2]">
          chocolate cookie
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[991px] left-[737px] rounded-3xs bg-chocolate-100 w-[303px] h-[353px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-304@2x.png"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/shopping-cart2.svg"
        />
        <div className="relative capitalize font-semibold z-[2]">
          whole wheat bread
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[992px] left-[404px] rounded-3xs bg-chocolate-100 w-[303px] h-[353px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        data-animate-on-scroll
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-305@2x.png"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/shopping-cart2.svg"
        />
        <div className="relative capitalize font-semibold z-[2]">muffin's</div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div className="absolute top-[1362px] left-[69px] w-[1304px] h-[560px] flex flex-col items-start justify-start text-16xl text-darkorange-300 font-pacifico">
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
      <div className="absolute top-[1983px] left-[0px] w-[1440px] h-[263px] text-left text-lg text-black font-pacifico">
        <div
          className="absolute top-[0px] left-[64px] w-[157px] h-12 cursor-pointer"
          onClick={onCandyTextClick}
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
          <div className="absolute top-[82px] left-[1147px] rounded-xl bg-darkorange-300 w-[152px] h-[42px] flex flex-row items-center justify-center py-2 px-6 box-border text-3xl text-grayscale-white font-rubik hover:bg-chocolate-900">
            <b className="relative capitalize">follow us</b>
          </div>
          <div className="absolute top-[193px] left-[0px] w-[1440px] h-[70px] flex flex-row items-center justify-center py-0 pl-8 pr-[88px] box-border gap-[34px] text-center">
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
      <div className="absolute top-[28px] left-[123px] capitalize font-pacifico text-left inline-block w-[172px] h-[41px]">
        Harrow Bakery
      </div>
    </div>
  );
};

export default Iteminfo;
