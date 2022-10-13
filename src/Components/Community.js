import swal from 'sweetalert';

function Community(){

    function myFunction() {
        var copyText = document.getElementById("myInput");
      
        copyText.select();
        copyText.setSelectionRange(0, 99999);
      
        navigator.clipboard.writeText(copyText.value);
        
        // alert("Copied the text: " + copyText.value);
        swal({
            title: "Copied",
            text: copyText.value,
            icon: "success",
            button: "Done",
          });
      }
    return(
        <section className="community">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="main-heading">Community</h2>
                    <p className="main-paragraphs">If you'd like to donate to the <strong><span className="text-white"> TEAM </span></strong> - Send <span className="text-blue">ETH</span>, <span className="text-blue">wBTC</span> or COON here. We appreciate your support!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 m-auto">
                    <div className="copy_card">
                        <div className="row align-items-center text-center">
                            <div className="col-lg-5  p-0">
                                <button onClick={myFunction} className="banner-btn m-0"><span><img src="images/copy.png" alt="" className="eye" /></span> Copy to Clipboard</button>

                            </div>
                            <div className="col-lg-6 p-0">
                                <input type="text" className="main-paragraphs myinputs m-59" value="0x3f7F0fA064ca7e7FA846025972710B4B7b4d9851" id="myInput" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}
export default Community