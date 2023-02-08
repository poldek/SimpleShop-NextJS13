import React from 'react'
import { Title, Box,  Header, Group, Indicator, Tooltip, Text, useMantineColorScheme, ActionIcon} from "@mantine/core";
import Link from "next/link";
import { IconShoppingCart } from '@tabler/icons';
import isLoading from '@/pages/hooks/isLoading';
import {
  IconSun, IconMoonStars 
} from "@tabler/icons";

function NavBar({qty, sum}) {
 const isLoadingPage = isLoading();
 const { colorScheme, toggleColorScheme } = useMantineColorScheme();
 const dark = colorScheme === 'light';
 
 let sumCart = `Cart total: ${sum.toFixed(2)}$`
  return (
    <Box pb={50}>
        <Header height={100} px="xl" id="sticky">
            <Group position="apart" sx={{ height: "100%" }}>
                <Link href="/">
                   <Title order={1} variant="gradient"
                        gradient={{ from: 'indigo', to: 'red', deg: 45 }}
                        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>
                        MyShop
                    </Title>
                </Link>
                <Group position="center" spacing="xl">
                    <Text size="xl" weight={500}>
                        <Link href="/">Shop</Link>
                    </Text>
                    <Text size="xl" weight={500}>
                        Help
                    </Text>
                    <Text size="xl" weight={500}>
                        Contact
                    </Text>
                </Group>
                {isLoadingPage ? 
                    <Group position="center" spacing="xl">
                         <Tooltip label={sumCart}>
                            <Indicator label={qty} inline size={22} color={'green'}>
                                <Link href="/shoppingCart">
                                    <IconShoppingCart />
                                </Link>
                            </Indicator>
                        </Tooltip>
                        <ActionIcon mb={10}
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                        {dark ? <IconSun size={32} /> : <IconMoonStars size={32} />}
                        </ActionIcon>
                    </Group>
                : null}
            </Group>    
        </Header>
    </Box>
  )
}

export default NavBar