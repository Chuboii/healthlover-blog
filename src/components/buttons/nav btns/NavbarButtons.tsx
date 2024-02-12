import {ButtonBox} from './NavbarButtons.style'
import SubscriberBtn from '../subscriber btn/SubscriberBtn'
import SigninBtn from '../signin btn/SigninBtn'

type NavbarButtonType = {
  hideIcon: boolean;
}

const NavbarButtons = ({hideIcon}: NavbarButtonType) => {

  return (
      <ButtonBox>
          <SigninBtn/>
      <SubscriberBtn hideIcon={hideIcon} increaseWidth="" padding=".8rem"/>
      </ButtonBox>
  )
}

export default NavbarButtons