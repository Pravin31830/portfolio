import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
  <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
<header id="header">
  <div className="d-flex flex-column">

    <div className="profile">
      <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
      <h1 className="text-light"><a href="index.html">Pravin</a></h1>
      <div class="social-links mt-3 text-center">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>

    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
      </ul>
    </nav>
  </div>
</header>


<section id="hero" className="d-flex flex-column justify-content-center align-items-center">
  <div className="hero-container" data-aos="fade-in">
  <h1>Hello There</h1>
    <h1>I'm Pravin</h1>
    <p>I'm <span className="typed" data-typed-items="Designer,Application Developer"></span></p>
  </div>
</section>

<div id="main">

  
  <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>About</h2>
        <p>
MERN Stack developer with proven ability to design and develop JavaScript-based applications for web environments. Strong knowledge of React JS, Node JS,Real-Time Database(Firebase,Mysql,MangoDB), jQuery, HTML, CSS, and Bootstrap. Experienced in all stages of interface component design, from conception to final testing and deployment of web-responsive applications.</p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>UI/UX Designer &amp; Web Developer.</h3>
          <p className="fst-italic">
            UI (User Interface) design and UX (User Experience) design are two interconnected disciplines focused on creating effective and enjoyable digital experiences for users.
            Web development involves the creation and maintenance of websites and web applications.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>9 Febraury 2003</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8778682768</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tiruchirappalli</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's In(Computer Application)</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>pravin20201047@gmail.com</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>

    </div>
  </section>

 
 
  <section id="skills" className="skills section-bg">
    <div className="container">

      <div className="section-title">
        <h1 id="ee" style={{textAlign:"center"}}>Skills</h1>
      </div>
       <div className="section-title">
        <h2>UI/UX Design</h2>
      </div>
      
      <div className="row skills-content">

        <div className="col-lg-6" data-aos="fade-up">

          <div className="progress">
            <span className="skill">Canva<i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          
          
          <div className="progress">
            <span className="skill">Figma<i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

</div>
<div className="col-lg-6" data-aos="fade-up">

          <div className="progress">
            <span className="skill">Photoshop<i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

</div>

</div>

       <div className="section-title">
        <h2>Tools</h2>
      </div>

      <div className="row skills-content">
      
  

        <div className="col-lg-6" data-aos="fade-up">

          <div className="progress">
            <span className="skill">HTML <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">CSS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          
          
          <div className="progress">
            <span className="skill">Bootstrap<i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          
          
          <div className="progress">
            <span className="skill">JavaScript <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">


          <div className="progress">
            <span className="skill">React.js<i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          
          
          <div className="progress">
            <span className="skill">Node.js<i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          

          <div className="progress">
            <span className="skill">Real-time Database<i className="val">55%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>
        

      </div>
              <div className="row skills-content">

      
      <div className="section-title">
        <h2>Programming Languages</h2>
      </div>
      
          <div className="progress">
            <span className="skill">Java<i className="val">70%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
      
      </div>

    </div>
  </section>


  <section id="resume" class="resume">
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>Pravin</h4>
            <p><em>Recent College Graduate With Background In WebDevelopment.Excellent Focus,Communication, And Ability To Learn Rapidly.Strong Critical Analysis And Problem Solving.</em></p>
            <ul>
              <li>92/31C North Tharanallur,Gandhi Market,Trichy</li>
              <li>+91 8778682768</li>
              <li>pravin20201047@gmail.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Fine Arts &amp; Computer Application</h4>
            <h5>2020 - 2023</h5>
            <p><em>Srimad Andavan Arts And Science College - Trichy</em></p>
          </div>
          <div className="resume-item">
            <h4>HSLC</h4>
            <h5>2018 - 2020</h5>
            <p><em>Bishop Heber Higher Secondary School - Trichy</em></p>
          </div>
        </div>
                  <div className="col-lg-6" data-aos="fade-up">
                  <h3 className="resume-title">Interest</h3>
<div className="resume-item">
            <h4></h4>
            <h5>WebDesign</h5>
            <br/>
            <h5>WebDevelopment</h5>
            <br/>
            <h5>Photo Editing</h5>
            <br/>
            <h5>Video Editing</h5>
          </div>
          <div className="resume-item">
          <h3 className="resume-title">Hobbies</h3>
            <h4></h4>
            <h5>Gaming</h5>
            <br/>
            <h5>WebDevelopment</h5>
            <br/>
            <h5>Video Editing</h5>
          </div>
          <div className="resume-item">
          <h3 className="resume-title">Intern</h3>
            <h4>VijayTechzone</h4>
            <h5>MERN Stack Developer</h5>
            
          </div>

</div>
              </div>

    </div>
  </section>

  
  <section id="portfolio" class="portfolio section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="row" data-aos="fade-up">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">


        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>




        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
            <div className="portfolio-links">
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  

  
  <section id="contact" class="contact">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
      </div>

      <div className="row" data-aos="fade-in">

        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>92/31C North Tharanallur,Trichy-620008</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>pravin20201047@gmail</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+91 8778682768</p>
            </div>

          {/* \  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31351.63571829359!2d78.67980784816699!3d10.814796721410776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5070425d60b%3A0x29949d8da9b4efb2!2sTiruchirappalli%2C%20Tamil%20Nadu%20620008!5e0!3m2!1sen!2sin!4v1702012938721!5m2!1sen!2sin" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
          </div>

        </div>

        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form   role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label for="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" required/>
              </div>
              <div className="form-group col-md-6">
                <label for="name">Your Email</label>
                <input type="email" className="form-control" name="email" id="email" required/>
              </div>
            </div>
            <div className="form-group">
              <label for="name">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject" required/>
            </div>
            <div className="form-group">
              <label for="name">Message</label>
              <textarea class="form-control" name="message" rows="10" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>

</div>


<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
      </div>
      
    )
  }
}
