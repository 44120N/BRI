import { Stack, Typography, AppBar } from "@mui/material";
import Navbar from "./Navbar";
import Button from "./Button";
const Header = () => {
    return (
        <>
            <AppBar position="sticky">
                <Stack 
                    className="col-full" 
                    justifyContent={'center'} 
                    gap={4} 
                    alignItems={'center'} 
                    direction={'row'} 
                    sx={{backgroundColor:'secondary.main'}}
                    p={{xs:1, sm:1.5, md:2}}
                >
                    <Stack>
                        <Typography textAlign={'center'} fontWeight={800} color="#fff" fontSize={{xs:'.6em', sm:'.8em', md:'1em'}}>
                            🎉 Dapatkan keuntungan lebih banyak dengan <Typography component={'b'} color='quaternary.main' fontWeight={800} fontSize={{xs:'1em', sm:'1em', md:'1em'}}>Membership</Typography>!
                        </Typography>
                    </Stack>
                    <Stack>
                        <Button sx={{width: '8em'}} bdcolor={'#000'}>
                            <Typography fontSize={'1em'}>
                                Jadi Member
                            </Typography>
                        </Button>
                    </Stack>
                </Stack>
                <Navbar/>
            </AppBar>
        </>
    )
}
export default Header;