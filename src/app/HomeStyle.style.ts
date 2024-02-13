'use client'
import styled from "styled-components"

export const Container = styled.main`


`
export const Wrapper = styled.section`
 display: flex;
 padding:.5rem 4rem;
 justify-content:space-between;
 align-items:flex-start;
 margin-top:6rem;
 @media screen and (max-width:768px){
    flex-direction:column; 
    padding:.5rem 0;
  display: block;
    margin-top:1rem;
  }
`
export const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width: 40%;
  margin-top:1rem;

  @media screen and (max-width:768px){
 width: 100%;
 display:block;
 padding:0;
  }
`