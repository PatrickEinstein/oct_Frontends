import React from "react";

const Section = ({
  children,
  className,
  ...rest
}: React.ComponentProps<"section">) => {
  return (
    <section className={`${className} px-4 md:px-8 lg:px-12`} {...rest}>
      {children}
    </section>
  );
};

export default Section;
