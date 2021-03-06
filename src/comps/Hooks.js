import React, {useState, useEffect} from 'react'

function Hooks() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log('useEffect clicked')
    },[])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default Hooks
