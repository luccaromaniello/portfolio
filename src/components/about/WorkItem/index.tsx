import Chip from "@/components/Chip";

interface WorkItemProps {
  startDate: string,
  endDate?: string,
  role: string,
  company: string,
  website: string,
  sector: string,
  technologies?: string[],
  description: string,
  location: string,
  current: boolean,
}

const WorkItem = ({ startDate, endDate, role, company, website, sector, technologies, description, location, current }: WorkItemProps) => {
  const chips = technologies?.map((technology, i) => <Chip key={i} text={technology}/>)

  return (
    <div className={`flex flex-col sm:flex-row w-full justify-between py-8 sm:py-4 gap-4 sm:gap-12 ${!current ? 'border-t': ''}`}>
      <div className="flex flex-col sm:basis-48 shrink-0 gap-1">
        <p className="">{location}</p>
        <p className="text-content-secondary">{startDate} - {current ? <span className="text-primary-main font-medium">now</span> : <span>{endDate}</span>}</p>
      </div>
      <div className="flex flex-col grow gap-2">
        <p><span className="font-medium">{role}</span> — <a href={website} rel="noreferrer" target="_blank" className="text-base font-medium text-primary-main hover:text-content-tertiary">{company}</a></p>
        <p className="text-content-secondary">{description}</p>
        <div className="flex flex-row flex-wrap items-start gap-2 py-2">
          <Chip text={sector} /> 
          {chips}
        </div>
      </div>
    </div>
  )
};

export default WorkItem;