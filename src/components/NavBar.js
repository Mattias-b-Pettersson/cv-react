import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll } from "react-scroll";
import styles from '../styles/NavBar.module.css';

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
        <>
          <Navbar expand="md" className={`active ${show ? ("d-block") : ("d-none")}`} variant="dark" bg="dark" fixed='top'>
              <Container>
                  <Navbar.Toggle aria-controls="navbar" />
                  <Navbar.Collapse id="navbar">
                  <Nav className="me-auto">
                      <Link 
                      to='home'
                      spy={true}
                      className={`${styles.navLink} me-3`}
                      activeClass="border-bottom"
                      >
                        Hem
                      </Link>
                      <Link 
                      to='about'
                      offset={-100}
                      spy={true}
                      className={`${styles.navLink} me-3`}
                      activeClass="border-bottom"
                      >
                        Om mig
                      </Link>
                      <Link 
                      to='resume'
                      offset={-100}
                      spy={true}
                      className={`${styles.navLink} me-3`}
                      activeClass="border-bottom"
                      >
                        Resume
                      </Link>
                      <Link 
                      to='portfolio'
                      offset={-100}
                      spy={true}
                      className={`${styles.navLink} me-3`}
                      activeClass="border-bottom"
                      >
                        Portfolio
                      </Link>
                      <Link 
                      to='contact'
                      offset={-100}
                      spy={true}
                      className={`${styles.navLink} me-3`}
                      activeClass="border-bottom"
                      >
                        Kontakt
                      </Link>
                  </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          <Link to='home'>
          <FontAwesomeIcon icon={faArrowCircleUp} className={`${styles.upArrow} ${show ? ("d-block") : ("d-none")}`} />
          </Link>
        </>
    );
}

export default NavBar;