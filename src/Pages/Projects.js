import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import todolist from '../images/todolist.png';
import contactmanager from '../images/contactmanager.png';
import moviesearch from '../images/moviesearch.png';
import passgenerator from '../images/passgenerator.png';
import expensetracker from '../images/expensetracker.png';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "ToDos List",
      imageUrl: todolist,
    },
    {
      id: 2,
      name: "Contact Manager",
      imageUrl: contactmanager,
    },
    {
      id: 3,
      name: "Movie Search App",
      imageUrl: moviesearch,
    },
    {
      id: 4,
      name: "Random PassWord Generator",
      imageUrl: passgenerator,
    },
    
    {
      id: 5,
      name: "Expense Tracker",
      imageUrl: expensetracker,
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;



