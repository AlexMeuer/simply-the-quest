import { Outlet } from "react-router";
import { Center } from "~/styled-system/jsx";

export default function CenterLayout() {
  return (
    <Center height="100vh">
      <Outlet />
    </Center>
  );
}
