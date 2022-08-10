const Textarea = ({ disabled = false, className, ...props }) => (
    <textarea
        disabled={disabled}
        {...props}
        type="text"
        className={`${className} resize-none font-mono tracking-wide text-lg w-full px-4 py-3 mb-4 border-2 border-primary rounded-lg focus:ring focus:border-0 focus:ring-secondary focus:outline-none`}></textarea>
)

export default Textarea
