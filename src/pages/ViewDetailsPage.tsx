import { useLocation, useParams } from "react-router-dom";
import ViewActionsSection from "../components/pages/ViewDetailsPage/ViewActionsSection";
import AllDetailsSection from "../components/pages/ViewDetailsPage/AllDetailsSection";

const ViewDetailsPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const { rowData } = location.state || {}; 


    return (
        <>
            <ViewActionsSection leiId={id as string} />
            <AllDetailsSection details={rowData}/>
        </>
    );
}

export default ViewDetailsPage
