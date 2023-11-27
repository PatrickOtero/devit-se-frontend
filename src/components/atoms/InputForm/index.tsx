import { useField } from "formik";
import { Label } from "./label";
import { ContainerInput, Field, StyledError } from "./style";

interface InputFormProps {
  readonly id: string;
  readonly name: string;
  readonly type?: string;
  readonly placeholder?: string;
  readonly label: string;
  readonly width: string;
  readonly height?: string;
  readonly as?: string;
  readonly options?: string[];
  readonly minDate?: string;
  readonly maxDate?: string;
  readonly callback?: (value: string) => void;
}

export default function InputForm({
  id,
  name,
  type,
  placeholder,
  label,
  width,
  height,
  as,
  options,
  minDate,
  maxDate,
  callback,
}: InputFormProps): JSX.Element {
  const [field] = useField(name);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (callback) {
      callback(event.target.value);
    }
    field.onChange(event);
  };

  return (
    <ContainerInput>
      <Label htmlFor={id} name={label} />
      {as === "select" && (
        <>
          <Field
            id={id}
            name={name}
            width={width}
            height={height}
            as={as}
            onChange={handleSelectChange}
            value={field.value}
          >
            {options?.map((op, index) => (
              <option key={index} value={index > 0 ? op : ""}>
                {op}
              </option>
            ))}
          </Field>
          <StyledError name={name} component="span" />
        </>
      )}
      {as !== "select" && (
        <>
          <Field
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            width={width}
            height={height}
            min={minDate}
            max={maxDate}
          />
          <StyledError name={name} component="span" />
        </>
      )}
    </ContainerInput>
  );
}