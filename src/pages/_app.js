import "../styles/globals.css";
import { MantineProvider,ColorSchemeProvider} from "@mantine/core";
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
                colorScheme: "light",
              }}
            >
            <NotificationsProvider position="top-center" zIndex={2077}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </NotificationsProvider>
          </MantineProvider>
      </ColorSchemeProvider>
  );
}
export default MyApp;

