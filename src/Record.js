import { useParams } from "react-router-dom";
import { useProjectDetails } from "./hooks";
import RecordFeeling from "./RecordFeeling";

const getTime = () => new Date().toLocaleString();
// TODO: Implement or remove
const getLocation = () => ({
    latitude: '53.4070373',
    longitude: '-2.2865499'
});

const Record = () => {
    const {project} = useParams();
    const [projectDetails] = useProjectDetails(project);

    return (
        projectDetails && <RecordFeeling projectDetails={projectDetails} getTime={getTime} getLocation={getLocation} />
    );
};

export default Record;