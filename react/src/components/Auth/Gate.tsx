import React from "react";
import { Avatar, Center, Heading, Text } from "@chakra-ui/react";
import { useAuthenticationStatus, useNhostClient } from "@nhost/react";
import { LogoutView } from "./Logout";
import { LoginView } from "./Login";

export const AuthGate: React.FC = () => {
  const { auth } = useNhostClient();
  const { isAuthenticated } = useAuthenticationStatus();
  const user = auth.getUser();
  return (
    <Center flexGrow={1}>
      {isAuthenticated ? (
        <LogoutView onLogout={() => auth.signOut()}>
          <Avatar name={user?.displayName} src={user?.avatarUrl} />
          <Heading>{user?.displayName}</Heading>
          <Text>{user?.email}</Text>
        </LogoutView>
      ) : (
        <LoginView
          onLoginWithDiscord={() => auth.signIn({ provider: "discord" as any })}
        />
      )}
    </Center>
  );
};
