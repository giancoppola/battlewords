import { useEffect, useState, Dispatch } from 'react'
import { Box, List, ListItem, TextField, Typography, Dialog, DialogContent, Divider, DialogTitle, DialogContentText, DialogActions, Button } from '@mui/material'
import { ExternalRoom } from '../../../types/word-guesser-types';
import { Fetch_Room_RoomList } from '../word-guesser-tools';

interface Props {
    open: boolean;
    setOpen: Function;
}
export const RoomListDialog = (props: Props) => {
    const [roomList, setRoomList]: [Array<ExternalRoom>, Dispatch<Array<ExternalRoom>>] = useState<Array<ExternalRoom>>([]);
    const [errMsg, setErrMsg]: [string, Dispatch<string>] = useState<string>("");
    useEffect(() => {
        Fetch_Room_RoomList()
        .then(res => {setRoomList(res); setErrMsg(""); console.log(res);})
        .catch(err => {setRoomList([]); setErrMsg(err.message)})
    }, [props.open])
    return (
        <Dialog open={props.open}>
            <DialogTitle>Room List</DialogTitle>
            <DialogContent dividers>
                <List>
                    <>
                        {
                            roomList.map((room: ExternalRoom) => {
                                return (
                                    <ListItem>
                                        {room.room_name} {room.player_count}
                                    </ListItem>
                                )
                            })
                        }
                    </>
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {props.setOpen(false)}}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}