import { useContext } from 'react'

import { Divider, Drawer, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import { UIContext } from '@/context/ui';

const menuItems: string[] = ['Imbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext( UIContext );

    return (
        <Drawer
            anchor='left'
            open = { sidemenuOpen }
            onClose = { closeSideMenu }
        >
            <Box sx = {{ width:250 }}>
                <Box sx={{padding:'5px 10px'}}>
                    <Typography variant='h4'>
                        Menu
                    </Typography>
                </Box>
                <List>
                    {
                        menuItems.map( (text, index) => (
                            <ListItemButton key={text}>
                                <ListItemIcon>
                                    { index % 2 ? <InboxOutlinedIcon/> : <MailOutlinedIcon/>}
                                </ListItemIcon>
                                <ListItemText primary = { text } />
                            </ListItemButton>
                        ))
                    }
                </List>
                <Divider/>
            </Box>
        </Drawer>
    )
}
