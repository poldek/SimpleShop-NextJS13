import React from 'react'
import Image from 'next/image'
import { Card } from '@mantine/core'
export default function Hero() {
  return (
   
          <Card shadow="sm" p="xl" radius="md" withBorder>
                <Card.Section>
                    <Image
                        width={930}
                        height={180}
                        src="/banner-free-vector.jpg"
                        alt="Hero image"
                    />
                </Card.Section>
            </Card>

 
  )
}
