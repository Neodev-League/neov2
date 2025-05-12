import { cn } from "../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-linear-to-t from-neo-green-3/50 via-neo-green-1/70 to-neo-green-2 text-neo-green-2 border-2 border-neo-green-2 justify-between flex flex-col space-y-4",
        className
      )}
      onClick={onClick}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 text-neo-green-2">
        {icon}
        <div className="font-sans font-bold text-neo-green-2  mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neo-green-2 text-xs ">
          {description}
        </div>
      </div>
    </div>
  );
};
