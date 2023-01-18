import Name from './Name'
import AboutPast from './AboutPast'
import AboutFuture from './AboutFuture'
import Contact from './Contact'
import AboutPresent from './AboutPresent'
import TreeImage from './TreeImage'
import Urbanature from './Urbanature'

import { Flex, Spacer } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
        <Flex id="name-contact-container">
          <Name />
          <Contact />
        </Flex>
        <Flex id="about-image-container">
          <Flex id="about-container">
            <AboutPast />
            <AboutPresent />
            <AboutFuture />
          </Flex>
          <TreeImage />
        </Flex>
      {/* <Urbanature /> */}
    </>
  )
}
