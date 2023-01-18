import React from 'react'
import { Image } from '@chakra-ui/react'

const TreeImage = (props) => {
  return (
    <div id='tree-image-container'>
      <Image
        id='tree-image'
        src="/techTree.svg"
        alt="digital tree image"
        width="500"
        height="500"
      ></Image>
    </div>
  )
}

export default TreeImage
