import React from "react";
import { debounce } from "lodash";

export function useDebouncedState<T>(
  initialState: T,
  delay: number
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState(initialState);
  const debouncedSetState = React.useMemo(() => {
    return debounce(setState, delay);
  }, [delay]);
  return [state, debouncedSetState];
}
