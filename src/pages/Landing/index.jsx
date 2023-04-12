import Layout from "../Layout"
import { MyLogo } from "../../assets"
import { Link } from "react-router-dom"

export default function Landing() {
    return (
        <Layout>
            <div className="container">
                <div className="landing">
                    <img src={MyLogo} className="mylogo" />
                    <h1 className="landing-name">Hernando</h1>
                    <p className="landing-paragraph">Hello, my name is Hernando. I'm a student, who currently work as a Programmer</p>
                    <Link to="/about" className="button-white-outline full-width">About me</Link>
                </div>
            </div>
        </Layout>
    )
}