interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function Form({ onSubmit }: FormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Le titre"
        onChange={(event) => handleChange(event)}
      />
      <input
        type="text" // à changer en date type ??
        placeholder="La date"
        onChange={(event) => handleChange(event)}
      />
      <input type="submit" value="Ajouter" />
    </form>
  );
}

export default Form;
