import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Accordion, Button} from "react-bootstrap";

export default function CardAccordionPage() {
    return (
        <Container className="pt-3">
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle className='p-0' as={Button} eventKey='0'
                                          variant="link">
                            카드의 헤더
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>카트 컨텐츠</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );
}