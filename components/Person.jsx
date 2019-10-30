import React from 'react';
import './Person.css';
import PersonInfo from './PersonInfo';
import PersonEdit from './PersonEdit';

import { Card, Button } from 'react-bootstrap';

export default function Person(props) {
    let myNumber = '03011234567';
    
    return (

        <Card className="card">

            {props.person.isEditMode ?
                <PersonEdit person={props.person} /> :
                <PersonInfo person={props.person}
                thisIsMyNumber = {myNumber} 
                jabEditButtonClickKaroToKYaKaro = 
                {props.enableEdit}/>
            }

        </Card>
    )
}

// Person.propTypes = {
//     person: ProType.object
// enabledEditButton:PropType.func
// }
