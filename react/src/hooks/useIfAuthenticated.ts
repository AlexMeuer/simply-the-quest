import { useAuthenticationStatus } from "@nhost/react";
import React from "react";

export function useIfAuthenticated() {
  const { isAuthenticated } = useAuthenticationStatus();
  const ifAuthed = React.useCallback(
    <T>(foo: T): T | undefined => (isAuthenticated && foo) || undefined,
    [isAuthenticated]
  );
  return { ifAuthed, isAuthenticated };
}
