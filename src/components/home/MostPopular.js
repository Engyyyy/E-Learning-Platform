import HomeSection from "./HomeSection";
import AllCourses from "./AllCourses";

function MostPopular() {
  let title = "Most Popular";
  let subtitle = (
    <>
      Learn the latest skills to reach your <br />
      professional goals
    </>
  );
  let content = <AllCourses backgroundColor="white" buttonVariant="outlined" />;

  return <HomeSection title={title} subtitle={subtitle} content={content} />;
}

export default MostPopular;
