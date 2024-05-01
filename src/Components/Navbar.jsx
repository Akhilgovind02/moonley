// import React from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

// function NavBar() {
//   return (
//     <>
//       <Navbar style={{border:'2px black solid'}} className="py-4" bg="light" data-bs-theme="light">
//         <Container>
//           <Navbar.Brand href="" className="font-bold text-xl">
//             ABC
//           </Navbar.Brand>
//           <Nav className="flex flex-grow justify-end">
//             <Nav.Link href="" className="mx-4">
//               Home
//             </Nav.Link>
//             <Nav.Link href="" className="mx-4">
//               About
//             </Nav.Link>
//             <Nav.Link href="" className="mx-4">
//               Services
//             </Nav.Link>
//             <Nav.Link href="" className="mx-4">
//               Projects
//             </Nav.Link><Nav.Link href="" className="mx-4">
//               Contact Us
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;



import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <>
      <Navbar className="py-4" bg="light" data-bs-theme="light" expand="lg">
        <Container>
          <Navbar.Brand href="" className="font-bold text-xl">
            ABC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="" className="mx-4">
                Home
              </Nav.Link>
              <Nav.Link href="" className="mx-4">
                About
              </Nav.Link>
              <Nav.Link href="" className="mx-4">
                Services
              </Nav.Link>
              <Nav.Link href="" className="mx-4">
                Projects
              </Nav.Link>
              <Nav.Link href="" className="mx-4">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
