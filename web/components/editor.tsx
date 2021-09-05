import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles/Editor.module.scss'
import axios from 'axios'
import Btn from './button'
import { useTheme } from './themeProvider'
import EditorText from './editorText'
import langModeMapper from '../utils/langModeMapper'
import Photo from './photo'

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
            <div className={styles.editor}>
                <EditorText
                    props={{
                        mode: langModeMapper[lang],
                    }}
                    code={code}
                    setCode={setCode}
                />
            </div>

            <br />
            <Photo lang={lang} setLang={setLang} handleSubmit={handleSubmit} />
            
            <div className='output'>
                <h4 className='output-res'>{output}</h4>
            </div>
        </div>
    )
}

export default Editor
