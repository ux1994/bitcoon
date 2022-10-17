function CoonSwap(){
    return(
        
        <section className="coonswap">
        <div className="container">
            <div className="row">
                <div className="col-lg-11 m-auto">
                    <div className="row">
                        <div className="col-lg-7 order-md-1 order-sm-2 order-2 text-center  new_card">
                            <img src="images/dashoard.png" className="dashboard_img" alt="Bitcoon" />
                            <div className="text-center mr-45">
                                <button type="submit" className="btn custom-btn mt-4"><span><img src="images/rectangle.png" alt="Bitcoon" /></span>Use CoonSwap</button></div>
                        </div>
                        <div className="col-lg-5 order-md-1 order-sm-1 order-1">
                            <h2 className="main-heading">CoonSwap</h2>
                            <div className="dashboard_card">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 col-4">
                                        <img src="images/certik.png" className="certik" alt="Bitcoon" />

                                    </div>
                                    <div className="col-lg-7 col-8 text-end">
                                        <a href="/" className="banner-btn"><span><img src="images/eye.png" alt="Bitcoon" className="eye" /></span> Audit Report</a>
                                    </div>
                                </div>
                            </div>
                            <p className="main-paragraphs">COON is the infastructure of <span className="text-blue">CoonSwap</span>, our proprietary decentralized hub. CoonSwap gives users the ability to:</p>

                            <ul className="dashboard_ul">
                                <li><strong><span className="text-white"> POOL </span></strong>(Provide Liquidity) </li>
                                <li><strong><span className="text-white"> SWAP </span></strong>(Buy/Sell Tokens) </li>
                                <li><strong><span className="text-white"> STAKE</span></strong> (Stake COON for xCOON)</li>
                                <li><strong><span className="text-white"> FARM </span></strong>(Stake Liquidity Pool Tokens) </li>
                            </ul>
                            <p className="main-paragraphs mt-1">CoonSwap will also be developing a<strong><span className="text-white">  DAO </span></strong> to allow our community to utilize xCOON for voting, and<strong><span className="text-white">  NFTS</span></strong> for our community to mint
                                their own pet Coon.</p>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}

export default CoonSwap