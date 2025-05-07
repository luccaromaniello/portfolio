import NotAuthenticated from "@/components/auth/NotAuthenticated";
import { auth } from "./actions";

const NotAuthenticatedWrapper = () => {
  return <NotAuthenticated handleAuth={auth} />;
};

export default NotAuthenticatedWrapper;
