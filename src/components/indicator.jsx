import { Indicator, ActionIcon } from "@mantine/core";
import Link from "next/link";
import { IconShoppingCart } from "@tabler/icons";

export function SetIndicator({ items }) {
  const batata = items.map((batatinha) => batatinha.amount);
  let count = 0;
  for (const frango of batata) {
    count += frango;
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
      <ActionIcon size={23}>
        <Link href={"/cart"}>
          <IconShoppingCart size={34} stroke={1.5} />
        </Link>
      </ActionIcon>
    </Indicator>
  );
}
