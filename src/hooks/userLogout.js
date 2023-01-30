import pb from "lib/pocketbase";
import { useState } from 'react';

export default function UserLogout() {
  const [reload, reloadUi] = useState(false);
  function logout() {
    pb.authStore.clear();
    reloadUi(true);
  }
  return { logout };
}