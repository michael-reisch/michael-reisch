import Head from 'next/head'
import { Inter } from '@next/font/google'

import { Flex, Divider } from '@chakra-ui/react'

import About from './About'
import Nav from './Nav'
import TreeImage from './TreeImage'
import FaceImage from './FaceImage'

import { useEffect } from 'react'

import { gsap } from 'gsap'
import Trees from './Trees'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      '.header',
      { x: 1000 },
      {
        x: 0,
        ease: 'bounce',
        duration: 3,
        immediateRender: false,
      }
    )
    gsap.fromTo(
      '#about-image-container',
      { x: 2000 },
      {
        x: 0,
        ease: 'bounce',
        duration: 3,
        immediateRender: false,
      }
    )
    gsap.fromTo(
      '#divider',
      { x: 2000 },
      { x: 0, ease: 'bounce', duration: 5, immediateRender: false }
    )
    gsap.fromTo(
      '#urbanature-container',
      { x: 2500 },
      {
        x: 0,
        ease: 'bounce',
        duration: 4,
        immediateRender: false,
      }
    )
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
      <Divider id="divider" />
      <Flex id="about-image-urbanature-container">
        <Flex id="about-image-container">
          <About className="about-text" />
          <TreeImage className="image-yes" />
        </Flex>
        <Trees id="urbanature-container" />
      </Flex>
    </>
  )
}
