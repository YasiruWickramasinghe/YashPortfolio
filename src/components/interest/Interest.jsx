import "./interest.scss";
import {EventNote,BarChart,MultilineChart,CloudDownload} from "@material-ui/icons"

export default function Interest() {

    return (
        <div className="interest" id="interest">
            <div className="container">
                <h1>Areas Of Interest</h1>
                <h2>MY RESEARCH INTERESTS AREA IN SCIENTIFIC MACHINE LEARNING AND DISTRIBUTED COMPUTING</h2>
            
            <div className="itemContainer">
                <div className="item">
                    <div className="roundItem">
                    <EventNote className="icon" />
                    </div>
                    <h3>Scientific Computing</h3>
                </div>
                <div className="item">
                    <div className="roundItem">
                    <BarChart className="icon" />
                    </div>
                    <h3>Machine Learning</h3>
                </div>
                <div className="item">
                <div className="roundItem">
                    <MultilineChart className="icon" />
                    </div>
                    <h3>Distributed Computing</h3>
                </div>
                <div className="item">
                <div className="roundItem">
                    <CloudDownload className="icon" />
                    </div>
                    <h3>Cloud Computing</h3>
                </div>
            </div>
            </div>
            
            
        </div>
    )
}
