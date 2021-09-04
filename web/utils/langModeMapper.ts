interface LangType {
    [key: string]: string;
}

const langModeMapper: LangType = {
    cpp : 'c_cpp',
    pyton: 'python'
}

export default langModeMapper;