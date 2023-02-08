import React, {useRef} from 'react'
import Image from 'next/image'
import { Card, Tooltip } from '@mantine/core'
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Hero() {
  
    const autoplay = useRef(Autoplay({ delay: 2000 }));
  
  return (
        <Tooltip label="Image from: https://www.vecteezy.com/ Author: Sarin Wongweash">
            <Card shadow="sm" p="xl" radius="md" withBorder>
                <Card.Section>
                    <Carousel mx="auto"
                         withControls={false}
                         align="start"
                         plugins={[autoplay.current]}
                         onMouseEnter={autoplay.current.stop}
                         onMouseLeave={autoplay.current.reset}
                        >
                        <Carousel.Slide>
                            <Image
                                width={930}
                                height={210}
                                src="/banner3.jpg"
                                alt="Shop Herro"
                                priority
                        />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                                width={930}
                                height={210}
                                src="/banner2.jpg"
                                alt="Shop Herro"
                                priority
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                             <Image
                                width={930}
                                height={210}
                                src="/banner5.jpg"
                                alt="Shop Herro"
                                priority
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                             <Image
                                width={930}
                                height={210}
                                src="/banner4.jpg"
                                alt="Shop Herro"
                                priority
                            />
                        </Carousel.Slide>
                    </Carousel>
                    
                </Card.Section>
            </Card>
        </Tooltip>
  )
}
