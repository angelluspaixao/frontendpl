import styled from 'styled-components'

const TextStyled = styled.p`
    text-align: center;
    font-size: 16px;
    letter-spacing: 0px;
    color: #263238;
    text-transform: ${props => props.capitalize ? 'capitalize' : 'none'};
`

const Text = (props) => {
    return (
        <TextStyled {...props}>{props.children}</TextStyled>
    )
}

export default Text