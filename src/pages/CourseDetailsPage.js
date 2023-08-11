import { useParams } from "react-router-dom";
import { useGetCourseDetailsQuery } from "../store";

function CourseDetailsPage() {
  const { course_id } = useParams();
  const courseDetailsResult = useGetCourseDetailsQuery(course_id);
  return <div>Course Details...</div>;
}

export default CourseDetailsPage;
