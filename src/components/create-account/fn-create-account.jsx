import { Button, Container, FileInput, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons";
import { PasswordInput } from "@mantine/core";

export default function CreateAccount() {
  return (
    <Container my={100} mx={530}>
      <TextInput placeholder="Seu nome" label="Nome completo" withAsterisk />

      <TextInput
        placeholder="seu@email.com"
        label="Email"
        my={10}
        icon={<IconAt />}
        withAsterisk
      />

      <FileInput
        placeholder="Login"
        label="Login"
        radius="md"
        my={10}
        withAsterisk
      />
      <PasswordInput
        radius="md"
        placeholder="Senha"
        label="Senha"
        withAsterisk
        // description="A senha deve incluir pelo menos uma letra, número e caractere especial"
        // withAsterisk
      />
      <Button my={20} fullWidth mt="xl">
        Criar Conta
      </Button>
    </Container>
  );
}
