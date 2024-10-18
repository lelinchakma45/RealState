import { Box, Container, InputAdornment, TextField, Typography } from '@mui/material'
import House from '../../assets/bg/house.jpg'
import React from 'react'
import { colors } from '../../theme/colors'
import { font } from '../../theme/font'
import SearchIcon from '@mui/icons-material/Search';

const Main = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${House})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            minHeight={'70vh'}
        >
            <Container maxWidth={'xl'} >
                <Box minHeight={'50vh'} maxWidth={'50%'} sx={{ display: 'flex', alignItems: 'center', }}>
                    <Box sx={{ background: '#FFF' }} p={5} borderRadius={3}>
                        <Typography fontSize={54} fontWeight={700} fontFamily={font.family}>Find The right apartment for you</Typography>
                        <Typography fontFamily={font.family}>We're the on a mission to help people discover the real value of vacation</Typography>
                        <Box mt={2} width={'100%'}>
                            <Typography fontSize={18} fontWeight={600} fontFamily={font.family} mb={1}>Search Apartment</Typography>
                            <Box display={"flex"} alignItems={'center'} mb={2}>
                                <Box borderRadius={2} display={'flex'} mr={2}
                                    sx={{
                                        background: colors.primary
                                    }}
                                >
                                    <Typography px={2} py={1} fontWeight={700} color={colors.white}>Buy</Typography>
                                </Box>
                                <Box borderRadius={2} display={'flex'} mr={2}
                                    sx={{
                                        // background:colors.primary
                                    }}
                                >
                                    <Typography px={2} py={1} fontWeight={700} color={'#000'}>Rent</Typography>
                                </Box>
                                <Box borderRadius={2} display={'flex'} mr={2}
                                    sx={{
                                        // background:colors.primary
                                    }}
                                >
                                    <Typography px={2} py={1} fontWeight={700} color={'#000'}>Auction</Typography>
                                </Box>
                                <Box borderRadius={2} display={'flex'} mr={2}
                                    sx={{
                                        // background:colors.primary
                                    }}
                                >
                                    <Typography px={2} py={1} fontWeight={700} color={'#000'}>Listing</Typography>
                                </Box>
                            </Box>
                            <TextField
                                variant="outlined"
                                placeholder="Search by City, States or Zip code"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        borderRadius: 15, // To make the borders rounded
                                        borderColor: '#57a99a', // Adjust border color
                                    },
                                }}
                                sx={{
                                    width: '100%',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#57a99a', // Color for border
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#57a99a', // Color on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#57a99a', // Color when focused
                                        },
                                    },
                                    '& input::placeholder': {
                                        color: '#b0b0b0', // Placeholder text color
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Main