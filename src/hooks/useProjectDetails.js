import { useState, useEffect } from "react";
import FEELINGS_API from '../api';

const useProjectDetails = projectName => {
    const [projectDetails, setProjectDetails] = useState();

    useEffect(() => {
        const fetchProjectData = async title => {
            const projectData = await fetch(FEELINGS_API + '/project/' + title);
            const projectJson = await projectData.json();
            setProjectDetails(projectJson.Item);
        };

        fetchProjectData(projectName).catch(console.error);
    }, [projectName]);

    return [projectDetails];
};

export default useProjectDetails;