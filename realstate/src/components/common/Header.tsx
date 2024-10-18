// import React from 'react'

import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../theme/colors";

const Header = () => {
    return (
        <Box>
            <Box borderBottom={'1px solid #f1f1f1'}>
                <Container maxWidth={'xl'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} minHeight={50}>
                        <Box display={'flex'} alignItems={'center'}>
                            <Link to={""} style={{
                                color: '#000'
                            }}>
                                <Typography>Privacy Policy</Typography>
                            </Link>
                            <Typography mx={2}>|</Typography>
                            <Link to={""} style={{
                                color: '#000'
                            }}>
                                <Typography>Real State Notice</Typography>
                            </Link>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Link to={""} style={{
                                color: '#000'
                            }}>
                                <Typography>Contact us</Typography>
                            </Link>
                            <Typography mx={2}>|</Typography>
                            <Link to={""} style={{
                                color: '#000'
                            }}>
                                <Typography>About us</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container maxWidth={'xl'}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} minHeight={80}>
                        <Box>
                            <Typography>Logo</Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Link to={""} style={{
                                color: '#000'
                            }}>
                                <Typography fontSize={18} fontWeight={500} mx={2} fontFamily={"Montserrat"}>Buy</Typography>
                            </Link>
                            <Link to={""} style={{
                                color: '#000'
                            }}>
                                <Typography fontSize={18} fontWeight={500} mx={2} fontFamily={"Montserrat"}>Rent</Typography>
                            </Link>
                            <Link to={""} style={{
                                color: '#000'
                            }}>
                                <Typography fontSize={18} fontWeight={500} mx={2} fontFamily={"Montserrat"}>Action</Typography>
                            </Link>
                            <Link to={""} style={{
                                color: '#000'
                            }}>
                                <Typography fontSize={18} fontWeight={500} mx={2} fontFamily={"Montserrat"}>Our Agent</Typography>
                            </Link>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Link to={""} style={{
                                color: '#000'
                            }}>
                                <Typography fontSize={18} fontWeight={500}>Post a listing</Typography>
                            </Link>
                            <Box borderRadius={2} display={'flex'} ml={2}
                                sx={{
                                    background:colors.primary
                                }}
                            >
                                <Typography px={2} py={1} fontWeight={700} color={colors.white}>Sign in</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Header;