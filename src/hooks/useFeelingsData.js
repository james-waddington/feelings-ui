import { useState, useEffect } from "react";
import FEELINGS_API from '../api';

const useFeelingsData = (projectName, value = false) => {
    const [feelingsData, setFeelingsData] = useState('');

    useEffect(() => {
        const fetchFeelingsData = async () => {
            console.log(`Fetching: ${projectName} - ${value}`);
            const feelingsData = await fetch(`${FEELINGS_API}/feelings/${projectName}/value/${value}`);
            const feelingsJson = await feelingsData.json();
            setFeelingsData(feelingsJson.Items);
        };

        if(projectName && projectName.length > 0 && value !== false) {
            fetchFeelingsData().catch(console.error);
        }
    }, [projectName, value]);

    return [feelingsData];
};

export default useFeelingsData;