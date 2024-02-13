import { Container,Description,Wrapper, ImageBox, Tags,WrapBox, Tag, Title, Author } from "./NewPostStyle.style"
import Image from "next/image";
const ImageStyles: {
  borderRadius: string;
} = {
  borderRadius:'40px'
}

const NewPostDisplay = () => {

  
  return (
    <Container>
      <Title>{ `What's new`}</Title>
    <Wrapper>
<ImageBox>
<Image style={ImageStyles} src='/images (14).jpeg' fill alt=''/>
</ImageBox>
    <Tags>
    <Tag>Idea</Tag>
    <Tag>Retro</Tag>
  </Tags>
<WrapBox>
<Title>I can solve new problems very easily</Title>
<Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium cum hkskksjosjoj hoooeh ojrowjwr ojrojworkarum velit impedit dolore nulla, quas explicabo doloremque tempore, corporis repudiandae veritatis excepturi ratione earum, alias saepe. Fugiat, placeat!</Description>    
    <Author>by Daryl Wehner</Author>

  </WrapBox>
</Wrapper>
</Container>  
  )
}

export default NewPostDisplay