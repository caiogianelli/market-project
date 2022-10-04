import { Indicator, ActionIcon } from "@mantine/core";
import Link from "next/link";
import { IconShoppingCart } from "@tabler/icons";

export function SetIndicator({ items }) {
  const contador = items.map((num) => num.amount);
  let count = 0;
  for (const quantidade of contador) {
    count += quantidade;
  }
  return (
    <Indicator
      showZero={false}
      dot={false}
      label={count}
      overflowCount={9}
      inline
      size={12}
    >
      <Link href={"/cart"}>
        <ActionIcon size={23}>
          <IconShoppingCart stroke={1.5} />
        </ActionIcon>
      </Link>
    </Indicator>
  );
}
