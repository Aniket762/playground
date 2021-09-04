import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Questions() {
    const [questions,setQuestions]=useState([]);
    useEffect(() => {
        try {
            axios.get('http://localhost:8080/api/questions').then(function (response) {
                // handle success
                setQuestions(response.data)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])
    console.log(questions);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Questions
