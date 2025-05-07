import { auth } from "./actions";
import "@/styles/forms.css";
import { IoMdLock } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const NotAuthenticated = () => {
  return (
    <form
      action={auth}
      className="flex flex-col flex-1 gap-12 items-center justify-center w-full"
    >
      <div className="flex flex-col gap-4 items-center">
        <IoMdLock size={40} />
        <h1 className="text-2xl font-medium">
          This content is password protected.
        </h1>
        <p className="text-content-secondary">
          Recruiters or hiring teams are welcome to reach out to request access.
        </p>
      </div>
      <div className="flex flex-row gap-8">
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Enter password"
          required
          autoFocus
        />
        <button type="submit" className="button primary-button">
          <div className="flex flex-row gap-2 items-center">
            <span>Access content </span>
            <span>
              <FaArrowRight size={16} />
            </span>
          </div>
        </button>
      </div>
    </form>
  );
};

export default NotAuthenticated;
