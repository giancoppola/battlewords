import { Dispatch, useState } from 'react'
import { Box, Button, Link, List, ListItem, TextField, Typography } from '@mui/material'

export const Footer = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' gap='1rem' width='100dvw'>
            <Typography variant='subtitle2'>created by <Typography fontWeight='bold' variant='subtitle2' component='span'>melliek</Typography></Typography>
            <Typography variant='subtitle2'>coded by&nbsp;
                <Typography fontWeight='bold' variant='subtitle2' component='span'>
                    <Link href="https://www.linkedin.com/in/giancoppola/"
                    color='inherit' sx={{cursor: 'pointer', textDecoration: 'none', ":hover": {textDecoration: 'underline'}}}>gianc</Link>
                </Typography>
            </Typography>
        </Box>
    )
}