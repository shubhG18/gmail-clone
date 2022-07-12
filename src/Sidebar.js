import React from "react";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import SidebarOption from "./SidebarOption";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NoteIcon from "@mui/icons-material/Note";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={<InboxIcon />}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={<StarIcon />} title="Starred" number={4} />
      <SidebarOption Icon={<AccessAlarmIcon />} title="Snoozed" number={5} />
      <SidebarOption
        Icon={<LabelImportantIcon />}
        title="Important"
        number={5}
      />
      <SidebarOption Icon={<NearMeIcon />} title="Sent" number={5} />
      <SidebarOption Icon={<NoteIcon />} title="Drafts" number={11} />
      <SidebarOption Icon={<ExpandMoreIcon />} title="More" number={44} />
      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
