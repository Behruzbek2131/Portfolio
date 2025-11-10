import "./portfolio.css";


const PortfolioPage = () => {
    return <>
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="contact_me1">
                <h5>Some of My Projects:</h5>
                <a href="/contact"><button>Contact</button></a>
            </div>
            <div className="projects">
                <div className="projects_card">
                    <div className="card">
                        <a href="https://telefon-sayt-1ik1.vercel.app" target="_blink"><img src="/image2.png" alt="" /></a>
                    </div>
                    <div className="card">
                        <a href="https://rendcar-eight.vercel.app" target="_blink"><img src="/image3.png" alt="" /></a>
                    </div>
                    <div className="card">
                        <a href="https://telefon-sayt-wsor.vercel.app" target="_blink"><img src="/image4.png" alt="" /></a>
                    </div>
                </div>
                {/* <div className="projects_card1">
                    <div className="card">
                        <img src="" alt="" />
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                    </div>
                    <div className="card">
                        <img src="" alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    </>
}

export default PortfolioPage;
