import { types } from "util";

type ButtonType = {
  title?: string;
  onClick?: () => void;
  type?: "submit";
};

export default function Button({ title, onClick, type }: ButtonType) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="justify-self-center font-roboto-400  rounded-full w-full h-[52px] px-5 bg-lime text-lg text-black hover:bg-lime-hov active:bg-black active:text-white"
    >
      {title}
    </button>
  );
}
