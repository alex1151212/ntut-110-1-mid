import StickIcon from "../assets/icon/stick";

interface IProps {}

const Sample1: React.FC<IProps> = () => {
  return (
    <div>
      <h1>Sample Component</h1>
      <div className="sample1-stick-icon">
        <StickIcon />
      </div>
    </div>
  );
};

export default Sample1;
