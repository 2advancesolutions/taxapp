import pb from "lib/pocketbase";
import { useState } from 'react';

export default function UserLogout() {
  const [ userLogin, setLogin ] = useState(false);
  function logout() {
    pb.authStore.clear();
    setLogin(pb.authStore.isValid);
  }
  return { logout, userLogin, setLogin };
}