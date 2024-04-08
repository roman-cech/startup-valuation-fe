import React from 'react'
import {Link} from "react-router-dom";
import {ReactComponent as DownArrow} from '../assets/DownArrow.svg';
import {ReactComponent as UnderLine} from '../assets/UnderLine.svg';
import {Col, Image, Row, Typography} from "antd";
import Container from "../components/Container";

const Home: React.FC = () => {
    return (
        <Container className="pt-20 pb-16 text-center lg:pt-26">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                Startup valuation success,{' '}
                <span className="relative whitespace-nowrap text-blue-600">
                    <UnderLine className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"/>
                    <span className="relative">where vision meets value.{' '}</span>
                </span>
            </h1>
            <Row className="flex flex-col items-center mx-auto text-center">
                <Typography.Text className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                    Empower your startup journey with Seed<Typography.Text
                    className="text-lg text-blue-600">Scout</Typography.Text>.
                    Unlock invaluable insights and personalized advice to drive your business forward. <br/>
                    Let Seed<Typography.Text className="text-lg text-blue-600">Scout</Typography.Text> be your guiding
                    light through the dynamic startup landscape.
                </Typography.Text>
            </Row>
            <Row className="flex flex-col items-center mx-auto text-center py-6">
                <Typography.Text className="text-lg leading-6">
                    Click the below to learn more <strong> about us.</strong>
                </Typography.Text>
                <Link to="/about" className="mt-8 cursor-pointer animate-bounce">
                    <DownArrow className="w-8 h-8 md:w-12 md:h-12" />
                </Link>
            </Row>
            <Row
                className="flex items-center justify-center flex-col space-y-10 sm:flex-row sm:space-y-0 sm:space-x-8">
                <Typography.Text className="text-base font-display text-slate-900 text-center">
                    Trusted by these Universities so far
                </Typography.Text>
                <Row className="mt-8 flex justify-center space-x-8 sm:space-x-0 xl:space-x-12">
                    <Col className="flex-1 flex justify-center">
                        <Image
                            style={{width: '50%', display: 'block', margin: '0 auto'}}
                            src="https://vizual.utb.cz/utb/utb400.jpg"
                            preview={false}
                            alt="UTB"
                        />
                    </Col>
                    <Col className="flex-1 flex justify-center">
                        <Image
                            style={{width: '50%', display: 'block', margin: '0 auto'}}
                            src="https://www.isep.ipp.pt/images/ISEP_marca_cor_grande.jpg"
                            preview={false}
                            alt="ISEP"
                        />
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Home