import styled, { css } from "styled-components";
import Icon from "./Icon";

const FeelingButtonStyled = styled.button`
    background: none;
    ${props => props.isSelected && css`background: #EEE`};
    border: none;
    width: 50px;

    &:hover {
        background-color: #EEE;
    }
`;

const FeelingButton = ({icon, isSelected, clickCallback}) => (
    <FeelingButtonStyled type="button" isSelected={isSelected} onClick={clickCallback}>
        <Icon name={icon} />
    </FeelingButtonStyled>
);

export default FeelingButton;