'use client'
import styled from 'styled-components'

export const Container = styled.section`
  text-align:center;
  margin-top:5rem;
  @media screen and (max-width:768px){
    display:flex;
    text-align:left;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding:1rem;
  }
`
export const Title = styled.h1`
 font-size:45px;
 font-weight:700;
 @media screen and (max-width:768px){
 font-size:35px;
  }
`
export const Text = styled.p`
 font-size:45px;
 @media screen and (max-width:768px){
 font-size:35px;
  }
`