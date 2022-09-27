import Head from "next/head";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";

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
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Prototype Shop</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme,
            primaryColor: "orange",
          }}
        >
          <Component {...pageProps} items={items} setItems={setItems} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
