import { useState } from "react";
import styled from "styled-components";
import EditableTagList from "./EditableTagList";
import FeelingButton from "./FeelingButton";
import FEELINGS_API from "./api";

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

const saveFeeling = async feeling => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(feeling)
    };
    const response = await fetch(FEELINGS_API + '/feelings', options).catch(error => {console.warn(error)});
    return response?.ok === true;
};

/* getTime and getLocation can be passed in so they are concerns of the embedding page.
   eg. getTime might be the current data/time, or preiod of time into a video */
const RecordFeeling = ({projectDetails, getTime, getLocation}) => {
    const [selectedValue, setSelectedValue] = useState(0);
    const [tags, setTags] = useState([]);
    const handleSubmit = async event => {
        event.preventDefault();
        const response = await saveFeeling({
            project: projectDetails.title,
            value: selectedValue,
            tags,
            location: getLocation(),
            time: getTime()
        });
        // TODO: Feedback to user
    };

    return (
        <FeelingsForm onSubmit={handleSubmit}>
            <h2>{projectDetails.cta}</h2>
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

export default RecordFeeling;