import React from 'react';
import ButtonComponent from '.';


export default{
    title: 'components/atoms/ButtonComponent',
    component: ButtonComponent
}

export const Primary = ()=><ButtonComponent variant="contained" color='primary'>Primary</ButtonComponent>
export const Secondary = ()=><ButtonComponent variant='contained' color='secondary'>Secondary</ButtonComponent>
export const Success = ()=><ButtonComponent variant='contained' color='success'>success</ButtonComponent>