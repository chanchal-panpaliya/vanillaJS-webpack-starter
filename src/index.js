import iconsquare from "./icon-square-big.png";
import iconloader from "./loader.svg";
import './App.css';

const root = document.getElementById("root");
const name = "Vanilla WebPack";
let route;

function init() {
	root.innerHTML = `
	<div>
	    <img src="${iconsquare}" alt="webpackicon"/>
        <h1> Welcome to VanillaJS Webpack Starter </h1>
		<div id="button-flex">
			<button id="about"> About </button>
			<button id="constactme"> Contact Me </button> 
        </div>
        <div id="route"></div>
	</div>
`;

	route = document.querySelector("#route");
	document.querySelector("#about").addEventListener("click", showAboutPage);
	document.querySelector("#constactme").addEventListener("click", showContactPage);
	
}

function showLoader(root) {
	const loader = document.createElement("div");
	loader.innerHTML = `<img src="${iconloader}" alt="webpackicon"/>` ;
	root.appendChild(loader);
	return loader;
}

function hideLoader(root, loader) {
	root.removeChild(loader);
}

//about page
function showAboutPage(event) {
	const loader = showLoader(root)	

	import(/* webpackPrefetch: true */ "./About").then(({ default: About }) => {
		hideLoader(root, loader);
		route.innerHTML = About({ name });
		
	});
}

//contact us
function showContactPage(event) {
	const loader = showLoader(root);

	import(/* webpackPrefetch: true */ "./Contact").then(({ default: Contact }) => {
		hideLoader(root, loader);
		route.innerHTML = Contact({ name });
	});
}

init();
