import "@/styles/alignments.css";
import Text from "@/components/cases/typography/Text";
import Card from "@/components/cases/Card";

interface VideoContainerProps {
  url: string;
  title: string;
  description: string;
}

const VideoContainer = ({ url, title, description }: VideoContainerProps) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-16 items-center">
      <div className="w-full sm:w-2/3">
        <Card video={{ url: url }} />
      </div>
      <div className="flex flex-col gap-2 w-full sm:w-1/3">
        <h4 className="text-lg sm:text-xl font-bold leading-snug sm:leading-normal">
          {title}
        </h4>
        <Text text={description} />
      </div>
    </div>
  );
};

export default VideoContainer;
