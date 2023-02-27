import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<div className="d-flex justify-content-center ">
		<Jumbotron />
		</div>
		
		<div className="row d-flex justify-content-center ">
		<Card title ="Nombre1" text="Madre mía que texto más guapo" />
		<Card title ="Nombre2" text="Diooos éste texto también está guapísimo"/>
		<Card title ="Nombre3" text="Éste tampoco es una locura"/>
		<Card title ="Nombre4" text="Pero éste si que si"/>
		</div>
		
		<Footer />
		
	
		</>
		
		
	);

};

export default Home;
