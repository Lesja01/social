import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
//import DialogItem from "/DialogItem";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = props => {
  return <div className={s.dialog}>{props.message}</div>;
};
const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogItem name="Andrey" id="1"></DialogItem>
        <DialogItem name="Dima" id="2"></DialogItem>
        <DialogItem name="Katya" id="3"></DialogItem>
        <DialogItem name="Olya" id="4"></DialogItem>
      </div>
      <div className={s.dialogs_messanges}>
        <Message message="hi"></Message>
        <Message message="how are you"></Message>
        <Message message="ok, and you?"></Message>
      </div>
    </div>
  );
};
export default Dialogs;
