import styled, { css } from "styled-components";

const Tag = styled.button`
    background-color: blue;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    padding: .2rem .5rem;
`;

const TagListWrapper = styled.div`
    margin: 1rem 0;
    width: 100%;
`;

const TagList = ({tags, clickCallback}) => {
    return (
        <TagListWrapper>
            {
                tags.length > 0 && tags.map((tagName, index) => (
                    <Tag type="button" key={index} onClick={() => {clickCallback(tagName)}}>{tagName}</Tag>
                ))
            }
        </TagListWrapper>
    );
};

export default TagList;