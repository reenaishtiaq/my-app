import React from 'react';
import './Person.css';
import PersonInfo from './PersonInfo';
import PersonEdit from './PersonEdit';

import { Card, Button } from 'react-bootstrap';

export default function Person(props) {
    return (
        <Card style={{ width: '18rem' }}>

            {props.person.isEditMode ?
                <PersonEdit person={props.person} /> :
                <PersonInfo person={props.person} />
            }

        </Card>
    )
}

// Person.propTypes = {
//     person: ProType.object
// }
