import "@/styles/cards.css";

interface CaseVideoProps {
  description: boolean;
  url: string;
}

const CaseVideo = ({ description, url }: CaseVideoProps) => {
  return (
    <div className="relative w-full h-full">
      <video
        src={url}
        className={description ? "card-border" : "inner-card-border"}
        controls
        muted
        preload="auto"
        loop
        controlsList="nodownload"
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CaseVideo;
