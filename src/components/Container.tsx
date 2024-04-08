import React from "react";

interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({className, children, ...props}: ContainerProps,
     ref) => {
        return (
            <div
                ref={ref}
                className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
                {...props}
            >
                {children}
            </div>
        )
    })

export default Container