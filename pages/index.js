import Name from './Name'
import Contact from './Contact'
import TreeImage from './TreeImage'
import Urbanature from './Urbanature'
import About from './About'

import { Flex, Spacer } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex id='body-container'>
        <Flex id="name-contact-container">
          <Name />
          <Contact />
        </Flex>
        <Flex id="about-image-container">
          <About />
          <TreeImage />
        </Flex>
      </Flex>
    </>
  )
}
