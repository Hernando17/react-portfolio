import Layout from "../Layout"
import { MyLogo } from "../../assets"

export default function Landing() {
    return (
        <Layout>
            <div className="container">
                <div className="landing">
                    <img src={MyLogo} className="mylogo" />
                    <h1>Hernando</h1>
                    <p className="landing-paragraph">Hello, my name is Hernando. I'm from Indonesia, and currently work as Programmer</p>
                </div>
            </div>
        </Layout>
    )
}