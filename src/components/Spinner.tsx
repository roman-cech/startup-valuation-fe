import React from "react";


const Spinner: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-200 bg-opacity-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"/>
        </div>
    )
}
export default Spinner