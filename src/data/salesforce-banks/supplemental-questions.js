const questions = [
    {
        "type": "multiple_choice",
        "question": "Which two Agentforce limitations should a developer consider when building an agent?",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Custom actions that reference an Apex class or flow support only primitive data types."
            },
            {
                "key": "B",
                "text": "The Agent API has a 90-second timeout."
            },
            {
                "key": "C",
                "text": "Inbound messages sent via messaging channels have character limits."
            },
            {
                "key": "D",
                "text": "Version control is supported for agents."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "",
            "C": ""
        },
        "difficulty": "简单",
        "accuracy": null
    },
    {
        "type": "single_choice",
        "question": "A developer is using Agentforce Dev Assistant and noticed that the output from their prompt resembles proprietary code. Which model training considerations should the developer be aware of when utilizing the extension?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Dev Assistant can reference the developer's prior prompts to generate output in near real time."
            },
            {
                "key": "B",
                "text": "Dev Assistant can reference other developers' code and train the model in near real time."
            },
            {
                "key": "C",
                "text": "Dev Assistant generated output that resembles the code that was used to train the model."
            },
            {
                "key": "D",
                "text": "Dev Assistant anonymized PII data in customer code that was used to train the model."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": ""
        },
        "difficulty": "简单",
        "accuracy": null
    },
    {
        "type": "multiple_choice",
        "question": "UC decides to use purely declarative development to build out a new Salesforce application. Which two options can be used to build out the business logic layer for this application?",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Validation Rules"
            },
            {
                "key": "B",
                "text": "Remote Actions"
            },
            {
                "key": "C",
                "text": "Record-Triggered Flow"
            },
            {
                "key": "D",
                "text": "Batch Jobs"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "",
            "C": ""
        },
        "difficulty": "简单",
        "accuracy": null
    },
    {
        "type": "multiple_choice",
        "question": "A development team wants to use a deployment script to automatically deploy to a sandbox during their deployment cycles. Which two tools can they use to run a script that deploys to a sandbox?",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "SFDX CLI"
            },
            {
                "key": "B",
                "text": "Developer Console"
            },
            {
                "key": "C",
                "text": "VSCode"
            },
            {
                "key": "D",
                "text": "Change Sets"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "",
            "C": ""
        },
        "difficulty": "简单",
        "accuracy": null
    },
    {
        "type": "single_choice",
        "question": "A developer is asked to update code that requires them to validate input into a trigger. Which Apex Control Flow Statement should the developer use?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Conditional (If-Else) Statement"
            },
            {
                "key": "B",
                "text": "While Loop"
            },
            {
                "key": "C",
                "text": "Switch Statement"
            },
            {
                "key": "D",
                "text": "For Loop"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": ""
        },
        "difficulty": "简单",
        "accuracy": null
    }
];

export default questions;
