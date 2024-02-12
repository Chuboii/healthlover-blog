import {Container, Wrapper, Input, Icon, Info} from './SearchForm.style'

const SearchForm = () => {
  return (
      <Container>
          <Wrapper>
              <Input placeholder="Search Here..."/>
              <Icon className="fa fa-times" aria-hidden="true"></Icon>
          </Wrapper>
          <Info>Please enter at least 3 characters</Info>
    </Container>
  )
}

export default SearchForm