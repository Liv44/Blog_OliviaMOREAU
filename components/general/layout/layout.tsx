import { Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <Flex minHeight={"100vh"} justifyContent="space-between" direction="column">
      <Flex direction="column">
        <Navbar />
        <main>{children}</main>
      </Flex>
      <Footer />
    </Flex>
  );
}
