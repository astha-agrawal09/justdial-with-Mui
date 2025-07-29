import { Box, Stack, TextField, Typography, Grid, Card, CardMedia, CardContent, Avatar } from '@mui/material'
import React from 'react'

export default function Main() {
    const categories = [
        { label: "Restaurants", icon: "🍽️" },
        { label: "Hotels", icon: "🏨" },
        { label: "Beauty Spa", icon: "💆" },
        { label: "Home Decor", icon: "🛋️" },
        { label: "Wedding", icon: "💍" },
        { label: "Education", icon: "🎓" },
        { label: "Rent & Hire", icon: "🚗" },
        { label: "Hospitals", icon: "🏥" },
        { label: "Contractors", icon: "🛠️" },
        { label: "Pet Shops", icon: "🐶" },
        { label: "PG/Hostels", icon: "🛏️" },
        { label: "Estate Agent", icon: "🏢" },
        { label: "Dentists", icon: "🦷" },
        { label: "Gym", icon: "🏋️" },
        { label: "Loans", icon: "💰" },
        { label: "Event Organisers", icon: "🎉" },
        { label: "Driving Schools", icon: "🚘" },
        { label: "Packers & Movers", icon: "📦" },
        { label: "Courier", icon: "🚚" },
        { label: "Popular", icon: "📊" },
    ];

    const sectionCards = [
        {
            title: "Wedding Requisites",
            items: [
                { title: "Banquet Halls", image: "/banquethalls.webp" },
                { title: "Bridal Requisite", image: "/bridalrequisite.webp" },
                { title: "Caterers", image: "caterers.webp" },
            ],
        },
        {
            title: "Beauty & Spa",
            items: [
                { title: "Beauty Parlours", image: "beautyparlours.webp" },
                { title: "Spa & Massages", image: "spamassages.webp" },
                { title: "Salons", image: "salons.webp" },
            ],
        },
        {
            title: "Repairs & Services",
            items: [
                { title: "AC Service", image: "acrepair.webp" },
                { title: "Car Service", image: "carservice.webp" },
                { title: "Bike Service", image: "bikeservice.webp" },
            ],
        },
        {
            title: "Daily Needs",
            items: [
                { title: "Movies", image: "movies.webp" },
                { title: "Grocery", image: "grocery.webp" },
                { title: "Electricians", image: "electricians.webp" },
            ],
        },
    ];


    return (
        <Box component="main" sx={{ minHeight: "450px", display: "flex", flexWrap: "wrap", }}>
            <Stack className="container" sx={{ px: 2, width: '100%', maxWidth: '100%', textAlign: "left", alignSelf: "flex-start", marginTop: 2 }}>
                <Typography variant="h6" fontWeight="bold" >
                    Search across <b>4.9 Crore+</b>{" "}
                    <span style={{ color: "#007BFF" }}>Products & Services</span>
                </Typography>

                <Box sx={{ display: "flex", gap: 2, }}>
                    <TextField placeholder="Select Location" InputProps={{
                        sx: {
                            height: 30,
                            fontSize: '14px',

                        }
                    }} />
                    <TextField placeholder="Search in Mumbai" InputProps={{
                        sx: {
                            height: 30,
                            fontSize: '14px',
                            mr: 5
                        }
                    }} />
                </Box>

                <Stack direction="row" spacing={2} sx={{ marginTop: 5 }}>
                    <Box
                        component="img"
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp"
                        alt="Banner"
                        sx={{ width: '50%', borderRadius: '10px' }}
                    />

                    <Stack direction="row" spacing={2}>
                        <Box
                            component="img"
                            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp"
                            sx={{ width: 150, borderRadius: 2, background: "#0E77CD" }}

                        />
                        <Box
                            component="img"
                            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp"
                            sx={{ width: 150, borderRadius: 2, background: "#2654A1" }}
                        />
                        <Box
                            component="img"
                            src="realestate_square_hotkey.webp"
                            sx={{ width: 150, borderRadius: 2, background: "#6769D0" }}
                        />
                        <Box
                            component="img"
                            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/doctor_square_hotkey.webp"
                            sx={{ width: 150, borderRadius: 2, background: "#008561" }}
                        />
                    </Stack>
                </Stack>

            </Stack>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                {categories.map((item, index) => (
                    <Grid key={index}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                p: 2,
                                borderRadius: 3,
                                boxShadow: 2,
                                cursor: "pointer",
                                ":hover": { boxShadow: 5 },
                            }}
                        >
                            <Avatar sx={{ bgcolor: "#f0f0f0", color: "#000", mb: 1 }}>{item.icon}</Avatar>
                            <Typography variant="body2" align="center" sx={{ fontSize: "0.9rem" }}>
                                {item.label}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {sectionCards.map((section, idx) => (
                <Box key={idx} sx={{ mb: 4, border: "1px solid #ddd", borderRadius: 2, p: 2, mt: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {section.title}
                    </Typography>

                    <Grid container spacing={2}>
                        {section.items.map((item, index) => (
                            <Grid key={index}>
                                <Card sx={{ borderRadius: 2, boxShadow: 1, cursor: 'pointer',  ":hover": { boxShadow: 5 } }}>
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        height="140"
                                        alt={item.title}
                                    />
                                    <CardContent sx={{ textAlign: 'center', p: 1.5 }}>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}



        </Box>
    )
}
