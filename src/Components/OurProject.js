function OurProject(){
    return(
        <section className="our-project">

        <div className="container">
            <div className="row">
                <div className="col-lg-11 m-auto">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Our Project & Ecosystem</h2>
                            <p>We are building a community-driven project, platform, and ecosystem based around a decentralized meme token that is fully backed by Bitcoin. Initially built on the Ethereum network, we are confident Bitcoon will continue to
                                grow and thrive due to its safety net of being backed by Bitcoin.</p>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="ractangle-bg">
                                <div className="card custom-card">
                                    <img src="images/eth.png" />
                                    <h6>Developed on<br /> Ethereum</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="bit-bg">
                                <div className="card custom-card">
                                    <img src="images/bitcoin.png" />
                                    <h6>Fully Backed <br /> by Bitcoin</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-3">
                            <div className="hexa-bg">
                                <div className="card custom-card">
                                    <img src="images/hexa.png" />
                                    <h6>Built for the<br /> Community</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default OurProject