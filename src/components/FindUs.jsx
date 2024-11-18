import { FaFacebook,FaTelegram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold m-5">Find Us On</h1>
      <div className="join flex mt-4 join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
        <FaTelegram />Telegram
        </button>
        <button className="btn join-item justify-start">
        <FaTelegram />Telegram
        </button>
      </div>
    </div>
  );
};

export default FindUs;