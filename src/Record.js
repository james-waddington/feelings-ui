import { useParams } from "react-router-dom";

const Record = () => {
    const {project} = useParams();

    return (
        <h2>Record {project}</h2>
    );
};

export default Record;