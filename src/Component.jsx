import {useState} from 'react';

export default ({children}) => {
    const [state, setState] = useState('component');
    return <h1>{state}</h1>
}