import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../";

export const Layout: FC = () => (
  <>
    <Header />
    <main className="container">
      <Outlet />
    </main>
    <Footer />
  </>
);
