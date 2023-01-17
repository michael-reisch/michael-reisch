import Michael from './Michael'
import Reisch from './Reisch'
import AboutPast from './AboutPast'
import TreeImage from './TreeImage'
import AboutFuture from './AboutFuture'
import Contact from './Contact'
import AboutPresent from './AboutPresent'
import Urbanature from './Urbanature'

import { Flex, Spacer } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Michael />
      <Reisch />
      <Contact />
      <Flex>
        <AboutPast />
        <Spacer />
        <TreeImage />
        <Spacer />
        <AboutPresent />
      </Flex>
      <AboutFuture />
      <Urbanature />
    </>
  )
}
