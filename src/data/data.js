export const siteData = {
	name: "Makham Ishita Gupta",
	title: "Aspiring Data Scientist & Full-Stack Developer",
	location: "India",
	email: "makhamishitagupta@gmail.com",
	phone: "+91 7780401762",
	socials: {
		github: "https://github.com/makhamishitagupta",
		linkedin: "https://www.linkedin.com/in/ishitha-gupta-makham-230532318/",
		instagram: "https://www.instagram.com",
	},
	sections: ["Projects", "About", "Contact"],
	about:
		"I am a 2nd-year B.Tech Data Science student, passionate about data engineering, machine learning, and full-stack development. I enjoy solving problems with C++, Python, and JavaScript while building scalable, impactful projects.<br>My journey in technology is driven by curiosity and the desire to create solutions that make a difference. I'm constantly learning and exploring new technologies to stay at the forefront of innovation.",
	projects: [
		{
			id: 1,
			title: "Academic Resource Management Platform ",
			description:
				"A web application for students to share and access academic resources. Built with MERN stack, featuring user authentication, resource categorization, and a responsive design.",
			about: "Built a centralized academic resource-sharing platform enabling students and instructors to manage, browseand download exam papers and study notes with role-based access control. Implemented secure authentication and authorization with encrypted passwords, protected routes, and admin-only dashboards for resource, subject, and user management. Developed scalable RESTful APIs with Express.js and MongoDB, integrated Cloudinary for cloud-based PDF storage, and implemented analytics features including download tracking, user engagement insights, favorites, and discussion threads.",
			image: "/images/autoskill.png",
			link: "https://github.com/makhamishitagupta/ExamVault",
			demo: "https://frontend-examvault.vercel.app/",
			tech: ["Node.js", "React", "MongoDB", "Cloudinary", "Express"],
			category: "Web Development",
		},
		{
			id: 2,
			title: "Loan Default Prediction System",
			description:
				"An end-to-end machine learning web application that predicts whether a loan applicant is likely to default or not. Built using MERN stack with a FastAPI-based ML model integration.",
			about:
				"Developed a full-stack Loan Default Prediction System that analyzes applicant data and predicts loan repayment risk using machine learning. Built and trained classification models using Scikit-learn with proper data preprocessing, feature scaling, and model evaluation techniques. Deployed the trained model using FastAPI and integrated it with a Node.js backend for seamless communication with the React frontend. Implemented a complete pipeline including data validation, API-based predictions, and real-time user input handling. Ensured modular architecture by separating frontend, backend, and ML services, improving scalability and maintainability.",
			image: "/images/loan.png",
			link: "https://github.com/makhamishitagupta/Loan-Approval",
			tech: ["React", "Node.js", "Express", "MongoDB", "FastAPI", "Scikit-learn"],
			category: "Machine Learning",
		},
		{
			id: 3,
			title: "Blog Fuel",
			description:
				"A full-stack blogging platform that allows users to create, edit, and manage blogs with secure authentication and role-based access.",
			about: "Developed a full-stack blogging platform using the MERN stack with CRUD blog functionality and Markdown support, enabling adimins to create, edit, and manage content efficiently. Implemented secure authentication and authorization using JWT, Google OAuth, and bcrypt, including role-based access control for admin operations. Designed and developed scalable RESTful APIs using Node.js and Express, integrating MongoDB with Mongoose, and optimized search with tag-based filtering and MongoDB indexing. Built advanced platform features including comments, likes, favorites, announcements, and an admin dashboard, while improving frontend performance using React, Vite, Axios interceptors, and React Router for SPA navigation.",
			image: "/images/triscope.png",
			link: "https://github.com/makhamishitagupta/blogfuel",
			demo: "https://blogfuel.onrender.com/",
			tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth", "Axios"],
			category: "Web Development",
		},
		{
			id: 4,
			title: "Income Prediction",
			description:
				"UCI dataset analysis; preprocessing, visualization, trend insights on education & income.",
			about: "Performed exploratory data analysis on the UCI Income dataset to understand income distribution and identify key demographic predictors. Cleaned and preprocessed data, handled missing values, and performed feature engineering to create meaningful variables. Visualized income trends using Pandas, Matplotlib, and Seaborn, providing insights into the relationship between education, occupation, and income levels.",
			image: "/images/triscope.png",
			link: "https://github.com/makhamishitagupta/Income-Prediction-Basic-Data-Analysis",
			tech: ["Python", "Pandas", "Scikit-learn"],
			category: "Data Analysis",
		},
		{
			id: 5,
			title: "Titanic Survival Prediction",
			description:
				"Logistic Regression, Random Forest, feature engineering; achieved Kaggle score: 0.75598.",
			about: "Built and evaluated classification models (Logistic Regression, Random Forest) achieving 75.6% accuracy on Kaggle Titanic dataset using feature engineering and cross-validation. Performed data cleaning, handled missing values, and applied feature engineering (e.g., extracting titles from names).Used model evaluation techniques to assess accuracy and submitted predictions to Kaggle (Score: 0.75598).",
			image: "/images/triscope.png",
			link: "https://github.com/makhamishitagupta/Titanic-Survival-Prediction-Kaggle-ML-Competition",
			tech: ["Python", "scikit-learn", "Pandas"],
			category: "Machine Learning",
		},
		{
			id: 6,
			title: "Uber Ride Data Analysis",
			description:
				"Trends in demand, cancellations, and peak hours; visualization with Pandas, Matplotlib, Seaborn.",
			about: "Analyzed Uber ride dataset to uncover trends in ride demand, cancellations, and peak hours. Used data wrangling and preprocessing to clean and structure raw ride data. Built insightful visualizations to identify user pain points such as unavailability of rides during rush hours. Demonstrated real - world application of EDA and storytelling with data",
			image: "/images/triscope.png",
			link: "https://github.com/makhamishitagupta/Uber-Ride-Data-Analysis",
			tech: ["Python", "Pandas", "Matplotlib"],
			category: "Data Analysis",
		},
	],
}


