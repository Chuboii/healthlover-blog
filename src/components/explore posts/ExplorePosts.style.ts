'use client'
import styled from "styled-components"


export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  margin-top:3rem;
  
  @media screen and (max-width:768px){
    padding: 0 1rem;
  }
`
export const Wrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width:768px){
   padding:0;
  }
`
export const Title = styled.h1`
  padding:.5rem 2rem;
  font-size:20px;
  font-weight:700;
`