import styled from "@emotion/styled";
import { Container, Group, ActionIcon, Text } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";

const StyledFooter = styled.div`
  margin-top: 60px;
  border-top: 1px solid
    ${({ theme }) =>
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2]};
`;

const StyledInner = styled(Container)`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    flex-direction: column;
  }
`;

const StyledLinks = styled(Group)`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
  gap: 0;
`;

export function FooterSocial() {
  return (
    <StyledFooter>
      <StyledInner>
        <Text size={12}>Desenvolvido por Caio Gianelli</Text>
        <StyledLinks noWrap>
          <ActionIcon
            component="a"
            target="_blank"
            size="lg"
            href="https://www.linkedin.com/in/caiogianelli/"
          >
            <IconBrandLinkedin size={18} stroke={1.5} href="" />
          </ActionIcon>
          <ActionIcon
            component="a"
            target="_blank"
            size="lg"
            href="https://github.com/caiogianelli"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </StyledLinks>
      </StyledInner>
    </StyledFooter>
  );
}
