import React from 'react';

class Home extends React.Component {
    render() {
        return (

            // top container
            <><div class="top-container">
                <img class="top-cloud" src="https://i.ibb.co/Lr0KvPf/cloud.png" alt="cloud-image" />
                <div class="gun">
                    <h1><em>I'am Litchy</em></h1>
                    <h2><span class="notation">MERN</span> developer</h2>
                    <h3>Hello India</h3>
                </div>

                <img class="bottom-cloud" src="https://i.ibb.co/Lr0KvPf/cloud.png" alt="cloud-image" />
                <img src="https://i.ibb.co/bFRH8wh/mountain.png" alt="mountain-image" />

            </div>
            
            
            {/* middle container */}
            <div class="middle-container">
                    <div class="profile">
                        <img style={{ height: "bl147ock", width: "147", alt: "lituu" }} src="https://i.ibb.co/3NR1Wt6/litcheepeddy.png" />
                        <h2>Hello</h2>
                        <p class="intro"><h3>I am Lithish, I am intrested in web developing and also in pragmatic programming.</h3></p>
                    </div>
                    <hr />

                    <div class="skills">
                        <h2>My Skill sets.</h2>
                        <div class="skill-row">
                            <img class="onepic" style={{ width: "25%", alt: "giphy" }} src="https://media.giphy.com/media/S3Vq8Mxy7XSegA8ie4/giphy.gif" />
                            <h3>My strengths and my skills</h3>
                            <p>I am a cognitive thinker, and I am a professsional reader and writer. I preparing myself to be a pragmatic programer. Writing codes is my new interest.</p>
                        </div>

                        <div class="skill-row">
                            <img class="twopic" style={{ width: "25%", alt: "miss you" }} src="https://media.giphy.com/media/lP8xu5t2DLGG045H8F/giphy.gif" />
                            <h3>Skills as a developer</h3>
                            <p>Currently i am interested in learning web development and python.To become a developer first, i am learning the scripting languages as such, html, css and the basics of the java scripts.</p>
                        </div>

                    </div>


                {/* contact  */}

                </div><hr /><div class="contact-me">
                    <h2>Get In Touch</h2>
                    <h3>Always welcome for the interactions</h3>
                    <p class="contact-message"><h3 style={{color: "#027377"}}>I always welcome the generous conversations and interactions. Below links are recommended to contact me. These links are my personal media links.</h3></p>
                    <a class="btn" href="mailto:name@email.com">CONTACT ME</a>
                </div><div class="bottom-container">
                     <a class="footer-link" href="https://www.linkedin.com/in/lituu-lithish-609363188/"><h3>LinkedIn</h3></a>  
                      <a class="footer-link" href="https://twitter.com/LithishLithu"><h3>Twitter</h3></a>  
                     <a class="footer-link" href="https://enigmatic-bastion-94927.herokuapp.com/"><h3>NewsLetter</h3></a>  
                  <p class="copyright"><h3>© 2022 Lituu Lithish.</h3></p>  
                </div></>


                          
            


                    );
    }
}

export default Home;