function Navbar() {
    
    return(

        <header className="header">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="images/logo.png" alt="Bitcoon" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Ecosystem</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">CoonSwap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Roadmap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pet Coon</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Community</a>
                        </li>
                        <li className="nav-item dropdown li-border">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      EN
                    </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">hn</a></li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <button type="submit" className="btn custom-btn"><span><img src="images/rectangle.png" alt="Bitcoon" /></span>Use CoonSwap</button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

        <div className="container">
            <div className="row main-banner">
                <div className="col-lg-7 col-md-7 mt-5">
                    <h1>A Decentralized Meme Token that is backed by Bitcoin</h1>
                    <p>COON - CoonSwap - Backed by wBTC - <br />Reward System - Community DAO - Pet<br /> Coon NFTS - And More! </p>
                    <div className="banner_btn btn-margin">
                        <a href="/" className="blue-btn">How to Buy</a>
                        <a href="." className="banner-btn">Read CoonPaper</a>

                    </div>
                </div>
                <div className="col-lg-5 col-md-5">
                    <img src="images/banner.png" alt="banner" className="banner-img" />
                </div>
            </div>
        </div>
    </header>
    )
}

export default Navbar