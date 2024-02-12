import Post from '../post/Post'
import {Container, Wrapper, Title } from './MightAlsoLikePost.style'

const MightAlsoLikePost = () => {
  return (
    <>
          <Container>
              <Title>You might also like</Title>
              <Wrapper>
              <Post isMobile={false}  isMobileNewPostFont={false} isHorizontal={true} isNewPostSection={false} isMightLikeSection={true} />
              <Post isMobile={false}  isMobileNewPostFont={false} isHorizontal={true} isNewPostSection={false} isMightLikeSection={true} />
              <Post isMobile={false}  isMobileNewPostFont={false} isHorizontal={true} isNewPostSection={false} isMightLikeSection={true} />
              <Post isMobile={false}  isMobileNewPostFont={false} isHorizontal={true} isNewPostSection={false} isMightLikeSection={true} />
              <Post isMobile={false}  isMobileNewPostFont={false} isHorizontal={true} isNewPostSection={false} isMightLikeSection={true} />
         </Wrapper>
          </Container>     
  </>
  )
}

export default MightAlsoLikePost