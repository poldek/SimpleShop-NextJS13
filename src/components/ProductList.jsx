import React from 'react'
import { productsKey, listProducts } from "../pages/api/ApiProduct";
import swr from "swr";
import { useState } from "react";
import useCartStore from "@/store/useCartStore"
import { Grid, Title ,Card, Text, Badge, Button, Group, Input, Affix, Transition } from '@mantine/core';
import { IconShoppingCart, IconArrowUp } from '@tabler/icons';
import LoaderBar from './Loading';
import Image from 'next/image';
import { showNotification } from '@mantine/notifications';
import { useWindowScroll } from '@mantine/hooks';


export default function ProductList() {

  const [scroll, scrollTo] = useWindowScroll();
  /**
   * Get product, use SWR
   */
  const {data: products, isLoading, error} = swr(productsKey, listProducts, {
      onSuccess: data => data.sort((a,b) => b.id - a.id )
  })
  
  /**
   * Shop store,use Zustand
   */
  const addNewPosition = useCartStore(state => state.addCartPosition);
  const productCart = useCartStore(state => state.cart);
  const setNewQty = useCartStore(state => state.setQtyForExistPosition);
  const [qty, sQty] = useState(0);

  const newPosition = (product) => {
      if(qty <= 0) return;
      
      //First item
      const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        qty: qty,
        sum: product,
        sumPosition: qty * product.price
      }
      if(productCart.length > 0) {
          const itemExists = productCart.find((item) => item.id === product.id);
          if(itemExists) {
            setNewQty(itemExists, qty);
          } else {
            addNewPosition(item); 
          }  
      } else {
        addNewPosition(item); 
      }
      sQty(0);
      document.getElementById(`${product.id}`).value = "";
      showNotification({
            autoClose: 3000,
            color: "green",
            title: "Cart information",
            message: "Position:" + product.title + " added",
        });
  }
  return (
    <> 
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              color={'orange'}
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              To top
            </Button>
          )}
        </Transition>
      </Affix>
        { isLoading ? <LoaderBar /> :
            error ? "Error load product":
            products.map((product) => {
            return(
              <Group position="center" mt="md" mb="xs" key={product.id}>
                  <Grid>
                      <Grid.Col>
                        <Card shadow="sm" p="xl" radius="md" withBorder>
                            <Card.Section>
                              <Image
                                  width={200}
                                  height={200}
                                  my={5}
                                  mx={5}
                                  fit="fill"
                                  src={product.image}
                                  alt={product.title}
                              />
                            </Card.Section>

                            <Group position="apart" mt="md" mb="xs">
                              <Text weight={700}>{product.title}</Text>
                              <Badge color="pink" variant="light">
                                {product.category }
                              </Badge>
                            </Group>

                            <Text size="sm" color="dimmed" lineClamp={2}>
                              {product.description} {product.description}
                            </Text>
                             <Group position="right" my={10}>
                                <Title order={3}>{product.price}$</Title>
                             </Group>
                             <Group position="right" my={10}>
                             <Input
                                icon={<IconShoppingCart />}
                                variant="default"
                                type="number"
                                placeholder="enter qty"
                                onChange={(e) => sQty(e.target.value)} id={product.id}
                              />
                              <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                                onClick={(e) => {
                                e.preventDefault();
                                newPosition(product)
                              }}>
                                Add to cart
                              </Button>
                            </Group>
                        </Card>
                      </Grid.Col>
                  </Grid>
              </Group>
            )
          })
        }
    </>
  )
}
