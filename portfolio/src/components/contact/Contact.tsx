import { Email } from "../index";

interface Props {
  id: string;
}

export const Contact: React.FC<Props> = ({ id }) => {
 

  return (
    <div className="flex flex-col  relative w-11/12  mt-4 gap-4 md:w-full  ">
      <Email id={id} />
    </div>
  );
};
