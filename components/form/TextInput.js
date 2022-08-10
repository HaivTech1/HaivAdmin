const TextInput = ({ disabled = false, className, ...props }) => (
  <input
    disabled={disabled}
    className={`${className} block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-primary-700 focus:border-0 focus:ring-primary-700 focus:outline-none focus:ring  duration-150`}
    {...props}
  />
);

export default TextInput;
