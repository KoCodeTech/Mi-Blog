export function InfoCard ({ portada, tituloPortada, descripcionPortada }) {
    return (
        <article className="info-card">
            <header>
                <img 
                    className="img-portada"
                    src={`${portada}`}
                    alt="Img de Portada" />
            <div className="info-text">
                <span className="titulo-portada">{`${tituloPortada}`}</span>
                <span className="descripcion-portada">{`${descripcionPortada}`}</span>
            </div>
            </header>

            <aside className="info-aside">
                <button className="">
                    Leer
                </button>
            </aside>
        </article>
    )
}
