import { useState } from "react";
import { useParams } from "react-router-dom";
import { saveFeeling } from "./mock-api";
import styled from "styled-components";
import useProjectDetails from "./hooks/useProjectDetails";
import EditableTagList from "./EditableTagList";
import Icon from "./Icon";

const FeelingButton = styled.button`
    background: none;
    border: none;
    width: 50px;
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
        <form onSubmit={handleSubmit}>
            <h2>{project.title}</h2>
            {projectDetails && projectDetails.icons.map((icon, index) => (
                <FeelingButton type="button" key={index} onClick={() => setSelectedValue(index)}>
                    <Icon name={icon} />
                </FeelingButton>
            ))}
            <EditableTagList tags={tags} setTags={setTags} />
            <input type="submit" value="save" />
        </form>
    );
};

export default Record;