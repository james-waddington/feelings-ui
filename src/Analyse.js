import { useParams } from "react-router-dom";
import { useProjectDetails } from "./hooks";
import AnalyseDefault from "./AnalyseDefault";

const Analyse = () => {
    const {project} = useParams();
    const [projectDetails] = useProjectDetails(project);

    return (
        <AnalyseDefault projectDetails={projectDetails} />
    );
};

export default Analyse;