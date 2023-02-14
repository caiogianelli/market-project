// vendors
import { useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import Head from "next/head";

// components
import { RouterTransition } from "../components/router-transition";

export default function App(props) {
  const { Component, pageProps } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    let cartItems = localStorage.getItem("items");

    if (cartItems != null) {
      cartItems = JSON.parse(cartItems);
    } else {
      cartItems = [];
    }
    setItems(cartItems);
  }, []);

  const [colorScheme, setColorScheme] = useLocalStorage({
    defaultValue: "light",
    key: "tema",
  });
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Prototype Shop</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme, primaryColor: "orange" }}>
          <NotificationsProvider
            position="top-center"
            containerWidth={400}
            style={{ marginTop: "50px", textAlign: "center" }}
          >
            <RouterTransition />
            <Component {...pageProps} items={items} setItems={setItems} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
