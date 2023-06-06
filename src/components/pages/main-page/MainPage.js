import Header from "../../header/Header";
import withAuth from "../../../hoc/withAuth"
import Content from "../../content/Content";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    )
}
export default withAuth(MainPage);