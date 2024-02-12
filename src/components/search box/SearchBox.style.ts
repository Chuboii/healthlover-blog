'use client'
import styled from "styled-components"

export const Container = styled.section`
  margin:auto;
  width:40%;
  margin-top: 1rem;
  display: flex;
  @media screen and (max-width:768px){
    width:100%;
   margin-top:3rem;
   margin:none;
   display:block;
   position:relative;
  }
`

export const Icon = styled.div`
 color: white;
`

export const IconBox = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: #5650AB;
  width: 48px; 
  height: 45px;
  position: relative;
  right: 3.1rem;
  margin: auto;
  justify-content: center;
  @media screen and (max-width:768px){
  position:absolute;
  top:50%;
  right:.5rem;
  transform:translateY(-50%);
  }
`

export const Input = styled.input`
  background-color: #D9D7CB;
  width:100%;
  padding: 1rem .2rem;
  outline:none;
  border: none;
  border-radius:30px;
  padding-left: 2rem;

  &::placeholder{
    color:rgba(0,0,0,.5);
  }
`