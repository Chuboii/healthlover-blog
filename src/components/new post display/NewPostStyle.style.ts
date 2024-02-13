'use client'
import styled from 'styled-components'


export const Container = styled.section`
 padding:0;
 width: 100%;

 @media screen and (max-width:768px){
 padding:0 1rem;
  }
`
export const ImageBox = styled.div`
position:relative;
width:100%;
height: 600px;
border-radius: 10px;
margin-bottom: .5rem;

@media screen and (max-width:768px){
   height:300px;
   margin-right: 1.5rem;
   
  }
`
export const Title = styled.h1`
 font-weight:900;
 line-height: 1.1;
 font-size:45px;
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

 @media screen and (max-width:768px){
 font-size:20px;
  }

`
export const Tags = styled.div`
  display: flex;
  align-items: center;
  margin:1rem 0;

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
border-radius:20px;
`
export const Wrapper = styled.div`
margin:2rem 0;
margin:0;
max-width: 100%;
padding:1rem 0;
padding-right: 3rem;

@media screen and (max-width:768px){
   width:100%;
   padding:1rem 0;
   margin:.5rem 0;
   display:block;
}
`

export const WrapBox = styled.div`


@media screen and (max-width:768px){
  display:flex;
  flex-direction: column;
  }
`

export const Description = styled.p`
max-width:800px;
display: -webkit-box;
-webkit-line-clamp: 3;
margin-top: 1rem;
-webkit-box-orient: vertical;
  overflow: hidden;
  max-height:100px;
  font-size:20px;
  text-overflow: ellipsis;

  @media screen and (max-width:768px){
     display:none;
  }
`