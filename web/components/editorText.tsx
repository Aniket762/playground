import React from 'react'


const EditorText = ({props}: any) => {
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