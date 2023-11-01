interface NotFoundProps {
  message?: string;
}

export const NotFound = ({
  message
}: NotFoundProps): React.ReactElement | null => {
  return (
    <div className="relative h-[calc(100vh-200px)] w-full lg:h-[calc(100dvh-64px)]">
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center text-4xl font-semibold uppercase text-clr-txt-primary sm:text-2xl">
        404 Not Found
        {message && (
          <>
            <span className="my-2 text-4xl font-normal text-clr-txt-tertiary sm:text-2xl">
              -
            </span>
            <p className="text-center text-2xl font-semibold uppercase text-clr-txt-tertiary sm:text-base">
              {message}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
