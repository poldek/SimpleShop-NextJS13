import React, {useRef} from 'react'
import Image from 'next/image'
import {Group, Paper, Title, Text, HoverCard, Tooltip} from '@mantine/core'
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { productsKey, listProducts } from "../pages/api/ApiProduct";
import swr from "swr";
import LoaderBar from './Loading';
import Link from 'next/link';

export default function CartFooter() {
  
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const {data: products, isLoading, error} = swr(productsKey, listProducts, {
      onSuccess: data => data.sort((a,b) => b.id - a.id )
  })

    return (
        <Paper>
            <Group position='center' mt={"5%"}>   
            <Title order={3} size="h1"  sx={{fontFamily: 'Greycliff CF'}}>
                Find what you love
            </Title>
            </Group>
            <Group position='center'>   
                <Text color={'dimmed'}>the best and cheapest</Text>
            </Group>
            {isLoading ? <LoaderBar /> :
                <Paper>
                <Carousel mt={'xl'}
                        sx={{ maxWidth: 320 }}
                        mx="auto"
                        withControls
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}
                        >
                            {products.map((product) => {
                                return(
                                    <Carousel.Slide key={product.id}>    
                                        <Link href="/">
                                        <Image
                                            width={300}
                                            height={300}
                                            src={product.image}
                                            alt={product.title}
                                            priority
                                        />
                                        </Link>
                                    </Carousel.Slide>
                                ) 
                            })}
                    </Carousel>
                </Paper>
            }   
        </Paper>
        
    )
}
