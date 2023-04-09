import { Fragment } from "react"
import { Navbar, Tabbar } from "../../components"

export default function Layout({ children }) {
    return (
        <Fragment>
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Tabbar />
        </Fragment>
    )
}