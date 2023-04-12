import Layout from "../Layout"
import { MyLogo } from "../../assets"

export default function Landing() {
    return (
        <Layout>
            <div className="container">
                <div className="landing">
                    <img src={MyLogo} className="mylogo" />
                    <h1 className="landing-name">Hernando</h1>
                    <p className="landing-paragraph">Hello, my name is Hernando. I'm a student, who currently work as a Programmer</p>
                    <a href="#" className="button-white-outline">About me</a>
                </div>
            </div>
        </Layout>
    )
}