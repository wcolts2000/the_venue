import Button from "@material-ui/core/Button";
import React from "react";
import TicketIcon from "../../resources/images/icons/ticket.png";

function MyButton(props) {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{ background: props.bck, color: props.color }}
    >
      <img src={TicketIcon} className="iconImage" alt="icon_button" />
      {props.text}&nbsp;
    </Button>
  );
}

export default MyButton;
