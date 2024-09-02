"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    var GetRoomList = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, word_guesser_tools_1.Fetch_Room_RoomList)()
                        .then(function (res) { setRoomList(res); setErrMsg(""); console.log(res); })
                        .catch(function (err) { setRoomList([]); setErrMsg(err.message); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        props.open && GetRoomList();
    }, [props.open]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: props.open, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "Room List" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { dividers: true, children: (0, jsx_runtime_1.jsxs)(material_1.List, { children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: roomList.map(function (room, index) {
                                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [index > 0 && roomList.length > 1 &&
                                            (0, jsx_runtime_1.jsx)(material_1.Divider, {}), (0, jsx_runtime_1.jsxs)(material_1.ListItem, { sx: { justifyContent: 'space-between', gap: '1rem' }, children: [(0, jsx_runtime_1.jsx)(material_1.Box, { minWidth: '150px', children: room.room_name }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: 'flex', gap: '.5rem', children: [(0, jsx_runtime_1.jsx)(icons_material_1.Person, {}), " ", room.player_count, "/2"] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: 'flex', gap: '.5rem', children: [(0, jsx_runtime_1.jsx)(icons_material_1.History, {}), " ", room.number_of_games_played] }), (0, jsx_runtime_1.jsxs)(material_1.Button, { disabled: room.player_count === 2, onClick: function () { props.CheckRoom(room.room_name); }, children: [room.player_count < 2 && "Join", room.player_count === 2 && "Full"] })] }), index > 0 && roomList.length > 1 && index < roomList.length - 1 &&
                                            (0, jsx_runtime_1.jsx)(material_1.Divider, {})] }));
                            }) }), roomList.length < 1 &&
                            (0, jsx_runtime_1.jsx)(material_1.ListItem, { children: "No public rooms open!" })] }) }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { onClick: GetRoomList, children: "Refresh" }), (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: function () { props.setOpen(false); }, children: "Close" })] })] }));
};
exports.RoomListDialog = RoomListDialog;
