import React from 'react';
import './Persons.css';
import Person from './Person';

export default function Persons() {
    const personData = [
        {
            "name": "Busrha",
            "age": "12",
            "description": "chef at Mariotte",
            "isEditMode": true
        },
        {
            "name": "Dua",
            "age": "2",
            "description": "Happiness Officer",
            "isEditMode": false
        },
        {
            "name": "alizay",
            "age": "29",
            "description": "Comedian at youtube",
            "isEditMode": true
        },
    ]

    return (
        <div className="Persons">

            <h1>Persons</h1>
            {
                personData.map(person => <Person person={person} />)
            }
        </div>
    )
}