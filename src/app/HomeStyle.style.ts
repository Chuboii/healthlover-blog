'use client'
import styled from "styled-components"

export const Container = styled.main`


`
export const Wrapper = styled.section`
 display: flex;
 padding:.5rem 3rem;
 justify-content:space-between;
 align-items:flex-start;
 margin-top:6rem;
 @media screen and (max-width:768px){
    flex-direction:column; 
    padding:.5rem 1rem;
    margin-top:1rem;
  }
`
export const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`