import React from "react";


//include images into your bundle
import Jumbotron from "./jumbotron.jsx";
import NavBar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
	<div>
		<div className="text-center mb-0" id="main">
			<NavBar />
			<div className="container-xxl">
				<Jumbotron>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magni vel aliquid, natus laudantium a beatae adipisci ab quam soluta pariatur, blanditiis totam corrupti sint suscipit! Dolor nam perferendis voluptatibus.
				</Jumbotron>
				<div className="row row-cols-1 row-cols-lg-4 gx-2 gy-3">
				<div>
					<Card title={"Nice Cars !"} url={"https://api.lorem.space/image/car?w=450&h=325"}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, est?
					</Card>
				</div>
				<div>
					<Card title={"Latest Fashion !"} url={"https://api.lorem.space/image/fashion?w=450&h=325"}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nesciunt unde placeat nobis vitae sed?
					</Card>
				</div>
				<div>
					<Card title={"Nice Drinks !"} url={"https://api.lorem.space/image/drink?w=450&h=325"}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas quae atque voluptatibus quisquam quod veniam similique fugit consequuntur aliquam.
					</Card>
				</div>
				<div>
					<Card title={"Nice Photoshoot!"} url={"https://api.lorem.space/image/face?w=450&h=325"}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit adipisci tempora. Reiciendis, exercitationem omnis tenetur saepe fugit harum eos voluptatibus minima ex, repudiandae neque?
					</Card>
				</div>
				</div>
			</div>
			<Footer />
		</div >
		</div>
	);
};




export default Home;
