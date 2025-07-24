import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function Header() {

    return (
        <>
            <Box className="a_tbdr" component="header" sx={{ height: "83px", display: "flex", alignItems: "center",  }}>
                <Box component="img" src="./public/justdial-logo-png_seeklogo-324435.png" alt="Logo" sx={{ height: '90px' }} />
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
                }}  />
                <Button variant="text">Text</Button>
            </Box>

        </>
    )
}
