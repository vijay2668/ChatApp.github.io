import React, { useContext } from "react";
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <BsFillCameraVideoFill style={{cursor:"pointer"}} fontSize="20px" fill="#111122"/>
          <BsFillPersonPlusFill style={{cursor:"pointer"}} fontSize="20px" fill="#111122"/>
          <BsThreeDots style={{cursor:"pointer"}} fontSize="20px" fill="#111122"/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
