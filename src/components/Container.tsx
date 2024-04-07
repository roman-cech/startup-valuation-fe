import React from "react";

interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
}

const Container = ({className, children, ...props}: ContainerProps) => {
    return (
        <div
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default Container