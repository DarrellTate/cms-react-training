import { useState } from 'react'

export const useTest = (comic, numbers) => {
    const [numberList, setNumberList] = useState(numbers);
    
    const clicked = () => {
        setNumberList(prev => prev.push(comic.issueNumber))
        console.log(numberList)
    }

    return { clicked, numberList }
}

