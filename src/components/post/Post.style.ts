'use client'
import styled from 'styled-components'

type WrapperStyleProp = {
  gap: string;
  width: string;
  display: string;
}

type HeightStyleProp = {
  height: string;
}

type FontSizeProp = {
  fontSize: string;
}
type DescriptionProp = {
  fontSize: string;
  width: string;
}
export const Container = styled.section`
 padding:0 ${({padding}) => padding};
`
export const ImageBox = styled.div<HeightStyleProp>`
position:relative;
width:100%;
height: ${({height}) => height};
border-radius: 10px;
margin-bottom: .5rem;

@media screen and (max-width:768px){
   height:${({ height }) => height};
   margin-right: 1.5rem;
  }
`
export const Title = styled.h1<FontSizeProp>`
 font-weight:900;
 line-height: 1.1;
 font-size:${({fontSize})=> fontSize};
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

 @media screen and (max-width:768px){
 font-size:${({fontSize}) => fontSize};
  }

`
export const Tags = styled.div`
  display: flex;
  align-items: center;
  margin:.5rem 0;

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
export const Wrapper = styled.div<WrapperStyleProp>`
margin:2rem 0;
margin:${({ gap }) => gap};
max-width: ${({ width }) => width};

@media screen and (max-width:768px){
   max-width:600px;
   width:100%;
   margin:.5rem 0;
   display:${({display}) => display};
}
`

export const WrapBox = styled.div`


@media screen and (max-width:768px){
  display:flex;
  flex-direction: column;
  }
`

export const Description = styled.p<DescriptionProp>`
width:${({width}) => width};
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
  overflow: hidden;
  max-height:100px;
  font-size:${({fontSize}) => fontSize};
  text-overflow: ellipsis;

  @media screen and (max-width:768px){
     display:none;
  }
`