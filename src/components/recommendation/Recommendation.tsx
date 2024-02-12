'use client'
import Post from "../post/Post"
import { Container } from './Recommendation.style'
import { useState, useEffect } from 'react'

const Recommendation = () => {
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
        <Post
          isMobile={isMobile} isMobileNewPostFont={false} isHorizontal={true} isNewPostSection={false} isMightLikeSection={false} />
        
        <Post
          isMobile={isMobile} isMobileNewPostFont={false} isHorizontal={true} isNewPostSection={false} isMightLikeSection={false} />
      </Container>
  )
}

export default Recommendation