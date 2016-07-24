// content.js
var CHAT_HEIGHT = 267;
var height = window.innerHeight;

var newStyle = "@media screen and (max-width:750px) {";

newStyle += "#main_col {";
newStyle += "height: " + (height - CHAT_HEIGHT) + "px !important;";
newStyle += "}";

newStyle += "#right_col {";
newStyle += "display: block !important;";
newStyle += "top: initial !important;";
newStyle += "left: 50px !important;";
newStyle += "right: 50px !important;";
newStyle += "width: 92% !important;";
newStyle += "height: " + CHAT_HEIGHT + "px !important;";
newStyle += "}"

newStyle += ".chat-header {";
newStyle += "height: 32px !important;";
newStyle += "padding: 1px 0 !important;";
newStyle += "}";

newStyle += ".chat-header__button {";
newStyle += "top: 0 !important;";
newStyle += "}";

newStyle += ".chat-room {";
newStyle += "top: 32px !important;";
newStyle += "}";

newStyle += ".chat-messages {";
newStyle += "bottom: 95px !important;";
newStyle += "}";

newStyle += ".chat-interface {";
newStyle += "height: 95px !important;";
newStyle += "}";

newStyle += ".chat-line {";
newStyle += "font-size: 11px !important;"
newStyle += "line-height: 11px !important;"
newStyle += "}";
 
newStyle += "}";
document.querySelector('style').textContent += newStyle;
