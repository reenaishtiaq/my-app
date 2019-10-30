import React, { Component } from 'react';
import './Persons.css';
import Person from './Person';

export default class Persons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personData: [
                {
                    "name": "Busrha",
                    "age": "12",
                    "description": "chef at Mariotte",
                    "isEditMode": false
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
                    "isEditMode": false
                }
            ]
        }
    }

    enableEdit = (personClicked) => {
        this.setState({
            personsData: this.state.personsData.map
            (pInner => {
                if(pInner.name === personClicked.name)
                {
                    pInner.isEditMode = true;
                } else {}
                return pInner;
            }) 
        })
    }

    // p.isEditMode = true;
    // console.log(personData);
    // alert("Hi, from " + p.name);

    render() {
        return (
            <div className="Persons">

                <h1>Persons</h1>
                {
                    this.state.personData.map(
                        person => {
                            return <Person person={person}
                                callMeWhenYouWantToEnableEdit={
                                    () => this.enableEdit(person)
                                } />
                        }
                    )

                    // personData.map(person => <Person
                    // person={person}
                    // callMeWhenYouWantToEnableEdit={enableEdit} />)
                }
            </div>
        )
    }
}