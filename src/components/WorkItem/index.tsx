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
    <div className={`flex flex-row w-full justify-items-start justify-between items-center py-4 ${!current ? 'border-t': ''}`}>
      <p className="text-content-secondary">
        {startDate} - {current ? <p className="text-primary-main font-medium">now</p> : <p>{endDate}</p>}
      </p>
      <p>{role}</p>
      <p>{company}</p>
      <p>{sector}</p>
      <p>{location}</p>
    </div>
  )
};

export default WorkItem;