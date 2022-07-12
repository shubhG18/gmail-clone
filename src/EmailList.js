import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
 
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [emails]);
  // console.log(timestamp)

  return (
    <div className="emailLists">
      <div className="emailLists_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section
          Icon={<InboxIcon />}
          title="Primary"
          color="red"
          selected
        ></Section>
        <Section Icon={<PeopleIcon />} title="Social" color="#1a73e8"></Section>
        <Section
          Icon={<LocalOfferIcon />}
          title="Promotions"
          color="green"
        ></Section>
      </div>
      <div className="emailList_List">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
            // time={new Date(timestamp?.seconds * 1000)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
