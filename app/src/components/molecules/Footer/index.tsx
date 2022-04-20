import { Typography,Grid,Paper } from "@mui/material";
import React from "react";

const Footer = ()=>{
    return(
        <Paper elevation={0} sx={{bgcolor:"#F1F6F4","padding":3}}>
          <Grid container rowSpacing={6} columnSpacing={6} sx={{"paddingTop":3}}>
            <Grid item sx={{"marginLeft":26}}>
              <img src="http://127.0.0.1:8887/Blinklist.png" alt="blinklist"/>
              <Typography variant='h5' sx={{color:"#0365F2"}}>
                <br></br>Big ideas in small packages<br></br> Start learning now
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>Editorial</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Book lists</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>What is Nonfiction?</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>What to read next?</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Benefits of reading</Typography>              
            </Grid>
            <Grid item>
              <Typography variant='body1'>Useful links</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Pricing</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Blinkist business</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Gift cards</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Blinkist magaine</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Contact and help</Typography>               
            </Grid>
            <Grid item>
              <Typography variant='body1'>Company</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>About</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Careers</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>partners</Typography>
              <Typography variant='body2' color="text.secondary" sx={{"marginTop":1}}>Code of Conduct</Typography>               
            </Grid>
            <Grid item sx={{"marginLeft":26}}>
            <Typography variant='body2' color="text.secondary">© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography>
            </Grid>
          </Grid>          
        </Paper>
    )
}
export default Footer;