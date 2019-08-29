import React from 'react';

const Contact =props=>{
    let last=props.contact[0].last.map((v,i)=>{
        return(
            <div class="col-md-4 mb-3 mb-md-0" key={i}>
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class={v.icon}></i>
                  <h4 class="text-uppercase m-0">{v.h}</h4>
                  <hr class="my-4"/>
                  <div class="small text-black-50">{v.des}</div>
                </div>
              </div>
            </div>
        )
    })
    return(
        <div>
<section class="contact-section bg-black">
    <div class="container">

      <div class="row">
        {last}
      </div>

      <div class="social d-flex justify-content-center">
        <a href="#" class="mx-2">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="mx-2">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="mx-2">
          <i class="fab fa-github"></i>
        </a>
      </div>

    </div>
  </section>



  <footer class="bg-black small text-center text-white-50">
    <div class="container">
      Copyright &copy; Your Website 2019
    </div>
  </footer>
        </div>
    )
}
export default Contact;