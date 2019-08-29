import React from 'react';

const Header=props=>{
    return(
        <div>
            <header class="masthead">
                <div class="container d-flex flex-column text-center h-100 justify-content-center align-items-center">
                {/* <div class="px-auto text-center"> */}
                    <h1 class=" my-0 text-center text-uppercase size">{props.header[0].h1}</h1>
                    <h2 class="text-white-50 text-center mt-2 mb-5">{props.header[0].h2}</h2>
                    <a href="#about" class="btn btn-primary justify-content-center js-scroll-trigger">{props.header[0].a}</a>
                {/* </div> */}
                </div>
            </header>
        </div>
    )
}
export default Header;