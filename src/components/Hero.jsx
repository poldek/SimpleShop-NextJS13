import React from 'react'
import Image from 'next/image'
import { Card, Tooltip } from '@mantine/core'
export default function Hero() {
  return (
        <Tooltip label="Image from: https://www.vecteezy.com/ Author: Sarin Wongweash ">
            <Card shadow="sm" p="xl" radius="md" withBorder>
                <Card.Section>
                    <Image
                        width={930}
                        height={210}
                        src="/banner2.jpg"
                        alt="Shop Herro"
                        priority
                    />
                </Card.Section>
            </Card>
        </Tooltip>
  )
}
