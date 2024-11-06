import { useParams } from "react-router-dom";
import NavBar from "../components/global/NavBar";
import ViewActionsSection from "../components/pages/ViewDetailsPage/ViewActionsSection";
import AllDetailsSection from "../components/pages/ViewDetailsPage/AllDetailsSection";

const ViewDetailsPage = () => {
    const { id } = useParams(); // Extract the dynamic ID from the URL
    console.log('id is', id)


    return (
        <>
            <NavBar />
            <ViewActionsSection leiId={id} />
            <AllDetailsSection />
        </>
    );
}

export default ViewDetailsPage
