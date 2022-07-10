import React from "react";

function Navbar(){
    return(
    <>
        <div class="row">
            <div class="col-md-2">   
                <h3>Sizes:</h3>
            </div>
            <div class="col-md-10">
                   <div className="row">
                   <div class="col-md-6"><small>'17'product(s) found</small></div>
                   </div>
                   <div class="col-md-6 jus">
                        <span>order by</span>
                        <select value="select">
                            <option value="select">select</option>
                            <option value="pays">pay</option>
                            <option value="discount">discount</option>
                        </select>
                    </div>
			    </div>
			    <br/>
			    <br/>
            </div>
    </>
    )
}
export default Navbar;