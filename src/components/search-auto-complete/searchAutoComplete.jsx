import { forwardRef } from "react";
import { Group, Avatar, Text, Autocomplete, createStyles } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = createStyles((theme) => ({
  search: { [theme.fn.smallerThan("xs")]: { display: "none" } },
}));

// eslint-disable-next-line react/display-name
const AutoCompleteItem = forwardRef(({ value, image, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <Avatar src={image} />

      <div>
        <Text>{value}</Text>
      </div>
    </Group>
  </div>
));

export function SearchAutoComplete() {
  const { classes } = useStyles();
  const [searchItems, setSeachItems] = useState([]);
  const [termoDeBusca, setTermoDeBusca] = useState();

  // /api/search?batata=${termoDeBusca}
  // toda vez que chamar essa api atualizar o seachItems com os valores retornados da pesquisa de produtos.

  useEffect(() => {
    fetch(`/api/search?q=${termoDeBusca}`)
      .then((response) => response.json())
      .then((searchData) => {
        const buscaFormatada = searchData.map((item) => {
          return {
            value: item.name,
            image: item.img,
            label: item.name,
          };
        });
        setSeachItems(buscaFormatada);
      });
  }, [termoDeBusca]);

  // console.log(searchItems);
  return (
    <Autocomplete
      value={termoDeBusca}
      onChange={setTermoDeBusca}
      placeholder="Buscar"
      className={classes.search}
      icon={<IconSearch size={20} stroke={1.5} />}
      itemComponent={AutoCompleteItem}
      data={searchItems}
      filter={(value, item) =>
        item.value.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
