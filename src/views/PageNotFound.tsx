import React from "react";
import {Link} from "react-router-dom";
import {Row, Typography} from "antd";

const PageNotFound: React.FC = () => {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <Typography.Paragraph className="text-base font-semibold text-blue-600">404</Typography.Paragraph >
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <Typography.Paragraph className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking
                    for.</Typography.Paragraph>
                <Row className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/" className="text-md font-semibold text-gray-900">
                        <span aria-hidden="true">&larr;</span> Go back home
                    </Link>
                </Row>
            </div>
        </main>)
}

export default PageNotFound