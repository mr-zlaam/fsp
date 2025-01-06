import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      hero
      <Outlet />
    </>
  );
}

export default RootLayout;
