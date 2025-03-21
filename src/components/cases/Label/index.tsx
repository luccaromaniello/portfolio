interface LabelProps {
  text: string,
}

const Label = ({ text }: LabelProps) => {
  return (
    <p className="text-content-secondary">{text}</p>
  )
};

export default Label;