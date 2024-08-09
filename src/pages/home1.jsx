import React from "react";
import { Link } from 'react-router-dom';

const Home1 = () => {
  return (
    <div className="container-fluid text-dark-blue bg-light-yellow font-poppins">
      {/* Navbar */}
      <div className="d-flex justify-content-center align-items-center py-3 px-4 bg-too-light-yellow shadow-sm">
        <div className="font-weight-bold h5">Eisha Sajid</div>
        
      </div>

      {/* Hero Section */}
      <div className="row align-items-center mt-5">
        <div className="col-lg-6 col-md-12 text-start">
          <h1 className="display-3 fw-bold">
            Hello, I’m Eisha,
            <br />
            based in Rawalpinid, Pakistan.
          </h1>
        </div>
        <div className="col-lg-6 col-md-12 text-end">
          <img
            src="/image@2x.png"
            alt=""
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* About and Work Sections */}
      <div className="row my-5">
        {/* About Section */}
        <div className="col-lg-6 col-md-12">
          <h2 className="display-3 text-primary">About</h2>
          <p className="lead">
            I am a dedicated BS Software Engineering undergraduate with a
            strong passion for front-end development. I am seeking an
            internship opportunity to apply my skills in real-world projects,
            contribute to a dynamic team, and further enhance my expertise in
            creating responsive and engaging web interfaces. I am proficient
            in the following skills:
          </p>
          <div className="text-lg">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Tailwind</li>
              <li>React</li>
              <li>Figma</li>
            </ul>
          </div>
          <img
            src="/unsplashubiwo074qlu@2x.png"
            alt=""
            className="img-fluid rounded mt-3"
            style={{ maxWidth: "75%", height: "auto" }}
          />
        </div>

        {/* Work Section */}
        <div className="col-lg-6 col-md-12">
          <h2 className="display-3 text-primary">Work</h2>
          <p className="lead">
            As a Front-End Developer, I have a solid foundation in Figma,
            React, HTML, CSS, and JavaScript. My experience includes
            completing significant projects, where I utilized these
            technologies to create responsive and user-friendly web
            interfaces. Below, you'll find links to my projects that showcase
            my ability to turn designs into fully functional websites.
            <ul>
              <li>
                <a href="https://my-fb-clone.vercel.app/" target="_blank">fb clone-
                Responsive</a>
              </li>
              <li>
                
                <a href="https://final-veg.vercel.app/"  target="_blank">Vegetable selling
                website- Not responsive</a>
              </li>
              <li>
                <a href="https://my-photos-ecru.vercel.app/index.html"  target="_blank"> Photographic website- Not responsive</a>
               
              </li>
              <li>
                <a href="https://my-todo-app-rose.vercel.app/"  target="_blank">Todo App-
                Responsive</a>
              </li>
              <li>
                <a href="https://text-rep.vercel.app/"  target="_blank">TextUtils app-
                Responsive</a>
              </li>
            </ul>
          </p>
          <img
            src="/rectangle-8@2x.png"
            alt=""
            className="img-fluid rounded mt-3"
            style={{ maxWidth: "75%", height: "auto" }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            {/* Contact Section */}
            <div className="col-lg-6 col-md-6">
              <h2 className="display-4 text-warning">Contact</h2>
              <p className="lead">
                Feel free to reach out to me for collaboration, freelance
                work, or internship opportunities. I'm eager to connect with
                professionals and teams who share my passion for front-end
                development. You can contact me via email or connect with me
                on social media platforms using the links below. I look
                forward to hearing from you!
              </p>
              <ul>
                <li>Phone: 03485718830</li>
                <li>Email: esatti07@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2 className="display-4 text-warning">Follow me</h2>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/eisha-sajid-948945261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-linkedin-square text-white' style={{ fontSize: '2rem' }}></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/_satti_19?igsh=N20xbnp4dnprOG5r" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-instagram-alt text-white' style={{ fontSize: '2rem' }}></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/profile.php?id=100091670330738&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-facebook-circle text-white' style={{ fontSize: '2rem' }}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home1;
