import styled from 'styled-components'
import Input from '../Input'
import bg from '../../resources/fundo-busca.png'
import bg2x from '../../resources/fundo-busca@2x.png'

const SearchStyle = styled.div`
    background: transparent url(${bg}) 0% 0% no-repeat padding-box;

    width: 100%;

    display: flex;
    margin: 0 auto;
    padding: 22px 28px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Search = () => {
    return (
        <SearchStyle>
            <Input />
        </SearchStyle>
    )
}

export default Search