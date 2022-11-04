import { Card, Container, Row, Text } from '@nextui-org/react'
import styles from '../styles/Home.module.css' // className={styles.<klassenName>}

export default function Home() {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row justify='center' align='center'>
            <Text h6 size={15} color="white" css={{ m: 0}}>
              NextUI gives you the best developer experience with all the features
              you need for building beautiful and modern websites and
              applications.
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}
