import styled from "styled-components";
import { useState } from "react";
import { useFeelingsData } from "./hooks";
import FeelingButton from "./FeelingButton";

// TODO: Split this out in to a component that can be shared with RecordFeeling
const FeelingsButtonWrapper = styled.div`
    width: 100%;
`;

const AnalyseDefault = ({projectDetails}) => {
    const [feelingsData] = useFeelingsData();
    const [selectedLevel, setSelectedLevel] = useState(0);
    const [visibleData, setVisibleData] = useState({count: 0});
    
    return(
        <>
            <FeelingsButtonWrapper>
                {projectDetails && projectDetails.icons.map((icon, index) => (
                    <FeelingButton key={index} icon={icon} isSelected={index === selectedLevel} clickCallback={() => setSelectedLevel(index)} />
                ))}
            </FeelingsButtonWrapper>
            <p>Total for selected level: {visibleData.count}</p>
        </>
    );
};

export default AnalyseDefault;