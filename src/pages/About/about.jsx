import { useEffect, useState } from "react";
import "./about.css";

const skillsData = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 45 },
    { name: "React", level: 40 },
];

const AboutPage = () => {
    const [progress, setProgress] = useState(skillsData.map(() => 0));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prev) => {
                let done = true;
                const updated = prev.map((val, i) => {
                    if (val < skillsData[i].level) {
                        done = false;
                        return val + 1;
                    }
                    return val;
                });
                if (done) clearInterval(intervalId);
                return updated;
            });
        }, 25); // har 25ms da 1% (silliqroq animatsiya)
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="about">
            <div className="about_top">
                <h1>About Me</h1>
                <h3>
                    I'm Safaboyev Behruzbek <span>Web Developer</span>
                </h3>
                <p>
                    I'm Safaboyev Behruzbek, a passionate Frontend Developer from
                    Uzbekistan. I specialize in creating modern, responsive, and
                    user-friendly web applications using:
                </p>

                <ul className="li">
                    <li>
                        HTML{" "}
                        <img
                            src="https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"
                            alt="html"
                        />
                    </li>
                    <li>
                        CSS{" "}
                        <img
                            src="https://ultimatecourses.com/assets/category/css-fcba6b473cb1125595dc28163be24eb673907258b5f6f6c82967a0587a9df20c.svg"
                            alt="css"
                        />
                    </li>
                    <li>
                        JavaScript{" "}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/250px-Unofficial_JavaScript_logo_2.svg.png"
                            alt="js"
                        />
                    </li>
                    <li>
                        React{" "}
                        <img
                            src="https://miro.medium.com/1*NJSv6DGoKTloI8d8im98zg.png"
                            alt="react"
                        />
                    </li>
                </ul>

                <p>
                    I love turning creative ideas into real, interactive experiences that
                    work smoothly across all devices. My goal is to grow as a developer
                    and build projects that make people’s lives easier and more enjoyable.
                </p>
            </div>

            <div className="about_main">
                <div className="im_info">
                    <div className="about_me">
                        <p>
                            Birthday : <span>16 sep 2009</span>
                        </p>
                        <p>Website : <span>www.behruz.com</span></p>
                        <p>Degree : <span>Frontend Development Student</span></p>
                        <p>City : <span>Urgench (Khorezm)</span></p>
                    </div>

                    <div className="about_me">
                        <p>Age : <span>16</span></p>
                        <p>Email : <span>yt.behruzchik@gmail.com</span></p>
                        <p>Phone : <span>+998 (91) 866-6028</span></p>
                        <p>Experience : <span>Beginner Frontend Developer</span></p>
                    </div>
                </div>

                {/* SKILLS - sinxron animatsiya */}
                <div className="skills">
                    {skillsData.map((skill, i) => (
                        <div className="skill" key={i}>
                            <div className="label">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percent">{Math.round(progress[i])}%</span>
                            </div>
                            <div className="bar">
                                <div
                                    className="fill"
                                    style={{ width: `${progress[i]}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="a">
                <a href="/cv.pdf" download className="cv_button"><button>Download CV</button></a>
                <a href="/" className="cv"><button>Home</button></a>
                <a href="/portfolio" className="cv"><button>Portfolio</button></a>
            </div>
        </div>
    );
};

export default AboutPage;
