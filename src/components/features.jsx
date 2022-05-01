export const Features = (props) => {
  return (
    <div id='features'>
      <nav className="navbar navbar-inverse">
        <div>
          <div className="navbar-header ">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* <a className="navbar-brand" href="#">WebSiteName</a> */}
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
            <li><a href="Economics.pdf"><h2>WHITE PAPER</h2></a></li>
              <li><a href="#aboutus"><h2>ABOUT US</h2></a></li>
              <li><a href="#timeline"><h2>ROADMAP</h2></a></li>
              <li><a href="#"><h2>SEARCH</h2></a></li>
            </ul>
            <div className="clear-fix"></div>
          </div>
        </div>
      </nav>
    </div>
  )
}
