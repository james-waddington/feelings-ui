import { useState } from "react";
import { useParams } from "react-router-dom";
import { saveFeeling } from "./mock-api";
import styled from "styled-components";
import useProjectDetails from "./hooks/useProjectDetails";
import EditableTagList from "./EditableTagList";
import FeelingButton from "./FeelingButton";

const FeelingsButtonWrapper = styled.div`
    width: 100%;
`;

const FeelingsForm = styled.form`
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    padding: 1rem;
    text-align: center;
    width: 20rem;
`;

const SaveButton = styled.input`
    background-color: green;
    border: none;
    color: #FFFFFF;
    margin: 1rem 0;
    padding: .5rem 0;
    width: 100%;
`;

const Record = () => {
    const {project} = useParams();
    const [selectedValue, setSelectedValue] = useState(0);
    const [tags, setTags] = useState([]);
    const [projectDetails] = useProjectDetails(project)

    const handleSubmit = async event => {
        event.preventDefault();
        await saveFeeling({
            value: selectedValue,
            tags
        });
    };

    return (
        <FeelingsForm onSubmit={handleSubmit}>
            <h2>{projectDetails.title}</h2>
            <FeelingsButtonWrapper>
                {projectDetails && projectDetails.icons.map((icon, index) => (
                    <FeelingButton key={index} icon={icon} isSelected={index === selectedValue} clickCallback={() => setSelectedValue(index)} />
                ))}
            </FeelingsButtonWrapper>
            <EditableTagList tags={tags} setTags={setTags} />
            <SaveButton type="submit" value="save" />
        </FeelingsForm>
    );
};

export default Record;