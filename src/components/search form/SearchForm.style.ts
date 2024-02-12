'use client'
import styled from "styled-components"

export const Container = styled.form`
  position: absolute;
  top:10%;
  left:50%;
  background-color: #F1EFE3;
  transform: translateX(-50%);
  width:50%;
  z-index:2;
padding: 1rem;
display: none;
border-radius: 20px;
`
export const Input = styled.input`
  padding:1rem;
  width:100%;
  font-size: 40px;
  height: 100px;
  font-weight:600;
  outline:none;
  border:none;
  background-color: transparent;

  &::placeholder{
    color:black;
  }
`
export const Icon = styled.i`
  font-size: 30px;
  margin:auto;
`
export const Info = styled.p`
  
`
export const Wrapper = styled.div`
  display: flex;
`
