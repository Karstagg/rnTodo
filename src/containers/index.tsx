import * as React from 'react'
import styled from 'styled-components'
import Splash from '../components/splash'
import {View} from 'react-native'

const MainContainer = styled(View)`
  flex: 1;
  background-color: black;
`

const Index: React.FC = () => (
  <MainContainer>
    <Splash />
  </MainContainer>
)

export default Index
