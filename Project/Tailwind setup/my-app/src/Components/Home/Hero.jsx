import heroImg from "../../assets/Global.png";


function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">
                    Connect Directly With Verified Chinese Suppliers, Safely and Easily
                </h1>

                <p className="hero__subtitle">
                    Exploring the Impact of Chinese Investments in Nigeria's Growth Story
                </p>

                <div className="hero__buttons">
                    <button className="btn btn--primary">Get Started</button>
                    <button className="btn btn--secondary">Watch How It Works</button>
                </div>
            </div>

            <div className="hero__image-box">
                <img src={heroImg} alt="China in Nigeria" className="hero__image" />
            </div>
        </section>
    );
}

export default Hero;
