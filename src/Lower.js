import React, {useState} from 'react'
import Home from './Home.js'
import Info from './Info.js'
import Media from './Media.js'
import Contact from './Contact.js'
import Gallery from './Gallery.js'


export default function Lower() {

    const [currentPage, setCurrentPage] = useState("home");
    const screenWidth = window.innerWidth;

    const changePage = (props) => {
        setCurrentPage(props)
        
    }

    return (
        <>
        <div className="menus">
            <div className="home" onClick={()=> changePage("home")}>Ana Sayfa</div>
            <div className="info" onClick={()=> changePage("info")}>Hakkımda</div>
            <div className="media" onClick={()=> changePage("media")}>Medya</div>
            <div className="gallery" onClick={()=> changePage("gallery")}>Galeri</div>
            <div className="contact" onClick={()=> changePage("contact")}>İletişim</div>
        </div>
        <div className={currentPage === "media" ? "media-lower-body" : currentPage === "home" ? "home-lower-body" : "lower-body"}>
            {currentPage === "home" ? <Home /> : null}
            {currentPage === "info" ? <Info /> : null}
            {currentPage === "media" ? <Media /> : null}
            {currentPage === "gallery" ? <Gallery /> : null}
            {currentPage === "contact" ? <Contact /> : null}
        </div>
        </>
    )
}
