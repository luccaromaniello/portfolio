interface TextProps {
  text: string;
  type?: TextType;
}

enum TextType {
  PRIMARY = 0,
  SECONDARY = 1,
}

const Text = ({ text, type = 0 }: TextProps) => {
  switch (type) {
    case TextType.SECONDARY: {
      return (
        <p className="leading-6 whitespace-pre-line text-content-secondary lg:text-sm">
          {text}
        </p>
      );
    }
    default: {
      return <p className="leading-7 whitespace-pre-line">{text}</p>;
    }
  }
};

export default Text;
