import React from 'react';

const Nav =props=>{
    let ul=props.nav[0].list.map((v,i)=>{
        return(
            <li class="nav-item" key={i}>
            <a class="nav-link js-scroll-trigger" href="#about">{v.item}</a>
          </li>
        )
    })
    return(
        <div>
 <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">{props.nav[0].brand}</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          {ul}
        </ul>
      </div>
    </div>
  </nav>

        </div>
    )
}
export default Nav;