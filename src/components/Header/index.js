import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
function Header() {
    return ( <header className="header">
        <Container>
            <Row className="justify-content-between">
                <Col xs="auto">
                    <a 
                    className="header__link header_title"
                    href="https://youtube/com/easyfrontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                     Easy Frontend
                    </a>
                </Col>
                <Col xs="auto">
                    <NavLink 
                        exact
                        className="header_link"
                        to="/photo"
                        activeClassName="header_link--active"
                    >
                     Redux Project
                    </NavLink>
                </Col>
            </Row>
        </Container>
    </header>);
}

export default Header;