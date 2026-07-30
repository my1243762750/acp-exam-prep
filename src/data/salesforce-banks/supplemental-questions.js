const questions = [
    {
        "type": "multiple_choice",
        "question": "Which two Agentforce limitations should a developer consider when building an agent?",
        "question-zh": "开发人员在构建 Agentforce 智能体时，应考虑哪两项限制？",
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
        "options-zh": [
            {
                "key": "A",
                "text": "引用 Apex 类或流的自定义操作仅支持基本数据类型。"
            },
            {
                "key": "B",
                "text": "Agent API 的超时时间为 90 秒。"
            },
            {
                "key": "C",
                "text": "通过消息传递渠道发送的入站消息存在字符数限制。"
            },
            {
                "key": "D",
                "text": "智能体支持版本控制。"
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
        "explanation-zh": {
            "A": "",
            "C": ""
        },
        "difficulty": "简单",
        "accuracy": null
    },
    {
        "type": "single_choice",
        "question": "A developer is using Agentforce Dev Assistant and noticed that the output from their prompt resembles proprietary code. Which model training considerations should the developer be aware of when utilizing the extension?",
        "question-zh": "一名开发人员正在使用 Agentforce Dev Assistant，并发现其提示词生成的输出看起来像专有代码。使用该扩展时，开发人员应了解模型训练方面的哪项注意事项？",
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
        "options-zh": [
            {
                "key": "A",
                "text": "Dev Assistant 可以参考开发人员先前的提示词，近乎实时地生成输出。"
            },
            {
                "key": "B",
                "text": "Dev Assistant 可以参考其他开发人员的代码，并近乎实时地训练模型。"
            },
            {
                "key": "C",
                "text": "Dev Assistant 生成的输出可能与用于训练模型的代码相似。"
            },
            {
                "key": "D",
                "text": "Dev Assistant 会对用于训练模型的客户代码中的个人身份信息（PII）进行匿名化处理。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": ""
        },
        "explanation-zh": {
            "C": ""
        },
        "difficulty": "简单",
        "accuracy": null
    },
    {
        "type": "multiple_choice",
        "question": "UC decides to use purely declarative development to build out a new Salesforce application. Which two options can be used to build out the business logic layer for this application?",
        "question-zh": "Universal Containers（UC）决定完全采用声明式开发来构建一个新的 Salesforce 应用程序。以下哪两项可用于构建该应用程序的业务逻辑层？",
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
        "options-zh": [
            {
                "key": "A",
                "text": "验证规则（Validation Rules）。"
            },
            {
                "key": "B",
                "text": "远程操作（Remote Actions）。"
            },
            {
                "key": "C",
                "text": "记录触发流（Record-Triggered Flow）。"
            },
            {
                "key": "D",
                "text": "批处理作业（Batch Jobs）。"
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
        "explanation-zh": {
            "A": "",
            "C": ""
        },
        "difficulty": "简单",
        "accuracy": null
    },
    {
        "type": "multiple_choice",
        "question": "A development team wants to use a deployment script to automatically deploy to a sandbox during their deployment cycles. Which two tools can they use to run a script that deploys to a sandbox?",
        "question-zh": "一个开发团队希望在部署周期中使用部署脚本，自动部署到沙盒（Sandbox）。他们可以使用哪两种工具来运行部署到沙盒的脚本？",
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
        "options-zh": [
            {
                "key": "A",
                "text": "SFDX CLI。"
            },
            {
                "key": "B",
                "text": "开发者控制台（Developer Console）。"
            },
            {
                "key": "C",
                "text": "Visual Studio Code（VS Code）。"
            },
            {
                "key": "D",
                "text": "变更集（Change Sets）。"
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
        "explanation-zh": {
            "A": "",
            "C": ""
        },
        "difficulty": "简单",
        "accuracy": null
    },
    {
        "type": "single_choice",
        "question": "A developer is asked to update code that requires them to validate input into a trigger. Which Apex Control Flow Statement should the developer use?",
        "question-zh": "一名开发人员需要更新代码，以验证传入触发器的输入。开发人员应使用哪种 Apex 控制流语句？",
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
        "options-zh": [
            {
                "key": "A",
                "text": "条件（If-Else）语句。"
            },
            {
                "key": "B",
                "text": "While 循环。"
            },
            {
                "key": "C",
                "text": "Switch 语句。"
            },
            {
                "key": "D",
                "text": "For 循环。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": ""
        },
        "explanation-zh": {
            "A": ""
        },
        "difficulty": "简单",
        "accuracy": null
    }
];

export default questions;
