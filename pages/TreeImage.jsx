import React from 'react'
import { Image } from '@chakra-ui/react'

const TreeImage = (props) => {
  return (
    <div id='tree-image-container'>
      <Image
        id='tree-image'
        src="/techTree.svg"
        alt="digital tree image"
      ></Image>
    </div>
  )
}

export default TreeImage
