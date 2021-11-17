import "./about.scss";
import {Description,TouchApp,Mail, LocationOn,PhoneIphone,LinkedIn,GitHub,YouTube,Facebook,Instagram,Twitter} from "@material-ui/icons"

export default function About() {

    return (
        <div className="about" id="about">
            <div className="container">
                <h1>About Me</h1>
                <p>I was born in Matara, Sri Lanka and Following my Bachelor’s degree in Information Technology Specialized in Software Engineering from the Sri Lanka Institute of Information Technology (SLIIT). My research interests area in scientific machine learning, distributed computing and Cloud Computing. Also Interested in web application development using latest web technologies and frameworks, mobile application development and data strutures and algorithms. I'm also passionate about learn new technology quickly. Read more in <a href="">Linked in!</a></p>
           
                <div className="container2">
                    <div className="left">

                    <div className="itemContainer">
                         <LocationOn className="icon" />
                         <span>Beliatta, Southern Province, Srilanka</span>
                    </div>
                    <div className="itemContainer">
                         <PhoneIphone className="icon" />
                         <span>+94 77 404 7401</span>
                    </div>
                    <div className="itemContainer">
                         <Mail className="icon" />
                         <span>Yash@pearlian.com</span>
                    </div>

                    <button className="button1" type="submit"><Description className="icon" /><a href="https://github.com/YasiruWickramasinghe">GET MY CV HERE</a></button>
                    </div>
                    <div className="right">
                        <div className="itemContainer2">
                            <LinkedIn className="icon"><a href=""></a></LinkedIn>
                            <a href="https://github.com/YasiruWickramasinghe"><GitHub className="icon"></GitHub></a>
                            <YouTube className="icon"><a href=""></a></YouTube>
                            <Facebook className="icon"><a href=""></a></Facebook>
                            <Instagram className="icon"><a href=""></a></Instagram>
                            <Twitter className="icon"><a href=""></a></Twitter>
                        </div>

                        <button className="button2" type="submit"><TouchApp className="icon" /><a href="#contact">CLICK HERE TO HIRE ME</a></button>
                    </div>
                </div>
            </div>      
        </div>
    )
}
