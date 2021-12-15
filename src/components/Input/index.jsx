import styled from 'styled-components'

const InputStyle = styled.input`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 0px;
    border-radius: 8px;

    width: 1046px;
    max-width: 1046px;
    height: 75px;

    margin: 0 auto;
    padding: 22px 28px;

    color: #757575;
    text-align: left;
    font: normal normal 300 24px/30px Muli;
    letter-spacing: 0px;
`

const Input = () => {
    return (
        <InputStyle type="search" placeholder="Digite aqui sua busca..." />
    )
}

export default Input