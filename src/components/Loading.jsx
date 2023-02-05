import React from 'react'
import { Flex, Loader, Paper, Container } from '@mantine/core';

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
        <Loader variant="bars" size={50} />
    </Flex>

  )
}

export default LoaderBar