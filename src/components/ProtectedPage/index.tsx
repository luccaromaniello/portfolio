"use client";
import { useAuth } from "@/utils/use-auth";
import NotAuthenticatedWrapper from "@/components/auth/NotAuthenticatedWrapper";

interface ProtectedPageProps {
  children?: React.ReactNode;
}

const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const { isLoading, isAuthenticated, refetchSession } = useAuth();

  if (isLoading) {
    return (
      <div className="text-content-secondary text-xl flex flex-col flex-1 gap-12 items-center justify-center w-full">
        <p>Loading...</p>
      </div>
    );
  }

  return isAuthenticated ? (
    <div>{children}</div>
  ) : (
    <NotAuthenticatedWrapper refetchSession={refetchSession} />
  );
};

export default ProtectedPage;
