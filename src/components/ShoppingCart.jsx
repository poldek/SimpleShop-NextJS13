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
  Anchor,
  ScrollArea,
  useMantineTheme,
  Container,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons';

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
          <Group position="center" mt="md" mb="xs">
            <ScrollArea>
              <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Job title</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr >
                        <td>
                          <Group spacing="sm">
                            <Avatar size={30} src="" radius={30} />
                            <Text size="sm" weight={500}>
                                      <h2>Sum cart: { sumCart.toFixed(2)}</h2>
            My Shopping Cart: { productCart.length > 0 ? 
              <>
               <button onClick={clearCart}>Clear shopping cart</button>
                <h2>Position in cart: {productCart.length}</h2>
               
                    {productCart.map((cart) => {
                        return(
                          <div key={cart.id}>
                            <td>
                        <Badge
                          color="orange"
                        >
                          {cart.id}         
                        </Badge>
                      </td>
                         <td>
                      <Text size="sm" color="dimmed">
                      {cart.title}
                      </Text>
                    </td>
                     <td>
                      <Text size="sm" color="dimmed">
                     {cart.price}
                      </Text>
                    </td>
                      <td>
                      <Text size="sm" color="dimmed">
                     {cart.qty} 
                      </Text>
                    </td>
                      <td>
                      <Text size="sm" color="dimmed">
                     {cart.sumPosition.toFixed(2)}
                      </Text>
                    </td>
                    
                                  <strong>QTY: </strong> ||
                              <button onClick={(e) => {
                                e.preventDefault();
                                setQty(cart.id)
                              }}> + </button> ||

                              <button onClick={(e) => {
                                e.preventDefault();
                                removePositionQty(cart.id)
                              }}> - </button>   
                              || 
                              <button onClick={(e) => {
                                e.preventDefault();
                                removeCartPosition(cart)
                              }}> Remve position </button>   
                            
                          </div>
                        )
                    })}
              </>
              : " Empty cart " }
                            </Text>
                          </Group>
                        </td>
                       
      
                 
                  <td>
                    <Group spacing={0} position="right">
                      <ActionIcon>
                        <IconPencil size={16} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon color="red">
                        <IconTrash size={16} stroke={1.5} />
                      </ActionIcon>
                    </Group>
                  </td>
                  </tr>
                </tbody>
              </Table>
            </ScrollArea>
   
          </Group>
      : null }
    </Container>
  )
}

export default ShoppingCart