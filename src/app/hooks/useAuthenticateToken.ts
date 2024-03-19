import { useEffect } from "react";
import { parseJwt } from "../utils/functions";

export const useAuthenticateToken = () => {
  useEffect(() => {
    const checkToken = () => {
      const token = parseJwt(localStorage.getItem('token'));

      const currentTime = Math.floor(Date.now() / 1000);
      if (token.exp < currentTime) {
        window.location.href = '/login';
      }
    };

    checkToken();
    const intervalId = setInterval(checkToken, 1210000);

    return () => clearInterval(intervalId);
  }, [])
}