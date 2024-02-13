'use client'
import styled from "styled-components"

export const Container = styled.nav`
 display: flex;
 align-items: center; 
 justify-content: space-between;
 padding:1rem 1.5rem;
 background-color: #F1EFE3;
z-index: 10;
     position:fixed;
     left:0;
     right:0;
     top:0;
`
export const Logo = styled.h1`
font-size: 30px;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Ul = styled.ul`
  display:flex;
  align-items: center;
  margin-left: 2rem;

  @media screen and (max-width:768px){
    display:none;
  }
`
export const List = styled.li`
  margin-right:2rem;
`
export const Box = styled.div`
  display:flex;
  align-items: center;
`
export const SearchIcon = styled.i`
  font-size: 25px;

  
`
export const WrapIcon = styled.div`

  @media screen and (min-width:768px){
    display:none;
  }
`

export const BarsIcon = styled.i`
  font-size: 30px;


`
export const Form = styled.form`
 margin-right: 1.5rem;
 display:flex;
`