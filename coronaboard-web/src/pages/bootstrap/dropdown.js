import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown } from "react-bootstrap";

export default function DropdownPage() {
    return(
        <Container className="pt-3">
            <Dropdown>
                <Dropdown.Toggle>국가 선택</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="https://coronaboard.kr">한국</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
}