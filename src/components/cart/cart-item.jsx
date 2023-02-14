// vendors
import { ActionIcon, Avatar, Group, Text } from "@mantine/core";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons";
import Link from "next/link";

// components
import { formatMoney } from "../../utils/format-money";

export function CartItem({ item, setItems }) {
  function increaseAmount() {
    let products = localStorage.getItem("items");
    products = JSON.parse(products);

    for (const product of products) {
      if (product.id == item.id) {
        product["amount"] += 1;
        break;
      }
    }

    localStorage.setItem("items", JSON.stringify(products));

    setItems(products);
  }

  function decreaseAmount() {
    let products = localStorage.getItem("items");
    products = JSON.parse(products);

    for (const product of products) {
      if (product.id == item.id) {
        if (product["amount"] === 1) {
          product["amount"] = 1;
          break;
        } else {
          product["amount"] -= 1;
          break;
        }
      }
    }

    localStorage.setItem("items", JSON.stringify(products));

    setItems(products);
  }

  function removeItem() {
    let products = localStorage.getItem("items");
    products = JSON.parse(products);

    const todosOsItensQueNaoEOAtual = products.filter((batata) => item.id !== batata.id);

    localStorage.setItem("items", JSON.stringify(todosOsItensQueNaoEOAtual));
    setItems(todosOsItensQueNaoEOAtual);
  }

  return (
    <tr key={item.title}>
      <td width={570}>
        <Group spacing="sm" style={{ flexWrap: "inherit" }}>
          <Avatar size={40} src={item.image} radius={5} />

          <div>
            <Text size="sm" weight={500} lineClamp={2}>
              <Link href={`/produtos/${item.type}/${item.id}`}>
                <Text style={{ cursor: "pointer" }}>{item.title}</Text>
              </Link>
            </Text>
          </div>
          
        </Group>
      </td>

      <td align="center" width={50}>
        <Text size="md" weight={300} style={{ minWidth: "10px" }}>
          <ActionIcon style={{ display: "contents" }} onClick={decreaseAmount}>
            <IconMinus stroke={1.5} color="orange" size={18} style={{ marginRight: "10px" }} />
          </ActionIcon>

          {item.amount}

          <ActionIcon style={{ display: "contents" }} onClick={increaseAmount}>
            <IconPlus
              stroke={1.5}
              color="orange"
              size={18}
              style={({ marginTop: "15px" }, { marginLeft: "10px" })}
            />
          </ActionIcon>
        </Text>
      </td>

      <td align="center" width={150}>
        <Text size="sm" weight={500} style={{ minWidth: "70px" }}>
          {formatMoney(item.price * item.amount)} R$
        </Text>
      </td>
      
      <td align="center" style={{ width: "30px" }}>
        <ActionIcon onClick={removeItem}>
          <IconTrash stroke={1.5} color="orange" />
        </ActionIcon>
      </td>
    </tr>
  );
}
