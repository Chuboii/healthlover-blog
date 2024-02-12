'use client'
import styled from "styled-components"

export const Container = styled.footer`
 padding: 2rem 4rem;
 position:relative;
 display:flex;
 flex-direction:column;
 justify-content:center;
 margin-top:3rem;

 @media screen and (max-width:768px){
    padding:0 1rem;
  } 
`
export const Wrapper = styled.div`
    &:nth-of-type(1){
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom:2rem;
        border-bottom: 1px solid rgba(0,0,0,.3);
    }
    &:nth-of-type(2){
        display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr;
       padding-top:2rem;
    
    }
    @media screen and (max-width:768px){
      &:nth-of-type(2){
        display:grid;
  grid-template-columns:1fr 1fr;
       padding-top:2rem;
    
    }
  } 

`
export const Box = styled.div`

`

export const BoxButton = styled.div`
  @media screen and (max-width:768px){
   display:none;
  }
`
export const Logo = styled.h1`
  font-size:30px;
  
`
export const Span = styled.span`

`
export const Title = styled.h2`
  font-weight:700;

`
export const Ul = styled.ul`
 
`
export const List = styled.li`
margin:1rem 0;
`
export const Icon = styled.i`

`
export const SubText = styled.p`
  color:#999891;
  font-weight:500;
`