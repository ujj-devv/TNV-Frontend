import { useLocation, useParams } from "react-router-dom";
import NavBar from "../components/global/NavBar";
import ViewActionsSection from "../components/pages/ViewDetailsPage/ViewActionsSection";
import AllDetailsSection from "../components/pages/ViewDetailsPage/AllDetailsSection";

const ViewDetailsPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const { rowData } = location.state || {}; // Access row data from location.state
    console.log('id and rowData is', id, rowData)


    return (
        <>
            <NavBar />
            <ViewActionsSection leiId={id} />
            <AllDetailsSection details={rowData}/>
        </>
    );
}

export default ViewDetailsPage
