import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import CardComponent from './CardComponent';

const CardTable = () => {
    const data = [
        {
            id: 1,
            name: 'Oiii',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            id: 2,
            name: 'Halooo',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        },
        {
            id: 3,
            name: 'Haiii',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        }
    ];

    const [tekan, setTekan] = useState('')

    const handeTekan = () => {
        setTekan('hai')
    }
    return (
        <div>
            <Row>
                {data.map((i) => {
                    return (<CardComponent imdadu={i.name} desc={i.desc} handeTekan={handeTekan}/>)
                })}
                <div>{tekan}</div>
            </Row>
            
        </div>
    )
}

export default CardTable
