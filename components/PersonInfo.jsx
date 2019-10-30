import React from 'react'
import './PersonInfo.css'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import PropType from 'prop-types'

export default function PersonsInfo(props) {
    
    return (
        <Card.Body className="PersonInfo">

            <Card.Title>
                {props.person.name}, {props.person.age}
            </Card.Title>

            <Card.Text>
                {props.person.description}
            </Card.Text>

            <ButtonGroup className="button-group" aria-label="Basic example" className="button-group">

                <Button variant="light">
                    <FontAwesomeIcon className="text-info" icon={faEdit}
                    onClick={props.enableEdit} />
                </Button>

                <Button variant="light">
                    <FontAwesomeIcon className="text-danger" icon={faTrash} />
                </Button>

            </ButtonGroup>

        </Card.Body>
    )
}

PersonsInfo.propTypes = {
    person: PropType.object
}