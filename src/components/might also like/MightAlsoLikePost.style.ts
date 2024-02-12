'use client'
import styled from "styled-components"

export const Container = styled.section`
 margin-top: 4rem;
 padding:.5rem 2rem;

 @media screen and (max-width:768px){
    padding:0;
  }
   `
export const Wrapper = styled.div`
 display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    @media screen and (max-width:768px){
        grid-template-columns: 1fr 1fr;
  }
`

export const Title = styled.h1`
  padding: 0 2rem;
  font-size: 18px;
  font-weight:600; 
`