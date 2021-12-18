import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'

import Icon from '../Icon'
import Text from '../Text'

const CardStyle = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;

    height: 268px;
    width: 234px;

    display: flex;

    /* align-content: center; */
    align-items: center;
    /* align-self: center; */
    justify-content: center;
`

const Card = () => {
    const [card, setCard] = useState({})

    useEffect(() => {
        api.get('pokemon/gengar').then(response => {
            setCard(response.data)
            console.log(1, response.data)
        })
    }, [])
    
    return (
        <CardStyle>
            {
                card.sprites &&
                <React.Fragment>
                    <Icon src={card.sprites.front_default} alt={card.name} />
                    <Text capitalize >{card.name}</Text>
                </React.Fragment>
            }
        </CardStyle>
    )
}

export default Card