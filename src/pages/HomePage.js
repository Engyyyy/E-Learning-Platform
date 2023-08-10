import { Stack } from "@mui/material";
import Banner from "../components/home/Banner";
import LearningProcess from "../components/home/LearningProcess";
import TopCategories from "../components/home/TopCategories";
import BenefitsOfLearning from "../components/home/BenefitsOfLearning";
import MostPopular from "../components/home/MostPopular";
import OurClients from "../components/home/OurClients";
import PopularCertificates from "../components/home/PopularCertificates";
function HomePage() {
  return (
    <Stack spacing="100px">
      <Banner />
      <LearningProcess />
      <TopCategories />
      <BenefitsOfLearning />
      <MostPopular />
      <OurClients />
      <PopularCertificates />
    </Stack>
  );
}

export default HomePage;
