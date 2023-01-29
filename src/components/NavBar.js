import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY < 300) { // if scroll at top hide the navbar
          setShow(false); 
        } else { // if scroll down show the navbar
          setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);

    return (
        <Navbar expand="md" className={`active ${show ? ("d-block") : ("d-none")}`} variant="dark" bg="dark" fixed='top'>
            <Container>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className='fs-4'>Home</Nav.Link>
                    <Nav.Link href="#link" className='fs-4'>Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;