import { Dispatch, useEffect, useState } from 'react'
import { Box, Button, List, ListItem, TextField, Typography } from '@mui/material'
import { RemoveQuotes, Fetch_Room_DoesRoomExist, Fetch_Room_IsRoomJoinable } from '../word-guesser-tools'
import { PLAYER_2, SuccessResponse } from '../../../types/word-guesser-types';
import { RoomListDialog } from './_room_list_dialog';

interface Props {
    playerId: string;
    setRoomName: Function;
    setPlayerNumber: Function;
}
export const JoinRoom = (props: Props) => {
    const [errMsg, setErrMsg]: [string, Dispatch<string>] = useState<string>("");
    const [newRoomName, setNewRoomName]: [string, Dispatch<string>] = useState<string>("");
    const [showRoomList, setShowRoomList]: [boolean, Dispatch<boolean>] = useState<boolean>(false);
    const CheckRoom = async (room_name: string) => {
        if (!room_name) { setErrMsg('Please provide a room name!'); return; }
        let room_exists = await Fetch_Room_DoesRoomExist(room_name);
        if (!room_exists) { setErrMsg("No room with that name exists!"); return; }
        let room_joinable = await Fetch_Room_IsRoomJoinable(room_name);
        if (room_joinable) {
            props.setRoomName(room_name);
            props.setPlayerNumber(PLAYER_2);
        }
    }
    useEffect(() => {
        let params: URLSearchParams = new URLSearchParams(window.location.search);
        let join: string | null = params.get("join");
        if (join) {
            CheckRoom(join);
        }
    }, [])
    useEffect(() => { setErrMsg('') }, [newRoomName])
    return (
        <>
            <Box>
                <Typography variant='h3'>Join a room</Typography>
                <List>
                    <ListItem sx={{ gap: '1rem', paddingLeft: 0 }}>
                        <TextField error={errMsg ? true : false} fullWidth={true} label="Room Name" value={newRoomName} onChange={(e) => setNewRoomName(e.target.value)}/>
                        <Button className='btn__input' variant='contained' onClick={() => CheckRoom(newRoomName)}>Join</Button>
                    </ListItem>
                    <ListItem sx={{ paddingLeft: 0 }}>
                        <Button fullWidth variant='outlined' onClick={() => setShowRoomList(true)}>
                            Find a Room
                        </Button>
                    </ListItem>
                </List>
                <Typography minHeight='1.5rem' color='red'>{errMsg}</Typography>
            </Box>
            <RoomListDialog open={showRoomList} setOpen={setShowRoomList}/>
        </>
    )
}