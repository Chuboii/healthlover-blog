'use client'
import styled from "styled-components"

export const Container = styled.aside`
 background: #5650AB;
 color:white;
 max-width: 400px;
 padding:1rem;
 width:100%;
 border-radius:30px;
 margin-top:2.5rem;
 @media screen and (max-width:768px){
    display:none;
    
  }
`
export const Form = styled.form`
   display:flex;
   margin-top:1.5rem;
   flex-direction:column;
`
export const Input = styled.input`
  padding:.9rem 1rem;
  border-radius:30px;
  background:#F1EFE3;
  
`
export const Title = styled.h3`

`
export const Text = styled.h1`
    font-size:30px;
    font-weight:700;
    width:290px;
`