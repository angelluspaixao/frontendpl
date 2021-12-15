import styled from 'styled-components'

const IconStyle = styled.img`
    background: #F6F4F6 0% 0% no-repeat padding-box;
    border: 1px solid #E4E4E4;
    border-radius:100%;

    max-width: 96px;

    margin: 16px;
`

const Icon = ({...props}) => {
    return(
        <IconStyle src={props.src} alt={props.alt} />
    )
}

export default Icon