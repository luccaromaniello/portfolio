interface WorkItemProps {
  startDate: string,
  endDate?: string,
  role: string,
  company: string,
  sector: string,
  description: string,
  location: string,
  current: boolean,
}

const WorkItem = ({ startDate, endDate, role, company, sector, description, location, current }: WorkItemProps) => {
  return (
    <div className={`flex flex-row w-full justify-between py-4 gap-12 ${!current ? 'border-t': ''}`}>
      <div className="flex flex-col w-full max-w-fit gap-1">
        <p className="">{location}</p>
        <p className="text-content-secondary">{startDate} - {current ? <span className="text-primary-main font-medium">now</span> : <span>{endDate}</span>}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="w-full"><span className="font-medium">{role}</span> — <span className="text-base font-medium text-primary-main hover:text-content-tertiary">{company}</span></p>
        <p className="text-content-secondary">{description}</p>
        {/* <p>{sector}</p> */}
      </div>
    </div>
  )
};

export default WorkItem;