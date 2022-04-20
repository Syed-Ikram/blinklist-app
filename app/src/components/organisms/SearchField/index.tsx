import { TextField ,Grid ,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import {Search} from "@mui/icons-material";
import BookCard from "../BookCard";

interface BookDetails{
  id:number;
  title:string;
  image:string;
  author:string;
  state:string;
}
const SearchField=()=>{
    const [searchValue,setSearchValue]=useState('')
    const IconNText=()=>{
        return(
            <Grid container>
            <Grid item>
                <Search />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Search by title or author
              </Typography>
            </Grid>
          </Grid>
        )
    }
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/books')
        .then(res =>res.json())
        .then(data => {
            // eslint-disable-next-line eqeqeq
            if(data != books)
                setBooks(data)
            }
            )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchValue])
    return(
      <>
        <TextField 
            label={<IconNText />}
            variant="standard" 
            value={searchValue} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setSearchValue(event.target.value)} 
            sx={{"marginBottom":2,"width":400}} />

        <Grid container spacing={2} wrap="wrap" sx={{marginTop:2,marginBottom:2}}>
        {/* eslint-disable-next-line array-callback-return*/}
        {books.map((book:BookDetails) =>{
            // eslint-disable-next-line eqeqeq
            if(searchValue==''){
              return <></>
            }
            // eslint-disable-next-line eqeqeq
            else{
              if((book.title).startsWith(searchValue)){
                  return (
                      <Grid item xs={12} sm={8} md={4} >
                      <BookCard 
                        key={book.id} 
                        id={book.id} 
                        author={book.author} 
                        title={book.title} 
                        pic={book.image} 
                        state={book.state} 
                        renderState=""/>
                      </Grid>
                  )
              }
              // eslint-disable-next-line eqeqeq
              if((book.author).startsWith(searchValue)){
                  return (
                      <Grid item xs={12} sm={8} md={4} >
                      <BookCard 
                        key={book.id} 
                        id={book.id} 
                        author={book.author} 
                        title={book.title} 
                        pic={book.image} 
                        state={book.state} 
                        renderState=""/>
                      </Grid>
                  )
              }
          }
        })
        }
        </Grid>
        </>
    )
}
export default SearchField;