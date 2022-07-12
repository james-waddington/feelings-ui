import { useState, useEffect } from "react";
import { getProject } from "../mock-api/getProject";

const useProjectDetails = projectName => {
    const [projectDetails, setProjectDetails] = useState('');

    useEffect(() => {
        const details = getProject(projectName);
        setProjectDetails(details);
    }, [projectName]);

    return [projectDetails];
};

export default useProjectDetails;