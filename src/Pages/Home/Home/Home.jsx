import Banner from '../Banner/Banner';
import CompoInstructors from '../CompoInstructors/CompoInstructors';
import Cover from '../Cover/Cover';
import { Fade, JackInTheBox } from "react-awesome-reveal";

const Home = () => {




  return (
    <div>
      <JackInTheBox>
        <Cover></Cover>
      </JackInTheBox>
      <Banner></Banner>
      <Fade>
        <CompoInstructors></CompoInstructors>
      </Fade>
    </div>
  );
};

export default Home;