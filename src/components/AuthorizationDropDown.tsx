import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Col, Row, Typography } from 'antd';
import {
    UserOutlined,
    SettingOutlined,
    QuestionOutlined,
    LogoutOutlined,
    DownOutlined,
} from '@ant-design/icons';
import {IAuthResponse} from "../common/Types";

const { Title, Paragraph } = Typography;

interface Props { auth: IAuthResponse }

const AuthorizationDropDown: React.FC<Props> = ({ auth }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return auth?.user?.email ? (
        <Row className="relative inline-block">
            <Button
                onClick={toggleDropdown}
                className="bg-white relative z-10 flex items-center p-2 text-sm text-gray-600 rounded-md focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 border-none"
            >
                <UserOutlined className="mx-1" />
                <Typography.Text className="mx-1">
                    {auth.user.firstName + ' ' + auth.user.lastName}
                </Typography.Text>
                <DownOutlined />
            </Button>

            {isOpen && (
                <div className="bg-white absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right rounded-md shadow-xl dark:bg-gray-800">
                    <Link
                        to="#"
                        className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <Avatar
                            size={64}
                            className="flex-shrink-0 object-cover rounded-full"
                            src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?q=80&w=2846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <Col className="mx-1">
                            <Title level={4} className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                {auth.user.firstName + ' ' + auth.user.lastName}
                            </Title>
                            <Paragraph className="text-sm text-gray-500 dark:text-gray-400">{auth.user.email}</Paragraph>
                        </Col>
                    </Link>

                    <hr className="border-gray-200 dark:border-gray-700"/>

                    <Link
                        to="#"
                        className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <UserOutlined className="w-5 h-5 mx-1" />
                        <Typography.Text className="mx-1">View profile</Typography.Text>
                    </Link>

                    <Link
                        to="#"
                        className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <SettingOutlined className="w-5 h-5 mx-1" />
                        <Typography.Text className="mx-1">Settings</Typography.Text>
                    </Link>

                    <hr className="border-gray-200 dark:border-gray-700"/>

                    <Link
                        to="#"
                        className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <QuestionOutlined className="w-5 h-5 mx-1" />
                        <Typography.Text className="mx-1">Help</Typography.Text>
                    </Link>

                    <Link
                        to="/logout"
                        onClick={toggleDropdown}
                        className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <LogoutOutlined className="w-5 h-5 mx-1" />
                        <Typography.Text className="mx-1">Log Out</Typography.Text>
                    </Link>
                </div>
            )}
        </Row>
    ) : (
        <Button className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 rounded-full font-medium text-white">
            <Link to="/login">
                Log in <Typography.Text aria-hidden="true" className="text-white">&rarr;</Typography.Text>
            </Link>
        </Button>
    )
}

export default AuthorizationDropDown
