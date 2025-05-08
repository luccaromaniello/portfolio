import "@/styles/forms.css";
import { MdOutlineLock } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

interface NotAuthenticatedProps {
  handleAuth: (formData: FormData) => Promise<{ success: boolean }>;
  refetchSession: () => void;
}

const NotAuthenticated = ({
  handleAuth,
  refetchSession,
}: NotAuthenticatedProps) => {
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const onSubmit = async (formData: FormData) => {
    const result = await handleAuth(formData);

    if (result.success) {
      refetchSession();
    } else {
      setError("Invalid password.");
    }
  };

  return (
    <form
      action={onSubmit}
      className="flex flex-col flex-1 p-6 sm:p-0 gap-12 items-center justify-center w-full text-center"
    >
      <div className="flex flex-col gap-4 items-center">
        <MdOutlineLock size={40} className="text-content-tertiary" />
        <h1 className="text-2xl font-medium">
          This content is password protected.
        </h1>
        <p className="text-content-secondary">
          Recruiters or hiring teams are welcome to reach out to request access.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex flex-col gap-2 items-start">
          <input
            className={`input ${error && touched ? "input-error" : ""}`}
            name="password"
            type="password"
            placeholder="Enter password"
            required
            onChange={() => {
              setError("");
              if (!touched) setTouched(true);
            }}
            onBlur={(e) => {
              if (!touched) setTouched(true);
              if (e.target.value === "") {
                setError("Password is required.");
              }
            }}
          />
          <p
            className={`text-sm text-red-600 min-h-5 ${
              error ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {error ?? ""}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <button type="submit" className="button primary-button">
            <div className="flex flex-row gap-2 items-center">
              <span>Access content</span>
              <span>
                <FaArrowRight size={16} />
              </span>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default NotAuthenticated;
