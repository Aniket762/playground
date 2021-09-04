import React, {useEffect, useRef} from 'react'

interface PropChild {
    mode: string;
}

interface Props {
    props: PropChild;
    code: string;
    setCode: React.Dispatch<React.SetStateAction<string>>;
}

const EditorText: React.FC<Props> = ({props, code, setCode}) => {
    if (typeof window !== 'undefined') {
        const Ace = require('react-ace').default;
        require('ace-builds/src-noconflict/mode-c_cpp')
        require('ace-builds/src-noconflict/mode-python')

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
            onChange={onChange}
         />)
    }
    
      return null;
}

export default EditorText