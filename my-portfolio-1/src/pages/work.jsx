import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Experience from "../components/experience/experience";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/work.css";

const WorkExperience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "work");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Work Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="work" />
				<div className="content-wrapper">
					<div className="work-logo-container">
						<div className="work-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="work-container">
						<div className="title work-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						{/* <div className="subtitle work-subtitle">
							I've worked on a variety of projects over the years
							and I'm proud of the progress I've made. Many of
							these projects are open-source and available for
							others to explore and contribute to. If you're
							interested in any of the projects I've worked on,
							please feel free to check out the code and suggest
							any improvements or enhancements you might have in
							mind. Collaborating with others is a great way to
							learn and grow, and I'm always open to new ideas and
							feedback.
						</div> */}

						<div className="work-list">
							<Experience />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default WorkExperience;
