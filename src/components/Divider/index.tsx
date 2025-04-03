interface DividerProps {
  type?: DividerType;
  placeholder?: boolean;
}

enum DividerType {
  HORIZONTAL = 0,
  VERTICAL = 1,
}

const Divider = ({ type = 0, placeholder = false }: DividerProps) => {
  switch (type) {
    case DividerType.VERTICAL: {
      return (
        <div
          className={`${placeholder ? "opacity-0" : ""} h-full w-px bg-content-tertiary/40`}
        ></div>
      );
    }
    default: {
      return (
        <div
          className={`${placeholder ? "opacity-0" : ""} w-full h-px bg-content-tertiary/40`}
        ></div>
      );
    }
  }
};

export default Divider;
