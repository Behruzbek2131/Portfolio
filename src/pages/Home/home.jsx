import { useEffect } from "react";
import Typed from "typed.js";
import myImage from "../../assets/image1.png";
import "./home.css";

const HomePage = () => {
    useEffect(() => {
        const typed = new Typed(".typing", {
            strings: ["Web Developer", "Freelancer", "YouTuber"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="home">
            <div className="home_text">
                <h1>
                    Hello, my name is <span className="name1">Safaboyev Behruzbek</span>
                </h1>
                <h2>
                    I'm a <span className="typing"></span>
                </h2>
                <p>
                   <span className="w">W</span>elcome to my portfolio website! I'm Behruzbek, a passionate frontend
                    developer dedicated to crafting engaging and user-friendly web
                    experiences. Explore my projects and skills as you navigate through my
                    site.
                </p>
                <a href="/about"><button className="btn">More About Me</button></a>
            </div>

            <div className="home_img">
                <img src={myImage} alt="Behruzbek" />
            </div>
        </div>
    );
};

export default HomePage;
