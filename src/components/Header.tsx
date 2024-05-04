import React, {useState} from 'react'
import {Popover} from '@headlessui/react'
import {Link} from "react-router-dom";
import {Button, Row, Typography} from "antd";
import {Header} from "antd/lib/layout/layout";
import {useRecoilValue} from "recoil";
import {IAuthResponse} from "../common/Types";
import AuthorizedDropDown from "./AuthorizedDropDown"
import MobileNavigator from "./MobileNavigator"
import authAtom from "../api/authAtom";
import {BarsOutlined, MenuOutlined,} from "@ant-design/icons";

const CustomHeader: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const auth = useRecoilValue<IAuthResponse>(authAtom)

    return (
        <Header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2" aria-label="Global">
                <Row className="flex items-center flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                        <Typography.Text className="sr-only">SeedScout</Typography.Text>
                        <MenuOutlined className="text-2xl mr-2 lg:mr-4"/>
                        <Typography.Text className="text-2xl font-semibold leading-6 text-gray-900">
                            Seed<Typography.Text className="text-blue-600">Scout</Typography.Text>
                        </Typography.Text>
                    </Link>
                </Row>
                <Row className="flex lg:hidden">
                    <Button
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Typography.Text className="sr-only">Open main menu</Typography.Text>
                        <BarsOutlined/>
                    </Button>
                </Row>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
                        Home
                    </Link>
                    <Link to="/startup/evaluate" className="text-sm font-semibold leading-6 text-gray-900">
                        Product
                    </Link>
                    <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>
                </Popover.Group>
                <Row className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <AuthorizedDropDown auth={auth} />
                </Row>
            </nav>
            <MobileNavigator mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} auth={auth} />
        </Header>
    )
}

export default CustomHeader