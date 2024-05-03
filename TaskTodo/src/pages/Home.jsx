import CreateTask from "../components/CreateTask";
import { CompleteTask } from "../components/CompleteTask";
import HomeTop from "../components/HomeTop";
import { ShowTask } from "../components/ShowTask";
import ProfileShow from "../components/ProfileShow";

const Home = () => {
  return (
    <>
      <div className="relative w-[70%] mx-auto bg-white rounded-md flex justify-center pt-12 pb-20 h-screen overflow-y-scroll ">
        <div>
          <ProfileShow />
          <HomeTop />
          <CreateTask />
          <ShowTask />
          <CompleteTask />
        </div>
      </div>
    </>
  );
};

export default Home;
