import styled from 'styled-components'
import logo from '../../resources/logo-teste.svg'
import Search from '../Search'

const HeaderStyle = styled.header`
    background: transparent linear-gradient(272deg, #AE276F 0%, #5F1478 100%) 0% 0% no-repeat padding-box;

    width: 100vw;
    max-height: 260px;

    padding: 140px auto 40px auto;

    & > img {
        margin: 14px 14px;
    }
`

const Header = () => {
    return (
        <HeaderStyle>
            <img src={logo} />
            <Search />
        </HeaderStyle>
    ) 
}

export default Header;