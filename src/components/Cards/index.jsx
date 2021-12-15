import styled from 'styled-components'
import Icon from '../Icon'

const CardStyle = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #E5E5E5;
    border: 1px solid #E4E4E4;
    border-radius: 8px;

    max-height: 268px;
    width: 234px;
`
const prop = {
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
}

const Cards = () => {
    return (
        <CardStyle>
            <Icon src={prop.sprite} />
        </CardStyle>
    )
}

export default Cards