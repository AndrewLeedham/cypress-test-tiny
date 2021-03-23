const {useState} = require('react');

module.exports = ({children}) => {
    const [state, setState] = useState('component');
    return <h1>{state}</h1>
}