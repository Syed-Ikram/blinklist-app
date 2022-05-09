import { Grid ,Paper,Typography} from "@mui/material";
import React from "react";

const ExploreBanner = ()=>{
    return(
        <Paper elevation={0} sx={{bgcolor:"#F1F6F4","padding":3,"marginTop":3,"marginBottom":3}}>
        <Grid container  columnSpacing={15}>
          <Grid item>
            <Typography sx={{"margin":4,'fontWeight':'700'}} variant="h5" >
            Explore Books on <br></br> entrepreneurship
            </Typography>
            <Typography sx={{"margin":4}} variant="body2" color="text.secondary" >
              Everything you need to know about thriving on a<br></br> shoestring budget, making your first million, and hiring<br></br> right from the start.
            </Typography>
          </Grid>
          <Grid item sx={{float:"right"}}>
            <img src='http://127.0.0.1:8887/explore.png' alt='explore' />
          </Grid>
        </Grid>
        </Paper>
    )
} 
export default ExploreBanner;