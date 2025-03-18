interface WorkItemProps {
  startDate?: string,
  endDate?: string,
  description: string,
  school?: string,
  location: string,
  always: boolean,
}

const EducationItem = ({ startDate, endDate, description, school, location, always }: WorkItemProps) => {
  return (
    <div className={`flex flex-row w-full justify-between py-4 gap-12 items-center ${!always ? 'border-t': ''}`}>
      <div className="flex flex-col basis-48 shrink-0 gap-1">
        <p className="">{location}</p>
        <p className="text-content-secondary">{always ? <span className="text-primary-main font-medium">Always</span> : <span>{startDate} - {endDate}</span>}</p>
      </div>
      <div className="flex flex-col grow gap-2">
        {always ? 
          <p className="text-content-secondary">{description}</p>
          :
          <p><span className="font-medium">{description}</span> — <span className="text-base font-medium text-primary-main hover:text-content-tertiary">{school}</span></p>
        }
      </div>
    </div>
  )
};

export default EducationItem;