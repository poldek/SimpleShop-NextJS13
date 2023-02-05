import React from 'react'
import useCartStore from "@/store/useCartStore"
import isLoading from '@/pages/hooks/isLoading';
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  ScrollArea,
  Indicator,
  Container,
  Button
} from '@mantine/core';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons';
import EmptyCart from './EmptyCart';

function ShoppingCart() {
  
  const productCart = useCartStore(state => state.cart);
  const setQty = useCartStore(state => state.addQtyForPosition);
  const removeQty = useCartStore(state => state.removeQtyForPosition);
  const sumCart = useCartStore(state => state.cartSum);
  const clearCart = useCartStore((state) => state.clearCart);
  const removePositionCart = useCartStore((state) => state.removePositionCart);
  
  /**
   * Simple solution, wait for initlilize page
   */
  const isLoadingPage = isLoading();

  const removePositionQty = (item) => {
    removeQty(item);
  }

  const removeCartPosition = (payload) => { 
    removePositionCart(payload);
  }
  return (
    
    <Container>
    {isLoadingPage ? 
     productCart.length > 0 ? 
        <>
          <Group position="right" mt="md" mb="xs">
          <Button color={'orange'} onClick={clearCart}>Clear shopping cart</Button>
          </Group>
          <ScrollArea>
            <Table sx={{ minWidth: 900 }} verticalSpacing="sm">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Sum</th>
                  <th>Action</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {productCart.map((cart) => {
                return(
                  <tr key={cart.id}>
                    <td>
                      <Group spacing="sm">
                        <Avatar size={36} src={cart.image} />
                          <Text size="sm" weight={500}>
                            {cart.title}
                          </Text>
                      </Group>
                    </td>
                    <td>
                    <Group position="center" spacing="xl">
                        <Indicator label={cart.qty} inline size={22} color="orange">
                        </Indicator>
                    </Group>
                    </td>
                    <td>
                      {cart.price.toFixed(2)}$
                    </td>
                    <td>
                      {cart.sumPosition.toFixed(2)}$
                    </td>
                    <td>
                    <Group spacing={0} position="end">
                    <ActionIcon color="green" variant="outline" mr={3}>
                          <IconPlus size={26} stroke={1.5} onClick={(e) => {
                            e.preventDefault();
                            setQty(cart.id)
                            }} >
                          </IconPlus>
                        </ActionIcon>
                        <ActionIcon color="orange" variant="outline">
                          <IconMinus size={26} stroke={1.5}  onClick={(e) => {
                            e.preventDefault();
                            removePositionQty(cart.id)
                            }} >
                          </IconMinus>
                        </ActionIcon>
                        </Group>
                    </td>
                    <td>
                        <ActionIcon color="red" variant="outline">
                          <IconTrash size={26} stroke={1.5} onClick={(e) => {
                            e.preventDefault();
                            removeCartPosition(cart)
                            }} >
                          </IconTrash>
                        </ActionIcon>
                    </td>
                  </tr>
                )
              })}
              </tbody>
              
            </Table>
            <Group position="right" mt="md" mb="xs">
              <Text size="xl" weight={500}>
               Cart total:  { sumCart.toFixed(2)}$
              </Text>
          </Group>
          <Group position="right" mt="md" mb="xs">
              <Text size="sm" color="dimmed">
               Transport:45$
              </Text>
          </Group>
          <Group position="right" mt="md" mb="xs">
              <Text size="sm" color="dimmed">
               Tax: 12%
              </Text>
          </Group>
          </ScrollArea>
          </>
            : <EmptyCart />
      : null }
    </Container>
  )
}

export default ShoppingCart