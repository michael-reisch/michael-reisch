import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Flex } from '@chakra-ui/react'

import About from './About'
import Nav from './Nav'
import TreeImage from './TreeImage'
import FaceImage from './FaceImage'

import { useEffect } from 'react'

import { gsap } from 'gsap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      '.header',
      { x: 800 },
      {
        x: 0,
        ease: 'bounce',
        duration: 3,
        immediateRender: false,
      }
    )
    gsap.fromTo(
      '#about-image-container',
      { x: 900 },
      {
        x: 0,
        ease: 'bounce',
        duration: 3,
        immediateRender: false,
      }
    )
    console.log('huh')
  }, [])

  return (
    <>
      <Head>
        <title>Michael Reisch</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="" href="" />{' '}
      </Head>
      <Flex className="header" id="header">
        <FaceImage />
        <Nav />
      </Flex>
      <Flex id="about-image-container">
        <About className="about-text" />
        <TreeImage className="image-yes" />
      </Flex>
    </>
  )
}
