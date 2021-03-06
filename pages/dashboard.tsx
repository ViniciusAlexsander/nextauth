import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h1>Dashboard</h1>
      {user && <p>{user.email}</p>}
    </>
  );
}
