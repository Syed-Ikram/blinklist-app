import React from "react";
import { AppBar, Toolbar,Modal,Paper, Link} from "@mui/material";
import {Search, KeyboardArrowDown} from "@mui/icons-material";
import ButtonComponent from "../../atoms/Button";
import ExploreTabs from "../ExploreTabs";

const NavBar =()=>{
    
    const [open, setOpen] = React.useState(false);
    //const handleOpen = () => setOpen(true);
    //const handleClose = () => setOpen(false);
    return(            
        <AppBar position="relative" sx={{ bgcolor: "white",color:"black","marginLeft":19}} elevation={0}>
            <Toolbar>
                <Link underline="none" href="/explore" sx={{"marginTop":1}}><img src="http://127.0.0.1:8887/Blinklist.png" alt="blinklist"/></Link>
                <Link underline="none" href="/explore" sx={{"marginLeft":2,"marginRight":2,"marginTop":1}}><Search /></Link>
                <ButtonComponent variant="text" size="large" onClick={() => setOpen(true)}>Explore<KeyboardArrowDown /></ButtonComponent>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    BackdropProps={{style: {top: "70px"}}}
                    disableScrollLock={true}
                >
                    <Paper sx={{position: 'absolute' as 'absolute',width:'100%',top:'10%',bgcolor:'#F1F6F4'}}>
                            <ExploreTabs />
                    </Paper>
                </Modal>
                <Link underline="none" href="/" sx={{"marginLeft":2,"marginRight":2}}>My Library</Link>
            </Toolbar>
        </AppBar>
        
    )
}
export default NavBar;