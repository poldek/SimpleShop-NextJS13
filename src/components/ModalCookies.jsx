import React, { useState } from 'react'
import { Modal, useMantineTheme,Button, Paper, Text, Group } from '@mantine/core';
import useShopCookies from "@/store/useCartStore";

function ModalCookies() {
    const [cookies, setCookies] = useState(false);
    const acceptCookies = useShopCookies(state => state.acceptCookie);
    
    const acceptAllCookies = () => {
        acceptCookies(true);
        setCookies(true);
    }
    const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[12]}
      overlayOpacity={0.55}
      overlayBlur={1}
      centered
      transition="fade"
      transitionDuration={600}
      transitionTimingFunction="ease"
      withCloseButton={false}
      opened={!cookies}
      onClose={() => cookies}
      title="Allow cookies"  
    >
        <Paper >
            <Text color="dimmed" size="xs">
               If you choose to 'Accept all', we will also use cookies and data to
                Develop and improve new services
                Deliver and measure the effectiveness of ads
                Show personalised content, depending on your settings
                Show personalised ads, depending on your settings
            </Text>
            <Group position="right" mt="xs">
                <Button variant="outline" size="xs" onClick={(e) => {
                    e.preventDefault();
                    acceptAllCookies();
                }}>
                Accept all
                </Button>
            </Group>
        </Paper>
    </Modal>
  )
}

export default ModalCookies