import React from "react";
import {IAuthResponse} from "../common/Types";
import {Dialog} from "@headlessui/react";
import {Button, Col, Row, Typography} from "antd";
import {Link} from "react-router-dom";
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";
import AuthorizationDropDown from "./AuthorizationDropDown";

const MobileNavigation = ({ mobileMenuOpen, setMobileMenuOpen, auth }: { mobileMenuOpen: boolean; setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; auth: IAuthResponse }) => {
    return (
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Row className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <Row className="flex items-center justify-between">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <Typography.Text className="sr-only">SeedScout</Typography.Text>
                        <MenuOutlined className="h-8 w-auto" />
                    </Link>
                    <Button
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Typography.Text className="sr-only">Close menu</Typography.Text>
                        <CloseOutlined />
                    </Button>
                </Row>
                <Col className="mt-6 flow-root">
                    <Col className="-my-6 divide-y divide-gray-500/10">
                        <Col className="space-y-2 py-6">
                            <Link to="/"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Home
                            </Link>
                            <Link to="/startup/evaluate"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Product
                            </Link>
                            <Link to="/about"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                About
                            </Link>
                        </Col>
                        <Col className="py-6 text-right">
                            <AuthorizationDropDown auth={auth} />
                        </Col>
                    </Col>
                </Col>
            </Dialog.Panel>
        </Dialog>
    )
}

export default MobileNavigation