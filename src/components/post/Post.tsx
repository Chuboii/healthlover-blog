import Image from "next/image"
import { Container,Description,Wrapper, ImageBox, Tags,WrapBox, Tag, Title, Author } from "./Post.style"

const ImageStyles: {
    borderRadius: string;
} = {
    borderRadius:'10px'
}



type PostTypes = {
  isHorizontal: boolean;
  isMightLikeSection: boolean;
  isNewPostSection: boolean;
  isMobile: boolean;
  isMobileNewPostFont: boolean;
}



const Post = ({isHorizontal,isNewPostSection, isMightLikeSection, isMobile,  isMobileNewPostFont} : PostTypes) => {
  


  return (
    <Container padding={isMobile ? ".5rem" : ''}>
      <Wrapper
        display={isMobile ? "flex" :"block"}
        width={isMightLikeSection ? "300px" : isNewPostSection ? "100%" : "400px"}
        gap={isHorizontal ? "1rem" : "0"}
      >
  
  <ImageBox
          height={isMightLikeSection ? "200px" : isNewPostSection ? "700px" : isMobile ? "110px" : "300px"
        }>
      <Image style={ImageStyles} src='/images (14).jpeg' fill alt=''/>
  </ImageBox>
        {isMightLikeSection ? "" : isMobile ? "" :
          <Tags>
          <Tag>Idea</Tag>
          <Tag>Retro</Tag>
        </Tags>
        }
    <WrapBox>
    <Title fontSize={isMightLikeSection ? "21px": isMobile ? "25px" :  isMobileNewPostFont ? '35px': isNewPostSection ? "50px"  :"30px"}>I can solve new problems very easily</Title>
    {isMightLikeSection ? "" : 
    <>
    <Description fontSize={isNewPostSection ? "30px" : "17px"} width={isNewPostSection ? "800px" : "350px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium cum hkskksjosjoj hoooeh ojrowjwr ojrojworkarum velit impedit dolore nulla, quas explicabo doloremque tempore, corporis repudiandae veritatis excepturi ratione earum, alias saepe. Fugiat, placeat!</Description>    
          <Author>by Daryl Wehner</Author>
            </>
          }
        </WrapBox>
      </Wrapper>
    
</Container>
  )
}

export default Post