import EmailSubscribeBtn from "../buttons/email subscribe btn/EmailSubscribeBtn"
import { Container, Input, Title, Text, Form } from './Newsletter.style'


const Newsletter = () => {
  return (
      <Container>
          <Title>Newsletter</Title>
          <Text>Get all the latest posts delivered to your inbox</Text>
          <Form>
              <Input placeholder="Your email address" />
              <EmailSubscribeBtn/>
          </Form>
    </Container>
  )
}

export default Newsletter