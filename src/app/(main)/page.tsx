import Header from "@/components/Header";
import "@/styles/alignments.css";
import Solution from "@/components/cases/abinbev/Solution";
import TopNavigation from "@/components/navigation/TopNavigation";

const Home = () => {
  return (
    <div className="flex flex-col bg-content-primary">
      <div className="flex flex-col px-6 lg:px-56 2xl:px-96 w-full min-h-96">
        <TopNavigation darkTheme />
        <Header />
      </div>
      <div className="pt-32 bg-background default-alignment">
        <Solution />
      </div>
    </div>
  );
};

export default Home;
