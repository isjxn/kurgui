import { Navbar, Text } from "@nextui-org/react"
import { Logo } from "../components/Logo"

export const KurNavbar = () => (
    <Navbar variant="static">
        <Navbar.Brand>
          <Logo />
          <Text b color="inherit" hideIn="xs">
            Kraut und Rüben
          </Text>
        </Navbar.Brand>
        <Navbar.Content css={{
            lineHeight: '24px'
        }}>
          <Navbar.Link isActive href="/">Home</Navbar.Link>
          <Navbar.Link href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar>
)