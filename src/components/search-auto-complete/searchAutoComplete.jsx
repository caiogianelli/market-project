import { forwardRef } from "react";
import { Group, Avatar, Text, Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { transientConfig } from "../../utils/styled-transient-config";

// eslint-disable-next-line react/display-name
const AutoCompleteItem = forwardRef(({ value, image, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <Avatar src={image[0]} />

      <div>
        <Text>{value}</Text>
      </div>
    </Group>
  </div>
));

const StyledSearch = styled(Autocomplete, transientConfig)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    display: ${({ $hiddenSeach }) => ($hiddenSeach !== true ? "none" : "block")};
  }
`;

export function SearchAutoComplete({ hiddenSeach }) {
  const [searchItems, setSeachItems] = useState([]);
  const [termoDeBusca, setTermoDeBusca] = useState();

  const router = useRouter();

  useEffect(() => {
    fetch(`/api/search?q=${termoDeBusca}`)
      .then((response) => response.json())
      .then((searchData) => {
        const buscaFormatada = searchData.map((item) => {
          return {
            value: item.title,
            image: item.image,
            label: item.title,
            type: item.type,
            id: item.id,
          };
        });
        setSeachItems(buscaFormatada);
      });
  }, [termoDeBusca]);

  return (
    <StyledSearch
      value={termoDeBusca}
      onChange={setTermoDeBusca}
      $hiddenSeach={hiddenSeach}
      placeholder="Buscar"
      icon={<IconSearch size={20} stroke={1.5} />}
      itemComponent={AutoCompleteItem}
      onItemSubmit={(item) => router.push(`/produtos/${item.type}/${item.id}`)}
      data={searchItems}
      filter={(value, item) => item?.value?.toLowerCase().includes(value.toLowerCase().trim())}
    />
  );
}
