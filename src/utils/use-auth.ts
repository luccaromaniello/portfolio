import { useEffect, useState } from "react";
import { SessionData } from "./auth";

export function useAuth() {
  const [session, setSession] = useState<SessionData | null>(null);
  const isAuthenticated = session && session.isAuthenticated;
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch the session data from the server
  const fetchSession = async () => {
    try {
      const res = await fetch("/api/session");
      if (res.ok) {
        const sessionData = await res.json();
        setSession(sessionData); // Update session state with fetched data
      } else {
        setSession(null); // If the session doesn't exist or isn't valid, clear the session
      }
    } catch (error) {
      console.error("Error fetching session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch session when the component mounts
  useEffect(() => {
    fetchSession();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return { isAuthenticated, isLoading, refetchSession: fetchSession };
}
