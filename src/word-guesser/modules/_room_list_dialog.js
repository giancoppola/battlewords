"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomListDialog = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var word_guesser_tools_1 = require("../word-guesser-tools");
var RoomListDialog = function (props) {
    var _a = (0, react_1.useState)([]), roomList = _a[0], setRoomList = _a[1];
    var _b = (0, react_1.useState)(""), errMsg = _b[0], setErrMsg = _b[1];
    (0, react_1.useEffect)(function () {
        (0, word_guesser_tools_1.Fetch_Room_RoomList)()
            .then(function (res) { setRoomList(res); setErrMsg(""); console.log(res); })
            .catch(function (err) { setRoomList([]); setErrMsg(err.message); });
    }, [props.open]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: props.open, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "Room List" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { dividers: true, children: (0, jsx_runtime_1.jsx)(material_1.List, { children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: roomList.map(function (room) {
                            return ((0, jsx_runtime_1.jsxs)(material_1.ListItem, { children: [room.room_name, " ", room.player_count] }));
                        }) }) }) }), (0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: function () { props.setOpen(false); }, children: "Close" }) })] }));
};
exports.RoomListDialog = RoomListDialog;
