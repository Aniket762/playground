import React, { useEffect, useState } from 'react'
import styles from '../styles/Editor.module.css'
import axios from 'axios'
import Btn from './button'

const Editor = () => {
    const [code, setCode] = useState('')
    const [output, setOutput] = useState('')
    const [lang, setLang] = useState('cpp')

    useEffect(() => {
        try {
            axios.get('http://localhost:8080/code').then(function (response) {
                // handle success
                // console.log(response.data.code)
                setCode(response.data.code)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])

    const handleSubmit = async () => {
        const payload = JSON.stringify({
            lang: lang,
            code,
        })

        try {
            const { data } = await axios.post('http://localhost:8080/run', payload, {
                headers: { 'Content-Type': 'application/json' },
            })
            setOutput(data.output)
            // const output = await axios.get("http://localhost:8080/");
            // console.log(output);
        } catch ({ response }) {
            if (response) {
                setOutput('Compilation Error')
            } else {
                setOutput('Error connecting to server!')
            }
        }
    }

    return (
        <div className={styles.main}>
            <div>
                <select
                    value={lang}
                    className={styles.lang_selector}
                    onChange={e => {
                        setLang(e.target.value)
                        console.log(e.target.value)
                    }}
                >
                    <option value="cpp">C++</option>
                    <option value="py">Python</option>
                </select>
            </div>
            <br />
            <textarea className={styles.input_area} value={code} onChange={e => setCode(e.target.value)}></textarea>
            <br />
            <Btn darkText={true} handleClick={handleSubmit}> 🐥 Submit</Btn>
            <h4>{output}</h4>
        </div>
    )
}

export default Editor
