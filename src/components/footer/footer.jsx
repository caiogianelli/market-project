// vendors
import { ActionIcon, Text } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";

// style
import * as S from "./styles"

export function FooterSocial() {
  return (
    <S.Footer>
      <S.Inner>
        <Text size={12}>Desenvolvido por Caio Gianelli</Text>
        <S.Links noWrap>
          <ActionIcon
            component="a"
            target="_blank"
            size="lg"
            href="https://www.linkedin.com/in/caiogianelli/"
          >
            <IconBrandLinkedin size={18} stroke={1.5} href="" />
          </ActionIcon>
          <ActionIcon component="a" target="_blank" size="lg" href="https://github.com/caiogianelli">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </S.Links>
      </S.Inner>
    </S.Footer>
  );
}
