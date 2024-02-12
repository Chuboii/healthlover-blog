import SearchBox from '../search box/SearchBox'
import {Container, Title, Text } from './WelcomeTexts.style'

const WelcomeTexts = () => {


    return (
        <Container>
            <Title>Hey, {`We're`} Health Lovers</Title>
            <Text>See our thoughts, stories and ideas</Text>
        <SearchBox/>
        </Container>
    )
}

export default WelcomeTexts