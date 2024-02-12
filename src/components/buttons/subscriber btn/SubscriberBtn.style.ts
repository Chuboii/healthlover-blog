'use client'

import styled from "styled-components"

type SubscribeStyleType = {
    width: string;
    padding: string;
}
export const SubscribeButton = styled.button<SubscribeStyleType>`
 background-color:#5650AB ;
 color:white;
padding:${({padding}) => padding} 1.3rem;
border-radius: 40px;
width:${({ width }) => width};
display:flex;
justify-content:center;
align-items: center;
`
export const Icon = styled.i`

`
export const IconBox = styled.div`
margin-left: 1.5rem;
`
export const Span = styled.span`

`
