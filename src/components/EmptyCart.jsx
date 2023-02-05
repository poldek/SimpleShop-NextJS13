import React from 'react'
import { Group, Paper, Title } from '@mantine/core';
import Link from 'next/link';

function EmptyCart() {
  return (
    <Paper>
    <Group position="center" my={35}>
        <Title order={3} weight={100} align="center">
            Basket is empty
        </Title>
    </Group>
        <Group position="center">
        <Title order={1} weight={100} align="center">
            <Link href="/">Back to MySuperShop</Link>
        </Title>
    </Group>
    </Paper>
  )
}

export default EmptyCart