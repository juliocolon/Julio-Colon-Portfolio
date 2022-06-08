import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from "./ProjectCard.module.css"



export default function ProjectCard() {
    return (
   <>    
   <h1>Current Projects</h1>
<div className={styles.cards}>
 <Card style={{ width: '20rem', height:'34rem', margin: "3%" }}>
        <Card.Img className={styles.image} variant="top" src="/Boston Celtics Trivia.png" />
        <Card.Body>
          <Card.Title className={styles.title}>Boston Celtics Trivia</Card.Title>
          <Card.Text className={styles.cardtext}>
           Browser based trivia game based on the history of the Boston Celtics. The game features a win and lose state. Built using <em>HTML</em>, <em>CSS</em>, <em>Vanilla JavaScript</em> and <em>GitHub</em> for version control. 
          </Card.Text>
          <Button href="https://github.com/juliocolon/Boston-Celtics-Trivia-" target="_blank" variant="secondary">View Project</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', height:'34rem', margin: "3%"  }}>
      <Card.Img className={styles.image} variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className={styles.title}>Sneaker Forum</Card.Title>
        <Card.Text className={styles.cardtext}>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem', height:'34rem', margin: "3%" }}>
    <Card.Img className={styles.image} variant="top" src="/The Roaming Spoon.png" />
    <Card.Body id="card">
      <Card.Title className={styles.title}>The Roaming Spoon</Card.Title>
      <Card.Text className={styles.cardtext}>
        Yelp like food truck application, built using MongoDB, Express, React.js, and Node.js. 
        The application was created in collaboration with General Assembly Software Engineering and UI/UX students.  
      </Card.Text>
      <Button href="https://github.com/juliocolon/roaming-food-trucks/tree/main" target="_blank" variant="secondary">View Project</Button>
    </Card.Body>
  </Card>
</div>
    </>    
    )
}