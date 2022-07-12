import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailRow.css";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail(props));
    navigate("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow_title">{props.title}</h3>
      <h4 className="emailRow_message">
        {props.subject}{" "}
        <span className="emailRow_description">-{props.description}</span>
      </h4>
      <p className="emailRow_time"> {props.time}</p>
    </div>
  );
};

export default EmailRow;
