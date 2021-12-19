import styled from 'styled-components'

import { Card } from '../Card'
import { Title } from '../Title'
import { Button } from '../Button'

const ContentStyle = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;

    align-content: center;
    align-items: center;
    justify-content: center;
`

export const Content = () => {
    return (
        <ContentStyle>
            <Title>Resultado da busca</Title>
            <Button />
            <Card />
        </ContentStyle>
    )
}