import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../styles/Question.module.css'

function ConfirmedQuestions() {
    const [questions, setQuestions] = useState([])
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
    console.log(questions)
    return (
        <div className="questions mt2">
            {questions.map(question => {
                if (question.isApproved == true) {
                    return (
                        <article className={styles.question}>
                            <div key={question._id} className={styles.questionContent}>
                                <h1 className={styles.questionTitle} key={question._id}>
                                    {question.title}
                                </h1>
                                <br />
                                <p className={styles.questionMessage}>{question.message}</p>
                            </div>
                        </article>
                    )
                }
            })}
        </div>
    )
}

export default ConfirmedQuestions
