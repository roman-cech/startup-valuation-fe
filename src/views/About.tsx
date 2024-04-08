import React from 'react'
import Container from "../components/Container";
import {Col, Image, Row, Typography} from "antd";
import {ReactComponent as UnderLine} from '../assets/UnderLine.svg';

const About: React.FC = () => {
    return (
        <Container className="overflow-hidden pt-14 pb-14 lg:pt-20 lg:pb-20 bg-white dark:bg-dark">
            <Row className="container mx-auto">
                <Row className="flex flex-wrap items-center justify-between -mx-4">
                    <Col className="flex items-center w-full p-6 lg:w-1/2">
                        <Row className="relative z-10 my-4">
                            <Image
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                preview={false}
                                className="w-full rounded-2xl"
                            />
                            <span className="absolute -right-7 -bottom-7 z-[-1]">
                                  <svg
                                      width={134}
                                      height={106}
                                      viewBox="0 0 134 106"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                            <circle
                                cx="1.66667"
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 1.66667 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="16.3333"
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 16.3333 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={31}
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 31 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="45.6667"
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 45.6667 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="60.3334"
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 60.3334 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="88.6667"
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 88.6667 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="117.667"
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 117.667 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="74.6667"
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 74.6667 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={103}
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 103 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={132}
                                cy={104}
                                r="1.66667"
                                transform="rotate(-90 132 104)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.66667"
                                cy="89.3333"
                                r="1.66667"
                                transform="rotate(-90 1.66667 89.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="16.3333"
                                cy="89.3333"
                                r="1.66667"
                                transform="rotate(-90 16.3333 89.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={31}
                                cy="89.3333"
                                r="1.66667"
                                transform="rotate(-90 31 89.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="45.6667"
                                cy="89.3333"
                                r="1.66667"
                                transform="rotate(-90 45.6667 89.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="60.3333"
                                cy="89.3338"
                                r="1.66667"
                                transform="rotate(-90 60.3333 89.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="88.6667"
                                cy="89.3338"
                                r="1.66667"
                                transform="rotate(-90 88.6667 89.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="117.667"
                                cy="89.3338"
                                r="1.66667"
                                transform="rotate(-90 117.667 89.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="74.6667"
                                cy="89.3338"
                                r="1.66667"
                                transform="rotate(-90 74.6667 89.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={103}
                                cy="89.3338"
                                r="1.66667"
                                transform="rotate(-90 103 89.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={132}
                                cy="89.3338"
                                r="1.66667"
                                transform="rotate(-90 132 89.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.66667"
                                cy="74.6673"
                                r="1.66667"
                                transform="rotate(-90 1.66667 74.6673)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.66667"
                                cy="31.0003"
                                r="1.66667"
                                transform="rotate(-90 1.66667 31.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="16.3333"
                                cy="74.6668"
                                r="1.66667"
                                transform="rotate(-90 16.3333 74.6668)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="16.3333"
                                cy="31.0003"
                                r="1.66667"
                                transform="rotate(-90 16.3333 31.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={31}
                                cy="74.6668"
                                r="1.66667"
                                transform="rotate(-90 31 74.6668)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={31}
                                cy="31.0003"
                                r="1.66667"
                                transform="rotate(-90 31 31.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="45.6667"
                                cy="74.6668"
                                r="1.66667"
                                transform="rotate(-90 45.6667 74.6668)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="45.6667"
                                cy="31.0003"
                                r="1.66667"
                                transform="rotate(-90 45.6667 31.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="60.3333"
                                cy="74.6668"
                                r="1.66667"
                                transform="rotate(-90 60.3333 74.6668)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="60.3333"
                                cy="30.9998"
                                r="1.66667"
                                transform="rotate(-90 60.3333 30.9998)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="88.6667"
                                cy="74.6668"
                                r="1.66667"
                                transform="rotate(-90 88.6667 74.6668)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="88.6667"
                                cy="30.9998"
                                r="1.66667"
                                transform="rotate(-90 88.6667 30.9998)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="117.667"
                                cy="74.6668"
                                r="1.66667"
                                transform="rotate(-90 117.667 74.6668)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="117.667"
                                cy="30.9998"
                                r="1.66667"
                                transform="rotate(-90 117.667 30.9998)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="74.6667"
                                cy="74.6668"
                                r="1.66667"
                                transform="rotate(-90 74.6667 74.6668)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="74.6667"
                                cy="30.9998"
                                r="1.66667"
                                transform="rotate(-90 74.6667 30.9998)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={103}
                                cy="74.6668"
                                r="1.66667"
                                transform="rotate(-90 103 74.6668)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={103}
                                cy="30.9998"
                                r="1.66667"
                                transform="rotate(-90 103 30.9998)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={132}
                                cy="74.6668"
                                r="1.66667"
                                transform="rotate(-90 132 74.6668)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={132}
                                cy="30.9998"
                                r="1.66667"
                                transform="rotate(-90 132 30.9998)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.66667"
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 1.66667 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.66667"
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 1.66667 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="16.3333"
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 16.3333 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="16.3333"
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 16.3333 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={31}
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 31 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={31}
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 31 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="45.6667"
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 45.6667 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="45.6667"
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 45.6667 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="60.3333"
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 60.3333 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="60.3333"
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 60.3333 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="88.6667"
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 88.6667 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="88.6667"
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 88.6667 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="117.667"
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 117.667 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="117.667"
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 117.667 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="74.6667"
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 74.6667 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="74.6667"
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 74.6667 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={103}
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 103 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={103}
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 103 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={132}
                                cy="60.0003"
                                r="1.66667"
                                transform="rotate(-90 132 60.0003)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={132}
                                cy="16.3333"
                                r="1.66667"
                                transform="rotate(-90 132 16.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.66667"
                                cy="45.3333"
                                r="1.66667"
                                transform="rotate(-90 1.66667 45.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.66667"
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 1.66667 1.66683)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="16.3333"
                                cy="45.3333"
                                r="1.66667"
                                transform="rotate(-90 16.3333 45.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="16.3333"
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 16.3333 1.66683)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={31}
                                cy="45.3333"
                                r="1.66667"
                                transform="rotate(-90 31 45.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={31}
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 31 1.66683)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="45.6667"
                                cy="45.3333"
                                r="1.66667"
                                transform="rotate(-90 45.6667 45.3333)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="45.6667"
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 45.6667 1.66683)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="60.3333"
                                cy="45.3338"
                                r="1.66667"
                                transform="rotate(-90 60.3333 45.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="60.3333"
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 60.3333 1.66683)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="88.6667"
                                cy="45.3338"
                                r="1.66667"
                                transform="rotate(-90 88.6667 45.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="88.6667"
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 88.6667 1.66683)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="117.667"
                                cy="45.3338"
                                r="1.66667"
                                transform="rotate(-90 117.667 45.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="117.667"
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 117.667 1.66683)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="74.6667"
                                cy="45.3338"
                                r="1.66667"
                                transform="rotate(-90 74.6667 45.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="74.6667"
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 74.6667 1.66683)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={103}
                                cy="45.3338"
                                r="1.66667"
                                transform="rotate(-90 103 45.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={103}
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 103 1.66683)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={132}
                                cy="45.3338"
                                r="1.66667"
                                transform="rotate(-90 132 45.3338)"
                                fill="#3056D3"
                            />
                            <circle
                                cx={132}
                                cy="1.66683"
                                r="1.66667"
                                transform="rotate(-90 132 1.66683)"
                                fill="#3056D3"
                            />
                          </svg>
                            </span>
                        </Row>
                    </Col>

                    <Col className="w-full p-6 lg:w-1/2">
                        <Row className="mt-10 lg:mt-0">
                            <Typography className="block mb-4 text-2xl font-semibold sm:text-6xl">
                                About <Typography.Text className="leading-6 sm:text-6xl">
                                Seed<Typography.Text
                                className="sm:text-4xl text-blue-600">Scout</Typography.Text></Typography.Text>
                            </Typography>


                            <Typography.Paragraph className="mb-10 text-base text-body-color dark:text-dark-6">
                                Welcome to Seed<Typography.Text className="text-blue-600">Scout </Typography.Text> -
                                your premier platform for evaluating and refining start-up propositions in the dynamic
                                world of entrepreneurship.
                            </Typography.Paragraph>
                            <Typography.Paragraph className="mb-8 text-base text-body-color dark:text-dark-6">
                                We understand the challenges faced by novice entrepreneurs in determining the value and
                                potential success of their ventures, especially in high-tech and fin-tech industries.
                                That's why we offer a unique approach focusing on success probability rather than rigid
                                valuation metrics.
                            </Typography.Paragraph>
                            <Typography.Paragraph className="mb-8 text-base text-body-color dark:text-dark-6">
                                Our platform caters to entrepreneurs with clear ideas and market insights, providing
                                valuable feedback to refine their propositions before seeking investment.
                            </Typography.Paragraph>
                            <Typography.Paragraph className="mb-8 text-base text-body-color dark:text-dark-6">
                                Specializing in pre-revenue, pre-money ventures in technology sectors like IT, health,
                                engineering and green technology, we're here to empower you on your journey to success.
                            </Typography.Paragraph>

                            <Typography
                                className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[20px]/[28px]">
                                Join us and let's bring your vision to life, {' '}
                                <span className="relative whitespace-nowrap text-blue-600">
                                  <UnderLine className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"/>
                                  <span className="relative">TOGETHER.{' '}</span>
                                </span>
                            </Typography>
                        </Row>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
};

export default About