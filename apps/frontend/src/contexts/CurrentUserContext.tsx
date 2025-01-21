import { type FlowComponent, createContext, useContext } from "solid-js";
import { type CurrentUserResult, useCurrentUser } from "~/hooks/useCurrentUser";

const CurrentUserContext = createContext<CurrentUserResult | undefined>(
  undefined,
);

export const CurrentUserProvider: FlowComponent = (props) => {
  const currentUser = useCurrentUser();
  return (
    <CurrentUserContext.Provider value={currentUser}>
      {props.children}
    </CurrentUserContext.Provider>
  );
};

export function useCurrentUserContext() {
  const context = useContext(CurrentUserContext);
  if (!context) {
    throw new Error(
      "useCurrentUserContext must be used within a CurrentUserProvider",
    );
  }
  return context;
}
