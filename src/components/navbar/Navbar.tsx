import React from 'react'
import {
    Container, WrapIcon, Box, BarsIcon, SearchIcon, Form, Wrapper, Logo, Ul, List
} from './Navbar.style'
import NavbarButtons from '../buttons/nav btns/NavbarButtons'

const Navbar = () => {
  return (
      <Container>
          <Wrapper>
              <Logo>
                  HealthLover
              </Logo>
              <Ul>
                <List>Tags</List>
                <List>About</List>
                <List>Contact</List>
                <List>Support</List>
              </Ul>
          </Wrapper>
          
          <Box>
              <Form>
                  <SearchIcon className="fa fa-search" aria-hidden="true"></SearchIcon>
              </Form>
              <NavbarButtons hideIcon={false} />

    
              <WrapIcon>
              <BarsIcon className="fa fa-bars" aria-hidden="true"></BarsIcon>
              </WrapIcon>
          </Box>
    </Container>
  )
}

export default Navbar