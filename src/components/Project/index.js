import React, {useState} from 'react';
// import foto from './photo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const Project = ({ name }) => {

const [photos] = useState([
    {
        i: '1',
        title: 'Pawpals',
        description: 'A social website for cats and dogs to find friendship and love. Users can create their profile and see the different dogs and cats profiles with which they matched.',
        linkApp: 'https://noemiegrau.github.io/pawpals/',
        linkGithub: 'https://github.com/Noemiegrau/pawpals'
      },
      {
        i: '2',
        title: 'Food Forward',
        description: "A a food bank website directed towards its employees where they will be able to login safely into their account via email and protected password, have access to the food bank customer's personnal information, modify, and delete these database information. The employees also have access to a social media like platform where they can post information concerning their work at the food bank, comment on these posts and like.",
        linkApp: 'https://stark-reaches-12893.herokuapp.com/',
        linkGithub: 'https://github.com/Noemiegrau/food-forward'
      },
      {
        i: '3',
        title: 'Run Buddy',
        description: 'A website that offers fitness training services.',
        linkApp: 'https://noemiegrau.github.io/run-buddy/',
        linkGithub: 'https://noemiegrau.github.io/run-buddy/'
      },
      {
        i: '4',
        title: 'Pizza Hunt',
        description: 'A blog website where users can post information about their dream pizza, their favorite toppings, comment and answer to each other. Users can create, read, update and delete data about their pizza in the database.',
        linkApp: 'https://thawing-garden-13240.herokuapp.com/',
        linkGithub: 'https://github.com/Noemiegrau/pizza-hunt'
      },
      {
        i: '5',
        title: 'Password Generator',
        description: 'A password generator allowing user to create a strong password that provides greater security.',
        linkApp: 'https://noemiegrau.github.io/password-generator/',
        linkGithub: 'https://github.com/Noemiegrau/password-generator'
      },
      {
        i: '6',
        title: 'Weather Dashboard',
        description: 'A weather dashboard application where users can look for different cities and their corresponding 5-day forecast weather.',
        linkApp: 'https://noemiegrau.github.io/weather-dashboard/',
        linkGithub: 'https://github.com/Noemiegrau/weather-dashboard'
      },
      {
        i: '7',
        title: 'Chelcie Fans',
        description: 'A MERN stack blog where people can create an account, post their thoughts for others to see, interact with other users through these posts, be friends with each other and comment on posts.',
        linkApp: 'https://secret-hollows-41476.herokuapp.com/',
        linkGithub: 'https://github.com/simmonsW/chelcie-fans'
      }  
]);

const currentPhotos = photos.filter((photo) => photo.name === name);

    return (
      <div id="spacecards">
        <div className="flex-row">
            {currentPhotos.map((image, i) => (
        <Card id="card-projects" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`./images/${image.i}.png`).default} alt="portfolio project" />
        <Card.Body>
          <Card.Title><span>{image.title}</span></Card.Title>
          <Card.Text>{image.description}</Card.Text>
          <div id="btns-projects">
          <Button><a href={image.linkApp}>View deployed application</a> </Button><br />
          <Button><a href={image.linkGithub}>View GitHub repository</a> </Button>
          </div>
        </Card.Body>
      </Card>
      ))}
      </div>
      </div>
    );
  };

export default Project;