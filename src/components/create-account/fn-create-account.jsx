import {
  Button,
  Container,
  FileInput,
  Input,
  Text,
  TextInput,
} from "@mantine/core";
import { IconAt } from "@tabler/icons";
import { PasswordInput } from "@mantine/core";

export default function CreateAccount() {
  return (
    <Container my={100} mx={530}>
      <TextInput placeholder="Your name" label="Full name" withAsterisk />
      <Text>Email</Text>
      <Input
        my={10}
        radius="md"
        icon={<IconAt />}
        placeholder="Seu e-mail"
        label="email"
      />
      <FileInput placeholder="login" label="Login" radius="md" my={10} />
      <PasswordInput
        radius="md"
        placeholder="Password"
        label="Senha"
        // description="A senha deve incluir pelo menos uma letra, número e caractere especial"
        // withAsterisk
      />
      <Button my={20} fullWidth mt="xl">
        Criar Conta
      </Button>
    </Container>
  );
}
