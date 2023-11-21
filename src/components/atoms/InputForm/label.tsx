import { StyledLabel, StyledLabelError } from "./style";

interface LabelProps {
    htmlFor: string;
    name: string;
    isError?: boolean;
}

export const Label = ({ htmlFor , name, isError = false }: LabelProps) => {
  const LabelComponent = isError ? StyledLabelError : StyledLabel;
  return <LabelComponent htmlFor={htmlFor}>{name}</LabelComponent>;
}