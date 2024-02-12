import {Container, Input, IconBox, Icon} from './SearchBox.style'

const SearchBox = () => {


    return (
        <Container>
            <Input readOnly  placeholder="Click here to search for posts"/>
            <IconBox>
                <Icon className="fa fa-search" aria-hidden="true"></Icon>
            </IconBox>
        </Container>
    )
}

export default SearchBox