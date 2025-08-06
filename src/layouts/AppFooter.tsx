import { FacebookFilled, YoutubeFilled } from "@ant-design/icons";
import logo from "../assets/react.svg";
const AppFooter: React.FC = () => {
  return (
    <footer className=" flex flex-col p-10 bg-black text-neutral-content bottom-0 w-full text-white">
      <div className="flex flex-row w-full border-b-2 pb-7 justify-between">
        <div className="flex flex-row w-1/3 md:ml-6 items-center gap-10">
          <img src={logo} className="h-[100px]" />
        </div>
        <div className="flex flex-row w-1/9 items-center gap-5 mr-10">
          <FacebookFilled style={{ fontSize: "50px", color: "#08c" }} />
          <YoutubeFilled style={{ fontSize: "50px", color: "red" }} />
        </div>
      </div>
      <div className="flex flex-row w-full pb-2 mt-7">
        <div className="flex flex-col md:w-1/2 md:pl-12 gap-2">
          <p className="text-xl font-semibold">Địa chỉ: UIT</p>
          <p className="text-xl font-semibold">SĐT: +84 444444444</p>
          <p className="text-xl font-semibold">Email: baomoi@gmail.com</p>
          <p className="text-xl font-semibold">
            CSKH: +84 333333333 - uit-cskh@gmail.com
          </p>
        </div>
        <div className="flex flex-col w-1/2 items-end gap-2">
          <div className="md:w-2/5 text-center ">
            <p className="text-xl font-bold ">Liên kết</p>
          </div>

          <div className="md:w-2/5 flex flex-col text-center gap-2">
            <p className="text-xl ">Trang chủ</p>
            <p className="text-xl ">Căn hộ</p>
            <p className="text-xl ">Liên hệ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
