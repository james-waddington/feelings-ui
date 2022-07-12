import { useState, useEffect } from "react";
import { getFeelings } from "../mock-api";

const useFeelingsData = (projectName) => {
    const [projectDetails, setProjectDetails] = useState('');

    useEffect(() => {
        const details = getFeelings(projectName);
        setProjectDetails(details);
    }, [projectName]);

    return [projectDetails];
};

export default useFeelingsData;