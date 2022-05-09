import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom'
import ButtonComponent from '../../atoms/Button';

interface Props{
    id:number;
    title:string;
    pic:string;
    author:string;
    state:string;
    renderState:string;
    modify?:Function;
}

const BookCard =(props:Props)=>{ 
  var index = props.id ;
  var bookState = props.state;

  const handleClick = ()=>{
    // eslint-disable-next-line eqeqeq
    if(bookState == "+ Add to Library")
      bookState = "+ Add to Library"
    // eslint-disable-next-line eqeqeq
    else if(bookState == "Finished")
      bookState = "Read Again"
    else
     bookState = "Finished"
    
    fetch('http://localhost:8000/books/'+index,{
      method: 'PATCH',
      body: JSON.stringify({
        "state": bookState,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((json) => console.log(json));
    props.modify && props.modify(true);
  }
  const CardButton=()=>{
    // eslint-disable-next-line eqeqeq
    if(props.renderState == "All"){
    // eslint-disable-next-line eqeqeq
      if(bookState == '+ Add to Library'){
        return(
          <ButtonComponent 
            onClick={handleClick} 
            fullWidth={true} 
            sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0}}>
              <Link to="/bookdetail" style={{ textDecoration: 'none' ,color:'#03314B'}} state={{id:index}}>{bookState}</Link>
          </ButtonComponent>
        )
      }
      else{
        return(
          <ButtonComponent 
            onClick={handleClick} 
            sx={{"margin":0,float:"right"}}>
              <Link to="/bookdetail" style={{ textDecoration: 'none' ,color:'#03314B'}} state={{id:index}}><MoreHorizIcon /></Link>
          </ButtonComponent>
        )
      }
    }
    else{
      return(
        <ButtonComponent 
          onClick={handleClick} 
          fullWidth={true} 
          sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0}}>
            {bookState}
        </ButtonComponent>
      )
    }

  }
  return (
    <Card sx={{ maxWidth: 345 , height:362 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.pic}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="h6" component="div"  sx={{fontSize:18}} align="left">
        <Link to="/bookdetail" style={{ textDecoration: 'none',color:'#03314B' }} state={{id:index}}>{props.title}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" sx={{"marginTop":1}}>
          {props.author}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left" sx={{"marginTop":1}}>
          <Grid container>
            <Grid item>
            <AccessTimeIcon />
            </Grid>
            <Grid item>
              <Typography variant="body2">
              13-minute read
              </Typography>
            </Grid>
          </Grid>
        </Typography>  

      </CardContent> 
      <CardButton />    
      <ButtonComponent onClick={handleClick} fullWidth={true} sx={{":hover":{bgcolor:"#0365F2",color:"#ffffff"},"margin":0,borderRadius:0}}>{bookState}</ButtonComponent>
    </Card>
  );
}
export default BookCard;
/*
const navigate = useNavigate();
and then replace history.push('/path') with navigate('/path')

Change history.replace('/path') with navigate('/path', { replace: true })

Want to use state in push/navigate do navigate('/path', { state: { name:'Xyz' }}) 
*/