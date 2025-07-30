import { Box, Stack, TextField, Typography, Grid, Card, CardMedia, CardContent, Avatar } from '@mui/material'
import LeftCarousel from './LeftCarousal';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TrainIcon from '@mui/icons-material/Train';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

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
                    <LeftCarousel></LeftCarousel>
                    <Stack direction="row" spacing={2}>
                        <Box
                            component="img"
                            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp"
                            sx={{ width: 150, borderRadius: 2, background: "#0E77CD",":hover" : { boxShadow: 5 } }}

                        />
                        <Box
                            component="img"
                            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp"
                            sx={{ width: 150, borderRadius: 2, background: "#2654A1",":hover" : { boxShadow: 5 }  }}
                        />
                        <Box
                            component="img"
                            src="realestate_square_hotkey.webp"
                            sx={{ width: 150, borderRadius: 2, background: "#6769D0",":hover" : { boxShadow: 5 }  }}
                        />
                        <Box
                            component="img"
                            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/doctor_square_hotkey.webp"
                            sx={{ width: 150, borderRadius: 2, background: "#008561",":hover" : { boxShadow: 5 }  }}
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



            <Box sx={{ px: 4, py: 4, bgcolor: "#f9f9f9",width: "100%" }}>
      {/* Bills & Recharge */}
      <Box sx={{ bgcolor: "#fff", borderRadius: 2, p: 3, mb: 4, boxShadow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Bills & Recharge{" "}
          <img
            src="https://bharatconnect.justdial.com/images/brandLogo.svg"
            alt="bharat"
            width={20}
            style={{ marginLeft: 5, verticalAlign: "middle" }}
          />
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Pay your bills & recharge instantly with Justdial
        </Typography>
        <Typography sx={{ color: "#0b5ed7", fontWeight: 500, mt: 1 }}>
          Explore More
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {[
            { icon: <PhoneIphoneIcon />, label: "Mobile" },
            { icon: <FlashOnIcon />, label: "Electricity" },
            { icon: <LiveTvIcon />, label: "DTH" },
            { icon: <WaterDropIcon />, label: "Water" },
            { icon: <LocalGasStationIcon />, label: "Gas" },
            { icon: <HealthAndSafetyIcon />, label: "Insurance" },
          ].map((item, index) => (
            <Grid item xs={4} sm={2} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  py: 2,
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Box sx={{ fontSize: 40, color: "#1976d2" }}>{item.icon}</Box>
                  <Typography>{item.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Travel Bookings */}
      <Box sx={{ bgcolor: "#fff", borderRadius: 2, p: 3, boxShadow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Travel Bookings
        </Typography>
        <Typography sx={{ mt: 1 }}>
          Instant ticket bookings for your best travel experience
        </Typography>
        <Typography sx={{ color: "#0b5ed7", fontWeight: 500, mt: 1 }}>
          Explore More
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {[
            {
              icon: <FlightTakeoffIcon />,
              label: "Flight",
              sub: "Powered By Easemytrip.com",
            },
            { icon: <DirectionsBusIcon />, label: "Bus", sub: "Affordable Rides" },
            { icon: <TrainIcon />, label: "Train" },
            { icon: <HotelIcon />, label: "Hotel", sub: "Budget-friendly Stay" },
            {
              icon: <DirectionsCarIcon />,
              label: "Car Rentals",
              sub: "Drive Easy Anywhere",
            },
          ].map((item, index) => (
            <Grid item xs={4} sm={2.4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  py: 2,
                  borderRadius: 2,
                  border: "1px solid #e0e0e0",
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Box sx={{ fontSize: 40, color: "#1976d2" }}>{item.icon}</Box>
                  <Typography>{item.label}</Typography>
                  {item.sub && (
                    <Typography variant="caption" color="green">
                      {item.sub}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
        </Box>
    )
}
