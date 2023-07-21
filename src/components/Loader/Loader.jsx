import { ThreeCircles } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

const Loader = () => {
  return (
    <Overlay>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        outerCircleColor="blue"
        innerCircleColor="darkblue"
        middleCircleColor="blue"
      />
    </Overlay>
  );
};

export default Loader;
