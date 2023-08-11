import { useParams } from "react-router-dom";

function CourseDetailsPage() {
  const { course_id } = useParams();
  return <div>Course Details...</div>;
}

export default CourseDetailsPage;
