import { Dispatch, useEffect, useState } from 'react'
import { Box, Button, IconButton, List, ListItem, TextField, Tooltip, Typography } from '@mui/material'
import { RemoveQuotes, Fetch_Room_DoesRoomExist, Fetch_Room_CreateRoom, Fetch_Player_IsInRoom } from '../word-guesser-tools'
import { PLAYER_1 } from '../../../types/word-guesser-types';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface Props {
    roomPrivate: boolean;
    setRoomPrivate: Function;
    playerId: string;
    setRoomName: Function;
    setPlayerNumber: Function;
}
export const CreateRoom = (props: Props) => {
    const [errMsg, setErrMsg]: [string, Dispatch<string>] = useState<string>("");
    const [newRoomName, setNewRoomName]: [string, Dispatch<string>] = useState<string>("");
    const CheckRoom = async (room_name: string) => {
        if (!room_name) { setErrMsg('Please provide a room name!'); return; }
        let room_exists: boolean = await Fetch_Room_DoesRoomExist(room_name);
        if (room_exists) { setErrMsg("Room with that name already exists!"); return; }
        let player_in_room: boolean = await Fetch_Player_IsInRoom(props.playerId);
        if (player_in_room) { setErrMsg("Player is already in a room!"); return; }
        props.setRoomName(room_name);
        props.setPlayerNumber(PLAYER_1);
    }
    useEffect(() => { setErrMsg('') }, [newRoomName])
    return (
        <Box>
            <Typography variant='h3'>Create a room</Typography>
            <List>
                <ListItem sx={{ gap: '1rem', paddingLeft: 0 }}>
                    <TextField error={errMsg ? true : false} fullWidth={true} label="Room Name" value={newRoomName} onChange={(e) => setNewRoomName(e.target.value)}
                    InputProps={{ endAdornment:
                        <Tooltip title={ !props.roomPrivate ? 'Sets the room to public so anyone can join' : 'Sets the room to private so it does not appear in the room list'}>
                            <IconButton onClick={() => props.setRoomPrivate(!props.roomPrivate)}>
                                { !props.roomPrivate ? <Visibility color='primary'/> : <VisibilityOff/> }
                            </IconButton>
                        </Tooltip>
                    }}
                    onKeyUp={(e) => {if (e.key === "Enter") {CheckRoom(newRoomName)}}}
                    />
                    <Button className='btn__input' variant='contained' onClick={() => CheckRoom(newRoomName)}>Create</Button>
                </ListItem>
            </List>
            <Typography minHeight='1.5rem' color='red'>{errMsg}</Typography>
        </Box>
    )
}