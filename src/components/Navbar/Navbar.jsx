import React, { useState } from "react"
import "./Navbar.css"
import MenuIcon from "@mui/icons-material/Menu"
import RightDrawer from "../drawer/RightDrawer"
import logo from "../../images/logo.png"
import ModalBox from "../modal/Modal"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  return (
    <div>
      <div className="navbar-container">
        <div>
          <img src={logo} className="logo" alt="" />
        </div>

        <nav className="navbar">
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="/" className="nav-item">
                Home
              </a>
            </li>
            <li
              onClick={handleOpen}
              style={{
                cursor: "pointer"
              }}
            >
              <span className="nav-item">Buy now</span>
            </li>
            <li>
              <a href="/services" className="nav-item">
                Leaderboard
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-item">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav_responsive">
          <MenuIcon className="menu_icon" fontSize="large" onClick={() => setIsOpen(!isOpen)} />
          <RightDrawer open={isOpen} onClose={setIsOpen}>
            <ul className="nav_responsive_ul">
              <li>
                <a href="/">Home</a>
              </li>
              <li onClick={handleOpen}>
                <div
                  style={{
                    color: "white"
                  }}
                  href="#"
                >
                  Buy now
                </div>
              </li>
              <li>
                <a href="/services">Leaderboard</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </RightDrawer>
        </div>
      </div>
      <ModalBox open={openModal} handleClose={handleClose} />
    </div>
  )
}

export default Navbar
