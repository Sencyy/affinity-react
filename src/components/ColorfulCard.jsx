import '../style/ColorfulCard.css'

function ColorfulCard({ children, bgColor, title, cardImage, colorScheme  }) {
    return (
        <div className={`card rounded-5 ${colorScheme == "dark" ? "text-white" : "text-black"}`} 
            style={{
                width: "",
                backgroundColor: bgColor
            }}
            >
            <div className="card-body py-5 px-4">
                <h1 className="card-title">
                    { title }
                </h1>
                { children }
            </div>
            <img src={ cardImage ? cardImage : "https://placehold.co/900x471" } className="card-img-bottom" />
        </div>
    )
}

export default ColorfulCard