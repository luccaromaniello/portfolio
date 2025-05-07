"use client";
import { useAuth } from "@/utils/use-auth";
import NotAuthenticatedWrapper from "@/components/auth/NotAuthenticatedWrapper";

interface ProtectedPageProps {
  children?: React.ReactNode;
}

const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const { isLoading, isAuthenticated, refetchSession } = useAuth();

  if (isLoading) {
    return "Loading...";
  }

  return isAuthenticated ? (
    <div>{children}</div>
  ) : (
    <NotAuthenticatedWrapper refetchSession={refetchSession} />
  );
};

export default ProtectedPage;
