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
    <div className={`flex flex-row justify-between${!current ? 'border-t': ''}`}>
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