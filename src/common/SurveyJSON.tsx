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
                            "name": "Do you have the marketing/business skills?",
                            "title": "Do you have the marketing/business skills?",
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
                            "name": "Do you have previous experience as a team?",
                            "title": "Do you have previous experience as a team?",
                            "isRequired": true,
                            "valueTrue": "yes",
                            "valueFalse": "no"
                        },
                        {
                            "type": "boolean",
                            "name": "Are your personal goals aligned with the start-up vision?",
                            "title": "Are your personal goals aligned with the startup vision?",
                            "isRequired": true,
                            "valueTrue": "yes",
                            "valueFalse": "no"
                        },
                        {
                            "type": "boolean",
                            "name": "Do your team or advisors have industry expertise?",
                            "title": "Do your team or advisors have industry expertise?",
                            "isRequired": true,
                            "valueTrue": "yes",
                            "valueFalse": "no"
                        }
                    ],
                    "title": "Team"
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
                            "name": "question3",
                            "title": "What is your Product Readiness Level?",
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
                            "name": "Can you protect your technology?",
                            "title": "Can you protect your technology?",
                            "isRequired": true
                        }
                    ],
                    "title": "Product"
                }
            ]
        },
        {
            "name": "page3",
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
                            "valueFalse": "no",
                            "swapOrder": true
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
                    "title": "Marketing Opportunity"
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
                            "type": "rating",
                            "name": "From 1 to 10, how good is your LTV?",
                            "title": "From 1 to 10, how good is your LTV?",
                            "rateCount": 10,
                            "rateMax": 10,
                            "minRateDescription": "Minimum",
                            "maxRateDescription": "Maximum"
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