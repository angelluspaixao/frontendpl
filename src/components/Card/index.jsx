import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'

import edit from '../../resources/icon-edit.svg'
import trash from '../../resources/icon-trash.svg'

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
    flex-direction: column;

    align-items: center;
    justify-content: center;
`

const CardButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;

    width: 100%;
    align-content: flex-end;
    align-items: flex-end;
    align-self: flex-end;

    justify-content: flex-end;
    justify-items: flex-end;
    justify-self: flex-end;

    margin-top: 12px;
`

const CardButton = styled.a`
    width: 50%;
    background-color: magenta;

    font-size: 12px;
    text-align: center;

    &:before {
        background: ${props => props.svg ? `url(${props.svg})` : 'none'};
    }
`

const Card = () => {
    const [card, setCard] = useState({})

    const cardClick = () => {
        alert('Funcionalidade ainda não implementada');
    }

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
            <CardButtonWrapper>
                <CardButton svg={trash} onClick={cardClick} >Excluir</CardButton>
                <CardButton svg={edit} onClick={cardClick} >Editar</CardButton>
            </CardButtonWrapper>
        </CardStyle>
    )
}

export default Card