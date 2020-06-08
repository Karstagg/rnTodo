import * as React from 'react'
import {Text, View} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import styled from 'styled-components'

const SplashTitleArea = styled(View)`
  height: ${hp(20)}px;
  margin-top: ${hp(20)}px;
`
const SplashTitle = styled(Text)`
  text-align: center;
  color: white;
  margin-top: ${hp(2)}px;
  font-size: ${hp(7)}px;
`
const SplashSubheading = styled(SplashTitle)`
  font-size: ${hp(2.5)}px;
`

const Splash: React.FC = () => (
  <>
    <SplashTitleArea>
      <SplashTitle>Hello World</SplashTitle>
      <SplashSubheading>Welcome to React Native</SplashSubheading>
    </SplashTitleArea>
  </>
)

export default Splash
