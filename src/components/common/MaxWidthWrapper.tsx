import { cn } from '~/lib/utils';

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        ' h-full w-full mx-auto max-w-full px-5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
