import DayComponent from "@/components/CardComponents/DayComponent";
import MainLayout from "@/components/layouts/MainLayout";
import GraphComponent from "@/components/MainPageComponents/GraphComponent";

export default function Home() {
  return (
    <MainLayout>
      <div className="">
        <GraphComponent />
        <DayComponent />
      </div>
    </MainLayout>
  );
}
