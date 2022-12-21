import { Wrapper, Title, Description, BGImage } from './styles'
import { bgImage } from 'images'

const Main = ({ title = 'NEEDESIGN', description = 'from Belousovsky' }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <BGImage src={bgImage.src} />
  </Wrapper>
)

export default Main
