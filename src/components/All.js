
// import React, { Component } from 'react';

// export default class All extends Component {
  
//   render() {
//     return (
//       <>
//         <div className="container-fluid bg-secondary text-white text-light py-5 " style={{margin: '35px 0px',marginTop:'20px' }}>
//           <div className="row justify-content-center">
//             <div className="col-md-8 text-center">
//               <h1 className="display-4 mb-4">Welcome to KTNews!</h1>
//               <p className="lead mb-5">Stay informed with the latest news across various categories.</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="container py-5">
//           <div className="row justify-content-center">

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Business</h5>
//                   <p className="card-text">Stay ahead of the curve with exclusive insights into the world of business and finance.</p>
//                   <a href="/business" className="btn btn-primary rounded-pill">Business</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Entertainment</h5>
//                   <p className="card-text">Dive into the glamour and excitement of the entertainment world with our latest updates and gossip.</p>
//                   <a href="/entertainment" className="btn btn-primary rounded-pill">Entertainment</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">General</h5>
//                   <p className="card-text">Explore the pulse of the planet with our comprehensive coverage of global news and current affairs.</p>
//                   <a href="/general" className="btn btn-primary rounded-pill">General</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Health</h5>
//                   <p className="card-text">Empower yourself with the latest health tips, trends, and breakthroughs to live your best life.</p>
//                   <a href="/health" className="btn btn-primary rounded-pill">Health</a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Science</h5>
//                   <p className="card-text">Unravel the mysteries of the universe and delve into cutting-edge scientific discoveries shaping our future.</p>
//                   <a href="/science" className="btn btn-primary rounded-pill">Science</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Sports</h5>
//                   <p className="card-text">Fuel your passion for sports with in-depth analysis, highlights, and behind-the-scenes stories from the sporting world.</p>
//                   <a href="/sports" className="btn btn-primary rounded-pill">Sports</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Technology</h5>
//                   <p className="card-text">Embark on a journey through the digital frontier with the latest in tech news, gadgets, and innovations.</p>
//                   <a href="/technology" className="btn btn-primary rounded-pill">Technology</a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* <footer className="bg-dark text-light py-4">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <h5>KTNews</h5>
//             <p>Stay informed with the latest news across various categories.</p>
//           </div>
//           <div className="col-md-3">
//             <h5>Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="/">Home</a></li>
//               <li><a href="/business">Business</a></li>
//               <li><a href="/entertainment">Entertainment</a></li>
//               <li><a href="/general">General</a></li>
//               <li><a href="/health">Health</a></li>
//             </ul>
//           </div>
//           <div className="col-md-3">
//             <h5>Contact Us</h5>
//             <ul className="list-unstyled">
//               <li>Email: info@ktnews.com</li>
//               <li>Phone: +1 (123) 456-7890</li>
//               <li>Address: 123 Street, City, Country</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer> */}

//         {/* working on footer part now */}
// {/* <!-- Footer Start --> */}
//         <footer className="bg-dark text-white py-4">
//           <div className="container">
//               <div className="row">
//                   <div className="col-lg-3 col-md-6">
//                       <div className="footer-widget">
//                           <h3 className="widget-title">KTNews</h3>
//                           <p>Stay updated with the latest news and trends.</p>
//                       </div>
//                   </div>
//                   <div className="col-lg-3 col-md-6">
//                       <div className="footer-widget">
//                           <h3 className="widget-title">Contact Information</h3>
//                           <ul className="contact-info">
//                               <li><i className="fa fa-envelope"></i> <a href="mailto:kaushikwagh21@gmail.com">kaushikwagh21@gmail.com</a></li>
//                               <li><i className="fa fa-phone"></i> +91 7*******62</li>
//                           </ul>
//                       </div>
//                   </div>
//                   <div className="col-lg-3 col-md-6">
//                       <div className="footer-widget">
//                           <h3 className="widget-title">Newsletter</h3>
//                           <p>Subscribe to our newsletter for the latest updates.</p>
//                           <form>
//                               <div className="input-group">
//                                   <input type="email" className="form-control" placeholder="Your email here" />
//                                   <div className="input-group-append">
//                                       <button className="btn btn-primary" type="button">Subscribe</button>
//                                   </div>
//                               </div>
//                           </form>
//                       </div>
//                   </div>
//                   <div className="col-lg-3 col-md-6">
//                       <div className="footer-widget">
//                           <h3 className="widget-title">Follow Us</h3>
//                           <ul className="social-icons">
//                               <li><a href="https://kaushikwagh.dorik.io/"><i className="fab"></i>Website</a></li>
//                               <li><a href="https://www.linkedin.com/in/kaushik-wagh-r-a64704228/"><i className="fab"></i>Linkedin</a></li>
//                           </ul>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </footer>
//       </>
//     );
//   }
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// with button 


// import React, { Component } from 'react';
// import './All.css';

// export default class All extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showWelcomeModal: true
//     };
//   }

//   handleCloseModal = () => {
//     this.setState({ showWelcomeModal: false });
//   };

//   render() {
//     return (
//       <>
//         {this.state.showWelcomeModal && (
//           <div className="welcome-modal">
//             <div className="welcome-modal-content">
//               <img src="/kt logo.png" alt="Logo" className="logo" />
//               <h1 className="display-4">Welcome to KTNews!</h1>
//               <p className="lead">Stay informed with the latest news across various categories.</p>
//               <button className="btn btn-primary" onClick={this.handleCloseModal}>Get Started</button>
//             </div>
//           </div>
//         )}

//         <div className="container-fluid bg-secondary text-white text-light py-5" style={{ margin: '35px 0px', marginTop: '20px' }}>
//           <div className="row justify-content-center">
//             <div className="col-md-8 text-center">
//               <h1 className="display-4 mb-4">Welcome to KTNews!</h1>
//               <p className="lead mb-5">Stay informed with the latest news across various categories.</p>
//             </div>
//           </div>
//         </div>

//         <div className="container py-5">
//           <div className="row justify-content-center">
//             {/* Your cards here */}
//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Business</h5>
//                   <p className="card-text">Stay ahead of the curve with exclusive insights into the world of business and finance.</p>
//                   <a href="/business" className="btn btn-primary rounded-pill">Business</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Entertainment</h5>
//                   <p className="card-text">Dive into the glamour and excitement of the entertainment world with our latest updates and gossip.</p>
//                   <a href="/entertainment" className="btn btn-primary rounded-pill">Entertainment</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">General</h5>
//                   <p className="card-text">Explore the pulse of the planet with our comprehensive coverage of global news and current affairs.</p>
//                   <a href="/general" className="btn btn-primary rounded-pill">General</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Health</h5>
//                   <p className="card-text">Empower yourself with the latest health tips, trends, and breakthroughs to live your best life.</p>
//                   <a href="/health" className="btn btn-primary rounded-pill">Health</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Science</h5>
//                   <p className="card-text">Unravel the mysteries of the universe and delve into cutting-edge scientific discoveries shaping our future.</p>
//                   <a href="/science" className="btn btn-primary rounded-pill">Science</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Sports</h5>
//                   <p className="card-text">Fuel your passion for sports with in-depth analysis, highlights, and behind-the-scenes stories from the sporting world.</p>
//                   <a href="/sports" className="btn btn-primary rounded-pill">Sports</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 mb-4">
//               <div className="card text-center border-0 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title">Technology</h5>
//                   <p className="card-text">Embark on a journey through the digital frontier with the latest in tech news, gadgets, and innovations.</p>
//                   <a href="/technology" className="btn btn-primary rounded-pill">Technology</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <footer className="bg-dark text-white py-4">
//           <div className="container">
//               <div className="row">
//                   <div className="col-lg-3 col-md-6">
//                       <div className="footer-widget">
//                           <h3 className="widget-title">KTNews</h3>
//                           <p>Stay updated with the latest news and trends.</p>
//                       </div>
//                   </div>
//                   <div className="col-lg-3 col-md-6">
//                       <div className="footer-widget">
//                           <h3 className="widget-title">Contact Information</h3>
//                           <ul className="contact-info">
//                               <li><i className="fa fa-envelope"></i> <a href="mailto:kaushikwagh21@gmail.com">kaushikwagh21@gmail.com</a></li>
//                               <li><i className="fa fa-phone"></i> +91 7*******62</li>
//                           </ul>
//                       </div>
//                   </div>
//                   <div className="col-lg-3 col-md-6">
//                       <div className="footer-widget">
//                           <h3 className="widget-title">Newsletter</h3>
//                           <p>Subscribe to our newsletter for the latest updates.</p>
//                           <form>
//                               <div className="input-group">
//                                   <input type="email" className="form-control" placeholder="Your email here" />
//                                   <div className="input-group-append">
//                                       <button className="btn btn-primary" type="button">Subscribe</button>
//                                   </div>
//                               </div>
//                           </form>
//                       </div>
//                   </div>
//                   <div className="col-lg-3 col-md-6">
//                       <div className="footer-widget">
//                           <h3 className="widget-title">Follow Us</h3>
//                           <ul className="social-icons">
//                               <li><a href="https://kaushikwagh.dorik.io/"><i className="fab"></i>Website</a></li>
//                               <li><a href="https://www.linkedin.com/in/kaushik-wagh-r-a64704228/"><i className="fab"></i>Linkedin</a></li>
//                           </ul>
//                       </div>
//                   </div>
//               </div>
//           </div>
//         </footer>
//       </>
//     );
//   }
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// without button - only timmer

import React, { Component } from 'react';
import './All.css';

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWelcomeModal: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showWelcomeModal: false });
    }, 2000);
  }

  render() {
    return (
      <>
        {this.state.showWelcomeModal && (
          <div className="welcome-modal">
            <div className="welcome-modal-content">
              <img src="/kt logo.png" alt="Logo" className="logo" />
              <h1 className="display-4">Welcome to KTNews!</h1>
              <p className="lead">Stay informed with the latest news across various categories.</p>
            </div>
          </div>
        )}

        <div className="container-fluid bg-secondary text-white text-light py-5" style={{ margin: '35px 0px', marginTop: '20px' }}>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="display-4 mb-4">Welcome to KTNews!</h1>
              <p className="lead mb-5">Stay informed with the latest news across various categories.</p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card text-center border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Business</h5>
                  <p className="card-text">Stay ahead of the curve with exclusive insights into the world of business and finance.</p>
                  <a href="/business" className="btn btn-primary rounded-pill">Business</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Entertainment</h5>
                  <p className="card-text">Dive into the glamour and excitement of the entertainment world with our latest updates and gossip.</p>
                  <a href="/entertainment" className="btn btn-primary rounded-pill">Entertainment</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">General</h5>
                  <p className="card-text">Explore the pulse of the planet with our comprehensive coverage of global news and current affairs.</p>
                  <a href="/general" className="btn btn-primary rounded-pill">General</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Health</h5>
                  <p className="card-text">Empower yourself with the latest health tips, trends, and breakthroughs to live your best life.</p>
                  <a href="/health" className="btn btn-primary rounded-pill">Health</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Science</h5>
                  <p className="card-text">Unravel the mysteries of the universe and delve into cutting-edge scientific discoveries shaping our future.</p>
                  <a href="/science" className="btn btn-primary rounded-pill">Science</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Sports</h5>
                  <p className="card-text">Fuel your passion for sports with in-depth analysis, highlights, and behind-the-scenes stories from the sporting world.</p>
                  <a href="/sports" className="btn btn-primary rounded-pill">Sports</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title">Technology</h5>
                  <p className="card-text">Embark on a journey through the digital frontier with the latest in tech news, gadgets, and innovations.</p>
                  <a href="/technology" className="btn btn-primary rounded-pill">Technology</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-dark text-white py-4">
          <div className="container">
            <div className="row">
                  <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">
                          <h3 className="widget-title">KTNews</h3>
                          <p>Stay updated with the latest news and trends.</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">
                          <h3 className="widget-title">Contact Information</h3>
                          <ul className="contact-info">
                              <li><i className="fa fa-envelope"></i> <a href="mailto:kaushikwagh21@gmail.com">kaushikwagh21@gmail.com</a></li>
                              <li><i className="fa fa-phone"></i> +91 7*******62</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">
                          <h3 className="widget-title">Newsletter</h3>
                          <p>Subscribe to our newsletter for the latest updates.</p>
                          <form>
                              <div className="input-group">
                                  <input type="email" className="form-control" placeholder="Your email here" />
                                  <div className="input-group-append">
                                      <button className="btn btn-primary" type="button">Subscribe</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">
                          <h3 className="widget-title">Follow Us</h3>
                          <ul className="social-icons">
                              <li><a href="https://kaushikwagh.dorik.io/"><i className="fab"></i>Website</a></li>
                              <li><a href="https://www.linkedin.com/in/kaushik-wagh-r-a64704228/"><i className="fab"></i>Linkedin</a></li>
                          </ul>
                      </div>
                  </div>
                </div>
          </div>
        </footer>
      </>
    );
  }
}
