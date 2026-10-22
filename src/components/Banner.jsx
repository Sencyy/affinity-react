import Hero from "./Hero"

function Banner() {
    return (
        <>
        <Hero type="mainHero">
            <h1 className="BannerTitle">Crie <span className="fst-italic">Livremente</span></h1>
            <h4>Design profissional, edição de fotos e layout de páginas no mesmo app.</h4>

            <div className="d-inline-flex m-4">
                <button className="btn btn-success m-3 py-32">
                    <span className="txt-shadow">Obtenha Grátis</span>
                </button>
                <button className="btn btn-secondary m-3 py-2">
                    <span className="txt-shadow">Adquira para empresas</span>
                </button>
            </div>

            <div className="mt-4">
                <img height={24} src="https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/5435ce30-099f-4cff-89be-eabc46ecd9a6/by_canva_white.png" alt="" />
            </div>
        </Hero>
        </>
    )
}

export default Banner