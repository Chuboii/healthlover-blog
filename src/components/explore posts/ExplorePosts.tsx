'use client'
import LoadMoreBtn from "../buttons/load more/LoadMoreBtn"
import Post from "../post/Post"
import { Container, Wrapper, Title } from './ExplorePosts.style'
import { useState, useEffect } from 'react'

const ExplorePosts = () => {
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        const setMobileResponse = () => {
            const windowWidth = window.innerWidth

            if (windowWidth <= 768) {
                setIsMobile(true)
            }
            else {
                setIsMobile(false)
            }
        }

        window.addEventListener("resize", setMobileResponse)

        return () => {
            window.removeEventListener("resize", setMobileResponse)
        }
    }, [isMobile])

  return (
      <Container>
          <Title>Featured Posts</Title>
          <Wrapper>
              <Post  isMobile={isMobile}  isMobileNewPostFont={true}  isNewPostSection={false} isHorizontal={true} isMightLikeSection={false} />
              <Post  isMobile={isMobile}  isMobileNewPostFont={true}  isNewPostSection={false} isHorizontal={true} isMightLikeSection={false } />
              <Post  isMobile={isMobile}  isMobileNewPostFont={true}  isNewPostSection={false} isHorizontal={true} isMightLikeSection={false} />
              <Post  isMobile={isMobile}  isMobileNewPostFont={true}  isNewPostSection={false} isHorizontal={true} isMightLikeSection={false} />
              <Post  isMobile={isMobile}  isMobileNewPostFont={true}  isNewPostSection={false} isHorizontal={true} isMightLikeSection={false } />
    </Wrapper>    
          <LoadMoreBtn />
      </Container>
  )
}

export default ExplorePosts