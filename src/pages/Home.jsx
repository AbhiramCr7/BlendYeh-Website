import Hero from '../components/sections/Hero';
import ProductExperience from '../components/sections/ProductExperience';
import ModularDeployment from '../components/sections/ModularDeployment';
import TechnologyPillars from '../components/sections/TechnologyPillars';
import VerticalIntegration from '../components/sections/VerticalIntegration';
import MenuPreview from '../components/sections/MenuPreview';
import PartnerDeploy from '../components/sections/PartnerDeploy';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProductExperience />
      <ModularDeployment />
      <TechnologyPillars />
      <VerticalIntegration />
      <MenuPreview />
      <PartnerDeploy />
    </div>
  );
};

export default Home;
