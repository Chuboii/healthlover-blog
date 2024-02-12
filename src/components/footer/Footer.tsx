import SubscriberBtn from '../buttons/subscriber btn/SubscriberBtn'
import {Container,BoxButton, List, Title, Icon, Span, Ul, Wrapper, Box, Logo, SubText } from './Footer.style'
import Link from 'next/link'

const Footer = () => {
  return (
      <Container>
          <Wrapper>
              <Box>
                  <Logo>HealthLover</Logo>
                  <SubText>Your medical needs at your finger tip</SubText>
              </Box>    

              <BoxButton>
                  <SubscriberBtn hideIcon={true} increaseWidth='350px' padding="1.2rem"/>
              <SubText>Get all the latest posts delivered straight to your inbox</SubText>

              </BoxButton>
          </Wrapper>
          <Wrapper>
           <Ul>
            <Title>Social</Title>
            <List>
                      <Link href="/">
                      <Icon className="fa fa-facebook" aria-hidden="true"></Icon>
                      <Span>Facebook</Span>
                      </Link>
            </List>
            <List>
                      <Link href="/">
                      <Icon className="fa fa-twitter" aria-hidden="true"></Icon>
                      <Span>Twitter</Span>
                      </Link>
            </List>
            <List>
                      <Link href="/">
                       <Icon className="fa fa-instagram" aria-hidden="true"></Icon>
                      <Span>Instagram</Span>    
                      </Link>
                  </List>
                  
                  <List>
                      <Link href="/">
                      <Icon className="fa fa-linkedin" aria-hidden="true"></Icon>
                      <Span>LinkedIn</Span>    
                      </Link>
            </List>
              </Ul>
              
              
              <Ul>
                  <Title>About</Title>
            <List>
                <Link href="/">Contact</Link>
            </List>
              </Ul>
              

              <Ul>
                  <Title>Membership</Title>
            <List>
                <Link href="/">Membership</Link>
            </List>
            <List>
                <Link href="/">Account Free</Link>
            </List>
            <List>
                <Link href="/">Account Paid</Link>
            </List>
              </Ul>
              
              <Ul>
                  <Title>Resources</Title>
            <List>
                <Link href="/">Sign in</Link>
            </List>
            <List>
                <Link href="/">Sign up</Link>
            </List>
            <List>
                <Link href="/">Tags</Link>
            </List>
            <List>
                <Link href="/">Author</Link>
            </List>
              </Ul>
              
           <Ul>
          <Title>Company</Title>
            <List>
                <Link href="/">Company Address</Link>
            </List>
            <List>
                <Link href="/">Company email</Link>
            </List>
           </Ul>
          </Wrapper>
    </Container>
  )
}

export default Footer