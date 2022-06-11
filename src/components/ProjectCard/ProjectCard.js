import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from "./ProjectCard.module.css"



export default function ProjectCard() {
    return (
   <>    
   <h1 className={styles.heading}>Current Projects</h1>
<div className={styles.cards}>
 <Card style={{ width: '20rem', height:'36rem', margin: "3%" }}>
        <Card.Img className={styles.image} variant="top" src="/Boston Celtics Trivia.png" />
        <Card.Body>
          <Card.Title className={styles.title}><a className={styles.link}  href="https://juliocolon.github.io/Boston-Celtics-Trivia-/" target="_blank">Boston Celtics Trivia</a></Card.Title>
          <Card.Text className={styles.cardtext}>
           Browser based trivia game based on the history of the Boston Celtics. The game features a win and lose state. Built using <em>HTML</em>, <em>CSS</em>, <em>Vanilla JavaScript</em> and <em>GitHub</em> for version control. 
          </Card.Text>
          <Button  className={styles.button} href="https://sneakers-forum.herokuapp.com/" target="_blank" variant="secondary">View Project</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', height:'36rem', margin: "3%"  }}>
      <Card.Img className={styles.image} variant="top" src="/sneaker forum.png" />
      <Card.Body>
        <Card.Title className={styles.title}> <a className={styles.link} href="https://sneakers-forum.herokuapp.com/" target="_blank">Sneaker Forum</a></Card.Title>
        <Card.Text className={styles.cardtext}>
          Sneaker Forum, allows users to perform full CRUD operations on threads they create on different topics concerning sneakers. 
          This application was built using MongoDB, Express, React.js, React Bootstrap, and Node.js. This application also features JWT authentication. 
        </Card.Text>
        <Button   className={styles.button} href="https://github.com/juliocolon/SEI-Project-3-Sneaker-Forum" target="_blank" variant="secondary">View Project</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem', height:'36rem', margin: "3%" }}>
    <Card.Img className={styles.image} variant="top" src="/The Roaming Spoon.png" />
    <Card.Body id="card">
      <Card.Title className={styles.title}><a className={styles.link}  href="https://roaming-spoon.herokuapp.com/" target="_blank">The Roaming Spoon</a></Card.Title>
      <Card.Text className={styles.cardtext}>
        The Roaming Spoon is a Yelp like application for food trucks. This application was built using MongoDB, Express, React.js, React Bootstrap and Node.js. This application also features JWT authentication. 
        The Roaming Spoon was created in collaboration with General Assembly Software Engineering and UI/UX students.
      </Card.Text>
      <Button className={styles.button} href="https://github.com/juliocolon/roaming-food-trucks/tree/main" target="_blank" variant="secondary">View Project</Button>
    </Card.Body>
  </Card>
</div>
    </>    
    )
}