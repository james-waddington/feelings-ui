import { useState } from "react";
import styled from "styled-components";
import TagList from "./TagList";

const AddTagButton = styled.button`
    background-color: blue;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    height: 1.5rem;
    margin-left: .2rem;
    width: 1.5rem;
`;

const EditableTagList = ({ tags, setTags }) => {
    const [newTagName, setNewTagName] = useState('');

    const addTag = tagName => {
        if(!tags.includes(tagName)) {
            setTags([...tags, tagName]);
        }
        setNewTagName('');
    };

    const removeTag = tagName => {
        if(tags.includes(tagName)) {
            const newTags = tags.filter(tag => tag !== tagName);
            setTags(newTags);
        }
    };

    return (
        <>
            <TagList tags={tags} clickCallback={removeTag} />
            <label>
                Add tag:&nbsp;
                <input type="text" name="addTag" value={newTagName} onChange={event => setNewTagName(event.target.value)} />
            </label>
            <AddTagButton type="button" onClick={() => addTag(newTagName)}>+</AddTagButton>
        </>
    );
}

export default EditableTagList;