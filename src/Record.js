import { useState } from "react";
import { useParams } from "react-router-dom";
import { saveFeeling } from "./mock-api";
import useProjectDetails from "./hooks/useProjectDetails";
import EditableTagList from "./EditableTagList";

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
            <h2>Record {project}</h2>
            {projectDetails && projectDetails.icons.map((icon, index) => (
                <button type="button" key={index} onClick={() => setSelectedValue(index)}>{index}</button>
            ))}
            <EditableTagList tags={tags} setTags={setTags} />
            <input type="submit" value="save" />
        </form>
    );
};

export default Record;