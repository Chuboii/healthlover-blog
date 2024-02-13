import { Container,Description,Wrapper, ImageBox, Tags,WrapBox, Tag, Title, Author } from "./Recommendation.style"
import Image from "next/image";

const ImageStyles: {
    borderRadius: string;
  } = {
    borderRadius: '20px'
}
  
const Recommendation = () => {

  
    return (
        <Container>
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
         <Author>by Daryl Wehner</Author>
    
      </WrapBox>
            </Wrapper>
            
    </Container>  
  )
}

export default Recommendation