import _ from "lodash";
import "./App.css";

const Contact = ({ name }) => {
    return `
    <h2> Contact Me </h2>
    <p>   </p>  
    <div>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/chanchal.panpaliya" alt="instagramlink">              
            <i class="fa-brands fa-facebook-square footer-icon"></i>
        </a>

        <a target="_blank" rel="noreferrer" href="https://twitter.com/CPanpaliya" alt="twitterlink"> 
            <i class="fa-brands fa-twitter-square footer-icon"></i>
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chanchal-panpaliya/" alt="linkedinlink"> 
            <i class="fa-brands fa-linkedin footer-icon"></i>
        </a>

        <a target="_blank" rel="noreferrer" href="https://github.com/chanchal-panpaliya" alt="githublink">  
            <i class="fa-brands fa-github-square footer-icon"></i>
        </a>
    </div>

    `
}

export default Contact;