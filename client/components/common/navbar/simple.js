import React from "react";
import styles from "./Navbar.module.scss";
import {
  Container,
  Collapse,
  Nav,
  NavbarToggle,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import Link from "next/link";

const NavbarSimple = () => {
  return (
    <div
      className={`${styles.navbar} navbar-expand-lg bg-light ${styles.navbarDark}`}
    >
      <Container fluid>
        <button
          type="button"
          className={`navbar-toggler`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`navbar-nav ${styles.navbarNav} ml-auto`}>
            <Link href={"/"}>
              <a className={`nav-item ${styles.navLink}`}>Inicio</a>
            </Link>
            <Link href="/products">
              <a className={`nav-item ${styles.navLink}`}>Productos</a>
            </Link>
            <Link href="/blog">
              <a className={`nav-item ${styles.navLink} mr-5`}>Blog</a>
            </Link>
            <Link href={"/login"}>
              <a className={`${styles.navLink} ${styles.navLinkBtn}`}>
                Iniciar Sesión
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarSimple;
