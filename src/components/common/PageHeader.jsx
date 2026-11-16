
export const PageHeader = ({ val, subheading, mainHeading }) => {
    return (
        <div className="flex flex-col text-xl sm:text-2xl md:text-3xl font-light">
            <div className="flex items-center">
                <span className="pr-2 font-mono text-red-500 dark:text-yellow-300">
                    {val}
                </span>
                <span>{subheading}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight break-words mt-1">
                {mainHeading}-
            </h2>
        </div>
    );
};