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
      className="flex flex-col flex-1 gap-12 items-center justify-center w-full"
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
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-2">
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Enter password"
            required
            autoFocus
          />
          {error ? <p className="text-sm text-red-600">{error}</p> : ""}
        </div>
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
