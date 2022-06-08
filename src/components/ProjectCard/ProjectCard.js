import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from "./ProjectCard.module.css"



export default function ProjectCard() {
    return (
<div className={styles.cards}>
 <Card style={{ width: '18rem', margin: "2%" }}>
        <Card.Img variant="top" src="/Boston Celtics Trivia.png" />
        <Card.Body>
          <Card.Title className={styles.title}>Boston Celtics Trivia</Card.Title>
          <Card.Text className={styles.cardtext}>
           Broswer based trivia game based on the history of the Boston Celtics. Built using <em>HTML</em>, <em>CSS</em>, <em>Vanilla JS</em> and <em>GitHub</em> for version control. 
          </Card.Text>
          <Button href="https://github.com/juliocolon/Boston-Celtics-Trivia-" target="_blank" variant="secondary">View Project</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', margin: "2%"  }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin: "2%" }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>


</div>
       
    )
}