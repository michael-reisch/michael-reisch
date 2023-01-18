import Name from './Name'
import Contact from './Contact'
import TreeImage from './TreeImage'
import Urbanature from './Urbanature'
import About from './About'

import { Flex, Spacer } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <div id="body-container">
        <Name />
        <Contact />
        <About />
        <TreeImage />
      </div>
    </>
  )
}
