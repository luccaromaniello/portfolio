interface WorkItemProps {
  startDate: string,
  endDate?: string,
  role: string,
  company: string,
  sector: string,
  location: string,
  current: boolean,
}

const WorkItem = ({ startDate, endDate, role, company, sector, location, current }: WorkItemProps) => {
  return (
    <div className={`flex flex-row w-full justify-between items-center py-4 ${!current ? 'border-t': ''}`}>
      <div className="flex flex-col text-content-secondary w-full max-w-fit">
        <p>{startDate} - {current ? <span className="text-primary-main font-medium">now</span> : <span>{endDate}</span>}</p>
        <p>{location}</p>
      </div>
      <p className="w-full"><span className="font-medium">{role}</span> — <span>{company}</span></p>
      {/* <p className="border">{sector}</p> */}
    </div>
  )
};

export default WorkItem;