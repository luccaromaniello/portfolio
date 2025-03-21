interface WorkItemProps {
  startDate?: string,
  endDate?: string,
  description: string,
  school?: string,
  website?: string,
  location: string,
  always: boolean,
}

const EducationItem = ({ startDate, endDate, description, school, website, location, always }: WorkItemProps) => {
  return (
    <div className={`flex flex-col sm:flex-row w-full justify-between py-4 gap-4 sm:gap-12 sm:items-center ${!always ? 'border-t': ''}`}>
      <div className="flex flex-col sm:basis-48 shrink-0 gap-1">
        <p className="">{location}</p>
        <p className="text-content-secondary">{always ? <span className="text-primary-main font-medium">Always</span> : <span>{startDate} - {endDate}</span>}</p>
      </div>
      <div className="flex flex-col grow gap-2">
        {always ? 
          <p className="text-content-secondary">{description}</p>
          :
          <p><span className="font-medium">{description}</span> — <a href={website} rel="noreferrer" target="_blank" className="text-base font-medium text-primary-main hover:text-content-tertiary">{school}</a></p>
        }
      </div>
    </div>
  )
};

export default EducationItem;