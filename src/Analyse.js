import { useParams } from "react-router-dom";

const Analyse = () => {
    const {project} = useParams();

    return (
        <h2>Analyse {project}</h2>
    );
};

export default Analyse;