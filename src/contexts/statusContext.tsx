import { ReactNode } from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

interface statusProps {
  children: ReactNode;
}

const StatusContext = ({ children }: statusProps) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default StatusContext;
