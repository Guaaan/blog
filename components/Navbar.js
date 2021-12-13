import react from "react";

export const Navbar = () => {
  return (
    
      <header class="header-holder">
        <div class="menu-wrapper center-relative relative">
          <div class="header-logo">
            <a href="index.html">
              <img src="images/logo.png" alt="Seppo"></img>
            </a>
          </div>

          <div class="toggle-holder">
            <div id="toggle">
              <div class="first-menu-line"></div>
              <div class="second-menu-line"></div>
              <div class="third-menu-line"></div>
            </div>
          </div>

          <div class="menu-holder">
            <nav id="header-main-menu">
              <ul class="main-menu sm sm-clean">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#clients">Clients</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#millstones">Milestones</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="clear"></div>
        </div>
      </header>
    
  );
};
