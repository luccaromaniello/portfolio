import NotAuthenticated from "@/components/auth/NotAuthenticated";
import { auth } from "./actions";

const NotAuthenticatedWrapper = ({
  refetchSession,
}: {
  refetchSession: () => void;
}) => {
  return <NotAuthenticated handleAuth={auth} refetchSession={refetchSession} />;
};

export default NotAuthenticatedWrapper;
