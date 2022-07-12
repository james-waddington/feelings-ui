import { useParams } from "react-router-dom";
import {useProjectDetails} from "./hooks";
import RecordFeeling from "./RecordFeeling";

const Record = () => {
    const {project} = useParams();
    const [projectDetails] = useProjectDetails(project);

    return (
        <RecordFeeling projectDetails={projectDetails} />
    );
};

export default Record;