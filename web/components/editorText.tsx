import React from 'react'

interface PropChild {
    mode: string;
}

interface Props {
    props: PropChild;
}

const EditorText: React.FC<Props> = ({props}) => {
    if (typeof window !== 'undefined') {
        const Ace = require('react-ace').default;
        require('ace-builds/src-noconflict/mode-c_cpp')
        require('ace-builds/src-noconflict/mode-python')
        console.log(props)
        return <Ace {...props}/>
      }
    
      return null;
}

export default EditorText