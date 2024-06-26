const SurveyJSON =
    {
        "pages": [
            {
                "name": "page0",
                "elements": [
                    {
                        "type": "panel",
                        "name": "0",
                        "elements": [
                            {
                                "type": "boolean",
                                "name": "Do you know what your business needs?",
                                "title": "Do you know what your business needs?",
                                "isRequired": true,
                                "valueTrue": "yes",
                                "valueFalse": "no"
                            },
                            {
                                "type": "rating",
                                "name": "What is your Product Readiness Level?",
                                "visibleIf": "{Do you know what your business needs?} = 'no'",
                                "title": "What is your Product Readiness Level?",
                                "requiredIf": "{Do you know what your business needs?} = 'no'",
                                "rateCount": 4,
                                "rateMax": 4,
                                "minRateDescription": "Minimum",
                                "maxRateDescription": "Maximum"
                            }
                        ],
                        "title": "Introduction"
                    }
                ]
            },
            {
                "name": "page1",
                "elements": [
                    {
                        "type": "panel",
                        "name": "1",
                        "elements": [
                            {
                                "type": "boolean",
                                "name": "Do you have the technical skills?",
                                "title": "Do you have the technical skills?",
                                "isRequired": true,
                                "valueTrue": "yes",
                                "valueFalse": "no"
                            },
                            {
                                "type": "boolean",
                                "name": "Do you have the marketing skills?",
                                "title": "Do you have the marketing skills?",
                                "isRequired": true,
                                "valueTrue": "yes",
                                "valueFalse": "no"
                            },
                            {
                                "type": "boolean",
                                "name": "Do you have the analytical skills?",
                                "title": "Do you have the analytical skills?",
                                "isRequired": true,
                                "valueTrue": "yes",
                                "valueFalse": "no"
                            },
                            {
                                "type": "boolean",
                                "name": "Does your company have clear goals that align with your team members values?",
                                "title": "Does your company have clear goals that align with your team members values?",
                                "isRequired": true,
                                "valueTrue": "yes",
                                "valueFalse": "no"
                            },
                            {
                                "type": "boolean",
                                "name": "Does your team have previous experience working together?",
                                "title": "Does your team have previous experience working together?",
                                "isRequired": true,
                                "valueTrue": "yes",
                                "valueFalse": "no"
                            },
                            {
                                "type": "boolean",
                                "name": "Does your team have insider expertise or external help in the sector of your business?",
                                "title": "Does your team have insider expertise or external help in the sector of your business?",
                                "isRequired": true,
                                "valueTrue": "yes",
                                "valueFalse": "no"
                            }
                        ],
                        "title": "Team skills"
                    }
                ]
            },
            {
                "name": "page2",
                "elements": [
                    {
                        "type": "panel",
                        "name": "2",
                        "elements": [
                            {
                                "type": "rating",
                                "name": "What is your Technology Readiness Level?",
                                "title": "What is your Technology Readiness Level?",
                                "rateCount": 9,
                                "rateMax": 9,
                                "minRateDescription": "Minimum",
                                "maxRateDescription": "Maximum"
                            },
                            {
                                "type": "boolean",
                                "name": "Do you have competitors?",
                                "title": "Do you have competitors?",
                                "isRequired": true
                            },
                            {
                                "type": "boolean",
                                "name": "Can you protect your product/service?",
                                "visibleIf": "{Do you have competitors?} = true",
                                "title": "Can you protect your product/service?",
                                "isRequired": true
                            }
                        ],
                        "title": "Product"
                    }
                ]
            },
            {
                "name": "page4",
                "elements": [
                    {
                        "type": "panel",
                        "name": "4",
                        "elements": [
                            {
                                "type": "text",
                                "name": "What's the lifetime value of your potential customer?",
                                "title": "What's the lifetime value of your potential customer?"
                            },
                            {
                                "type": "text",
                                "name": "What's the potential customer acquisition cost?",
                                "title": "What's the potential customer acquisition cost?"
                            },
                            {
                                "type": "rating",
                                "name": "From 1 to 10, how good is your engagement rate?",
                                "title": "From 1 to 10, how good is your engagement rate?",
                                "rateCount": 10,
                                "rateMax": 10,
                                "minRateDescription": "Minimum",
                                "maxRateDescription": "Maximum"
                            }
                        ],
                        "title": "Traction"
                    }
                ]
            },
            {
                "name": "page5",
                "elements": [
                    {
                        "type": "panel",
                        "name": "3",
                        "elements": [
                            {
                                "type": "boolean",
                                "name": "Do you have a strategic investor?",
                                "title": "Do you have a strategic investor?",
                                "isRequired": true,
                                "valueTrue": "yes",
                                "valueFalse": "no"
                            },
                            {
                                "type": "text",
                                "name": "What’s your TAM within 5 years?",
                                "title": "What’s your TAM within 5 years?",
                                "isRequired": true
                            },
                            {
                                "type": "text",
                                "name": "What’s your SAM within 5 years?",
                                "title": "What’s your SAM within 5 years?",
                                "isRequired": true
                            },
                            {
                                "type": "text",
                                "name": "How much money do you need to enter a market?",
                                "title": "How much money do you need to enter a market?",
                                "isRequired": true
                            }
                        ],
                        "title": "Market"
                    }
                ]
            }
        ],
        "triggers": [
            {
                "type": "complete",
                "expression": "{Do you know what your business needs?} = 'no'"
            }
        ]
    }

export default SurveyJSON