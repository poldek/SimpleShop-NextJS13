import "../styles/globals.css";
import { MantineProvider,ColorSchemeProvider} from "@mantine/core";
import { ModalsProvider } from '@mantine/modals';
import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import Layout from "@/components/_layout";


function MyApp({ Component, pageProps }) {
    const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });
  
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                colorScheme: colorScheme,
              }}
            >  
            <NotificationsProvider position="top-center" zIndex={2077}>
               <ModalsProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ModalsProvider>
            </NotificationsProvider>
          </MantineProvider>
      </ColorSchemeProvider>
  );
}
export default MyApp;

