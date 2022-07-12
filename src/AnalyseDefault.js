import styled from "styled-components";
import { useState } from "react";
import FeelingButton from "./FeelingButton";

// TODO: Split this out in to a component that can be shared with RecordFeeling
const FeelingsButtonWrapper = styled.div`
    width: 100%;
`;

const AnalyseDefault = ({projectDetails}) => {
    const [selectedLevel, setSelectedLevel] = useState(0);
    
    return(
        <>
            <FeelingsButtonWrapper>
                {projectDetails && projectDetails.icons.map((icon, index) => (
                    <FeelingButton key={index} icon={icon} isSelected={index === selectedLevel} clickCallback={() => setSelectedLevel(index)} />
                ))}
            </FeelingsButtonWrapper>
            <p>Total for selected level: 0</p>
        </>
    );
};

export default AnalyseDefault;