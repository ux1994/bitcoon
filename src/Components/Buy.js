function Buy(){
    return(
        
        <section className="buy">

        <div className="container">
            <div className="row">
                <div className="col-lg-11 m-auto">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 order-md-1 order-sm-2 order-2">
                            <h2 className="main-heading">How to Buy</h2>
                            <p className="main-paragraph">COON is best to be purchased and sold through CoonSwap, but can also be found on Uniswap and an ever-growing list of centralized exchanges. You will need to have wBTC in your wallet and ETH for gas.</p>
                            <p className="main-paragraph">
                                Please note that, outside of CoonSwap, exchanges which support one may not support the other. COON is a decentralized experiment and, as such, we always incentivize the use of decentralized exchanges. If you choose to utilize a centralized exchange instead,
                                remember to research it first to ensure it is both safe and secure.</p>
                            <a href="/" className="blue-btn mt-20">Buy Coon</a>
                        </div>
                        <div className="col-lg-6 col-md-6 order-md-1 order-sm-1 order-1 text-center">
                            <img src="images/cat.png" className="cat_img" alt="Bitcoon" /> </div>
                    </div>
                </div>
            </div>


            <div className="row start_guide">
                <div className="col-lg-11 m-auto">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="main-heading">Quick Start Guide</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <div className="card guide_card">
                                <div className="row bottom_border">
                                    <div className="col-lg-1 col-12">
                                        <div className="count">
                                            <h4 className="text-white">1</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-2 mb-none">
                                        <img src="images/line.png" alt="Bitcoon" className="pt-32" />
                                    </div>
                                    <div className="col-lg-9 col-12">
                                        <div className="guide_headings">
                                            <h3 className="mt-2">Create MetaMask Wallet </h3>
                                            <p>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive COON and wBTC.</p>
                                        </div>
                                    </div>
                                </div>



                                <div className="row bottom_border mt-4">
                                    <div className="col-lg-1 col-12">
                                        <div className="count">
                                            <h4 className="text-white">2</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-2 mb-none">
                                        <img src="images/line.png" alt="Bitcoon" className="pt-32" />
                                    </div>
                                    <div className="col-lg-9 col-12">
                                        <div className="guide_headings">
                                            <h3 className="mt-2">Send ETH to your wallet</h3>
                                            <p>You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the ERC-20 network when transfering ETH.</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="row bottom_border mt-4">
                                    <div className="col-lg-1 col-12">
                                        <div className="count">
                                            <h4 className="text-white">3</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-2 mb-none">
                                        <img src="images/line.png" alt="Bitcoon" className="pt-32" />
                                    </div>
                                    <div className="col-lg-9 col-12">
                                        <div className="guide_headings">
                                            <h3 className="mt-2">Connect your wallet to CoonSwap</h3>
                                            <p>Access your wallet to CoonSwap by clicking ‘Connect to a wallet’ and selecting MetaMask.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row  mt-4">
                                    <div className="col-lg-1 col-12">
                                        <div className="count">
                                            <h4 className="text-white">4</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-2 mb-none">
                                        <img src="images/line.png" alt="Bitcoon" className="pt-32" />
                                    </div>
                                    <div className="col-lg-9 col-12">
                                        <div className="guide_headings">
                                            <h3 className="mt-2">Swap wBTC for COON</h3>
                                            <p>You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.</p>
                                        </div>
                                    </div>
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

export default Buy