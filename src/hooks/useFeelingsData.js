import { useState, useEffect } from "react";
import FEELINGS_API from '../api';

const useFeelingsData = (projectName) => {
    const [feelingsData, setFeelingsData] = useState('');

    useEffect(() => {
        const fetchFeelingsData = async () => {
            const feelingsData = await fetch(FEELINGS_API + '/feelings');
            const feelingsJson = await feelingsData.json();
            setFeelingsData(feelingsJson);
        };

        fetchFeelingsData().catch(console.error);
    }, []);

    return [feelingsData];
};

export default useFeelingsData;