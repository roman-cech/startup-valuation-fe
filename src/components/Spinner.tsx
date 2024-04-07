import React from "react";
import {ReactComponent as Spin} from "../assets/Spin.svg"


const Spinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div role="status">
                <Spin className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"/>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
export default Spinner