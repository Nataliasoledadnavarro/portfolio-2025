import { TitlesProps } from "@/types/index";

const Titles = ({ text }: TitlesProps) => {
  return (
    <h2 className="text-4xl font-bold mb-12 text-center gradientTitle">
      {text}
    </h2>
  );
};

export default Titles;
