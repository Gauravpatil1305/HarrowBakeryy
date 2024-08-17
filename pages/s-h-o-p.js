import { useCallback } from "react";
import { useRouter } from "next/router";
import Navbar from "../component/Navbar";

const SHOP = () => {
  const router = useRouter();

  const onCandyTextClick = useCallback(() => {
    router.push("/");
  }, [router]);


  const onRadiobuttonitemContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='categoryText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onItemDContainerClick = useCallback(() => {
    router.push("/iteminfo");
  }, [router]);

  return (
    <div className="w-full relative bg-grayscale-white h-[2439px] overflow-hidden text-center text-5xl text-grayscale-white font-quicksand">
    <Navbar/>
      <b
        className="absolute top-[131px] left-[27px] text-17xl tracking-[-1.2px] leading-[72px] capitalize text-black"
        data-scroll-to="categoryText"
      >
        category
      </b>
      <div
        className="absolute top-[226px] left-[30px] bg-grayscale-white w-[212px] h-12 flex flex-row items-center justify-center gap-4 cursor-pointer text-left text-base text-black hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onRadiobuttonitemContainerClick}
      >
        <div className="w-12 h-12 flex flex-row items-center justify-center">
          <div className="rounded-81xl flex flex-row items-center justify-center p-[11px] relative">
            <div className="w-[18px] relative rounded-sm bg-lightgray h-[18px] z-[0]" />
            <img
              className="w-6 absolute !m-[0] top-[8px] left-[8px] h-6 overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/iconscheck-small.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="w-10 relative rounded-xl bg-gainsboro-200 h-10 hidden" />
          <div className="w-[148px] flex flex-row items-center justify-center gap-[53px]">
            <div className="flex-1 relative tracking-[-1.2px] capitalize font-medium">
              cookie
            </div>
            <div className="relative tracking-[-1.2px] capitalize font-medium text-center">
              (2)
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[508px] left-[30px] bg-grayscale-white w-[212px] h-12 flex flex-row items-center justify-center gap-4 text-left text-base text-black hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <div className="w-12 h-12 flex flex-row items-center justify-center">
          <div className="rounded-81xl flex flex-row items-center justify-center p-[11px] relative">
            <div className="w-[18px] relative rounded-sm bg-lightgray h-[18px] z-[0]" />
            <img
              className="w-6 absolute !m-[0] top-[8px] left-[8px] h-6 overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/iconscheck-small.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="w-10 relative rounded-xl bg-gainsboro-200 h-10 hidden" />
          <div className="w-[148px] flex flex-row items-center justify-center gap-[53px]">
            <div className="flex-1 relative tracking-[-1.2px] capitalize font-medium">
              cake
            </div>
            <div className="relative tracking-[-1.2px] capitalize font-medium text-center">
              (5)
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[368px] left-[30px] bg-grayscale-white w-[212px] h-12 flex flex-row items-center justify-center gap-4 text-left text-base text-black hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <div className="w-12 h-12 flex flex-row items-center justify-center">
          <div className="rounded-81xl flex flex-row items-center justify-center p-[11px] relative">
            <div className="w-[18px] relative rounded-sm bg-lightgray h-[18px] z-[0]" />
            <img
              className="w-6 absolute !m-[0] top-[8px] left-[8px] h-6 overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/iconscheck-small.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="w-10 relative rounded-xl bg-gainsboro-200 h-10 hidden" />
          <div className="w-[148px] flex flex-row items-center justify-center gap-[53px]">
            <div className="flex-1 relative tracking-[-1.2px] capitalize font-medium">
              cup cake
            </div>
            <div className="relative tracking-[-1.2px] capitalize font-medium text-center">
              (3)
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[297px] left-[30px] bg-grayscale-white w-[212px] h-12 flex flex-row items-center justify-center gap-4 text-left text-base text-black hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <div className="w-12 h-12 flex flex-row items-center justify-center">
          <div className="rounded-81xl flex flex-row items-center justify-center p-[11px] relative">
            <div className="w-[18px] relative rounded-sm bg-lightgray h-[18px] z-[0]" />
            <img
              className="w-6 absolute !m-[0] top-[8px] left-[8px] h-6 overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/iconscheck-small.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="w-10 relative rounded-xl bg-gainsboro-200 h-10 hidden" />
          <div className="w-[148px] flex flex-row items-center justify-center gap-[53px]">
            <div className="flex-1 relative tracking-[-1.2px] capitalize font-medium">
              lollipop
            </div>
            <div className="relative tracking-[-1.2px] capitalize font-medium text-center">
              (4)
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[569px] left-[0px] bg-grayscale-white w-[106px] flex flex-row items-center justify-center">
        <div className="w-12 h-12 flex flex-row items-center justify-center">
          <div className="rounded-81xl flex flex-row items-center justify-center p-[11px] relative">
            <div className="w-[18px] relative rounded-sm bg-lightgray h-[18px] z-[0]" />
            <img
              className="w-6 absolute !m-[0] top-[8px] left-[8px] h-6 overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/iconscheck-small.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[579px] left-[96px] w-[148px] h-5 flex flex-row items-center justify-start gap-3 text-left text-base text-black hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <div className="w-10 relative rounded-xl bg-gainsboro-200 h-10 hidden" />
        <div className="w-[148px] flex flex-row items-center justify-center gap-[53px]">
          <div className="flex-1 relative tracking-[-1.2px] capitalize font-medium">
            donut
          </div>
          <div className="relative tracking-[-1.2px] capitalize font-medium text-center">
            (3)
          </div>
        </div>
      </div>
      <div className="absolute top-[437px] left-[30px] bg-grayscale-white flex flex-row items-center justify-center gap-4 text-left text-base text-black hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <div className="w-12 h-12 flex flex-row items-center justify-center">
          <div className="rounded-81xl flex flex-row items-center justify-center p-[11px] relative">
            <div className="w-[18px] relative rounded-sm bg-lightgray h-[18px] z-[0]" />
            <img
              className="w-6 absolute !m-[0] top-[8px] left-[8px] h-6 overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/iconscheck-small.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="w-10 relative rounded-xl bg-gainsboro-200 h-10 hidden" />
          <div className="w-[148px] flex flex-row items-center justify-center gap-[53px]">
            <div className="flex-1 relative tracking-[-1.2px] capitalize font-medium">
              muffin
            </div>
            <div className="relative tracking-[-1.2px] capitalize font-medium text-center">
              (4)
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[169px] left-[1258px] rounded-xl bg-darkorange-800 w-[162px] h-10 flex flex-row items-center justify-center py-[11.5px] px-6 box-border text-left text-sm font-rubik">
        <b className="relative capitalize">sort by : default</b>
      </div>
      <div className="absolute top-[288px] left-[372px] rounded-3xs bg-chocolate-100 w-[303px] h-[353px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-306@2x.png"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/shopping-cart2.svg"
        />
        <div className="relative capitalize font-semibold z-[2]">Donut's</div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div className="absolute top-[1802px] left-[1108px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-306@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">Donut's</div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div className="absolute top-[1804px] left-[740px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-306@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">Donut's</div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[288px] left-[740px] rounded-3xs bg-chocolate-100 w-[303px] h-[353px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
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
        className="absolute top-[288px] left-[1108px] rounded-3xs bg-chocolate-100 flex flex-col items-center justify-center pt-0 px-0 pb-[22px] gap-[22px] cursor-pointer"
        onClick={onItemDContainerClick}
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
        className="absolute top-[686px] left-[27px] rounded-3xs bg-chocolate-100 w-[303px] h-[353px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
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
      <div
        className="absolute top-[686px] left-[372px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-30@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">
          chocolate lollipop
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[1059px] left-[27px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-307@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">
          chocolate lollipop
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div className="absolute top-[1424px] left-[27px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-308@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">
          chocolate lollipop
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[1802px] left-[372px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-309@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">
          chocolate lollipop
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[686px] left-[740px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-303@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">
          caramel donut
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[686px] left-[1108px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-303@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">
          caramel donut
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[1059px] left-[372px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-3010@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">
          whole wheat bread
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div className="absolute top-[1424px] left-[1108px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-3011@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">
          chocolate cake
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[1059px] left-[740px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-3012@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">
          Vanella cake
        </div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[1059px] left-[1108px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-302@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">muffin's</div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div className="absolute top-[1424px] left-[373px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-302@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">muffin's</div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div
        className="absolute top-[1802px] left-[27px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] cursor-pointer hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onItemDContainerClick}
      >
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-302@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">muffin's</div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div className="absolute top-[1428px] left-[740px] rounded-3xs bg-chocolate-100 w-[303px] h-[349px] flex flex-col items-center justify-center pt-0 px-0 pb-[22px] box-border gap-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <img
          className="w-[303px] relative rounded-t-3xs rounded-b-none h-[233px] object-cover z-[0]"
          alt=""
          src="/rectangle-302@2x.png"
        />
        <img className="w-5 relative h-5 z-[1]" alt="" src="/vector6.svg" />
        <div className="relative capitalize font-semibold z-[2]">muffin's</div>
        <b className="w-[73px] absolute !m-[0] top-[258px] left-[198px] text-xl capitalize inline-block text-left z-[3]">
          <span>₹120.00</span>
          <span className="text-black">{` `}</span>
        </b>
      </div>
      <div className="absolute top-[2179px] left-[0px] w-[1440px] h-[263px] text-left text-lg text-black font-pacifico">
        <div
          className="absolute top-[0px] left-[64px] w-[157px] h-12 cursor-pointer"
          onClick={onCandyTextClick}
        >
          <div
            className="absolute top-[0px] left-[0px] w-[157px] h-12 cursor-pointer"
            onClick={onCandyTextClick}
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
          <div className="absolute top-[82px] left-[1147px] rounded-xl bg-darkorange-300 w-[152px] h-[42px] flex flex-row items-center justify-center py-2 px-6 box-border text-3xl text-grayscale-white font-rubik hover:bg-peru-500">
            <b className="relative capitalize">follow us</b>
          </div>
          <div className="absolute top-[193px] left-[0px] w-[1440px] h-[70px] flex flex-row items-center justify-center py-0 pl-8 pr-[88px] box-border gap-[34px] text-center">
            <div className="flex-1 flex flex-row items-center justify-center p-2.5 gap-2.5">
              <img
                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                alt=""
              />
              <div className="w-[533px] relative tracking-[0.05em] capitalize font-light hidden">
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
          <div className="absolute top-[221px] left-[454px] tracking-[0.05em] capitalize font-light text-center">
            Copyright © 2024 Prabisha Consulting Limited. All Rights Reserved
          </div>
        </div>
      </div>
      <div className="absolute top-[99px] left-[527px] w-[457px] h-[125px] flex flex-col items-center justify-center text-16xl text-darkorange-100 font-pacifico">
        <div className="w-[457px] relative leading-[52.5px] capitalize flex items-center justify-center">
          best seller
        </div>
        <b className="w-[457px] relative text-21xl tracking-[-1.2px] leading-[72px] capitalize flex font-quicksand text-black items-center justify-center">
          best seller this week!
        </b>
      </div>
      <div className="absolute top-[28px] left-[123px] capitalize font-pacifico text-left inline-block w-[172px] h-[41px]">
        Harrow Bakery
      </div>
    </div>
  );
};

export default SHOP;
