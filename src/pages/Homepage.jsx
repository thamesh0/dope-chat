import React from "react";
import { ChatScreen } from "../components/chat_screen/ChatScreen";
import { Sidebar } from "../components/sidebar/Sidebar";
export const Homepage = () => {
  return (
    <div className="home_container">
      <div className="home">
        <Sidebar />
        <ChatScreen />
      </div>
    </div>
  );
};
