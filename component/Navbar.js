import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the token exists on the client side
    if (Cookies.get('token')) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = () => {
    router.push('/log-in');
  };

  const handleLogoutClick = () => {
    Cookies.remove('token'); // Remove token from cookies
    router.push('/'); // Redirect to home or any other page after logout
  };

  return (
    <header className="absolute top-[0px] bg-darkorange-500 w-[1440px] h-[97px] flex flex-row items-center justify-center py-[25px] px-[66px] box-border gap-[104px] text-left text-sm text-white font-segoe-ui">
      <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[210px]">
        <div className="w-[115px] flex flex-row items-center justify-start gap-2">
          <img
            className="w-9 relative rounded-[21px] h-9 object-cover"
            alt="Logo"
            src="/pdf-candy--png1@2x.png"
          />
          <div className="flex-1 h-11 flex flex-col items-start justify-center gap-px">
            <b className="w-[38px] relative capitalize hidden">phlox</b>
            <div className="w-[162px] relative text-5xl capitalize font-pacifico hidden">
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
          <a
            href="/"
            className={`relative capitalize px-2 ${router.pathname === '/' ? 'text-yellow-300' : 'text-white'}`}
          >
            home
          </a>
          <a
            href="/a-b-o-u-t"
            className={`relative capitalize px-2 ${router.pathname === '/a-b-o-u-t' ? 'text-yellow-300' : 'text-white'}`}
          >
            about
          </a>
          <a
            href="/s-h-o-p"
            className={`relative capitalize px-2 ${router.pathname === '/s-h-o-p' ? 'text-yellow-300' : 'text-white'}`}
          >
            shop
          </a>
          <a
            href="/b-l-o-g"
            className={`relative capitalize px-2 ${router.pathname === '/b-l-o-g' ? 'text-yellow-300' : 'text-white'}`}
          >
            blog
          </a>
          <a
            href="/c-o-n-t-a-c-t-u-s"
            className={`relative capitalize px-2 ${router.pathname === '/c-o-n-t-a-c-t-u-s' ? 'text-yellow-300' : 'text-white'}`}
          >
            contact
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-end gap-[22px] font-rubik">
        {!isAuthenticated ? (
          <div
            className="rounded-7xl bg-sandybrown flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer hover:bg-peru-200"
            onClick={handleLogin}
          >
            <b className="relative capitalize">log in</b>
          </div>
        ) : (
          <div
            className="rounded-7xl bg-red-600 flex flex-row items-center justify-center py-2.5 px-[26px] gap-[15px] cursor-pointer hover:bg-red-700"
            onClick={handleLogoutClick}
          >
            <b className="relative capitalize">log out</b>
          </div>
        )}
        <button className="cursor-pointer [border:none] p-0 bg-[transparent]">
          <b className="relative text-sm capitalize font-rubik text-white text-left">
            basket (0)
          </b>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/shopping-cart.svg"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
