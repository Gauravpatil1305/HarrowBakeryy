const AdminPage = () => {
  return (
    <div className="w-full relative bg-backgrounds-light-theme h-[915px] text-left text-xs text-dark-gray font-bold-14">
      <div className="absolute w-[calc(100%_-_200px)] top-[0px] right-[0px] left-[200px] shadow-[0px_2px_2px_rgba(163,_171,_185,_0.26)] bg-grayscale-white h-[72px] flex flex-row items-center justify-between py-9 px-12 box-border">
        <div className="w-[261px] rounded-35xl bg-whitesmoke h-9 flex flex-row items-center justify-start py-0 px-[18px] box-border gap-[9px]">
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src="/icon--outlined--search.svg"
          />
          <div className="w-[122px] relative leading-[22px] flex items-center h-4 shrink-0">
            Search
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[22px] text-right text-sm text-grayscale-black">
          <img
            className="w-4 relative h-4"
            alt=""
            src="/icon--notifications--new.svg"
          />
          <img
            className="self-stretch w-px relative max-h-full"
            alt=""
            src="/divider-stroke.svg"
          />
          <div className="relative tracking-[0.2px] leading-[20px] font-medium">
            Ana De Aarms
          </div>
          <img
            className="w-10 relative h-10 object-cover"
            alt=""
            src="/useravatar@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_323.5px)] left-[0px] bg-grayscale-white flex flex-col items-center justify-start text-base text-backgrounds-dark-theme">
        <div className="w-[200px] relative bg-whitesmoke h-[72px] overflow-hidden shrink-0 hidden">
          <img
            className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_60px)] w-[120px] h-10 object-cover"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <div className="bg-grayscale-white overflow-hidden flex flex-col items-start justify-start gap-1">
          <div className="w-[200px] relative h-14 hover:bg-mediumslateblue-400 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/sheet.svg"
            />
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-backgrounds-dark-theme w-[3px] hidden" />
            <div className="absolute w-[calc(100%_-_96px)] top-[calc(50%_-_10px)] left-[72px] tracking-[0.2px] inline-block">
              User
            </div>
            <img
              className="absolute top-[calc(50%_-_8px)] left-[32px] w-4 h-4 overflow-hidden"
              alt=""
              src="/icon--sidebar--active--1-overview.svg"
            />
          </div>
          <div className="w-[200px] relative h-14 hover:bg-mediumslateblue-200 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
            <div className="absolute w-[calc(100%_-_96px)] top-[calc(50%_-_10px)] left-[72px] tracking-[0.2px] inline-block">
              Recent
            </div>
            <img
              className="absolute top-[calc(50%_-_8px)] left-[32px] w-4 h-4 overflow-hidden"
              alt=""
              src="/icon--sidebar--inactive--3-ideas.svg"
            />
          </div>
          <div className="w-[200px] relative h-14 hidden">
            <div className="absolute w-[calc(100%_-_96px)] top-[calc(50%_-_10px)] left-[72px] tracking-[0.2px] inline-block">
              Tickets
            </div>
            <img
              className="absolute top-[calc(50%_-_8px)] left-[32px] w-4 h-4 overflow-hidden"
              alt=""
              src="/icon--sidebar--inactive--2-tickets.svg"
            />
          </div>
          <div className="w-[200px] relative h-14 hover:bg-mediumslateblue-300 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
            <div className="absolute w-[calc(100%_-_96px)] top-[calc(50%_-_10px)] left-[72px] tracking-[0.2px] inline-block">
              Contacts
            </div>
            <img
              className="absolute top-[calc(50%_-_8px)] left-[32px] w-4 h-4 overflow-hidden"
              alt=""
              src="/icon--sidebar--inactive--4-contacts.svg"
            />
          </div>
          <div className="w-[200px] relative h-14 hidden">
            <div className="absolute w-[calc(100%_-_96px)] top-[calc(50%_-_10px)] left-[72px] tracking-[0.2px] inline-block">
              Agents
            </div>
            <img
              className="absolute top-[calc(50%_-_8px)] left-[32px] w-4 h-4 overflow-hidden"
              alt=""
              src="/icon--sidebar--inactive--5-agents.svg"
            />
          </div>
          <div className="w-[200px] relative h-14 hidden">
            <div className="absolute w-[calc(100%_-_96px)] top-[calc(50%_-_10px)] left-[72px] tracking-[0.2px] inline-block">
              Articles
            </div>
            <img
              className="absolute top-[calc(50%_-_8px)] left-[32px] w-4 h-4 overflow-hidden"
              alt=""
              src="/icon--sidebar--inactive--6-articles.svg"
            />
          </div>
          <img
            className="w-[200px] relative max-h-full"
            alt=""
            src="/divider--line--horizontal.svg"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[200px] relative h-14 hover:bg-mediumslateblue-100 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
            <div className="absolute w-[calc(100%_-_96px)] top-[calc(50%_-_10px)] left-[72px] text-base tracking-[0.2px] font-bold-14 text-backgrounds-dark-theme text-left inline-block">
              Settings
            </div>
            <img
              className="absolute top-[calc(50%_-_8px)] left-[32px] w-4 h-4 overflow-hidden"
              alt=""
              src="/icon--sidebar--inactive--a-1-settings.svg"
            />
          </button>
        </div>
      </div>
      <b className="absolute top-[22px] left-[calc(50%_-_50px)] text-lg leading-[26px] inline-block text-black text-center w-[300px] h-[34px]">
        User
      </b>
      <div className="absolute w-[calc(100%_-_318px)] top-[92px] right-[59px] left-[259px] h-[823px] overflow-hidden text-sm text-grayscale-gray-dark">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-grayscale-white border-grayscale-divider border-[1px] border-solid box-border" />
        </div>
        <div className="absolute top-[37px] right-[32px] w-[58px] h-5">
          <div className="absolute top-[0px] right-[0px] tracking-[0.2px] leading-[20px] font-semibold">
            Filter
          </div>
          <img
            className="absolute top-[1px] right-[42px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--filter.svg"
          />
        </div>
        <div className="absolute top-[37px] right-[122px] w-[53px] h-5">
          <div className="absolute top-[0px] right-[0px] tracking-[0.2px] leading-[20px] font-semibold">
            Sort
          </div>
          <img
            className="absolute top-[1px] right-[37px] w-4 h-4 overflow-hidden"
            alt=""
            src="/icon--sort.svg"
          />
        </div>
        <b className="absolute w-[calc(100%_-_722px)] top-[32px] left-[32px] text-lgi tracking-[0.4px] inline-block text-grayscale-black">
          All user
        </b>
        <div className="absolute w-[calc(100%_-_2px)] top-[104px] right-[1px] left-[1px] h-[30px] text-grayscale-gray">
          <b className="absolute w-[calc(100%_-_680px)] top-[0px] left-[31px] tracking-[0.2px] inline-block">
            User name
          </b>
          <b className="absolute top-[0px] right-[401px] tracking-[0.2px] inline-block w-52">
            User email
          </b>
          <b className="absolute top-[0px] right-[77px] tracking-[0.2px] inline-block w-[104px]">
            Date
          </b>
          <b className="absolute top-[0px] right-[221px] tracking-[0.2px] inline-block w-[140px]">
            Phone
          </b>
          <img
            className="absolute w-full top-[30px] right-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/divider--line--horizontal1.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[200px] h-[147px] object-cover"
        alt=""
        src="/rectangle-44@2x.png"
      />
      <img
        className="absolute top-[877px] left-[9px] w-[191px] h-[38px] object-cover"
        alt=""
        src="/rectangle-45@2x.png"
      />
    </div>
  );
};

export default AdminPage;
