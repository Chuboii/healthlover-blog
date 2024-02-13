
import { Container,WrapperBox,Description,Wrapper, ImageBox, Tags,WrapBox, Tag, Title, Author } from "./MightAlsoLikePost.style"
import Image from "next/image";

const ImageStyles: {
  borderRadius: string;
} = {
  borderRadius:'10px'
}

const MightAlsoLikePost = () => {
  return (
    <>
      <Container>
        <Title>More like this</Title>
        <WrapperBox>
    <Wrapper>
<ImageBox>
<Image style={ImageStyles} src='/images (14).jpeg' fill alt=''/>
</ImageBox>
<WrapBox>
<Title>I can solve new problems very easily</Title>

  </WrapBox>
        </Wrapper>
        
        <Wrapper>
<ImageBox>
<Image style={ImageStyles} src='/images (14).jpeg' fill alt=''/>
</ImageBox>
<WrapBox>
<Title>I can solve new problems very easily</Title>

  </WrapBox>
        </Wrapper>
        <Wrapper>
<ImageBox>
<Image style={ImageStyles} src='/images (14).jpeg' fill alt=''/>
</ImageBox>
<WrapBox>
<Title>I can solve new problems very easily</Title>

  </WrapBox>
        </Wrapper>
        <Wrapper>
<ImageBox>
<Image style={ImageStyles} src='/images (14).jpeg' fill alt=''/>
</ImageBox>
<WrapBox>
<Title>I can solve new problems very easily</Title>

  </WrapBox>
        </Wrapper>
        <Wrapper>
<ImageBox>
<Image style={ImageStyles} src='/images (14).jpeg' fill alt=''/>
</ImageBox>
<WrapBox>
<Title>I can solve new problems very easily</Title>

  </WrapBox>
        </Wrapper>
        
        
        </WrapperBox>
</Container>  
  </>
  )
}

export default MightAlsoLikePost