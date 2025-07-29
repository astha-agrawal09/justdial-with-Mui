import { Box, Button, TextField } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MessageIcon from '@mui/icons-material/Message';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';



import React from 'react'

export default function Header() {

    return (
        <>
            <Box className="a_tbdr" component="header" sx={{ height: "83px", display: "flex", alignItems: "center", }}>
                <Box component="img" src="justdial-logo-png_seeklogo-324435.png" alt="Logo" sx={{ height: '90px' }} />
                <TextField variant="outlined" placeholder="Select Location" size="small" InputProps={{
                    sx: {
                        height: 30,
                        fontSize: '14px',
                        ml: 10,
                        mr: 2
                    }
                }}
                />
                <TextField variant="outlined" placeholder="Search in Mumbai" size="small" InputProps={{
                    sx: {
                        height: 30,
                        fontSize: '14px',
                        mr: 5
                    }
                }} />
                <Button variant="Text" sx={{ color: "blue", fontSize: "10px", }}>EN<KeyboardArrowDownIcon /></Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}>We Are Hiring</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}>Investor Relations</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}><MessageIcon />Leads</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}><CampaignIcon />Advertise</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "8px" }}><TrendingUpIcon />Free Listing</Button>
                <Button variant="Text" sx={{ color: "white", fontSize: "8px", background: "blue" }}>Login/SignUp</Button>
            </Box>

        </>
    )
}
