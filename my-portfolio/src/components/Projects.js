import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

function Projects() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section id="projects" className="container">
            <h2>My Projects</h2>
            <div className="row">
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/project-1.jpg" alt="Project 1" />
                        <Card.Body>
                            <Card.Title>A Website For AI Technology in Hisense Refrigerator</Card.Title>
                            <Card.Text>
                                A brief description of the project.
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow}>
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Project 1</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Detailed description of the project with images, code snippets, and more.
                        <img src="/images/project-1.jpg" alt="Project 1" style={{ width: '100%', marginTop: '1rem' }} />
                        <p>You can view the code for this project on <a href="https://github.com/tianhaoz126" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Repeat for other projects */}
            </div>
        </section>
    );
}

export default Projects;
