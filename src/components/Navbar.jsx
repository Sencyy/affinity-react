function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-md bg-transparent p-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> 
                <img src="https://www.affinity.studio/cdn-cgi/image/width=1600,fit=scale-down,format=auto/https://content-management-files.affinity.studio/78303f82-4688-4614-99c7-ad7970d208a9/affinity_logotype_white_min.svg"
                 alt="Affinity" />
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle nav-button   " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Produto
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle nav-button" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Descubra
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-button">Ajuda</a>
                    </li>
                </ul>
                <button type="button" className="btn btn-success">
                    <svg className="x1lliihq x5yr21d xh8yej3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m11.25 15.85-4.38-4.38a.75.75 0 0 0-1.06 1.06l4.95 4.95c.69.68 1.8.68 2.48 0l4.95-4.95a.75.75 0 1 0-1.06-1.06l-4.38 4.38V4.25a.75.75 0 1 0-1.5 0v11.6zm-7.5 3.4h16.5a.75.75 0 1 1 0 1.5H3.75a.75.75 0 1 1 0-1.5z"></path></svg>    
                    <span className="txt-shadow p-1">Obtenha o Affinity</span>
                </button>
            </div>
        </nav>
        </>
    )
}

export default Navbar