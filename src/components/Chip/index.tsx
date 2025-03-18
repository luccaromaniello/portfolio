interface ChipProps {
    text: string,
  }
  
  const Chip = ({ text }: ChipProps) => {
    return (
      <div className="text-primary-main text-xs sm:text-sm bg-primary-main/5 rounded-full px-4 py-2">
        <p>{text}</p>
      </div>
    )
  };
  
  export default Chip;