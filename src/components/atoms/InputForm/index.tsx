import { useField } from "formik";
import { Label } from "./label";
import { ContainerInput, Field, StyledError } from "./style";

interface InputFormProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  width: string;
  height?: string;
  as?: string;
  options?: Array<string>;
  minDate?: string;
  maxDate?: string;
  callback?: (value: string) => void;
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
}: InputFormProps) {
  const [field] = useField(name);

  const handleSelectChange = (event: any) => {
    if (callback) {
      callback(event.target.value);
    }

    field.onChange(event);
  };

  return (
    <ContainerInput>
      <Label htmlFor={id} name={label} />
      {as === "select" ? (
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
      ) : (
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
