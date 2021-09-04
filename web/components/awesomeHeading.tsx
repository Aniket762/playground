import React from 'react'

interface Props {
    heading: string;
    description: string;
}

const AwesomeEditor: React.FC<Props> = ({heading, description}) => {
    return (
        <section id='awesome-editor'>
            <div>
                <h1 className='title xxl'>{heading}</h1>
                <p className='description mt2'>
                    {description}  
                </p>
            </div>
        </section>
    )
}

export default AwesomeEditor
