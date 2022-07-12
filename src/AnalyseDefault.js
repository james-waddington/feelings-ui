import styled from "styled-components";
import { useEffect, useState } from "react";
import { useFeelingsData } from "./hooks";
import FeelingButton from "./FeelingButton";

// TODO: Split this out in to a component that can be shared with RecordFeeling
const FeelingsButtonWrapper = styled.div`
    width: 100%;
`;

const Tag = styled.span`
    background-color: blue;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    height: 1.5rem;
    margin-left: .2rem;
    padding: .5rem 1rem
`;

const TagWithCount = ({tagName, tagCount}) => {
    return (
        <Tag>{tagName} - {tagCount}</Tag>
    );
};

const AnalyseDefault = ({projectDetails}) => {
    const [selectedLevel, setSelectedLevel] = useState(0);
    const [visibleData, setVisibleData] = useState({count: 0});
    const [feelingsData] = useFeelingsData(projectDetails?.title, selectedLevel);
    useEffect(() => {
        if(feelingsData && feelingsData.length > 0) {
        const allTags = feelingsData.flatMap(feeling => feeling.tags);
        const tagCounts = allTags.reduce((counts, tag) => {
            const countForTag = tag in counts ? counts[tag] + 1 : 1;

            return {...counts, [tag]: countForTag}
        }, {});

        const data = {
            totalForLevel: feelingsData.length,
            tagCounts
        }
        setVisibleData(data);
        }
    }, [feelingsData]);

    return (
        <>
            <FeelingsButtonWrapper>
                {projectDetails && projectDetails.icons.map((icon, index) => (
                    <FeelingButton key={index} icon={icon} isSelected={index === selectedLevel} clickCallback={() => setSelectedLevel(index)} />
                ))}
            </FeelingsButtonWrapper>
            <p>Total records for selected level: {visibleData.totalForLevel}</p>
            <p>Tag counts for selected level:</p>
            {
                visibleData.tagCounts && Object.keys(visibleData.tagCounts).map((tag, index) => (
                    <TagWithCount key={index} tagName={tag} tagCount={visibleData.tagCounts[tag]} />
                ))
            }
        </>
    );
};

export default AnalyseDefault;