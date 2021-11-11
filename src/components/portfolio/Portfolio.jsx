import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio() {

    const[selected,setSelected] = useState("featured")

    const list = [

        {
            id:"featured",
            title:"featured"
        },
        {
            id:"web",
            title:"Web App"
        },
        {
            id:"mobile",
            title:"Mobile App"
        },
        {
            id:"UI",
            title:"UI Design"
        },
        {
            id:"branding",
            title:"Branding"
        },
    ];

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id}  
                    setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
