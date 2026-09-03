import { Email } from "../index";

interface Props {
  id: string;
}

export const Contact: React.FC<Props> = ({ id }) => {
  return (
    <div className="flex flex-col relative w-full mt-12 gap-8 mb-24">
      <Email id={id} />
    </div>
  );
};
