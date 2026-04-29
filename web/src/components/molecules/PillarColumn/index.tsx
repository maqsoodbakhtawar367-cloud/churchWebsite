import { cormorantTitle, jost } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import type { PillarColumnProps } from "./PillarColumn.types";

export function PillarColumn({
  image,
  title,
  children,
  footnote,
  className,
}: PillarColumnProps) {
  return (
    <article
      className={cn(
        "flex w-full min-w-0 max-w-md flex-col items-center text-center",
        "lg:max-w-none lg:items-center lg:text-center",
        className,
      )}
    >
      <div className="mb-2 flex h-32 w-32 items-center justify-center sm:mb-5 sm:h-36 sm:w-36">
        {image}
      </div>
      <h3
        className={cn(
          cormorantTitle.className,
          "text-center text-[36px] font-normal not-italic leading-none tracking-normal text-[#424242]",
        )}
      >
        {title}
      </h3>
      <div
        className={cn(
          jost.className,
          "mt-3 w-full text-center text-[16px] font-normal not-italic leading-8 tracking-normal text-[#42424299] sm:mt-4 [&_p]:m-0",
        )}
      >
        {children}
      </div>
    </article>
  );
}
