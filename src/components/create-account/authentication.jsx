import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

export function AuthenticationTitle() {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Bem Vindo!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Ainda não tem conta?{" "}
        <Anchor href="./create-account" size="sm">
          Criar Conta
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@email.com" required />
        <PasswordInput label="Password" placeholder="Senha" required mt="md" />
        <Group position="apart" mt="md">
          <Checkbox label="Lembrar" />
          <Anchor
            onClick={(event) => event.preventDefault()}
            href="#"
            size="sm"
          >
            Esqueceu sua senha?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Logar
        </Button>
      </Paper>
    </Container>
  );
}
