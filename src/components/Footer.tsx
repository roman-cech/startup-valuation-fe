import React from "react";
import {Footer} from "antd/lib/layout/layout";
import {Link} from "react-router-dom";
import {Col, Row, Typography} from "antd";
import {FacebookFilled, LinkedinFilled, TwitterSquareFilled} from "@ant-design/icons";

const CustomFooter: React.FC = () => {
    return (
        <Footer className="dark:bg-gray-900">
            <Row className="px-3 py-2 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <Typography.Text className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                    © 2024 UTB™. All Rights Reserved.
                </Typography.Text>
                <Col className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <FacebookFilled className="w-4 h-4"/>
                        <Typography.Text className="sr-only">Facebook page</Typography.Text>
                    </Link>
                    <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <TwitterSquareFilled className="w-4 h-4"/>
                        <Typography.Text className="sr-only">Twitter page</Typography.Text>
                    </Link>
                    <Link to="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <LinkedinFilled className="w-4 h-4"/>
                        <Typography.Text className="sr-only">LinkedIn account</Typography.Text>
                    </Link>
                </Col>
            </Row>
        </Footer>
    )
}

export default CustomFooter