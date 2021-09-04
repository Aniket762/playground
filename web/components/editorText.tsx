import React, {useEffect, useRef} from 'react'
import {useTheme} from './themeProvider'

interface PropChild {
    mode: string;
}

interface Props {
    props: PropChild;
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
}

const EditorText: React.FC<Props> = ({props, code, setCode}) => {
    const {theme} = useTheme();
    if (typeof window !== 'undefined') {
        const Ace = require('react-ace').default;
        require('ace-builds/src-noconflict/mode-c_cpp')
        require('ace-builds/src-noconflict/mode-python')
        require('ace-builds/src-noconflict/theme-github');
        require('ace-builds/src-noconflict/theme-monokai');

        const onChange = (value: string) => {
            console.log(value);
            setCode(value);
        }

        return (<Ace
            {...props}
            height={"400px"}
            fontSize={"19px"}
            width={"100%"}
            value={code}
            theme={theme === 'dark' ? 'monokai': 'github'}
            onChange={onChange}
         />)
    }
    
      return null;
}

export default EditorText