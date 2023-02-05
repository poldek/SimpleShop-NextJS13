import React from 'react'
import { Title, Box,  Header, Group, Indicator } from "@mantine/core";
import Link from "next/link";
import { IconShoppingCart } from '@tabler/icons';
import isLoading from '@/pages/hooks/isLoading';

function NavBar({qty}) {
 const isLoadingPage = isLoading();
  return (
    <Box pb={10}>
        <Header height={80} px="xl">
            <Group position="apart" sx={{ height: "100%" }}>
                <Link href="/">
                   <Title order={1} variant="gradient"
                        gradient={{ from: 'indigo', to: 'red', deg: 15 }}
                        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>
                        MySuperSHOP
                    </Title>
                </Link>
                {isLoadingPage ? 
                    <Group position="center" spacing="xl">
                        <Indicator label={qty} inline size={22}>
                            <Link href="/shoppingCart">
                                <IconShoppingCart />
                            </Link>
                        </Indicator>
                    </Group>
                : null}
            </Group>    
        </Header>
    </Box>
  )
}

export default NavBar