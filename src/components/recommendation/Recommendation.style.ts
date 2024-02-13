'use client'
import styled from 'styled-components'


export const Container = styled.section`
 padding:0;
 margin-top: 1rem;
 @media screen and (max-width:768px){
 padding: 1rem;
 margin: 0;
}
`
export const ImageBox = styled.div`
position:relative;
width:100%;
height: 300px;
border-radius: 10px;
margin-bottom: .5rem;

@media screen and (max-width:768px){
   height:120px;
   margin-right: 1.5rem;
  }
`
export const Title = styled.h1`
 font-weight:900;
 line-height: 1.1;
 font-size:23px;
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

 @media screen and (max-width:768px){
 font-size:20px;
  }

`
export const Tags = styled.div`
  display: flex;
  align-items: center;
  margin:.5rem 0;
  @media screen and (max-width:768px){
   display:none;
  }
`
export const Author = styled.p`
 margin-top:1rem;
 text-transform:capitalize;
 color:gray;
`
export const Tag = styled.div`
margin-right:  0.5rem;
background:#D9D7CB;
padding:.3rem .9rem;
font-size: 14px;
border-radius:20px;
`
export const Wrapper = styled.div`
margin:2rem 0;
margin:0;
max-width: 500px;

@media screen and (max-width:768px){
   width:100%;
   margin:.5rem 0;
   display:flex;
}
`

export const WrapBox = styled.div`


@media screen and (max-width:768px){
  display:flex;
  flex-direction: column;
  }
`

export const Description = styled.p`
width:200px;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
  overflow: hidden;
  max-height:100px;
  font-size:20px;
  text-overflow: ellipsis;

  @media screen and (max-width:768px){
     display:none;
  }
`