import {SubscribeButton,Span, IconBox, Icon} from './SubscriberBtn.style'

type SubscribeBtnType = {
    increaseWidth: string;
    padding: string;
    hideIcon: boolean;
}
const SubscriberBtn = ({increaseWidth,hideIcon, padding} : SubscribeBtnType) => {

    
    
  return (
      <>
          <SubscribeButton width={increaseWidth} padding={padding}>
              <Span>
              Become a subscriber
              </Span>
              {hideIcon && <IconBox>
                  <Icon className="fa fa-arrow-right" aria-hidden="true"></Icon>
              </IconBox>}
          </SubscribeButton>
    </>
  )
}

export default SubscriberBtn