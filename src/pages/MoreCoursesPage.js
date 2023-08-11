import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { useGetSubjectCoursesMutation } from "../store";

function MoreCoursesPage() {
  const { subject_id, subject_name } = useParams();
  const [getSubjectCourses, subjectCoursesResult] =
    useGetSubjectCoursesMutation();
  useEffect(() => {
    getSubjectCourses({ subject_id, pageNum: 1, pageSize: 8 });
  }, [subject_id, getSubjectCourses]);
  return (
    <Stack alignItems="center">
      <Typography textAlign="center" fontSize="36px" fontWeight={700}>
        {subject_name} Courses
      </Typography>
      <Typography fontSize="30px" fontWeight={700} color="secondary">
        Courses to get you started
      </Typography>
    </Stack>
  );
}

export default MoreCoursesPage;
