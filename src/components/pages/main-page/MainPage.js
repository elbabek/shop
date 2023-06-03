import Header from "../../header/Header";
import withAuth from "../../../hoc/withAuth"

const MainPage = () => {
    return (
        <div>
            <Header/>
        </div>
    )
}
export default withAuth(MainPage);