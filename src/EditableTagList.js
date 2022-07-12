import { useState } from "react";

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
            <label>
                Add tag:
                <input type="text" name="addTag" value={newTagName} onChange={event => setNewTagName(event.target.value)} />
            </label>
            {
                tags.map((tagName, index) => (
                    <button type="button" key={index} onClick={() => {removeTag(tagName)}}>{tagName}</button>
                ))
            }
            <button type="button" onClick={() => addTag(newTagName)}>+</button>
        </>
    );
}

export default EditableTagList;