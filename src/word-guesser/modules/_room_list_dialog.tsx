import { useEffect, useState, Dispatch } from 'react'
import { Box, List, ListItem, TextField, Typography, Dialog, DialogContent, Divider, DialogTitle, DialogContentText, DialogActions, Button } from '@mui/material'

interface Props {
    open: boolean;
    setOpen: Function;
}
export const RoomListDialog = (props: Props) => {
    return (
        <Dialog open={props.open}>
            <DialogTitle>Room List</DialogTitle>
            <DialogContent dividers>
                <List>
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {props.setOpen(false)}}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}