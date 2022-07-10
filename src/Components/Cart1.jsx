import React from "react"

function Cart1 (){
  return(
    <>
        <div className="row">
            <div className="col-md-2">
                <div class="size-section">
                        <div class="shirt-sizes">
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="XS" />
                                    <span id="XS" class="checkmark">XS</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="S" />
                                    <span id="S" class="checkmark">S</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="M" />
                                    <span id="M" class="checkmark">M</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="ML" />
                                    <span id="ML" class="checkmark">ML</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="L" />
                                    <span id="L" class="checkmark">L</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="XL" />
                                    <span id="XL" class="checkmark">XL</span>
                                </label>
                            </div>
                            <div class="sizes-btn">
                                <label for="">
                                    <input type="checkbox" value="XXL" />
                                    <span id="XXL" class="checkmark">XXL</span>
                                </label>
                            </div>
                            <div class="star-container">
                                <small>Leave a star on Github if this repository was useful :)</small>
                            </div>
                            <div class="star-rating">
                                <button class="star-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill star" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                  </svg>Star</button>
                                  <span>
                                     <button class="num">848</button>
                                  </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-10">
                  <div class="row">
				   <div class="col-md-3">
					<p class="cloth"></p>
						<p class="cloth">Price shipping</p>
					<img src="https://azmadeu.github.io/react-shopping-cart/static/media/Cat-Tee-Black-T-shirt.4edb5154.jpg" alt="" />
		    		<p class="text-center">Cat Tee Black T-shirt</p>
					<hr class="line" />
					<h5 class="text-center">$8.99</h5>
					<h6 class="text-center">or 9*$1.21</h6>
					<button class="com"><p class="text">Add to cat</p></button>
				</div>
				<div class="col-md-3">
					<p class="cloth">Price shipping</p><img src="https://azmadeu.github.io/react-shopping-cart/static/media/DarkThug.8da09d0b.jpg" alt=" " />
					<p class="text-center">Cat Tee Black T-shirt</p>
					<hr class="line" />
					<h5 class="text-center">$8.99</h5>
					<h6 class="text-center">or 9*$1.21</h6>
					<button class="com"><p class="text">Add to cat</p></button>
				</div>
				<div class="col-md-3">
					<p class="cloth">Price shipping</p><img src="https://azmadeu.github.io/react-shopping-cart/static/media/Sphynx.b047a598.jpg" alt=" " />
					<p class="text-center">Cat Tee Black T-shirt</p>
					<hr class="line" />
					<h5 class="text-center">$8.99</h5>
					<h6 class="text-center">or 9*$1.21</h6>
					<button class="com"><p class="text">Add to cat</p></button>
				</div>
				<div class="col-md-3">
					<p class="cloth">Price shipping</p><img src="https://azmadeu.github.io/react-shopping-cart/static/media/Skuul.cb8727d9.jpg" alt=" " />
					<p class="text-center">Cat Tee Black T-shirt</p>
					<hr class="line" />
					<h5 class="text-center">$8.99</h5>
					<h6 class="text-center">or 9*$1.21</h6>
					<button class="com"><p class="text">Add to cat</p></button>
				</div>
			</div>
	        <br />
            <br/>
        </div>
    </div>
    </>

  )
}
export default Cart1;