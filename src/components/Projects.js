import "./project.css"
import ProjectItems  from "./ProjectItems"
import data from "../data"
export default function Projects()
{  
       let items = data.map(dat=>{
        return(  <ProjectItems link={dat.link} key={dat.title} title={dat.title} about={dat.about} img={dat.img} />)
       })
    return(
        <div id="project" className="project section">
            <h1 className="projecth1" >My Projects:</h1>
            <div className="projectsdiv">
               {items}
            </div>
               <button className="btn btn-dark btn-sm " >More Projects</button>
        </div>
    )
}