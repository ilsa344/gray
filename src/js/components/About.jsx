import React from 'react';

const About =props=>{
    return(
        <div>
    <section id="about" class="about-section text-center">
        <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4">{props.about[0].h2}</h2>
            <p class="text-white-50">Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
            </div>
        </div>
        <img src={props.about[0].img} class="img-fluid" alt=""/>
        </div>
  </section>
        </div>
    )
}
export default About;