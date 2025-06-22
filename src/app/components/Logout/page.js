"use client";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  localStorage.removeItem("userData");
  console.log("User loggedout suucessfully");
  router.push("/components/Login");
};

export default Logout;
