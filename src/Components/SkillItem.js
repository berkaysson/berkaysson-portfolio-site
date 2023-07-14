import { styled } from "styled-components";

const SkillItemWrapper = styled.li`
  border: 1px solid blue;
  width: 150px;
  height: 150px;
  position: relative;
  text-align: center;

  img{
    border: 1px solid green;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

const SkillItem = ({ skill }) => {
  return (
    <SkillItemWrapper>
      <span>{skill}</span>
      <img src="" alt="skillItemImg" />
    </SkillItemWrapper>
  );
};

export default SkillItem;
