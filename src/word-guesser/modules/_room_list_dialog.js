"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomListDialog = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var RoomListDialog = function (props) {
    return ((0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: props.open, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "Room List" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { dividers: true, children: (0, jsx_runtime_1.jsx)(material_1.List, {}) }), (0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: function () { props.setOpen(false); }, children: "Close" }) })] }));
};
exports.RoomListDialog = RoomListDialog;
