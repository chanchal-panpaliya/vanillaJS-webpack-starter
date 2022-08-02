import _ from "lodash";
import "./App.css";

const About = ({ name }) => {
    return `
    <h2> ${ _.join(["About,", name], " ")} </h2>
    <p> Build apps with plain JS but with modern tooling  </p>  
    <a target="_blank" rel="noreferrer" href="https://webpack.js.org/" alt="instagramlink">              
          read more
    </a>

    `
}

export default About;
