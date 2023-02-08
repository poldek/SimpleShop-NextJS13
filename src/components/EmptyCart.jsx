import React from 'react'
import { Group, Paper, Title, Button } from '@mantine/core';
import Link from 'next/link';
import CartFooter from './CartFooter';

function EmptyCart() {
  return (
    <Paper >
    <Group position="center" my={35}>
          <Title order={3} weight={100} align="center">
              Basket is empty
          </Title>
      </Group>
      <Group position="center">
          <Link href="/">
              <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Back to shop</Button>
          </Link>
      </Group>
    </Paper>
  )
}

export default EmptyCart