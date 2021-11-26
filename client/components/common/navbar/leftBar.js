import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import { X, Layers, GitPullRequest, User, Users, UserMinus, UserCheck, Airplay, Zap,Heart,Inbox, Sliders } from 'react-feather'

const Leftbar = () => {

  return (
    <Fragment>
      <div className="header-logo-wrapper" id="out_side_click">
        <div className="logo-wrapper">
          <a href="#">
            <Image className="img-fluid for-light" src={require("../../styles/images/logo/logo.png")} alt="" />
            <Image className="img-fluid for-dark" src={require("../../styles/images/logo/logo_dark.png")} alt="" />
          </a>
        </div>
        <div className="toggle-sidebar">
          <Sliders className="status_toggle middle sidebar-toggle" id="sidebar-toggle" />
        </div>
      </div>
      <Col className="left-header horizontal-wrapper pl-0">
        <ul className="horizontal-menu">
          <li className="mega-menu outside">
          <a className={`nav-link -active`} href="#javascript"><Layers /><span></span></a>
            <div className="mega-menu-container nav-submenu menu-to-be-close" style={{ display: 'none' }}>
                <Container fluid={true}>
                  <Row>
                    <Col className="mega-box">
                      <div className="mobile-title d-none">
                        <h5>MegaMenu</h5><X/>
                      </div>
                      <div className="link-section icon">
                        <div className={`${false ? "active" : ""}`}>
                          <h6>ErrorPage</h6>
                        </div>
                        <ul className={`${false ? "d-none" : ""}`}>

                        </ul>
                      </div>
                    </Col>
                    <Col className="mega-box">
                      <div className="link-section doted">
                        <div className={`${false ? "active" : ""}`}>
                          <h6>Authentication</h6>
                        </div>
                        <ul className={`${false ? "d-none" : ""}`}>
                          {/* pages auth */}
                        </ul>
                      </div>
                    </Col>
                    <Col className="mega-box">
                      <div className="link-section dashed-links">
                        <div className={`${false ? "active" : ""}`}>
                          <h6>UsefullPages</h6>
                        </div>
                        <ul className={`${false ? "d-none" : ""}`}>

                        </ul>
                      </div>
                    </Col>
                    <Col className="mega-box">
                      <div className="link-section">
                        <div className={`${false ? "active" : ""}`}>
                          <h6>ComingSoon</h6>
                        </div>
                        <ul className={`svg-icon ${false ? "d-none" : ""}`}>

                        </ul>

                      </div>
                    </Col>
                  </Row>
                </Container>
            </div>
          </li>
          <li className="level-menu outside">
            <a className={false ? "nav-link active" : "nav-link"} href="#javascript" ><Inbox/><span>LevelMenu</span></a>
            <ul className="header-level-menu menu-to-be-close" style={false ? { display: "" } : { display: "none" }}>
              <li><GitPullRequest/><span>FileManager</span></li>
              <li><a href="#javascript"><Users/><span>{"Users"}</span></a>
                <ul className="header-level-sub-menu">
                  <li><User/><span>UserProfile</span></li>
                  <li><UserMinus/><span>UserEdit</span></li>
                  <li><UserCheck/><span>UsersCards</span></li>
                </ul>
              </li>
              <li><Airplay/><span>KanbanBoard</span></li>
              <li><Heart/><span>Bookmark</span></li>
              <li><Zap/><span>SocialApp</span></li>
            </ul>
          </li>
        </ul>
      </Col>
    </Fragment>
  );
}

export default Leftbar;