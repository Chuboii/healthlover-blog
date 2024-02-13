import LoadMoreBtn from "../buttons/load more/LoadMoreBtn"
import { Container,WrapperBox,Description,Wrapper, ImageBox, Tags,WrapBox, Tag, Title, Author } from "./TrendingPosts.style"
import Image from "next/image";

const ImageStyles: {
  borderRadius: string;
} = {
  borderRadius: '20px',
}



const TrendingPosts = () => {


  return (
      <Container>
      <Title>Trending Posts</Title>
      
          <WrapperBox>
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
      </WrapperBox>    
      <LoadMoreBtn />
      </Container>
  )
}

export default TrendingPosts