interface TextProps {
  text: string,
}

const Text = ({ text }: TextProps) => {
  return (
    <p className="leading-7 whitespace-pre-line">{text}</p>
  )
};

export default Text;