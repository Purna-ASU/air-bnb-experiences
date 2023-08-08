import logo from "../assets/hero.png"

function Hero() {
    return(
        <section className="hero">
            <img src={logo} alt="hero logo" className="hero--logo" />
            <h1 className="hero--header" >Online Enperiences</h1>
            <p className="hero--para" >Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;