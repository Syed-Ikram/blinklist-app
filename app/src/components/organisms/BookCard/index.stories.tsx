import React from 'react';
import BookCard from '.';


export default{
    title: 'components/organisms/BookCard',
    component: BookCard
}

export const Primary= ()=> <BookCard key={1} id={1} author="Kathleen Shannon and Emily" title="Being Boss" pic="http://127.0.0.1:8887/beingBoss.png" state="Read Again" renderState=''/>