import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Flex } from '@chakra-ui/react'

import About from './About'
import Nav from './Nav'
import TreeImage from './TreeImage'
import FaceImage from './FaceImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Reisch</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="" href="" />
      </Head>
      <Flex id="header">
        <FaceImage />
        <Nav />
      </Flex>
      <Flex>
        <About />
        <TreeImage />
      </Flex>
    </>
  )
}
