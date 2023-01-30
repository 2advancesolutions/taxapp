import pb from "lib/pocketbase";
import { useState } from 'react';

export default function UserLogout() {
  function logout() {
    pb.authStore.clear();
  }
  return { logout };
}