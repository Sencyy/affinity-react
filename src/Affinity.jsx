import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import LogoBand from "./components/LogoBand"
import Hero from "./components/Hero"

function Affinity() {
    return (
        <>
        <div id="main" data-bs-theme="dark">
            <Navbar />
            <Banner />
            <LogoBand />
            <Hero>
                <h2>
                    Chega de ficar trocando de aplicativo
                </h2>
                <p>
                    Crie, edite, faça o layout e depois edite de novo... sem nunca sair do seu arquivo .af. O Affinity tem todas as ferramentas profissionais de design e edição de fotos que você precisa em um único app extremamente rápido e poderoso.
                </p>
            </Hero>
        </div>
        </>
    )
}

export default Affinity