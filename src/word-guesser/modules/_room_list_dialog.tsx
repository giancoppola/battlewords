import { useEffect, useState, Dispatch } from 'react'
import { Box, List, ListItem, TextField, Typography, Dialog, DialogContent, Divider, DialogTitle, DialogContentText, DialogActions, Button } from '@mui/material'
import { ExternalRoom } from '../../../types/word-guesser-types';
import { Fetch_Room_RoomList } from '../word-guesser-tools';
import { History, Person } from '@mui/icons-material';

interface Props {
    open: boolean;
    setOpen: Function;
    CheckRoom: Function;
}
export const RoomListDialog = (props: Props) => {
    const [roomList, setRoomList]: [Array<ExternalRoom>, Dispatch<Array<ExternalRoom>>] = useState<Array<ExternalRoom>>([]);
    const [errMsg, setErrMsg]: [string, Dispatch<string>] = useState<string>("");
    useEffect(() => {
        if (props.open) {
            Fetch_Room_RoomList()
            .then(res => {setRoomList(res); setErrMsg(""); console.log(res);})
            .catch(err => {setRoomList([]); setErrMsg(err.message)})
            setTimeout(function tick(){
                Fetch_Room_RoomList()
                .then(res => {setRoomList(res); setErrMsg(""); console.log(res);})
                .catch(err => {setRoomList([]); setErrMsg(err.message)})
                setTimeout(tick, 2000)
            }, 2000)
        }
    }, [props.open])
    return (
        <Dialog open={props.open}>
            <DialogTitle>Room List</DialogTitle>
            <DialogContent dividers>
                <List>
                    {/* <ListItem sx={{justifyContent: 'space-between', gap: '1rem'}}>
                        <Box>Room Name</Box>
                        <Box>Players</Box>
                        <Box>Games Played</Box>
                    </ListItem>
                    <Divider/> */}
                    <>
                        {
                            roomList.map((room: ExternalRoom, index: number) => {
                                return (
                                    <>
                                        { index > 0 && roomList.length > 1 &&
                                            <Divider/>
                                        }
                                        <ListItem sx={{justifyContent: 'space-between', gap: '1rem'}}>
                                            <Box minWidth='150px'>{room.room_name}</Box>
                                            <Box display='flex' gap='.5rem'>
                                                <Person/> {room.player_count}/2
                                            </Box>
                                            <Box display='flex' gap='.5rem'>
                                                <History/> {room.number_of_games_played}
                                            </Box>
                                            <Button disabled={room.player_count === 2}
                                            onClick={() => {props.CheckRoom(room.room_name)}}
                                            >
                                                {room.player_count < 2 && "Join"}
                                                {room.player_count === 2 && "Full"}
                                            </Button>
                                        </ListItem>
                                        { index > 0 && roomList.length > 1 && index < roomList.length - 1  &&
                                            <Divider/>
                                        }
                                    </>
                                )
                            })
                        }
                    </>
                    { roomList.length < 1 &&
                        <ListItem>No public rooms open!</ListItem>
                    }
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {props.setOpen(false)}}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}