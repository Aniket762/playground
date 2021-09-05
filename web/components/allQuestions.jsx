import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../styles/Question.module.scss'

function passCheck() {
    if (prompt('Please enter your password', '') == 'letmein') {
    } else {
        alert('Wrong Password')
        window.location = 'http://localhost:3000/questionBank'
    }
}

function toApprove(id) {
    try {
        axios.put(`http://localhost:8080/api/questions/moderator/${id}`, { isApproved: 'true' }).then(function (response) {
            // handle success
            console.log(response)
            window.location = 'http://localhost:3000/questionsPage'
        })
    } catch (err) {
        console.log(err)
    }
}

function Questions() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        passCheck()
        try {
            axios.get('http://localhost:8080/api/questions').then(function (response) {
                // handle success
                setQuestions(response.data)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <div className="questions mt2">
            {questions.map(question => {
                return (
                    <div key={question._id}>
                        <article className={styles.question} style={{height:"250px"}}>
                            <div key={question._id} className={styles.questionContent}>
                                <h1 className={styles.questionTitle} key={question._id}>
                                    {question.title}
                                </h1>
                                <br />
                                <p className={styles.questionMessage}>{question.message}</p>
                                <br />
                                {question.isApproved ? (
                                    <button className={styles.btnSuccess} darkText={true}>
                                        {' '}
                                        ✅ Approved
                                    </button>
                                ) : (
                                    <button className={styles.btnDanger} darkText={true} onClick={() => toApprove(question._id)}>
                                        {' '}
                                        🙋🏻 Approve
                                    </button>
                                )}
                            </div>
                        </article>
                    </div>
                )
            })}
        </div>
    )
}

export default Questions
