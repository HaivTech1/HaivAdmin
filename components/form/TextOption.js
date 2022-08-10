const TextOption = ({ disabled = false, title, className, ...props }) => {
  return (
    <option className={`${className}`} {...props}>
      {title}
    </option>
  );
};

export default TextOption;
