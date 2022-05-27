import React from "react";
import { Center } from "@chakra-ui/react";
import { useAuthenticationStatus } from "@nhost/react";
import { BadState, IndeterminateProgress } from "../common";
import { AuthGate } from "./Gate";

export interface AuthGuardProps {
  children: React.ReactElement;
  whenUnauthed?: React.ReactElement;
  whenLoading?: React.ReactElement;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  whenUnauthed,
  whenLoading,
  children,
}) => {
  const { isAuthenticated, isLoading, isError, error } =
    useAuthenticationStatus();

  if (isLoading) {
    return (
      whenLoading || (
        <Center flexGrow={1}>
          <IndeterminateProgress />
        </Center>
      )
    );
  }

  if (isError) {
    return (
      <BadState
        title="Failed to get auth status."
        subtitle={
          error?.message || "Try refreshing, that might fix it for now."
        }
        imageURL="https://source.unsplash.com/collection/3591984/400x400"
      />
    );
  }

  return isAuthenticated ? children : whenUnauthed || <AuthGate />;
};
