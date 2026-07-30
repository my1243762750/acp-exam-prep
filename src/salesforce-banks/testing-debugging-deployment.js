const questions = [
    {
        "type": "single_choice",
        "question": "A developer creates a batch Apex job to update a large number of records, and receives reports of the job timing out and not completing.\nWhat is the first step towards troubleshooting the issue?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Check the asynchronous job monitoring page to view the job status and logs."
            },
            {
                "key": "B",
                "text": "Check the debug logs for the batch job."
            },
            {
                "key": "C",
                "text": "Decrease the batch size to reduce the load on the system."
            },
            {
                "key": "D",
                "text": "Disable the batch job and recreate it with a smaller number of records."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "The first step in troubleshooting an issue with a batch Apex job is to check the asynchronous job monitoring page. This page provides details about the batch job's execution, including the status, logs, and any errors or timeouts that occurred during processing. This is essential to understand what went wrong before making adjustments like reducing the batch size or modifying the job."
        },
        "question-zh": "开发人员创建了一个批处理 Apex 作业来更新大量记录，但收到该作业超时且未完成的报告。排查此问题的第一步是什么？",
        "options-zh": [
            {
                "key": "A",
                "text": "查看异步 Apex 作业监控页面，检查作业状态和日志。"
            },
            {
                "key": "B",
                "text": "查看该批处理作业的调试日志。"
            },
            {
                "key": "C",
                "text": "减小批处理大小，以降低系统负载。"
            },
            {
                "key": "D",
                "text": "停用该批处理作业，并使用更少的记录重新创建它。"
            }
        ],
        "explanation-zh": {
          "A": "应先在“异步 Apex 作业”监控页面查看作业的状态、错误和处理信息，定位超时原因后再决定是否调整批量大小或逻辑。"
        },
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "single_choice",
        "question": "What should a developer use to fix a Lightning web component bug in a sandbox?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Developer Console"
            },
            {
                "key": "B",
                "text": "Force.com IDE"
            },
            {
                "key": "C",
                "text": "Execute Anonymous"
            },
            {
                "key": "D",
                "text": "VS Code"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": ""
        },
        "question-zh": "开发人员应使用什么工具来修复沙盒中的 Lightning Web Component（LWC）缺陷？",
        "options-zh": [
            {
                "key": "A",
                "text": "Developer Console（开发人员控制台）"
            },
            {
                "key": "B",
                "text": "Force.com IDE"
            },
            {
                "key": "C",
                "text": "Execute Anonymous（执行匿名 Apex）"
            },
            {
                "key": "D",
                "text": "Visual Studio Code（VS Code）"
            }
        ],
        "explanation-zh": {
          "D": "VS Code 配合 Salesforce 扩展是开发、调试和部署 LWC 的推荐工具。"
        },
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "multiple_choice",
        "question": "A developer at AW Computing is tasked to create the supporting test class for a programmatic customization that leverages records stored within the custom object, Pricing_Structure__c. AW Computing has a complex pricing structure for each item on the store, spanning more than 500 records.\nWhich two approaches can the developer use to ensure Pricing_Structure__c records are available when the test class is executed?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Use a Test Data Factory class."
            },
            {
                "key": "B",
                "text": "Use the @IsTest(SeeAllData=true) annotation."
            },
            {
                "key": "C",
                "text": "Use the Test.loadTest() method."
            },
            {
                "key": "D",
                "text": "Use without sharing on the class declaration."
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
        "question-zh": "AW Computing 的开发人员需要为一项程序化自定义功能创建配套测试类，该功能依赖自定义对象 Pricing_Structure__c 中的记录。每个商品的定价结构很复杂，共有 500 多条记录。开发人员可采用哪两种方法，确保执行测试类时 Pricing_Structure__c 记录可用？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "使用测试数据工厂（Test Data Factory）类。"
            },
            {
                "key": "B",
                "text": "使用 `@IsTest(SeeAllData=true)` 注解。"
            },
            {
                "key": "C",
                "text": "使用 `Test.loadData()` 方法。"
            },
            {
                "key": "D",
                "text": "在类声明中使用 `without sharing`。"
            }
        ],
        "explanation-zh": {
          "A": "测试数据工厂可集中创建测试所需的业务数据。",
          "C": "`Test.loadData()` 可从静态资源中的 CSV 文件加载大量测试记录，适合此类复杂且记录数量多的测试数据。"
        },
        "difficulty": "简单",
        "accuracy": 66
    },
    {
        "type": "single_choice",
        "question": "A developer is alerted to an issue with a custom Apex trigger that is causing records to be duplicated.\nWhat is the most appropriate debugging approach to troubleshoot the issue?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Review the Historical Event logs to identify the source of the issue."
            },
            {
                "key": "B",
                "text": "Add system.debug statements to the code to track the execution flow and identify the issue."
            },
            {
                "key": "C",
                "text": "Use the Apex Interactive Debugger to step through the code and identify the issue."
            },
            {
                "key": "D",
                "text": "Disable the trigger in production and test to see if the issue still occurs."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/tools/vscode/en/apex/interactive-debugger"
        },
        "question-zh": "开发人员收到告警：某个自定义 Apex 触发器导致记录重复。用于排查此问题最恰当的调试方式是什么？",
        "options-zh": [
            {
                "key": "A",
                "text": "查看历史事件日志，识别问题来源。"
            },
            {
                "key": "B",
                "text": "在代码中加入 `System.debug` 语句，跟踪执行流程并定位问题。"
            },
            {
                "key": "C",
                "text": "使用 Apex Interactive Debugger（Apex 交互式调试器）逐步执行代码并定位问题。"
            },
            {
                "key": "D",
                "text": "在生产环境中停用该触发器，观察问题是否仍会发生。"
            }
        ],
        "explanation-zh": {
          "C": "交互式调试器可逐行执行 Apex、查看变量和调用路径，最适合定位导致重复 DML 的具体代码分支。"
        },
        "difficulty": "简单",
        "accuracy": 76
    },
    {
        "type": "single_choice",
        "question": "Developers at Universal Containers (UC) use version control to share their code changes, but they notice that when they deploy their code to different environments they often have failures. They decide to set up Continuous Integration (CI).\nWhat should the UC development team use to automatically run tests as part of their CI process?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Salesforce CLI"
            },
            {
                "key": "B",
                "text": "Visual Studio Code"
            },
            {
                "key": "C",
                "text": "Force.com Toolkit"
            },
            {
                "key": "D",
                "text": "Developer Console"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "Salesforce CLI can be integrated into various CI/CD pipelines and can execute commands to run tests in different environments programmatically."
        },
        "question-zh": "Universal Containers（UC）的开发人员使用版本控制共享代码变更，但部署到不同环境时经常失败，因此决定建立持续集成（CI）。团队应使用什么来在 CI 流程中自动运行测试？",
        "options-zh": [
            {
                "key": "A",
                "text": "Salesforce CLI"
            },
            {
                "key": "B",
                "text": "Visual Studio Code"
            },
            {
                "key": "C",
                "text": "Force.com Toolkit"
            },
            {
                "key": "D",
                "text": "Developer Console（开发人员控制台）"
            }
        ],
        "explanation-zh": {
          "A": "Salesforce CLI 可在 CI/CD 管道中以脚本方式执行部署和 Apex 测试命令，适合自动化测试。"
        },
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "multiple_choice",
        "question": "What are two considerations for deploying from a sandbox to production?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "At least 75% of Apex code must be covered by unit tests."
            },
            {
                "key": "B",
                "text": "Unit tests must have calls to the System.assert method."
            },
            {
                "key": "C",
                "text": "Should deploy during business hours to ensure feedback can be quickly addressed."
            },
            {
                "key": "D",
                "text": "All triggers must have at least one line of test coverage."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "https://help.salesforce.com/s/articleView?id=000385650&type=1",
            "D": "https://help.salesforce.com/s/articleView?id=000385650&type=1"
        },
        "question-zh": "从沙盒部署到生产环境时，需要考虑哪两项？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "组织范围内的 Apex 代码单元测试覆盖率至少必须达到 75%。"
            },
            {
                "key": "B",
                "text": "单元测试必须调用 `System.assert` 方法。"
            },
            {
                "key": "C",
                "text": "应在营业时间内部署，以便能快速处理反馈。"
            },
            {
                "key": "D",
                "text": "所有触发器至少必须有一行代码获得测试覆盖。"
            }
        ],
        "explanation-zh": {
          "A": "生产部署要求组织范围内的 Apex 代码覆盖率至少为 75%。",
          "D": "每个参与部署的 Apex 触发器都必须获得非零测试覆盖率。"
        },
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "Universal Containers has developed custom Apex code and Lightning Components in a Sandbox environment. They need to deploy the code and associated configurations to the Production environment.\nWhat is the recommended process for deploying the code and configurations to Production?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use the Force.com IDE to deploy the Apex code and Lightning Components."
            },
            {
                "key": "B",
                "text": "Use the Ant Migration Tool to deploy the Apex code and Lightning Components."
            },
            {
                "key": "C",
                "text": "Use a change set to deploy the Apex code and Lightning Components."
            },
            {
                "key": "D",
                "text": "Use Salesforce CLI to deploy the Apex code and Lightning Components."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": ""
        },
        "question-zh": "Universal Containers 在沙盒环境中开发了自定义 Apex 代码和 Lightning 组件，需要将代码及相关配置部署到生产环境。推荐采用什么方式？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用 Force.com IDE 部署 Apex 代码和 Lightning 组件。"
            },
            {
                "key": "B",
                "text": "使用 Ant Migration Tool 部署 Apex 代码和 Lightning 组件。"
            },
            {
                "key": "C",
                "text": "使用变更集部署 Apex 代码和 Lightning 组件。"
            },
            {
                "key": "D",
                "text": "使用 Salesforce CLI 部署 Apex 代码和 Lightning 组件。"
            }
        ],
        "explanation-zh": {
          "D": "Salesforce CLI 支持源代码驱动的元数据部署、测试执行和自动化流程，是推荐的现代部署方式。"
        },
        "difficulty": "简单",
        "accuracy": 72
    },
    {
        "type": "single_choice",
        "question": "What should a developer use to script the deployment and unit test execution as part of continuous Integration?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Execute Anonymous"
            },
            {
                "key": "B",
                "text": "VS Code"
            },
            {
                "key": "C",
                "text": "Developer Console"
            },
            {
                "key": "D",
                "text": "Salesforce CLI"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://help.salesforce.com/s/articleView?id=sf.code_tools_ant.htm&type=5"
        },
        "question-zh": "作为持续集成的一部分，开发人员应使用什么来编写部署和单元测试执行脚本？",
        "options-zh": [
            {
                "key": "A",
                "text": "Execute Anonymous（执行匿名 Apex）"
            },
            {
                "key": "B",
                "text": "VS Code"
            },
            {
                "key": "C",
                "text": "Developer Console（开发人员控制台）"
            },
            {
                "key": "D",
                "text": "Salesforce CLI"
            }
        ],
        "explanation-zh": {
          "D": "Salesforce CLI 提供可在脚本和 CI 管道中调用的部署及测试命令。"
        },
        "difficulty": "简单",
        "accuracy": 86
    },
    {
        "type": "multiple_choice",
        "question": "The Account object in an organization has a master detail relationship to a child object called Branch. The following automations exist:\nRollup summary fields.\nCustom validation rules\nDuplicate rules\nA developer created a trigger on the Account object.\nWhat two things should the developer consider while testing the trigger code?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Rollup summary fields can cause the parent record to go through Save."
            },
            {
                "key": "B",
                "text": "The trigger may fire multiple times during a transaction."
            },
            {
                "key": "C",
                "text": "Duplicate rules are executed once all DML operations commit to the database."
            },
            {
                "key": "D",
                "text": "The validation rules will cause the trigger to fire again."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "Rollup summary fields can cause the parent record to go through Save:\nWhen a roll-up summary field is updated on the parent object (e.g., Account) due to changes in child records (e.g., Branch), the parent record goes through another save cycle. This can potentially re-trigger before and after triggers on the parent object, so developers must consider this behavior while testing.\n\nThe trigger may fire multiple times during a transaction:\nTriggers can fire multiple times in a single transaction due to workflows, roll-up summary field updates, or other automations. Developers must ensure the trigger logic is idempotent (i.e., it produces the same result even if executed multiple times).",
            "B": "Rollup summary fields can cause the parent record to go through Save:\nWhen a roll-up summary field is updated on the parent object (e.g., Account) due to changes in child records (e.g., Branch), the parent record goes through another save cycle. This can potentially re-trigger before and after triggers on the parent object, so developers must consider this behavior while testing.\n\nThe trigger may fire multiple times during a transaction:\nTriggers can fire multiple times in a single transaction due to workflows, roll-up summary field updates, or other automations. Developers must ensure the trigger logic is idempotent (i.e., it produces the same result even if executed multiple times)."
        },
        "question-zh": "组织中的 Account 对象与名为 Branch 的子对象存在主从关系，且配置了汇总字段、自定义验证规则和重复规则。开发人员在 Account 对象上创建了触发器。测试触发器代码时应考虑哪两项？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "汇总字段可能导致父记录再次进入保存流程。"
            },
            {
                "key": "B",
                "text": "一次事务中，触发器可能触发多次。"
            },
            {
                "key": "C",
                "text": "所有 DML 操作提交到数据库后才会执行重复规则。"
            },
            {
                "key": "D",
                "text": "验证规则会导致触发器再次触发。"
            }
        ],
        "explanation-zh": {
          "A": "子记录变化导致汇总字段更新时，父记录可能再次进入保存流程。",
          "B": "工作流、汇总字段更新等自动化可在同一事务中使触发器多次执行，因此触发器逻辑应具备幂等性。"
        },
        "difficulty": "简单",
        "accuracy": 71
    },
    {
        "type": "multiple_choice",
        "question": "Which two sfdx commands can be used to add testing data to a Developer sandbox?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "force:data:tree:import"
            },
            {
                "key": "B",
                "text": "force: data:object:create"
            },
            {
                "key": "C",
                "text": "force:data:bulk: upsert"
            },
            {
                "key": "D",
                "text": "force:data:async:apsert"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_data.htm",
            "C": "https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_data.htm"
        },
        "question-zh": "哪两条 sfdx 命令可用于向 Developer Sandbox 添加测试数据？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "`force:data:tree:import`"
            },
            {
                "key": "B",
                "text": "`force:data:object:create`"
            },
            {
                "key": "C",
                "text": "`force:data:bulk:upsert`"
            },
            {
                "key": "D",
                "text": "`force:data:async:upsert`"
            }
        ],
        "explanation-zh": {
          "A": "`force:data:tree:import` 可导入具有关系的测试数据树。",
          "C": "`force:data:bulk:upsert` 可通过批量 API 插入或更新大量测试数据。"
        },
        "difficulty": "简单",
        "accuracy": 76
    },
    {
        "type": "multiple_choice",
        "question": "Which three statements are accurate about debug logs?\nChoose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Debug log levels are cumulative; where FINE log level includes all events logged at the DEBUG, INFO,WARN,and ERROR levels."
            },
            {
                "key": "B",
                "text": "The maximum size of a debug log is 5 MB."
            },
            {
                "key": "C",
                "text": "Only the 20 most recent debug logs for a user are kept."
            },
            {
                "key": "D",
                "text": "Debug logs can be set for specific users, classes, and triggers."
            },
            {
                "key": "E",
                "text": "System debug logs are retained for 24 hours."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D",
            "E"
        ],
        "explanation": {
            "A": "https://help.salesforce.com/s/articleView?id=sf.code_debug_log.htm&language=en_US&type=5",
            "D": "https://help.salesforce.com/s/articleView?id=sf.code_debug_log.htm&language=en_US&type=5",
            "E": "https://help.salesforce.com/s/articleView?id=sf.code_debug_log.htm&language=en_US&type=5"
        },
        "question-zh": "关于调试日志，哪三项陈述正确？（选 3 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "调试日志级别具有累积性；FINE 级别包含 DEBUG、INFO、WARN 和 ERROR 级别记录的所有事件。"
            },
            {
                "key": "B",
                "text": "单个调试日志的最大大小为 5 MB。"
            },
            {
                "key": "C",
                "text": "每个用户仅保留最近的 20 个调试日志。"
            },
            {
                "key": "D",
                "text": "可为特定用户、类和触发器设置调试日志。"
            },
            {
                "key": "E",
                "text": "系统调试日志保留 24 小时。"
            }
        ],
        "explanation-zh": {
          "A": "日志级别是累积的，较详细的级别会包含较低详细程度级别的事件。",
          "D": "可以对用户、Apex 类和 Apex 触发器设置 trace flag 以生成调试日志。",
          "E": "系统调试日志的保留期为 24 小时。"
        },
        "difficulty": "简单",
        "accuracy": 72
    },
    {
        "type": "multiple_choice",
        "question": "A developer created a trigger on the Account object and wants to test if the trigger is properly bulkified.The developer team decided that the trigger should be tested with 200 account records with unique names.\nWhat two things should be done to create the test data within the unit test with the least amount of code?Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Use the @isTest(seeAllData=true)annotation in the test class."
            },
            {
                "key": "B",
                "text": "Create a static resource containing test data."
            },
            {
                "key": "C",
                "text": "Use Test.loadData to populate data in your test methods."
            },
            {
                "key": "D",
                "text": "Use the @isTest(isParallel=true) annotation in the test class."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_load_data.htm",
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_load_data.htm"
        },
        "question-zh": "开发人员在 Account 对象上创建了一个触发器，并希望测试该触发器是否正确支持批量处理。团队决定在单元测试中使用 200 条名称唯一的 Account 记录。采用最少代码创建测试数据应做哪两项？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "在测试类上使用 `@IsTest(SeeAllData=true)` 注解。"
            },
            {
                "key": "B",
                "text": "创建一个包含测试数据的静态资源。"
            },
            {
                "key": "C",
                "text": "使用 `Test.loadData` 在测试方法中填充数据。"
            },
            {
                "key": "D",
                "text": "在测试类上使用 `@IsTest(isParallel=true)` 注解。"
            }
        ],
        "explanation-zh": {
          "B": "可将大量测试记录维护在 CSV 静态资源中，从而避免在测试代码中逐条构造。",
          "C": "`Test.loadData` 可从静态资源 CSV 加载记录，适合简洁地创建 200 条测试数据。"
        },
        "difficulty": "简单",
        "accuracy": 75
    },
    {
        "type": "multiple_choice",
        "question": "A developer completed modifications to a customized feature that is comprised of two elements:\n●Apex trigger\n●Trigger handler Apex class\nWhat are two factors that the developer must take into account to properly deploy the modification to the production environment?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Apex classes must have at least 75% code coverage org-wide."
            },
            {
                "key": "B",
                "text": "Test methods must be declared with the testMethod keyword."
            },
            {
                "key": "C",
                "text": "At least one line of code must be executed for the Apex trigger."
            },
            {
                "key": "D",
                "text": "All methods in the test classes must use @isTest."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "https://help.salesforce.com/s/articleView?id=000385650&type=1",
            "C": "https://help.salesforce.com/s/articleView?id=000385650&type=1"
        },
        "question-zh": "开发人员完成了一个自定义功能的修改，该功能由两个元素组成：Apex 触发器和触发器处理程序 Apex 类。为将修改正确部署到生产环境，必须考虑哪两项？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "组织范围内的 Apex 类代码覆盖率必须至少为 75%。"
            },
            {
                "key": "B",
                "text": "测试方法必须使用 `testMethod` 关键字声明。"
            },
            {
                "key": "C",
                "text": "Apex 触发器至少必须有一行代码被执行。"
            },
            {
                "key": "D",
                "text": "测试类中的所有方法都必须使用 `@IsTest`。"
            }
        ],
        "explanation-zh": {
          "A": "生产部署要求组织范围内的 Apex 代码覆盖率至少为 75%。",
          "C": "参与部署的每个 Apex 触发器都必须有非零覆盖率。"
        },
        "difficulty": "简单",
        "accuracy": 86
    },
    {
        "type": "single_choice",
        "question": "What should a developer do to check the code coverage of a class after running all tests?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Select and run the class on the Apex Test Execution page in the Developer Console."
            },
            {
                "key": "B",
                "text": "View the Code Coverage column in the list view on the Apex Classes page."
            },
            {
                "key": "C",
                "text": "View the Code Coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab."
            },
            {
                "key": "D",
                "text": "View the Class Test Percentage tab on the Apex Class list view in Salesforce Setup."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://help.salesforce.com/s/articleView?id=platform.code_dev_console_tests_coverage.htm&type=5"
        },
        "question-zh": "运行所有测试后，开发人员应如何查看某个类的代码覆盖率？",
        "options-zh": [
            {
                "key": "A",
                "text": "在 Developer Console 的 Apex Test Execution 页面选择并运行该类。"
            },
            {
                "key": "B",
                "text": "在 Apex Classes 页面列表视图中查看 Code Coverage 列。"
            },
            {
                "key": "C",
                "text": "在 Developer Console 的 Tests 选项卡中，通过 Overall Code Coverage 面板查看该类的覆盖率百分比。"
            },
            {
                "key": "D",
                "text": "在 Salesforce Setup 的 Apex Class 列表视图中查看 Class Test Percentage 选项卡。"
            }
        ],
        "explanation-zh": {
          "C": "Developer Console 的 Tests 选项卡会显示 Overall Code Coverage，并可查看各类的覆盖率。"
        },
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "multiple_choice",
        "question": "What are three characteristics of change set deployments? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Deployment is done in a one-way, single transaction."
            },
            {
                "key": "B",
                "text": "Change sets can deploy custom settings data."
            },
            {
                "key": "C",
                "text": "Change sets can only be used between related organizations."
            },
            {
                "key": "D",
                "text": "Change sets can be used to transfer records."
            },
            {
                "key": "E",
                "text": "Sending a change set between two orgs requires a deployment connection."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C",
            "E"
        ],
        "explanation": {
            "A": "Deployment is done in a one-way, single transaction: When you send a change set, the deployment is executed as a single, atomic transaction. This means that the entire change set is deployed in one go, and it either succeeds completely or fails completely.\n\nChange sets can only be used between related organizations: Change sets are designed to be used for deploying changes between Salesforce organizations that have a deployment connection, typically between a sandbox and a production org or between two related sandbox environments.\n\nSending a change set between two orgs requires a deployment connection: A deployment connection must be established between the source and target organizations in order to send a change set. This connection allows Salesforce to securely transfer metadata between the two orgs.",
            "C": "Deployment is done in a one-way, single transaction: When you send a change set, the deployment is executed as a single, atomic transaction. This means that the entire change set is deployed in one go, and it either succeeds completely or fails completely.\n\nChange sets can only be used between related organizations: Change sets are designed to be used for deploying changes between Salesforce organizations that have a deployment connection, typically between a sandbox and a production org or between two related sandbox environments.\n\nSending a change set between two orgs requires a deployment connection: A deployment connection must be established between the source and target organizations in order to send a change set. This connection allows Salesforce to securely transfer metadata between the two orgs.",
            "E": "Deployment is done in a one-way, single transaction: When you send a change set, the deployment is executed as a single, atomic transaction. This means that the entire change set is deployed in one go, and it either succeeds completely or fails completely.\n\nChange sets can only be used between related organizations: Change sets are designed to be used for deploying changes between Salesforce organizations that have a deployment connection, typically between a sandbox and a production org or between two related sandbox environments.\n\nSending a change set between two orgs requires a deployment connection: A deployment connection must be established between the source and target organizations in order to send a change set. This connection allows Salesforce to securely transfer metadata between the two orgs."
        },
        "question-zh": "变更集部署具有哪三项特征？（选 3 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "部署是单向的单一事务。"
            },
            {
                "key": "B",
                "text": "变更集可以部署自定义设置数据。"
            },
            {
                "key": "C",
                "text": "变更集只能用于具有部署连接的相关组织之间。"
            },
            {
                "key": "D",
                "text": "变更集可用于传输业务记录。"
            },
            {
                "key": "E",
                "text": "在两个组织之间发送变更集需要部署连接。"
            }
        ],
        "explanation-zh": {
          "A": "变更集部署以单一事务执行：要么完整成功，要么失败。",
          "C": "变更集仅可在已建立部署连接的相关 Salesforce 组织之间使用。",
          "E": "源组织和目标组织之间必须配置部署连接，才能发送变更集。"
        },
        "difficulty": "简单",
        "accuracy": 72
    },
    {
        "type": "multiple_choice",
        "question": "Which three statements are accurate about debug logs? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Amount of information logged in the debug log can be controlled by the log levels."
            },
            {
                "key": "B",
                "text": "To View Debug Logs, \"Manager Users\" or \"View AI Data\" permission is needed."
            },
            {
                "key": "C",
                "text": "Debug Log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels."
            },
            {
                "key": "D",
                "text": "Amount of information logged in the debug log can be controlled programmatically."
            },
            {
                "key": "E",
                "text": "To View Debug Logs, \"Manager users\" or \"Modify All Data\" permission is needed. "
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B",
            "C"
        ],
        "explanation": {
            "A": "https://help.salesforce.com/s/articleView?id=sf.code_viewing_log_details.htm&type=5\nhttps://help.salesforce.com/s/articleView?language=en_US&id=sf.code_setting_debug_log_levels.htm&type=5",
            "B": "https://help.salesforce.com/s/articleView?id=sf.code_viewing_log_details.htm&type=5\nhttps://help.salesforce.com/s/articleView?language=en_US&id=sf.code_setting_debug_log_levels.htm&type=5",
            "C": "https://help.salesforce.com/s/articleView?id=sf.code_viewing_log_details.htm&type=5\nhttps://help.salesforce.com/s/articleView?language=en_US&id=sf.code_setting_debug_log_levels.htm&type=5"
        },
        "question-zh": "关于调试日志，哪三项陈述正确？（选 3 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "调试日志中记录的信息量可由日志级别控制。"
            },
            {
                "key": "B",
                "text": "要查看调试日志，需要“管理用户”或“查看 AI 数据”权限。"
            },
            {
                "key": "C",
                "text": "调试日志级别具有累积性；FINE 级别包含 DEBUG、INFO、WARN 和 ERROR 级别记录的事件。"
            },
            {
                "key": "D",
                "text": "调试日志中记录的信息量可以通过编程方式控制。"
            },
            {
                "key": "E",
                "text": "要查看调试日志，需要“管理用户”或“修改所有数据”权限。"
            }
        ],
        "explanation-zh": {
          "A": "日志级别用于控制各类别写入调试日志的信息详细程度。",
          "B": "具有“管理用户”或“查看 AI 数据”权限的用户可以查看调试日志。",
          "C": "日志级别具有累积性，FINE 会包括较低级别记录的事件。"
        },
        "difficulty": "简单",
        "accuracy": 69
    },
    {
        "type": "single_choice",
        "question": "A developer needs to create a baseline set of data(Accounts, Contacts, Products, Assets) for an entire suite of tests allowing them to test independent requirements various types of Salesforce Cases.\nWhich approach can efficiently generate the required data for each unit test?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Create a mock using the Stub API."
            },
            {
                "key": "B",
                "text": "Add @IsTest(seeAllData=true) at the start of the unit test class. "
            },
            {
                "key": "C",
                "text": "Create test data before Test.startTest( ) in the unit test. "
            },
            {
                "key": "D",
                "text": "Use @TestSetup with a void method."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm"
        },
        "question-zh": "开发人员需要为整套测试创建一组基础数据（Account、Contact、Product、Asset），以测试各种 Salesforce Case 的独立需求。哪种方法能高效地为每个单元测试生成所需数据？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用 Stub API 创建模拟对象。"
            },
            {
                "key": "B",
                "text": "在单元测试类开头添加 `@IsTest(SeeAllData=true)`。"
            },
            {
                "key": "C",
                "text": "在单元测试中、`Test.startTest()` 之前创建测试数据。"
            },
            {
                "key": "D",
                "text": "使用带有 void 方法的 `@TestSetup`。"
            }
        ],
        "explanation-zh": {
          "D": "`@TestSetup` 方法会为测试类中的所有测试方法创建一次共享的基础测试数据，并在各测试间隔离修改。"
        },
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "multiple_choice",
        "question": "Which two statements are true about using the @testSetup annotation in an Apex test class?Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Test data is inserted once for all test methods in a class."
            },
            {
                "key": "B",
                "text": "The @testSetup annotation is not supported when the @isTest(SeeAllData=True) annotation is used."
            },
            {
                "key": "C",
                "text": "A method defined with the @testSetup annotation automatically executes before each test method in the test class is executes."
            },
            {
                "key": "D",
                "text": "Records created in the test setup method cannot be updated in individual test methods."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm",
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm"
        },
        "question-zh": "在 Apex 测试类中使用 `@TestSetup` 注解时，哪两项陈述正确？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "测试数据在类的所有测试方法中只插入一次。"
            },
            {
                "key": "B",
                "text": "使用 `@IsTest(SeeAllData=true)` 时不支持 `@TestSetup` 注解。"
            },
            {
                "key": "C",
                "text": "带有 `@TestSetup` 注解的方法会在每个测试方法执行前自动执行。"
            },
            {
                "key": "D",
                "text": "在测试设置方法中创建的记录不能在单独的测试方法中更新。"
            }
        ],
        "explanation-zh": {
          "A": "`@TestSetup` 创建的测试数据只插入一次，可由该测试类的全部测试方法使用。",
          "B": "当测试类使用 `SeeAllData=true` 时，不能使用 `@TestSetup`。"
        },
        "difficulty": "简单",
        "accuracy": 61
    },
    {
        "type": "single_choice",
        "question": "A developer needs to have records with specific field values in order to test a new Apex class.\nWhat should the developer do to ensure the data is available to the test?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use SOQL to query the org for the required data."
            },
            {
                "key": "B",
                "text": "Use Anonymous Apex to create the required data."
            },
            {
                "key": "C",
                "text": "Use Test.loadData( ) and reference a CSV file."
            },
            {
                "key": "D",
                "text": "Use Test.loadData( ) and reference a static resource."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_load_data.htm"
        },
        "question-zh": "开发人员需要具有特定字段值的记录来测试新的 Apex 类。应如何确保这些数据在测试中可用？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用 SOQL 查询组织中的所需数据。"
            },
            {
                "key": "B",
                "text": "使用 Anonymous Apex 创建所需数据。"
            },
            {
                "key": "C",
                "text": "使用 `Test.loadData()` 并引用 CSV 文件。"
            },
            {
                "key": "D",
                "text": "使用 `Test.loadData()` 并引用静态资源。"
            }
        ],
        "explanation-zh": {
          "D": "`Test.loadData()` 从静态资源中的 CSV 文件加载测试记录，既能指定字段值，又不依赖组织现有数据。"
        },
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "single_choice",
        "question": "While working in a sandbox an Apex test fails when run in the Test Framework, but the Apex test logic succeeds with no exceptions or errors when run in the Developer Console.\n\nWhy did the method fail in the sandbox test framework but succeed in the Developer Console?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The test method does not use System.runAs to execute as a specific user. "
            },
            {
                "key": "B",
                "text": "The test method is calling an @future method."
            },
            {
                "key": "C",
                "text": "The test method has a syntax error in the code. "
            },
            {
                "key": "D",
                "text": "The test method relies on exiting data in the sandbox."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "The failure in the test framework but success in the Developer Console is likely due to the test relying on existing data in the sandbox environment. In Apex tests, the data is typically isolated and not available from the live sandbox unless explicitly created within the test method using @isTest methods or setup methods. In the Developer Console, you may have manually queried the existing data, which is why it works. However, in the Test Framework, data is often isolated for unit tests, causing the test to fail due to missing or incorrect data."
        },
        "question-zh": "在沙盒中，Apex 测试在 Test Framework 中运行时失败，但同一测试逻辑在 Developer Console 中运行时没有异常或错误。为什么测试方法会在 Test Framework 中失败、却在 Developer Console 中成功？",
        "options-zh": [
            {
                "key": "A",
                "text": "测试方法没有使用 `System.runAs` 以特定用户身份执行。"
            },
            {
                "key": "B",
                "text": "测试方法调用了 `@future` 方法。"
            },
            {
                "key": "C",
                "text": "测试方法的代码中存在语法错误。"
            },
            {
                "key": "D",
                "text": "测试方法依赖沙盒中的现有数据。"
            }
        ],
        "explanation-zh": {
          "D": "Apex 测试默认与组织数据隔离。若测试依赖沙盒既有记录而未自行创建这些数据，就可能在标准测试运行中失败。"
        },
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "multiple_choice",
        "question": "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles.\n\nWhich two tools can they use to run a script that deploys to a sandbox? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Change Sets"
            },
            {
                "key": "B",
                "text": "SFDX CLI"
            },
            {
                "key": "C",
                "text": "Developer Console"
            },
            {
                "key": "D",
                "text": "Ant Migration Tool"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "SFDX CLI (Salesforce DX Command Line Interface): Salesforce DX provides a powerful CLI tool that allows developers to automate deployments to Salesforce orgs, including sandboxes. Using the sfdx force:source:deploy command, you can deploy metadata to a sandbox directly from a script.\n\nAnt Migration Tool: The Ant Migration Tool is a command-line tool that uses Apache Ant to deploy metadata to Salesforce. It is often used for automating deployments and can be scripted to deploy to a sandbox. It is commonly used in CI/CD pipelines.",
            "D": "SFDX CLI (Salesforce DX Command Line Interface): Salesforce DX provides a powerful CLI tool that allows developers to automate deployments to Salesforce orgs, including sandboxes. Using the sfdx force:source:deploy command, you can deploy metadata to a sandbox directly from a script.\n\nAnt Migration Tool: The Ant Migration Tool is a command-line tool that uses Apache Ant to deploy metadata to Salesforce. It is often used for automating deployments and can be scripted to deploy to a sandbox. It is commonly used in CI/CD pipelines."
        },
        "question-zh": "开发团队希望在开发周期中使用部署脚本自动部署到沙盒。可使用哪两种工具运行部署到沙盒的脚本？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "变更集"
            },
            {
                "key": "B",
                "text": "SFDX CLI"
            },
            {
                "key": "C",
                "text": "Developer Console（开发人员控制台）"
            },
            {
                "key": "D",
                "text": "Ant Migration Tool"
            }
        ],
        "explanation-zh": {
          "B": "SFDX CLI 提供可在脚本和 CI/CD 管道中执行的元数据部署命令。",
          "D": "Ant Migration Tool 是基于命令行和 Apache Ant 的可脚本化部署工具。"
        },
        "difficulty": "简单",
        "accuracy": 73
    },
    {
        "type": "single_choice",
        "question": "Which scenario is valid for execution by unit tests?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Execute anonymous Apex as a different user."
            },
            {
                "key": "B",
                "text": "Generate a Visualforce PDF with getContentAsPDF( )·"
            },
            {
                "key": "C",
                "text": "Load data from a remote site with a callout."
            },
            {
                "key": "D",
                "text": "Set the created date of a record using a system method."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_test.htm#apex_System_Test_setCreatedDate"
        },
        "question-zh": "哪种场景可由单元测试有效执行？",
        "options-zh": [
            {
                "key": "A",
                "text": "以其他用户身份执行匿名 Apex。"
            },
            {
                "key": "B",
                "text": "使用 `getContentAsPDF()` 生成 Visualforce PDF。"
            },
            {
                "key": "C",
                "text": "通过调用外部站点加载远程数据。"
            },
            {
                "key": "D",
                "text": "使用系统方法设置记录的创建日期。"
            }
        ],
        "explanation-zh": {
          "D": "在测试中可使用 `Test.setCreatedDate()` 为测试记录设置创建日期，以验证依赖日期的逻辑。"
        },
        "difficulty": "简单",
        "accuracy": 64
    },
    {
        "type": "single_choice",
        "question": "How can a developer check the test coverage of active Process Builders and Flows before deploying them in a Change Set?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use the Flow Properties page."
            },
            {
                "key": "B",
                "text": "Use SOQL and the Tooling API."
            },
            {
                "key": "C",
                "text": "Use the ApexTestResult class."
            },
            {
                "key": "D",
                "text": "Use the Code Coverage Setup page."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "To check the test coverage of active Process Builders and Flows, developers can use SOQL and the Tooling API. The Tooling API provides programmatic access to Salesforce metadata, including information about the processes, flows, and their related test coverage. Using SOQL queries against the Tooling API, developers can retrieve details about active flows and processes and check their test coverage."
        },
        "question-zh": "开发人员如何在通过变更集部署前检查活动 Process Builder 和 Flow 的测试覆盖率？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用 Flow Properties 页面。"
            },
            {
                "key": "B",
                "text": "使用 SOQL 和 Tooling API。"
            },
            {
                "key": "C",
                "text": "使用 ApexTestResult 类。"
            },
            {
                "key": "D",
                "text": "使用 Code Coverage Setup 页面。"
            }
        ],
        "explanation-zh": {
          "B": "可通过 Tooling API 查询流程相关元数据和测试覆盖率信息；SOQL 可用于检索这些 Tooling API 对象。"
        },
        "difficulty": "简单",
        "accuracy": 70
    },
    {
        "type": "multiple_choice",
        "question": "For which three items can a trace flag be configured? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Process Builder"
            },
            {
                "key": "B",
                "text": "Visualforce"
            },
            {
                "key": "C",
                "text": "Apex Class"
            },
            {
                "key": "D",
                "text": "User"
            },
            {
                "key": "E",
                "text": "Apex Trigger"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D",
            "E"
        ],
        "explanation": {
            "C": "https://help.salesforce.com/s/articleView?id=sf.code_add_users_debug_log.htm&type=5",
            "D": "https://help.salesforce.com/s/articleView?id=sf.code_add_users_debug_log.htm&type=5",
            "E": "https://help.salesforce.com/s/articleView?id=sf.code_add_users_debug_log.htm&type=5"
        },
        "question-zh": "可为哪三类项目配置跟踪标志（trace flag）？（选 3 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "Process Builder"
            },
            {
                "key": "B",
                "text": "Visualforce"
            },
            {
                "key": "C",
                "text": "Apex 类"
            },
            {
                "key": "D",
                "text": "用户"
            },
            {
                "key": "E",
                "text": "Apex 触发器"
            }
        ],
        "explanation-zh": {
          "C": "可为 Apex 类配置跟踪标志。",
          "D": "可为特定用户配置跟踪标志。",
          "E": "可为 Apex 触发器配置跟踪标志。"
        },
        "difficulty": "简单",
        "accuracy": 68
    },
    {
        "type": "single_choice",
        "question": "A developer wrote Apex code that calls out to an external system using REST API.\nHow should a developer write the test to provide test coverage?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Write a class that extends HTTPCalloutMock. "
            },
            {
                "key": "B",
                "text": "Write a class that extends WebserviceMock."
            },
            {
                "key": "C",
                "text": "Write a class that implements the HTTPCalloutMock interface."
            },
            {
                "key": "D",
                "text": "Write a class that implements WebserviceMock."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpcalloutmock.htm"
        },
        "question-zh": "开发人员编写的 Apex 代码通过 REST API 调用外部系统。应如何编写测试以获得测试覆盖率？",
        "options-zh": [
            {
                "key": "A",
                "text": "编写一个继承 `HTTPCalloutMock` 的类。"
            },
            {
                "key": "B",
                "text": "编写一个继承 `WebServiceMock` 的类。"
            },
            {
                "key": "C",
                "text": "编写一个实现 `HttpCalloutMock` 接口的类。"
            },
            {
                "key": "D",
                "text": "编写一个实现 `WebServiceMock` 接口的类。"
            }
        ],
        "explanation-zh": {
          "C": "测试 REST HTTP 调用时，应实现 `HttpCalloutMock` 接口并通过 `Test.setMock` 注册模拟响应，测试不会发出真实外部调用。"
        },
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "When using SsalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Environment Hub"
            },
            {
                "key": "B",
                "text": "Production"
            },
            {
                "key": "C",
                "text": "Sandbox"
            },
            {
                "key": "D",
                "text": "Dev Hub"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://help.salesforce.com/articleView?id=managing_scratch_orgs.htm&type=5"
        },
        "question-zh": "使用 Salesforce DX 时，开发人员需要启用什么才能创建和管理 Scratch Org？",
        "options-zh": [
            {
                "key": "A",
                "text": "Environment Hub"
            },
            {
                "key": "B",
                "text": "生产组织"
            },
            {
                "key": "C",
                "text": "沙盒"
            },
            {
                "key": "D",
                "text": "Dev Hub"
            }
        ],
        "explanation-zh": {
          "D": "必须在生产组织或业务组织中启用 Dev Hub，才能授权并创建 Scratch Org。"
        },
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "single_choice",
        "question": "How should a developer write unit tests for a private method in an Apex class?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Add a test method in the Apex class."
            },
            {
                "key": "B",
                "text": "Use the TestVisible annotation."
            },
            {
                "key": "C",
                "text": "Use the SeeAllData annotation."
            },
            {
                "key": "D",
                "text": "Mark the Apex class as global."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testvisible.htm"
        },
        "question-zh": "开发人员应如何为 Apex 类中的私有方法编写单元测试？",
        "options-zh": [
            {
                "key": "A",
                "text": "在 Apex 类中添加测试方法。"
            },
            {
                "key": "B",
                "text": "使用 `@TestVisible` 注解。"
            },
            {
                "key": "C",
                "text": "使用 `SeeAllData` 注解。"
            },
            {
                "key": "D",
                "text": "将 Apex 类标记为 global。"
            }
        ],
        "explanation-zh": {
          "B": "将私有成员标记为 `@TestVisible` 后，测试类可以访问它，而不会在生产代码中扩大其可见性。"
        },
        "difficulty": "简单",
        "accuracy": 82
    },
    {
        "type": "single_choice",
        "question": "A development team wants to use a deployment script to automatically deploy to a sandbox during their deployment cycles.\nWhich tool should they use to deploy to the sandbox?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Ant Migration Tool"
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
            "A"
        ],
        "explanation": {
            "A": "https://help.salesforce.com/s/articleView?id=sf.code_tools_ant.htm&language=en_US&type=5"
        },
        "question-zh": "开发团队希望在部署周期中使用部署脚本自动部署到沙盒。应使用哪种工具部署到沙盒？",
        "options-zh": [
            {
                "key": "A",
                "text": "Ant Migration Tool"
            },
            {
                "key": "B",
                "text": "Developer Console（开发人员控制台）"
            },
            {
                "key": "C",
                "text": "VS Code"
            },
            {
                "key": "D",
                "text": "变更集"
            }
        ],
        "explanation-zh": {
          "A": "Ant Migration Tool 是可脚本化的命令行部署工具，适用于自动化部署。"
        },
        "difficulty": "简单",
        "accuracy": 86
    },
    {
        "type": "single_choice",
        "question": "Which Salesforce org has a complete duplicate copy of the production org including data and configuration?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Developer Pro Sandbox"
            },
            {
                "key": "B",
                "text": "Production"
            },
            {
                "key": "C",
                "text": "Partial Copy Sandbox"
            },
            {
                "key": "D",
                "text": "Full Sandbox"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_environments.htm&language=en_US&type=5"
        },
        "question-zh": "哪种 Salesforce 组织包含生产组织的完整副本，包括数据和配置？",
        "options-zh": [
            {
                "key": "A",
                "text": "Developer Pro Sandbox"
            },
            {
                "key": "B",
                "text": "生产组织"
            },
            {
                "key": "C",
                "text": "Partial Copy Sandbox"
            },
            {
                "key": "D",
                "text": "Full Sandbox"
            }
        ],
        "explanation-zh": {
          "D": "Full Sandbox 包含生产组织的全部配置和数据副本。"
        },
        "difficulty": "简单",
        "accuracy": 91
    },
    {
        "type": "multiple_choice",
        "question": "What are two ways a developer can get the status of an enqueued job for a class that implements the queuable interface? \nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Query the AsyncApex Job object"
            },
            {
                "key": "B",
                "text": "View the Apex Jobs Page"
            },
            {
                "key": "C",
                "text": "View the Apex Status Page"
            },
            {
                "key": "D",
                "text": "View the Apex Flex Queue"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "Query the AsyncApexJob object: The AsyncApexJob object stores information about all asynchronous Apex jobs, including those that implement the Queueable interface. Developers can query this object using SOQL to retrieve details such as job status (Status field), job ID, and completion time.\n\nView the Apex Jobs Page: The Apex Jobs page in Salesforce Setup provides a user interface to view the status and details of enqueued and completed asynchronous jobs, including those using the Queueable interface.",
            "B": "Query the AsyncApexJob object: The AsyncApexJob object stores information about all asynchronous Apex jobs, including those that implement the Queueable interface. Developers can query this object using SOQL to retrieve details such as job status (Status field), job ID, and completion time.\n\nView the Apex Jobs Page: The Apex Jobs page in Salesforce Setup provides a user interface to view the status and details of enqueued and completed asynchronous jobs, including those using the Queueable interface."
        },
        "question-zh": "对于实现 Queueable 接口的类，开发人员可通过哪两种方式获取已入队作业的状态？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "查询 AsyncApexJob 对象。"
            },
            {
                "key": "B",
                "text": "查看 Apex Jobs 页面。"
            },
            {
                "key": "C",
                "text": "查看 Apex Status 页面。"
            },
            {
                "key": "D",
                "text": "查看 Apex Flex Queue。"
            }
        ],
        "explanation-zh": {
          "A": "AsyncApexJob 对象保存异步 Apex 作业的状态和执行信息，可通过 SOQL 查询。",
          "B": "Setup 中的 Apex Jobs 页面可查看 Queueable 作业的状态和详细信息。"
        },
        "difficulty": "简单",
        "accuracy": 59
    },
    {
        "type": "multiple_choice",
        "question": "What are three ways for a developer to execute tests in an org? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Metadata API"
            },
            {
                "key": "B",
                "text": "Bulk API"
            },
            {
                "key": "C",
                "text": "SalesforceDX"
            },
            {
                "key": "D",
                "text": "Tooling API"
            },
            {
                "key": "E",
                "text": "Developer Console"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D",
            "E"
        ],
        "explanation": {
            "C": "1. SalesforceDX (SFDX): SalesforceDX CLI provides commands like sfdx force:apex:test:run to execute Apex tests programmatically. This is commonly used in CI/CD pipelines and local development environments.\n\n2. Tooling API: The Tooling API allows developers to execute Apex tests programmatically by sending API requests. This is useful for automated testing or integration with external tools.\n\n3. Developer Console: The Developer Console provides a built-in interface in Salesforce for running Apex tests. It is user-friendly and allows developers to view test results and debug logs in real-time.",
            "D": "1. SalesforceDX (SFDX): SalesforceDX CLI provides commands like sfdx force:apex:test:run to execute Apex tests programmatically. This is commonly used in CI/CD pipelines and local development environments.\n\n2. Tooling API: The Tooling API allows developers to execute Apex tests programmatically by sending API requests. This is useful for automated testing or integration with external tools.\n\n3. Developer Console: The Developer Console provides a built-in interface in Salesforce for running Apex tests. It is user-friendly and allows developers to view test results and debug logs in real-time.",
            "E": "1. SalesforceDX (SFDX): SalesforceDX CLI provides commands like sfdx force:apex:test:run to execute Apex tests programmatically. This is commonly used in CI/CD pipelines and local development environments.\n\n2. Tooling API: The Tooling API allows developers to execute Apex tests programmatically by sending API requests. This is useful for automated testing or integration with external tools.\n\n3. Developer Console: The Developer Console provides a built-in interface in Salesforce for running Apex tests. It is user-friendly and allows developers to view test results and debug logs in real-time."
        },
        "question-zh": "开发人员可通过哪三种方式在组织中执行测试？（选 3 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "Metadata API"
            },
            {
                "key": "B",
                "text": "Bulk API"
            },
            {
                "key": "C",
                "text": "Salesforce DX"
            },
            {
                "key": "D",
                "text": "Tooling API"
            },
            {
                "key": "E",
                "text": "Developer Console（开发人员控制台）"
            }
        ],
        "explanation-zh": {
          "C": "Salesforce DX CLI 可在命令行和 CI 中运行 Apex 测试。",
          "D": "Tooling API 支持以编程方式发起和获取测试执行。",
          "E": "Developer Console 提供交互式运行和查看 Apex 测试结果的界面。"
        },
        "difficulty": "简单",
        "accuracy": 76
    },
    {
        "type": "single_choice",
        "question": "A team of many developers work in their own individual orgs that have the same configuration as the production org. \nWhich type of org is best suited for this scenario?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Developer Edition"
            },
            {
                "key": "B",
                "text": "Partner Developer Edition"
            },
            {
                "key": "C",
                "text": "Full Sandbox"
            },
            {
                "key": "D",
                "text": "Developer Sandbox"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "A Developer Sandbox is the best choice for this scenario because it provides a copy of the production org's metadata configuration without including production data. Each developer can work in their own isolated environment, making changes without affecting others. This setup aligns well with the need for individual development environments that mirror the production configuration.\n\nOther options:\n\nDeveloper Edition: Independent Salesforce environment not linked to production, making it unsuitable for scenarios requiring alignment with production configuration.\nPartner Developer Edition: Specifically for Salesforce partners, not intended for standard development linked to a production org.\nFull Sandbox: Includes both metadata and production data, more suitable for testing rather than individual development."
        },
        "question-zh": "许多开发人员在各自独立、且配置与生产组织相同的组织中工作。最适合此场景的组织类型是什么？",
        "options-zh": [
            {
                "key": "A",
                "text": "Developer Edition"
            },
            {
                "key": "B",
                "text": "Partner Developer Edition"
            },
            {
                "key": "C",
                "text": "Full Sandbox"
            },
            {
                "key": "D",
                "text": "Developer Sandbox"
            }
        ],
        "explanation-zh": {
          "D": "Developer Sandbox 复制生产组织的元数据配置，不包含生产数据，适合开发人员独立开发。"
        },
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "multiple_choice",
        "question": "Which two events need to happen when deploying to a production org?Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "All  Apex code must have at least 75% test coverage."
            },
            {
                "key": "B",
                "text": "All Process Builder Processes must have at least 1% test coverage."
            },
            {
                "key": "C",
                "text": "All Visual Flows must have at least 1% test coverage."
            },
            {
                "key": "D",
                "text": "All Triggers must have at least 1% test coverage."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "1. All Apex code must have at least 75% test coverage - This is a Salesforce requirement for deploying Apex code to a production environment. The requirement ensures that a significant portion of the Apex code, including classes and triggers, is verified by unit tests, promoting code stability and reliability.\n\n2. All Triggers must have at least 1% test coverage - While Salesforce requires each trigger to have some test coverage, in practice, ensuring at least 1% coverage is merely a technical requirement. However, to successfully deploy, it is practically necessary that triggers have sufficient test coverage not just to meet deployment criteria but to ensure functionality is correctly tested. Typically, Salesforce developers aim for much higher than 1% coverage on triggers to ensure robustness.",
            "D": "1. All Apex code must have at least 75% test coverage - This is a Salesforce requirement for deploying Apex code to a production environment. The requirement ensures that a significant portion of the Apex code, including classes and triggers, is verified by unit tests, promoting code stability and reliability.\n\n2. All Triggers must have at least 1% test coverage - While Salesforce requires each trigger to have some test coverage, in practice, ensuring at least 1% coverage is merely a technical requirement. However, to successfully deploy, it is practically necessary that triggers have sufficient test coverage not just to meet deployment criteria but to ensure functionality is correctly tested. Typically, Salesforce developers aim for much higher than 1% coverage on triggers to ensure robustness."
        },
        "question-zh": "部署到生产组织时，需要满足哪两项要求？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "组织范围内的所有 Apex 代码至少有 75% 测试覆盖率。"
            },
            {
                "key": "B",
                "text": "所有 Process Builder 流程至少有 1% 测试覆盖率。"
            },
            {
                "key": "C",
                "text": "所有 Visual Flow 至少有 1% 测试覆盖率。"
            },
            {
                "key": "D",
                "text": "所有触发器至少有 1% 测试覆盖率。"
            }
        ],
        "explanation-zh": {
          "A": "生产部署要求组织范围内的 Apex 代码覆盖率至少达到 75%。",
          "D": "每个 Apex 触发器必须获得非零测试覆盖率。"
        },
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "single_choice",
        "question": "A developer created this Apex trigger that calls MyClass.myStaticMethod;\ntrigger myTrigger on Contact(before insert){\nMyClass.myStaticMethod(trigger.new, trigger.oldMap);}\nThe developer creates a test class with a test method that calls MyClass.myStaticMethod, resulting in 81% overall code coverage.\nWhat happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exists?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The deployment fails because no assertions were made in the test method."
            },
            {
                "key": "B",
                "text": "The deployment passes because the Apex code has required(>75%) code coverage."
            },
            {
                "key": "C",
                "text": "The deployment passes because both classes and the trigger were included in the deployment."
            },
            {
                "key": "D",
                "text": "The deployment fails because the Apex trigger has no code coverage."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "Even though the overall code coverage from the test class reaches 81%, which exceeds Salesforce’s minimum requirement of 75%, the deployment will still fail if the specific Apex trigger itself has not been covered by any tests. Salesforce requires that each trigger must have some amount of code coverage separately from the overall coverage to ensure specific functionality is tested. In this case, the test method only directly calls MyClass.myStaticMethod and does not execute the trigger logic itself, resulting in 0% code coverage for the trigger. To successfully deploy, a test must invoke the trigger, typically by performing DML operations on the Contact object that would fire the trigger."
        },
        "question-zh": "开发人员创建了一个 Contact 的 before insert 触发器，调用 `MyClass.myStaticMethod`。测试类直接调用该方法，获得 81% 的总体覆盖率。假设没有其他代码，部署该触发器和两个类到生产环境时会发生什么？",
        "options-zh": [
            {
                "key": "A",
                "text": "部署失败，因为测试方法中没有断言。"
            },
            {
                "key": "B",
                "text": "部署通过，因为 Apex 代码达到所需的 75% 以上覆盖率。"
            },
            {
                "key": "C",
                "text": "部署通过，因为两个类和触发器都包含在部署中。"
            },
            {
                "key": "D",
                "text": "部署失败，因为 Apex 触发器没有代码覆盖率。"
            }
        ],
        "explanation-zh": {
          "D": "直接调用处理类方法不会触发 Contact 触发器。生产部署要求所选触发器本身有非零覆盖率，因此必须通过 Contact DML 运行触发器。"
        },
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "single_choice",
        "question": "A developer created a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of the new Apex helper class.\nChange set deployment to production fails with the test coverage warning:\n\"Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required.\"\nWhat should the developer do to successfully deploy the new Apex trigger and helper class?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Increase the test class coverage on the helper class."
            },
            {
                "key": "B",
                "text": "Run the tests using the 'Run All Tests' method."
            },
            {
                "key": "C",
                "text": "Create a test class and methods to cover the Apex trigger."
            },
            {
                "key": "D",
                "text": "Remove the failing test methods from the test class."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "The developer should create a test class specifically for the Apex trigger to ensure it is directly tested and covered by unit tests. Salesforce requires that all triggers have some level of test coverage directly, not just their related classes. By creating a test class that covers the trigger, the developer can ensure compliance with Salesforce’s deployment requirements of having at least 1% test coverage for the trigger, addressing the issue where the trigger itself currently has 0% coverage."
        },
        "question-zh": "开发人员创建了一个带辅助类的新 Apex 触发器，测试仅覆盖辅助类的 95%。变更集部署提示：所选 Apex 触发器覆盖率为 0%，至少需要 1%。开发人员应如何成功部署？",
        "options-zh": [
            {
                "key": "A",
                "text": "提高测试类对辅助类的覆盖率。"
            },
            {
                "key": "B",
                "text": "使用“Run All Tests”运行测试。"
            },
            {
                "key": "C",
                "text": "创建测试类和测试方法，以覆盖 Apex 触发器。"
            },
            {
                "key": "D",
                "text": "从测试类中移除失败的测试方法。"
            }
        ],
        "explanation-zh": {
          "C": "必须通过对触发对象执行 DML 来直接触发 Apex 触发器，使其获得非零测试覆盖率。"
        },
        "difficulty": "简单",
        "accuracy": 92
    },
    {
        "type": "multiple_choice",
        "question": "Where are two locations a developer can look to find information about the status of asynchronous or future calls? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Time-Based Workflow Monitor"
            },
            {
                "key": "B",
                "text": "Apex Flex Queue"
            },
            {
                "key": "C",
                "text": "Apex Jobs"
            },
            {
                "key": "D",
                "text": "Paused Flow Interviews component"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "https://help.salesforce.com/s/articleView?id=sf.code_schedule_batch_apex.htm&type=5\nhttps://help.salesforce.com/s/articleView?id=sf.code_apex_flex_queue.htm&type=5",
            "C": "https://help.salesforce.com/s/articleView?id=sf.code_schedule_batch_apex.htm&type=5\nhttps://help.salesforce.com/s/articleView?id=sf.code_apex_flex_queue.htm&type=5"
        },
        "question-zh": "开发人员可在什么两个位置查看异步调用或 future 调用的状态信息？（选 2 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "Time-Based Workflow Monitor"
            },
            {
                "key": "B",
                "text": "Apex Flex Queue"
            },
            {
                "key": "C",
                "text": "Apex Jobs"
            },
            {
                "key": "D",
                "text": "Paused Flow Interviews 组件"
            }
        ],
        "explanation-zh": {
          "B": "Apex Flex Queue 显示等待执行的批处理 Apex 作业。",
          "C": "Apex Jobs 页面显示异步 Apex 和 future 作业的执行状态。"
        },
        "difficulty": "简单",
        "accuracy": 76
    },
    {
        "type": "single_choice",
        "question": "A developer is writing tests for a class and needs to insert records to validate functionality.\nWhich annotation method should be used to create records for every method in the test class?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "@PreTest"
            },
            {
                "key": "B",
                "text": "@StartTest"
            },
            {
                "key": "C",
                "text": "@isTest(SeeAllData=true)"
            },
            {
                "key": "D",
                "text": "@TestSetup"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testsetup.htm"
        },
        "question-zh": "开发人员正在为某个类编写测试，需要插入记录以验证功能。应使用哪个注解方法为测试类中的每个方法创建记录？",
        "options-zh": [
            {
                "key": "A",
                "text": "@PreTest"
            },
            {
                "key": "B",
                "text": "@StartTest"
            },
            {
                "key": "C",
                "text": "@IsTest(SeeAllData=true)"
            },
            {
                "key": "D",
                "text": "@TestSetup"
            }
        ],
        "explanation-zh": {
          "D": "`@TestSetup` 方法可创建供该测试类所有测试方法使用的测试记录。"
        },
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "single_choice",
        "question": "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger.\nWhich method allows access to the price book?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use Test.getStandardPricebookId() to get the standard price book ID."
            },
            {
                "key": "B",
                "text": "Use @TestVisible to allow the test method to see the standard price book."
            },
            {
                "key": "C",
                "text": "Use @IsTest(SeeAllData=true) and delete the existing standard price book."
            },
            {
                "key": "D",
                "text": "Use Test.loadData() and a static resource to load a standard price book."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_test.htm"
        },
        "question-zh": "开发人员编写覆盖 OpportunityLineItem 触发器的测试类时，需要访问组织中的标准价目表。哪种方法可访问该价目表？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用 `Test.getStandardPricebookId()` 获取标准价目表 ID。"
            },
            {
                "key": "B",
                "text": "使用 `@TestVisible` 让测试方法看到标准价目表。"
            },
            {
                "key": "C",
                "text": "使用 `@IsTest(SeeAllData=true)` 并删除现有标准价目表。"
            },
            {
                "key": "D",
                "text": "使用 `Test.loadData()` 和静态资源加载标准价目表。"
            }
        ],
        "explanation-zh": {
          "A": "`Test.getStandardPricebookId()` 专门用于在测试上下文中取得标准价目表 ID，无需依赖组织数据。"
        },
        "difficulty": "简单",
        "accuracy": 74
    },
    {
        "type": "multiple_choice",
        "question": "Which three statements are true regarding custom exceptions in Apex? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "A custom exception class cannot contain member variables or methods."
            },
            {
                "key": "B",
                "text": "A custom exception class can implement one or many interfaces."
            },
            {
                "key": "C",
                "text": "A custom exception class name must be end with \"Exception\"."
            },
            {
                "key": "D",
                "text": "A custom exception class must extend the system Exception class."
            },
            {
                "key": "E",
                "text": "A custom exception class can extend other classes besides the Exception class."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C",
            "D"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_exception_custom.htm",
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_exception_custom.htm",
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_exception_custom.htm"
        },
        "question-zh": "关于 Apex 中的自定义异常，哪三项陈述正确？（选 3 项）",
        "options-zh": [
            {
                "key": "A",
                "text": "自定义异常类不能包含成员变量或方法。"
            },
            {
                "key": "B",
                "text": "自定义异常类可以实现一个或多个接口。"
            },
            {
                "key": "C",
                "text": "自定义异常类名称必须以 `Exception` 结尾。"
            },
            {
                "key": "D",
                "text": "自定义异常类必须继承系统 `Exception` 类。"
            },
            {
                "key": "E",
                "text": "自定义异常类可以继承 Exception 之外的其他类。"
            }
        ],
        "explanation-zh": {
          "B": "自定义异常类可以实现接口。",
          "C": "自定义异常的类名必须以 `Exception` 结尾。",
          "D": "自定义异常必须扩展内置的 `Exception` 类。"
        },
        "difficulty": "简单",
        "accuracy": 65
    },
    {
        "type": "single_choice",
        "question": "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations.\nWhich type of Salesforce orgs should they use for their development?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Full Copy sandboxes"
            },
            {
                "key": "B",
                "text": "Developer orgs"
            },
            {
                "key": "C",
                "text": "Developer sandboxes"
            },
            {
                "key": "D",
                "text": "Scratch orgs."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm"
        },
        "question-zh": "开发团队正在进行源代码驱动项目，需要独立工作并使用许多不同的组织配置。应使用哪种 Salesforce 组织进行开发？",
        "options-zh": [
            {
                "key": "A",
                "text": "Full Copy Sandbox"
            },
            {
                "key": "B",
                "text": "Developer Org"
            },
            {
                "key": "C",
                "text": "Developer Sandbox"
            },
            {
                "key": "D",
                "text": "Scratch Org"
            }
        ],
        "explanation-zh": {
          "D": "Scratch Org 是临时、可配置且源代码驱动的环境，适合独立开发和不同配置的测试。"
        },
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "single_choice",
        "question": "What should be used to create scratch orgs?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Sandbox refresh"
            },
            {
                "key": "B",
                "text": "Salesforce CLI"
            },
            {
                "key": "C",
                "text": "Developer Console"
            },
            {
                "key": "D",
                "text": "Workbench"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://help.salesforce.com/s/articleView?id=sf.managing_scratch_orgs.htm&type=5"
        },
        "question-zh": "应使用什么创建 Scratch Org？",
        "options-zh": [
            {
                "key": "A",
                "text": "刷新沙盒"
            },
            {
                "key": "B",
                "text": "Salesforce CLI"
            },
            {
                "key": "C",
                "text": "Developer Console（开发人员控制台）"
            },
            {
                "key": "D",
                "text": "Workbench"
            }
        ],
        "explanation-zh": {
          "B": "使用 Salesforce CLI 的 Scratch Org 创建命令可根据定义文件创建 Scratch Org。"
        },
        "difficulty": "简单",
        "accuracy": 94
    }
];

export default questions;
