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
          <Navbar.Link href="#">Beschränkungen</Navbar.Link>
          <Navbar.Link href="#">Bestellungen</Navbar.Link>
          <Navbar.Link href="#">Ernährungskategorien</Navbar.Link>
          <Navbar.Link href="#">Kunden</Navbar.Link>
          <Navbar.Link href="#">Lieferanten</Navbar.Link>
          <Navbar.Link href="#">Rezepte</Navbar.Link>
          <Navbar.Link href="#">Zutaten</Navbar.Link>
        </Navbar.Content>
      </Navbar>
)