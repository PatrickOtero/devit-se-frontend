import { ErrorMessage, Field as FieldComponent } from "formik";
import styled from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column
`

export const Field = styled(FieldComponent )`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '20px'};
    border-radius: 12px;
    border: 1px solid #FFF;
    background: #DEDEDE;
    padding: 0 10px;
    margin-top: 3px;
    margin-bottom: 15px;

    &::placeholder {
        color: #000;
        font-family: poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
`

export const StyledLabel = styled.label`
    font-size: 12px;
    color: #FFF;
    margin-left: 5px;
    height: 15px;
`;

export const StyledError = styled(ErrorMessage)`
    margin-left: 5px;
    height: 15px;
    color: #ff0000;
    font-size: 12px;
`;

