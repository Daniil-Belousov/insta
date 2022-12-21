import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #ef3125;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  position: absolute;
  bottom: 3rem;
  font-size: 2rem;
  font-weight: 400;
`

export const BGImage = styled.img`
  height: 100%;
  position: absolute;
`
