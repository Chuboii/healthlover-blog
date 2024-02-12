import Post from "../post/Post"
import {Container,  Title} from './NewPostStyle.style'

const NewPostDisplay = () => {
  return (
      <Container>
          <Title>{`Whats's`} new?</Title>
          <Post isMobileNewPostFont={true} isMobile={false} isNewPostSection={true} isHorizontal={false} isMightLikeSection={false} />
    </Container>
  )
}

export default NewPostDisplay