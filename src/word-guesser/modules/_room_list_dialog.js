"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomListDialog = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var word_guesser_tools_1 = require("../word-guesser-tools");
var icons_material_1 = require("@mui/icons-material");
var RoomListDialog = function (props) {
    var _a = (0, react_1.useState)([]), roomList = _a[0], setRoomList = _a[1];
    var _b = (0, react_1.useState)(""), errMsg = _b[0], setErrMsg = _b[1];
    (0, react_1.useEffect)(function () {
        if (props.open) {
            (0, word_guesser_tools_1.Fetch_Room_RoomList)()
                .then(function (res) { setRoomList(res); setErrMsg(""); console.log(res); })
                .catch(function (err) { setRoomList([]); setErrMsg(err.message); });
            setTimeout(function tick() {
                (0, word_guesser_tools_1.Fetch_Room_RoomList)()
                    .then(function (res) { setRoomList(res); setErrMsg(""); console.log(res); })
                    .catch(function (err) { setRoomList([]); setErrMsg(err.message); });
                setTimeout(tick, 2000);
            }, 2000);
        }
    }, [props.open]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: props.open, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "Room List" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { dividers: true, children: (0, jsx_runtime_1.jsxs)(material_1.List, { children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: roomList.map(function (room, index) {
                                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [index > 0 && roomList.length > 1 &&
                                            (0, jsx_runtime_1.jsx)(material_1.Divider, {}), (0, jsx_runtime_1.jsxs)(material_1.ListItem, { sx: { justifyContent: 'space-between', gap: '1rem' }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { minWidth: '150px', children: room.room_name }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: 'flex', gap: '.5rem', children: [(0, jsx_runtime_1.jsx)(icons_material_1.Person, {}), " ", room.player_count, "/2"] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: 'flex', gap: '.5rem', children: [(0, jsx_runtime_1.jsx)(icons_material_1.History, {}), " ", room.number_of_games_played] }), (0, jsx_runtime_1.jsxs)(material_1.Button, { disabled: room.player_count === 2, onClick: function () { props.CheckRoom(room.room_name); }, children: [room.player_count < 2 && "Join", room.player_count === 2 && "Full"] })] }), index > 0 && roomList.length > 1 && index < roomList.length - 1 &&
                                            (0, jsx_runtime_1.jsx)(material_1.Divider, {})] }));
                            }) }), roomList.length < 1 &&
                            (0, jsx_runtime_1.jsx)(material_1.ListItem, { children: "No public rooms open!" })] }) }), (0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: function () { props.setOpen(false); }, children: "Close" }) })] }));
};
exports.RoomListDialog = RoomListDialog;
