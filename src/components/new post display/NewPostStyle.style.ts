'use client'
import styled from "styled-components"

export const Container = styled.section`
  width:100%;
  padding-right:2rem;

  @media screen and (max-width:768px){
    padding:0;
    padding-bottom:2rem;
    border-bottom:1px solid rgba(0,0,0,.3);
  }
`
export const Title = styled.h1`
 padding:.5rem 1rem;
 font-weight:700;
`