import React from 'react'
import { Flex, Loader} from '@mantine/core';

function LoaderBar() {
  return (
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        my={150}
    >
        <Loader variant="dots" color={'orange'} size={80} />
    </Flex>

  )
}

export default LoaderBar