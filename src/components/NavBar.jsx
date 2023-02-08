import React from 'react'
import { Title, Box,  Header, Group, Indicator, Tooltip, 
    Text, useMantineTheme,useMantineColorScheme,Anchor, Switch} from "@mantine/core";
import Link from "next/link";
import { IconShoppingCart } from '@tabler/icons';
import isLoading from '@/pages/hooks/isLoading';
import {
  IconSun, IconMoonStars 
} from "@tabler/icons";

function NavBar({qty, sum}) {
 const isLoadingPage = isLoading();
 const { colorScheme, toggleColorScheme } = useMantineColorScheme();
 const theme = useMantineTheme();
 
 let sumCart = `Cart total: ${sum.toFixed(2)}$`
  return (
    <Box pb={50}>
        <Header height={100}>
            <Group position="apart" sx={{ height: "100%" }}>
                <Link href="/" >
                   <Title order={1} variant="gradient" 
                        gradient={{ from: 'indigo', to: 'orange', deg: 75 }}
                        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>
                          <Anchor component="button" type="button">
                            MySuper
                        </Anchor>
                    </Title>
                </Link>
                <Group>
                    <Link href="/">
                        <Anchor component="button" type="button" size={'xl'}>
                            Shop
                        </Anchor>
                    </Link>
                    
                    <Text size="xl" weight={500}>
                        Help
                    </Text>
                    <Text size="xl" weight={500}>
                        Contact
                    </Text>
                </Group>
                {isLoadingPage ? 
                    <Group position="center" mt={10}>
                         <Tooltip label={sumCart}>
                            <Indicator label={qty} inline size={22} color={'green'}>
                                <Link href="/shoppingCart">
                                    <Anchor component="button" type="button" size={'xl'}>
                                        <IconShoppingCart/>
                                    </Anchor>
                                </Link>
                            </Indicator>
                        </Tooltip>
                          <Switch mb={15} mx={0}
                                checked={colorScheme === 'dark'}
                                onChange={() => toggleColorScheme()}
                                size="lg"
                                onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
                                offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
                            />
                    </Group>
                : null}
            </Group>    
        </Header>
    </Box>
  )
}

export default NavBar