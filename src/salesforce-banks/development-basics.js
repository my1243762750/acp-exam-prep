const questions = [
    {
        "type": "multiple_choice",
        "question": "Universal Containers wants Opportunities to no longer be editable when it reaches the Closed/Won stage.\nWhich two strategies can a developer use to accomplish this?\nChoose 2 answers\n",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Use an auto-response rule."
            },
            {
                "key": "B",
                "text": "Use an automatically launched Approval Process."
            },
            {
                "key": "C",
                "text": "Use a validation rule."
            },
            {
                "key": "D",
                "text": "Use a before-save Apex trigger."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D"
        ],
        "explanation": {
            "C": "Validation Rule: A validation rule can be used to prevent the record from being saved if the Opportunity stage is \"Closed/Won\". You can write a formula to check if the StageName is \"Closed/Won\" and then make the rule return an error, preventing edits to the Opportunity.\n\nBefore-save Apex trigger: You can use a before-save trigger to check if the Opportunity stage is \"Closed/Won\" and throw an error or prevent changes to the Opportunity. This trigger will execute before the record is saved to the database, ensuring that no changes are made once the Opportunity reaches the Closed/Won stage.",
            "D": "Validation Rule: A validation rule can be used to prevent the record from being saved if the Opportunity stage is \"Closed/Won\". You can write a formula to check if the StageName is \"Closed/Won\" and then make the rule return an error, preventing edits to the Opportunity.\n\nBefore-save Apex trigger: You can use a before-save trigger to check if the Opportunity stage is \"Closed/Won\" and throw an error or prevent changes to the Opportunity. This trigger will execute before the record is saved to the database, ensuring that no changes are made once the Opportunity reaches the Closed/Won stage."
        },
        "question-zh": "Universal Containers 希望 Opportunity 到达 Closed/Won 阶段后不能再编辑。开发人员可采用哪两种策略实现这一要求？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "使用自动响应规则。" },
            { "key": "B", "text": "使用自动启动的审批流程。" },
            { "key": "C", "text": "使用验证规则。" },
            { "key": "D", "text": "使用 before save Apex 触发器。" }
        ],
        "explanation-zh": {"C":"验证规则可在 Opportunity 已为 Closed/Won 时阻止后续保存。","D":"before 触发器可检测对已成交商机的修改，并通过 `addError` 阻止 DML。"},
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "single_choice",
        "question": "A software company is using Salesforce to track the companies they sell their software to in the Account object. They also use Salesforce to track bugs in their software with a custom object, Bug__c.\nAs part of a process improvement initiative, they want to be able to report on which companies have reported which bugs. Each company should be able to report multiple bugs and bugs can also be reported by multiple companies.\nWhat is needed to allow this reporting?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Roll-up summary field of Bug__c on Account"
            },
            {
                "key": "B",
                "text": "Junction object between Bug__c and Account"
            },
            {
                "key": "C",
                "text": "Lookup field on Bug__c to Account"
            },
            {
                "key": "D",
                "text": "Master-detail field on Bug__c to Account"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": ""
        },
        "question-zh": "某软件公司使用 Salesforce 的 Account 对象跟踪购买其软件的公司，并用自定义对象 Bug__c 跟踪软件缺陷。该公司希望报告“哪些公司报告了哪些缺陷”；一个公司可报告多个缺陷，一个缺陷也可由多个公司报告。需要什么来支持该报表？",
        "options-zh": [
            { "key": "A", "text": "在 Account 上创建 Bug__c 的汇总字段。" },
            { "key": "B", "text": "在 Bug__c 与 Account 之间创建中间对象。" },
            { "key": "C", "text": "在 Bug__c 上创建指向 Account 的查找字段。" },
            { "key": "D", "text": "在 Bug__c 上创建指向 Account 的主从字段。" }
        ],
        "explanation-zh": {"B":"这是 Account 与 Bug__c 的多对多关系，应使用中间对象分别与两个对象建立关系。"},
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "single_choice",
        "question": "A developer created a trigger on the Account object. While testing the trigger, the developer sees the error message ‘Maximum trigger depth exceeded’.\nWhat could be the possible causes?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The developer does not have the correct user permission."
            },
            {
                "key": "B",
                "text": "The trigger is getting executed multiple times."
            },
            {
                "key": "C",
                "text": "The trigger is too long and should be refactored into a helper class."
            },
            {
                "key": "D",
                "text": "The trigger does not have sufficient code coverage."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "The \"Maximum trigger depth exceeded\" error occurs when a trigger is recursively firing repeatedly, typically due to DML operations inside the trigger causing it to fire again. This results in the trigger being executed more times than allowed (the default limit is 16 times in a single transaction)."
        },
        "question-zh": "开发人员在 Account 对象上创建了触发器。测试时出现“Maximum trigger depth exceeded（超过最大触发器深度）”错误。可能原因是什么？",
        "options-zh": [
            { "key": "A", "text": "开发人员没有正确的用户权限。" },
            { "key": "B", "text": "触发器被重复执行。" },
            { "key": "C", "text": "触发器过长，应重构为辅助类。" },
            { "key": "D", "text": "触发器没有足够的代码覆盖率。" }
        ],
        "explanation-zh": {"B":"触发器中的 DML 可能再次触发自身，形成递归调用；单个事务中触发器执行深度有限。"},
        "difficulty": "简单",
        "accuracy": 94
    },
    {
        "type": "multiple_choice",
        "question": "A developer creates a Lightning web component that imports a method within an Apex class. When a Validate button is pressed, the method runs to execute complex validations.\nIn this implementation scenario, which two options are part of the Controller according to the MVC architecture?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "JavaScript file"
            },
            {
                "key": "B",
                "text": "XML file"
            },
            {
                "key": "C",
                "text": "Apex class"
            },
            {
                "key": "D",
                "text": "HTML file"
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
        "question-zh": "开发人员创建了一个导入 Apex 类方法的 Lightning Web Component。用户按下 Validate 按钮时，该方法运行以执行复杂验证。按照 MVC 架构，以下哪两项属于 Controller？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "JavaScript 文件" },
            { "key": "B", "text": "XML 文件" },
            { "key": "C", "text": "Apex 类" },
            { "key": "D", "text": "HTML 文件" }
        ],
        "explanation-zh": {"A":"LWC 的 JavaScript 文件处理客户端事件和交互逻辑，属于控制器职责。","C":"Apex 类承载服务端控制逻辑并由组件调用。"},
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "multiple_choice",
        "question": "A developer wants to send an outbound message when a record meets a specific criteria.\nWhich two features satisfy this use case? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Next Best Action can be used to check the record criteria and send an outbound message."
            },
            {
                "key": "B",
                "text": "Approval Process can be used to check the record criteria and send an outbound message without Apex code."
            },
            {
                "key": "C",
                "text": "Flow Builder can be used to check the record criteria and send an outbound message."
            },
            {
                "key": "D",
                "text": "Entitlement Process can be used to check the record criteria and send an outbound message without Apex code."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "",
            "C": ""
        },
        "question-zh": "开发人员希望在记录符合特定条件时发送出站消息。哪两项功能可满足该用例？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "使用 Next Best Action 检查记录条件并发送出站消息。" },
            { "key": "B", "text": "使用审批流程检查记录条件并在不编写 Apex 的情况下发送出站消息。" },
            { "key": "C", "text": "使用 Flow Builder 检查记录条件并发送出站消息。" },
            { "key": "D", "text": "使用权益流程在不编写 Apex 的情况下检查记录条件并发送出站消息。" }
        ],
        "explanation-zh": {"B":"审批流程可根据入口条件执行出站消息操作，无需 Apex。","C":"Flow 可根据条件判断后执行出站消息等自动化操作。"},
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "Universal Containers wants to automatically assign new cases to the appropriate support representative based on the case origin. They have created a custom field on the Case object to store the support representative name.\nWhat is the best solution to assign the case to the appropriate support representative?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use a trigger on the Case object."
            },
            {
                "key": "B",
                "text": "Use a formula field on the Case object."
            },
            {
                "key": "C",
                "text": "Use a validation rule on the Case object."
            },
            {
                "key": "D",
                "text": "Use an Assignment Flow element."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": ""
        },
        "question-zh": "Universal Containers 希望根据 Case 来源自动将新建 Case 分配给适当的支持代表，并已在 Case 上创建字段保存支持代表名称。最佳解决方案是什么？",
        "options-zh": [
            { "key": "A", "text": "在 Case 对象上使用触发器。" },
            { "key": "B", "text": "在 Case 对象上使用公式字段。" },
            { "key": "C", "text": "在 Case 对象上使用验证规则。" },
            { "key": "D", "text": "使用 Flow 的 Assignment（分配）元素。" }
        ],
        "explanation-zh": {"D":"记录触发流可按来源条件判断，并通过 Assignment 元素为变量或字段赋值，属于声明式且合适的实现。"},
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "multiple_choice",
        "question": "What are two considerations for running a flow in debug mode?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Callout to external systems are not executed when debugging a flow."
            },
            {
                "key": "B",
                "text": "DML operations will be rolled back when the debugging ends."
            },
            {
                "key": "C",
                "text": "Input variables of type record cannot be passed into the flow."
            },
            {
                "key": "D",
                "text": "Clicking Pause or executing a Pause element closed the flow and ends debugging."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "",
            "B": ""
        },
        "question-zh": "以调试模式运行 Flow 时，需要注意哪两项？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "调试 Flow 时不会执行对外部系统的调用。" },
            { "key": "B", "text": "调试结束时会回滚 DML 操作。" },
            { "key": "C", "text": "不能向 Flow 传入 record 类型的输入变量。" },
            { "key": "D", "text": "单击 Pause 或执行 Pause 元素会关闭 Flow 并结束调试。" }
        ],
        "explanation-zh": {"A":"Flow 调试不会执行外部调用，避免在调试期间影响外部系统。","B":"调试运行所产生的 DML 变更会在调试结束后回滚。"},
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "A developer is designing a new application on the Salesforce platform and wants to ensure it can support multiple tenants effectively.\nWhich design framework should the developer consider to ensure scalability and maintainability?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Waterfall Model"
            },
            {
                "key": "B",
                "text": "Flux (view, action, dispatcher, and store)"
            },
            {
                "key": "C",
                "text": "Model-View-Controller (MVC)"
            },
            {
                "key": "D",
                "text": "Agile Development"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "The MVC pattern is well-suited for Salesforce development as it helps in separating the concerns between the user interface, the data, and the logic that interacts with the data, which is a key aspect of maintainability and scalability. Salesforce itself is built on an MVC framework."
        },
        "question-zh": "开发人员正在 Salesforce 平台上设计新应用程序，希望它能有效支持多租户，同时具备可扩展性和可维护性。应考虑哪种设计框架？",
        "options-zh": [
            { "key": "A", "text": "瀑布模型" },
            { "key": "B", "text": "Flux（视图、操作、调度器和存储）" },
            { "key": "C", "text": "模型-视图-控制器（MVC）" },
            { "key": "D", "text": "敏捷开发" }
        ],
        "explanation-zh": {"C":"MVC 将用户界面、数据模型及控制逻辑分离；Salesforce 平台本身采用这一架构，有助于维护和扩展。"},
        "difficulty": "简单",
        "accuracy": 93
    },
    {
        "type": "multiple_choice",
        "question": "What are two benefits of using External IDs?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "An External ID field can be used to reference an ID from another external system."
            },
            {
                "key": "B",
                "text": "An External ID can be a formula field to help create a unique key from two fields in Salesforce."
            },
            {
                "key": "C",
                "text": "An External ID can be used with Salesforce Mobile to make external data visible."
            },
            {
                "key": "D",
                "text": "An External ID is indexed and can improve the performance of SOQL queries."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "",
            "D": ""
        },
        "question-zh": "使用外部 ID 有哪两项好处？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "外部 ID 字段可用于引用其他外部系统中的 ID。" },
            { "key": "B", "text": "外部 ID 可以是公式字段，用于从 Salesforce 的两个字段创建唯一键。" },
            { "key": "C", "text": "外部 ID 可与 Salesforce Mobile 配合，使外部数据可见。" },
            { "key": "D", "text": "外部 ID 会建立索引，可提高 SOQL 查询性能。" }
        ],
        "explanation-zh": {"A":"外部 ID 可存储外部系统的标识符，常用于集成和 upsert。","D":"外部 ID 字段已建立索引，按其筛选的 SOQL 查询通常性能更好。"},
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "single_choice",
        "question": "A company decides to implement a new process where every time an Opportunity is created, a follow up Task should be created and assigned to the Opportunity Owner.\nWhat is the most efficient way for a developer to implement this?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Apex trigger on Task"
            },
            {
                "key": "B",
                "text": "Task actions"
            },
            {
                "key": "C",
                "text": "Auto-launched flow on Task"
            },
            {
                "key": "D",
                "text": "Record-triggered flow on Opportunity"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": ""
        },
        "question-zh": "公司要实现一项流程：每次创建 Opportunity 时，都要创建后续 Task 并分配给 Opportunity 所有者。开发人员采用哪种方式最有效？",
        "options-zh": [
            { "key": "A", "text": "在 Task 上创建 Apex 触发器。" },
            { "key": "B", "text": "使用 Task 操作。" },
            { "key": "C", "text": "在 Task 上使用自动启动 Flow。" },
            { "key": "D", "text": "在 Opportunity 上使用记录触发 Flow。" }
        ],
        "explanation-zh": {"D":"在 Opportunity 创建时运行的记录触发 Flow 可直接创建 Task 并将其分配给 Opportunity 所有者，属于声明式且高效的方案。"},
        "difficulty": "简单",
        "accuracy": 93
    },
    {
        "type": "single_choice",
        "question": "Universal Containers wants to ensure that all new leads created in the system have a valid email address. They have created a validation rule to enforce this requirement, but want to add an additional layer of validation using automation.\nWhat would be the best solution for this requirement?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Submit a REST API Callout with a JSON payload and validate the fields on a third party system."
            },
            {
                "key": "B",
                "text": "Use an Approval Process to enforce the completion of a valid email address using an outbound message action."
            },
            {
                "key": "C",
                "text": "Use a before-save Apex trigger on the Lead object to validate the email address and display an error message if it is invalid."
            },
            {
                "key": "D",
                "text": "Use a custom Lightning Web component to make a callout to validate the fields on a third party system."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": ""
        },
        "question-zh": "Universal Containers 希望确保系统中新建的所有 Lead 都有有效的电子邮件地址。已创建验证规则，还希望通过自动化增加一层验证。最佳方案是什么？",
        "options-zh": [
            { "key": "A", "text": "提交带 JSON 负载的 REST API 调用，在第三方系统中验证字段。" },
            { "key": "B", "text": "使用审批流程并通过出站消息操作强制填写有效电子邮件地址。" },
            { "key": "C", "text": "在 Lead 对象上使用 before-save Apex 触发器验证电子邮件地址；无效时显示错误消息。" },
            { "key": "D", "text": "使用自定义 Lightning Web Component 调用第三方系统验证字段。" }
        ],
        "explanation-zh": {"C":"before 触发器可在记录保存前验证邮箱格式或业务规则，并通过 `addError` 阻止无效 Lead 保存。"},
        "difficulty": "简单",
        "accuracy": 91
    },
    {
        "type": "single_choice",
        "question": "A developer created a trigger on a custom object. This custom object also has some dependent pick lists.\nAccording to the order of execution rules, which step happens first?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The original record is loaded from the database."
            },
            {
                "key": "B",
                "text": "System validation is run for maximum field lengths."
            },
            {
                "key": "C",
                "text": "Old values are overwritten with the new record values."
            },
            {
                "key": "D",
                "text": "JavaScript validation is run in the browser."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": ""
        },
        "question-zh": "开发人员在自定义对象上创建了触发器，该对象还有一些依赖选项列表。根据执行顺序规则，以下哪个步骤最先发生？",
        "options-zh": [
            { "key": "A", "text": "从数据库加载原始记录。" },
            { "key": "B", "text": "系统验证字段最大长度。" },
            { "key": "C", "text": "使用新记录值覆盖旧值。" },
            { "key": "D", "text": "在浏览器中运行 JavaScript 验证。" }
        ],
        "explanation-zh": {"B":"保存流程开始时首先执行系统验证，包括必填字段和字段长度等检查。"},
        "difficulty": "简单",
        "accuracy": 77
    },
    {
        "type": "single_choice",
        "question": "While developing an Apex class with custom search functionality that will be launched from a Lightning Web Component, how can the developer ensure only records accessible to the currently logged in user are displayed?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use the WITH SECURITY_ENFORCED clause within the SOQL."
            },
            {
                "key": "B",
                "text": "Use the inherited sharing keyword."
            },
            {
                "key": "C",
                "text": "Use the with sharing keyword."
            },
            {
                "key": "D",
                "text": "Use the without sharing keyword."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_security_sharing_rules.htm"
        },
        "question-zh": "开发人员正在开发由 Lightning Web Component 启动的、自定义搜索功能的 Apex 类。如何确保仅显示当前登录用户有权访问的记录？",
        "options-zh": [
            { "key": "A", "text": "在 SOQL 中使用 `WITH SECURITY_ENFORCED` 子句。" },
            { "key": "B", "text": "使用 `inherited sharing` 关键字。" },
            { "key": "C", "text": "使用 `with sharing` 关键字。" },
            { "key": "D", "text": "使用 `without sharing` 关键字。" }
        ],
        "explanation-zh": {"C":"`with sharing` 会让 Apex 类遵从当前用户的记录共享规则，确保只返回用户可见的记录。"},
        "difficulty": "简单",
        "accuracy": 89
    },
    {
        "type": "single_choice",
        "question": "A company wants to implement a new call center process for handling customer service calls. It requires service reps to ask for the caller's account number before proceeding with the rest of their call script.\nFollowing best practices, what is the optimal approach to satisfy this requirement?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Flow Builder"
            },
            {
                "key": "B",
                "text": "Approvals"
            },
            {
                "key": "C",
                "text": "Apex trigger"
            },
            {
                "key": "D",
                "text": "Einstein Next Best Action"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "A screen flow is need"
        },
        "question-zh": "公司希望为客服呼叫实施新的呼叫中心流程：服务代表必须先询问来电者的 Account 编号，才能继续其余通话脚本。遵循最佳实践，最佳方案是什么？",
        "options-zh": [
            { "key": "A", "text": "Flow Builder" },
            { "key": "B", "text": "审批" },
            { "key": "C", "text": "Apex 触发器" },
            { "key": "D", "text": "Einstein Next Best Action" }
        ],
        "explanation-zh": {"A":"屏幕流可按步骤向坐席收集 Account 编号，并在继续前验证输入，适合引导式呼叫脚本。"},
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "single_choice",
        "question": "A developer created these three Rollup Summary fields on the custom object, Project__c:\nTotal_Timesheets__c\nTotal_Approved_Timesheets__c\nTotal_Rejected_Timesheet__c\nThe developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project.\nWhich should the developer use to implement the business requirement in order to minimize maintenance overhead?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Roll-up summary field"
            },
            {
                "key": "B",
                "text": "Apex trigger"
            },
            {
                "key": "C",
                "text": "Formula field"
            },
            {
                "key": "D",
                "text": "Record-triggered flow"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": ""
        },
        "question-zh": "开发人员在自定义对象 Project__c 上创建了三个汇总字段：总工时表数、已批准工时表数和被拒绝工时表数。现在需要创建一个字段，显示某项目被拒绝与已批准工时表的比率。为尽量减少维护工作，应使用什么？",
        "options-zh": [
            { "key": "A", "text": "汇总字段" },
            { "key": "B", "text": "Apex 触发器" },
            { "key": "C", "text": "公式字段" },
            { "key": "D", "text": "记录触发流" }
        ],
        "explanation-zh": {"C":"所需值仅根据已有字段计算，使用公式字段即可自动计算且无需维护自动化。"},
        "difficulty": "简单",
        "accuracy": 83
    },
    {
        "type": "single_choice",
        "question": "A company has a custom object, Sales_Help_Request__c, that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c.\nA developer is tasked with creating a field, Total_hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity.\nWhat should the developer use to implement this?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "A trigger on the Opportunity object"
            },
            {
                "key": "B",
                "text": "A roll-up summary field on the Opportunity object"
            },
            {
                "key": "C",
                "text": "A record-triggered flow on the Sales_Help_Request__c object"
            },
            {
                "key": "D",
                "text": "A roll-up summary field on the Sales_Help_Request__c object."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": ""
        },
        "question-zh": "公司有一个自定义对象 Sales_Help_Request__c，它通过查找关系关联到 Opportunity。其 Number_of_Hours__c 字段记录投入工时。开发人员需要在 Opportunity 上创建 Total_hours__c，汇总其关联 Sales_Help_Request__c 记录的全部工时。应使用什么？",
        "options-zh": [
            { "key": "A", "text": "在 Opportunity 对象上创建触发器。" },
            { "key": "B", "text": "在 Opportunity 对象上创建汇总字段。" },
            { "key": "C", "text": "在 Sales_Help_Request__c 对象上创建记录触发流。" },
            { "key": "D", "text": "在 Sales_Help_Request__c 对象上创建汇总字段。" }
        ],
        "explanation-zh": {"C":"查找关系不支持原生汇总字段；在子对象上使用记录触发流可聚合相关记录并更新 Opportunity。"},
        "difficulty": "简单",
        "accuracy": 62
    },
    {
        "type": "single_choice",
        "question": "AW Computing tracks order information in custom objects called Order__c and Order_Line__c. Currently, all shipping information is stored in the Order__c object.\nThe company wants to expand its order application to support split shipments so that any number of Order_Line__c records on a single Order__c can be shipped to different locations.\nWhat should a developer add to fulfill this requirement?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Order_Shipment_Group__c object and master-detail field on Order__c"
            },
            {
                "key": "B",
                "text": "Order_Shipment_Group__c object and master-detail field on Order_Line__c"
            },
            {
                "key": "C",
                "text": "Order_Shipment_Group__c object and master-detail field on Order_Shipment_Group__c"
            },
            {
                "key": "D",
                "text": "Order_Shipment_Group__c object and master-detail field on Order__c and Order_Line__c"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "Order_Shipment_Group__c object: This custom object is used to track shipment groups for orders, which is crucial for managing split shipments where different items (Order_Line__c records) of the same order are shipped to different locations.\n\nMaster-detail field on Order__c and Order_Line__c:\n\nMaster-detail on Order__c: This establishes a relationship between the Order_Shipment_Group__c and the Order__c objects. It ensures that each shipment group is linked to a specific order.\nMaster-detail on Order_Line__c: This allows each order line (which represents individual products in the order) to be linked to specific shipment groups. This is essential for tracking which parts of the order are being shipped to which locations.\nBy using this structure, you can easily manage multiple shipments per order, and link the relevant shipping details to both the overall order and the individual order lines."
        },
        "question-zh": "AW Computing 使用自定义对象 Order__c 和 Order_Line__c 跟踪订单信息，目前所有配送信息均存储在 Order__c 中。公司希望支持拆分发货，使同一订单的任意 Order_Line__c 记录可发往不同地点。开发人员应添加什么？",
        "options-zh": [
            { "key": "A", "text": "创建 Order_Shipment_Group__c 对象，并在 Order__c 上创建主从字段。" },
            { "key": "B", "text": "创建 Order_Shipment_Group__c 对象，并在 Order_Line__c 上创建主从字段。" },
            { "key": "C", "text": "创建 Order_Shipment_Group__c 对象，并在其自身上创建主从字段。" },
            { "key": "D", "text": "创建 Order_Shipment_Group__c 对象，并在 Order__c 和 Order_Line__c 上创建主从字段。" }
        ],
        "explanation-zh": {"D":"发货组需要同时关联订单和订单行，才能按不同地点对同一订单的多条订单行分组发货。"},
        "difficulty": "简单",
        "accuracy": 73
    },
    {
        "type": "multiple_choice",
        "question": "UC is developing a process for their sales teams that requires all sales reps to go through a set of scripted steps with each new customer they create.\nIn the first step of collecting information, UC's ERP system must be checked via a REST endpoint to see if the customer exists. If the customer exists, the data must be presented to the sales rep in Salesforce.\nWhich two should a developer implement to satisfy the requirements?Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Trigger"
            },
            {
                "key": "B",
                "text": "Invocable method"
            },
            {
                "key": "C",
                "text": "Flow"
            },
            {
                "key": "D",
                "text": "Future method"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "Invocable method: This is ideal for situations where you need to call external services or perform complex operations that need to be executed asynchronously within a flow or process. In this case, you could use an invocable method to interact with the ERP system's REST endpoint, check if the customer exists, and return the data to be used by the flow.\n\nFlow: Flow can be used to orchestrate the entire process, including calling the invocable method. Flows are user-friendly and allow for a guided process that presents data to the sales reps. They are capable of invoking Apex actions (like the invocable method) and can handle interactions and data presentation in the UI.",
            "C": "Invocable method: This is ideal for situations where you need to call external services or perform complex operations that need to be executed asynchronously within a flow or process. In this case, you could use an invocable method to interact with the ERP system's REST endpoint, check if the customer exists, and return the data to be used by the flow.\n\nFlow: Flow can be used to orchestrate the entire process, including calling the invocable method. Flows are user-friendly and allow for a guided process that presents data to the sales reps. They are capable of invoking Apex actions (like the invocable method) and can handle interactions and data presentation in the UI."
        },
        "question-zh": "UC 正在为销售团队开发流程，要求销售代表为每位新建客户执行一组引导步骤。收集信息的第一步必须通过 REST 端点查询 ERP，检查客户是否存在；若存在，须在 Salesforce 中向销售代表显示数据。开发人员应实现哪两项？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "触发器" },
            { "key": "B", "text": "可调用方法" },
            { "key": "C", "text": "Flow" },
            { "key": "D", "text": "Future 方法" }
        ],
        "explanation-zh": {"B":"可调用 Apex 方法可由 Flow 调用，并与 ERP REST 端点交互后返回数据。","C":"屏幕 Flow 可编排引导步骤、调用 Apex 操作并向销售代表展示结果。"},
        "difficulty": "简单",
        "accuracy": 60
    },
    {
        "type": "multiple_choice",
        "question": "A business has a proprietary Order Management System (OMS) that creates orders from their website and the orders.When the order Is created in the OMS,an integration also creates an order record In Salesforce relates it to the contact as identified by the email on the order As the order goes through different stages inOMS, the integration also updates it in Salesforce.\nIt is noticed that each update from the OMS creates new order record in Salesforce.\nWhich two actions will prevent the duplicate order records from being created in Salesforce?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Ensure that the order number in the OMS is unique"
            },
            {
                "key": "B",
                "text": "Use the order number from the OMS as an external ID."
            },
            {
                "key": "C",
                "text": "Use the email on the contact record as an external ID."
            },
            {
                "key": "D",
                "text": "Write a before trigger on the order object to delete any duplicates"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "Ensure that the order number in the OMS is unique:\nBy ensuring that the order number is unique, you can avoid creating duplicate records when an order is created in Salesforce. This guarantees that each order is identified by a distinct value, reducing the chances of duplication during updates or integrations.\n\nUse the order number from the OMS as an external ID:\nUsing the order number from the OMS as an external ID in Salesforce allows you to match and update existing records rather than creating new records each time. Salesforce treats the external ID as a unique identifier, so updates based on this field will modify the existing record instead of creating a new one.",
            "B": "Ensure that the order number in the OMS is unique:\nBy ensuring that the order number is unique, you can avoid creating duplicate records when an order is created in Salesforce. This guarantees that each order is identified by a distinct value, reducing the chances of duplication during updates or integrations.\n\nUse the order number from the OMS as an external ID:\nUsing the order number from the OMS as an external ID in Salesforce allows you to match and update existing records rather than creating new records each time. Salesforce treats the external ID as a unique identifier, so updates based on this field will modify the existing record instead of creating a new one."
        },
        "question-zh": "某公司有专有订单管理系统（OMS），从网站创建订单。OMS 创建订单时，集成也会在 Salesforce 创建订单记录并按订单邮箱关联 Contact；订单在 OMS 中变更阶段时，集成会更新 Salesforce。现在发现 OMS 的每次更新都会在 Salesforce 创建新订单记录。哪两项操作可防止重复订单？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "确保 OMS 中的订单编号唯一。" },
            { "key": "B", "text": "将 OMS 的订单编号用作外部 ID。" },
            { "key": "C", "text": "将 Contact 记录中的电子邮件用作外部 ID。" },
            { "key": "D", "text": "在订单对象上编写 before 触发器以删除重复记录。" }
        ],
        "explanation-zh": {"A":"唯一的 OMS 订单号可稳定地标识每笔订单。","B":"将订单号设为外部 ID 后可使用 upsert 匹配并更新已有订单，而非每次插入新记录。"},
        "difficulty": "简单",
        "accuracy": 83
    },
    {
        "type": "single_choice",
        "question": "UH is using Salesforce to capture job applications. A salesforce administrator created two custom objects; Job__c acting as the master object, Job_Application__c acting as the detail.\nWithin the Job__c object, a custom multi-select picklist, Preferred_Locations__c, contains a list of approved status for the position. Each Job_Application__c record relates to a Contact within the system through a master-detail relationship.\nRecruiters have requested the ability to view whether the Contact's Mailing State value matches a value selected on the Preferred_Locations__c field, within the Job_Application__c record. Recruiters would like this value to be kept in sync, if changes occur to the Contact's Mailing State or if the Job's Preferred_Locations__c field is updated.\nWhat is the recommended tool a developer should use to meet the business requirement?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Apex trigger"
            },
            {
                "key": "B",
                "text": "Record-triggered flow"
            },
            {
                "key": "C",
                "text": "Formula field"
            },
            {
                "key": "D",
                "text": "Process Builder"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": ""
        },
        "question-zh": "UH 使用 Salesforce 收集职位申请。Job__c 为主对象，Job_Application__c 为明细对象；Job__c 的 Preferred_Locations__c 是多选选项列表。每条申请通过主从关系关联 Contact。招聘人员希望在申请记录上查看 Contact 的邮寄州是否匹配职位的首选地点，并在 Contact 邮寄州或职位首选地点变更时保持同步。推荐使用什么工具？",
        "options-zh": [
            { "key": "A", "text": "Apex 触发器" },
            { "key": "B", "text": "记录触发 Flow" },
            { "key": "C", "text": "公式字段" },
            { "key": "D", "text": "Process Builder" }
        ],
        "explanation-zh": {"A":"需要响应两个相关对象的字段变更并同步申请记录；Apex 触发器可在相应对象更新时处理跨对象逻辑。"},
        "difficulty": "简单",
        "accuracy": 51
    },
    {
        "type": "single_choice",
        "question": "A large corporation stores Orders and Line Items in Salesforce for different lines of business. Users are allowed see Orders across the entire organization,but,for security purposes, should only be able to see the Line Orders in their line of business.\nWhich type of relationship should be used between Line Items and Orders?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Master-Detail"
            },
            {
                "key": "B",
                "text": "Lookup"
            },
            {
                "key": "C",
                "text": "Direct Lookup"
            },
            {
                "key": "D",
                "text": "Indirect Lookup"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://help.salesforce.com/s/articleView?id=sf.overview_of_custom_object_relationships.htm&type=5"
        },
        "question-zh": "大型企业在 Salesforce 中为不同业务线存储 Order 和 Line Item。用户可以查看整个组织的 Order，但出于安全原因，只能查看自己业务线的 Line Item。Line Item 与 Order 之间应使用哪种关系？",
        "options-zh": [
            { "key": "A", "text": "主从关系" },
            { "key": "B", "text": "查找关系" },
            { "key": "C", "text": "直接查找关系" },
            { "key": "D", "text": "间接查找关系" }
        ],
        "explanation-zh": {"B":"主从关系会使明细记录继承主记录的共享和所有权，无法单独限制 Line Item 可见性；查找关系允许独立配置共享。"},
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "single_choice",
        "question": "What Is an example of a polymorphic lookup field in Salesforce?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The WhatId field on the standard Event object"
            },
            {
                "key": "B",
                "text": "A custom field,Link_c, on the standard Contact object that looks up to an Account"
            },
            {
                "key": "C",
                "text": "The LeadId and ContactId fields on the standard Campaign Member object"
            },
            {
                "key": "D",
                "text": "The ParentId field on the standard Account object"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm"
        },
        "question-zh": "Salesforce 中多态查找字段的示例是什么？",
        "options-zh": [
            { "key": "A", "text": "标准 Event 对象上的 WhatId 字段。" },
            { "key": "B", "text": "标准 Contact 对象上指向 Account 的自定义字段 Link__c。" },
            { "key": "C", "text": "标准 Campaign Member 对象上的 LeadId 和 ContactId 字段。" },
            { "key": "D", "text": "标准 Account 对象上的 ParentId 字段。" }
        ],
        "explanation-zh": {"A":"WhatId 可引用多个不同类型的对象，因此是多态查找字段。"},
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "multiple_choice",
        "question": "Which two process automations can be used on their own to send Salesforce Outbound Message?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Process Builder"
            },
            {
                "key": "B",
                "text": "Workfow Rule"
            },
            {
                "key": "C",
                "text": "Flow Builder"
            },
            {
                "key": "D",
                "text": "Strategy Builder"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "",
            "C": ""
        },
        "question-zh": "哪两种流程自动化可单独用于发送 Salesforce 出站消息？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "Process Builder" },
            { "key": "B", "text": "工作流规则" },
            { "key": "C", "text": "Flow Builder" },
            { "key": "D", "text": "Strategy Builder" }
        ],
        "explanation-zh": {"B":"工作流规则可配置出站消息操作。","C":"Flow Builder 可通过出站消息操作发送 Salesforce 出站消息。"},
        "difficulty": "简单",
        "accuracy": 59
    },
    {
        "type": "single_choice",
        "question": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in a PostalCodeToTimezone__c custom object.\nWhat is the optimal way to implement this feature?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Create an account approval proce"
            },
            {
                "key": "B",
                "text": "Build a flow with Flow Builder."
            },
            {
                "key": "C",
                "text": "Create a formula field."
            },
            {
                "key": "D",
                "text": "Build an account assignment rule,"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "Flow Builder is the optimal solution here because it allows you to create a process that updates the Timezone field when the Postal Code is edited. You can query the PostalCodeToTimezone__c object within the flow to find the matching timezone and then update the Timezone field on the Account record accordingly. This can be achieved declaratively with minimal code."
        },
        "question-zh": "当用户编辑 Account 的邮政编码时，必须根据自定义对象 PostalCodeToTimezone__c 中的值更新 Account 的自定义文本字段 Timezone。实现此功能的最佳方式是什么？",
        "options-zh": [
            { "key": "A", "text": "创建 Account 审批流程。" },
            { "key": "B", "text": "使用 Flow Builder 构建 Flow。" },
            { "key": "C", "text": "创建公式字段。" },
            { "key": "D", "text": "创建 Account 分配规则。" }
        ],
        "explanation-zh": {"B":"记录触发 Flow 可在邮政编码变更时查询映射对象并更新 Timezone 字段，无需代码。"},
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "multiple_choice",
        "question": "In terms of the MVC paradigm,what are two advantages of lmplementing the viewlayer of application using Lightning Web Component-based development over Visualforce?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Built-in standard and custom set controllers"
            },
            {
                "key": "B",
                "text": "Log capturing via the Debug Logs Setup page"
            },
            {
                "key": "C",
                "text": "Self-contained and reusable units of an application"
            },
            {
                "key": "D",
                "text": "Rich component ecosystem"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D"
        ],
        "explanation": {
            "C": "https://help.salesforce.com/s/articleView?id=sf.aura_features.htm&type=5",
            "D": "https://help.salesforce.com/s/articleView?id=sf.aura_features.htm&type=5"
        },
        "question-zh": "从 MVC 架构角度看，使用 Lightning Web Component 开发应用程序视图层，相比 Visualforce 有哪两项优势？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "内置标准和自定义集合控制器。" },
            { "key": "B", "text": "通过 Debug Logs Setup 页面捕获日志。" },
            { "key": "C", "text": "应用程序可自包含、可复用的单元。" },
            { "key": "D", "text": "丰富的组件生态系统。" }
        ],
        "explanation-zh": {"C":"LWC 以封装的可复用组件构建应用。","D":"Lightning 平台提供丰富的基础组件和组件生态系统。"},
        "difficulty": "简单",
        "accuracy": 85
    },
    {
        "type": "single_choice",
        "question": "Universal Containers(UC) uses a custom object called Vendor. The Vendor custom object has relationship with the standard Account object.\nBased on some internal discussions, the UC administrator tried to change the master-detail lookup relationship, but was not able to do so.\nWhat is a possible reason that this change was not permitted?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The organization wide default for the Vendor object is Public Read/Write."
            },
            {
                "key": "B",
                "text": "Some of the Vendor records have null for the Account field."
            },
            {
                "key": "C",
                "text": "The Account object has a roll-up summary field on the Vendor object."
            },
            {
                "key": "D",
                "text": "The Account object does not allow changing a field type for a custom field."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type=5"
        },
        "question-zh": "Universal Containers（UC）使用名为 Vendor 的自定义对象，它与标准 Account 对象有关联。管理员尝试将查找关系改为主从关系，但无法修改。可能原因是什么？",
        "options-zh": [
            { "key": "A", "text": "Vendor 对象的组织范围默认值为“公有读/写”。" },
            { "key": "B", "text": "部分 Vendor 记录的 Account 字段为空。" },
            { "key": "C", "text": "Account 对象上有一个基于 Vendor 对象的汇总字段。" },
            { "key": "D", "text": "Account 对象不允许更改自定义字段的字段类型。" }
        ],
        "explanation-zh": {"C":"已有基于该关系的汇总字段时，无法将查找关系转换为主从关系。"},
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "Universal Containers has a support process that allows users to request support from its engineering team using custom object, Engineering_Support_c.\nUsers should be able to associate multiple Engineering Support_c records to a single Opportunty record.Addltionally, aggregate information about the Engineering Support _c records should be shown on the Opportunity record.\nWhat should a developer implement to support these requirements?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Lookup field from Engineering_Support_c to Opportunity"
            },
            {
                "key": "B",
                "text": "Master-detail field from EngineeringSupport_c to Opportunity"
            },
            {
                "key": "C",
                "text": "Lookup field from Opportunity to Engineering Support_c"
            },
            {
                "key": "D",
                "text": "Master-detail field from Opportunity to Engineering Support_c"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "Requirement to associate multiple Engineering_Support__c records with a single Opportunity:\nThis indicates a one-to-many relationship, which can be implemented with either a master-detail or lookup relationship.\n\nRequirement to show aggregate information on the Opportunity record:\nThis can be achieved using roll-up summary fields, which are only available for master-detail relationships. A master-detail relationship ensures that the child records (Engineering_Support__c) are tightly coupled to the parent record (Opportunity), enabling aggregation."
        },
        "question-zh": "Universal Containers 有一项支持流程，用户可通过自定义对象 Engineering_Support__c 向工程团队请求支持。用户需能将多条 Engineering_Support__c 记录关联到同一 Opportunity，并在 Opportunity 上显示这些记录的汇总信息。开发人员应实现什么？",
        "options-zh": [
            { "key": "A", "text": "从 Engineering_Support__c 到 Opportunity 的查找字段。" },
            { "key": "B", "text": "从 Engineering_Support__c 到 Opportunity 的主从字段。" },
            { "key": "C", "text": "从 Opportunity 到 Engineering_Support__c 的查找字段。" },
            { "key": "D", "text": "从 Opportunity 到 Engineering_Support__c 的主从字段。" }
        ],
        "explanation-zh": {"B":"主从关系支持一个 Opportunity 关联多条 Engineering_Support__c 记录，并可在 Opportunity 上创建汇总字段。"},
        "difficulty": "简单",
        "accuracy": 77
    },
    {
        "type": "single_choice",
        "question": "A software company uses the following objects and relationships:\nCase: to handle customer support issues\nDefect__c: a custom object to represent known issues with the company's software\nCase_effect_c: a junction object between Case and Defect__c to represent that a defect is a cause of a customer issue\nCase and Defect__c have Private organization-wide defaults.\nWhat should be done to share a specific case_Defect__c record with a user?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Share the parent Case and Defect_c records."
            },
            {
                "key": "B",
                "text": "Share the parent Case record."
            },
            {
                "key": "C",
                "text": "Share the case_Defect_c record."
            },
            {
                "key": "D",
                "text": "Share the parent Defect_c record."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "junction objects (like Case_Defect__c) inherit the sharing settings of their parent objects in a master-detail relationship. If the organization-wide defaults (OWD) for both Case and Defect__c are Private, the user must have access to both parent records (Case and Defect__c) to access the Case_Defect__c junction record.\n\nSimply sharing the junction record directly is not possible because its access is dependent on the parent records' sharing settings."
        },
        "question-zh": "某软件公司使用以下对象和关系：Case 用于处理客户支持问题；Defect__c 表示已知软件缺陷；Case_Defect__c 是 Case 与 Defect__c 之间的中间对象，用于表示缺陷是客户问题的原因。Case 和 Defect__c 的组织范围默认值均为私有。要与某用户共享特定 Case_Defect__c 记录，应如何做？",
        "options-zh": [
            { "key": "A", "text": "共享其父 Case 和 Defect__c 记录。" },
            { "key": "B", "text": "共享父 Case 记录。" },
            { "key": "C", "text": "共享 Case_Defect__c 记录。" },
            { "key": "D", "text": "共享父 Defect__c 记录。" }
        ],
        "explanation-zh": {"A":"中间对象记录通过主从关系继承两个父记录的访问权限；用户必须同时有权访问 Case 和 Defect__c。"},
        "difficulty": "简单",
        "accuracy": 92
    },
    {
        "type": "single_choice",
        "question": "UC has implemented an order management application. Each Order can have one or more Order Line items. The order Line object is related to the Order via a master-detail relationship. For each Order Line item, the total price is calculated by multiplying the Order Line item price with the quantity ordered.\nWhat is the best practice to get the sum of all Order Line item totals on the Order record?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Roll-up summary field"
            },
            {
                "key": "B",
                "text": "Quick action"
            },
            {
                "key": "C",
                "text": "Apex trigger"
            },
            {
                "key": "D",
                "text": "Formula field"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "Roll-up summary field is the best practice because it is specifically designed to automatically calculate and summarize data from related records (in this case, Order Line items) in a master-detail relationship. This allows the Order record to display the sum of all Order Line item totals (calculated as price * quantity) without needing custom logic or triggers."
        },
        "question-zh": "UC 实施了订单管理应用。每个 Order 包含一条或多条 Order Line；Order Line 通过主从关系关联到 Order。每条订单行的总价等于单价乘以订购数量。要在 Order 上取得所有订单行总价之和，最佳实践是什么？",
        "options-zh": [
            { "key": "A", "text": "汇总字段" },
            { "key": "B", "text": "快速操作" },
            { "key": "C", "text": "Apex 触发器" },
            { "key": "D", "text": "公式字段" }
        ],
        "explanation-zh": {"A":"主从关系支持汇总字段，可自动汇总子记录的订单行总价，无需代码。"},
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "multiple_choice",
        "question": "Which two settings must be defined in order to update a record of a junction object?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Read/write access on the primary relationship"
            },
            {
                "key": "B",
                "text": "Read/write access on the junction object"
            },
            {
                "key": "C",
                "text": "Read/write access on the secondary relationship"
            },
            {
                "key": "D",
                "text": "Read access on the primary relationship"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "To update a record of a junction object, which is typically a many-to-many relationship in Salesforce, the user must have read/write access to both of the related objects involved in the junction:\n\nRead/write access on the primary relationship: This allows the user to modify the record on the primary object in the junction relationship.\nRead/write access on the secondary relationship: Similarly, the user must also have read/write access to the secondary related object to make changes in the junction object.\nWithout read/write access on both relationships, the user cannot update the junction object effectively.",
            "C": "To update a record of a junction object, which is typically a many-to-many relationship in Salesforce, the user must have read/write access to both of the related objects involved in the junction:\n\nRead/write access on the primary relationship: This allows the user to modify the record on the primary object in the junction relationship.\nRead/write access on the secondary relationship: Similarly, the user must also have read/write access to the secondary related object to make changes in the junction object.\nWithout read/write access on both relationships, the user cannot update the junction object effectively."
        },
        "question-zh": "要更新中间对象的记录，必须定义哪两项访问权限？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "对主关系具有读/写访问权限。" },
            { "key": "B", "text": "对中间对象具有读/写访问权限。" },
            { "key": "C", "text": "对从关系具有读/写访问权限。" },
            { "key": "D", "text": "对主关系具有读取访问权限。" }
        ],
        "explanation-zh": {"A":"更新中间对象需要对主关系父记录具备读/写访问权限。","C":"同样需要对从关系父记录具备读/写访问权限。"},
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "What can be used to override the Account's standard Edit button for Lightning Experience?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Lightning action"
            },
            {
                "key": "B",
                "text": "Lightning component"
            },
            {
                "key": "C",
                "text": "Lightning page"
            },
            {
                "key": "D",
                "text": "Lightning flow"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://help.salesforce.com/s/articleView?id=platform.assign_action_overrides.htm&type=5"
        },
        "question-zh": "在 Lightning Experience 中，可使用什么覆盖 Account 的标准“编辑”按钮？",
        "options-zh": [
            { "key": "A", "text": "Lightning 操作" },
            { "key": "B", "text": "Lightning 组件" },
            { "key": "C", "text": "Lightning 页面" },
            { "key": "D", "text": "Lightning Flow" }
        ],
        "explanation-zh": {"B":"可将 Lightning 组件指定为标准按钮替代项，以实现自定义编辑体验。"},
        "difficulty": "简单",
        "accuracy": 82
    },
    {
        "type": "single_choice",
        "question": "Universal Containers is building a recruiting app with an Applicant object that stores information about an individual person and a Job object that represents a job. Each applicant may apply for more than one job.\nWhat should a developer implement to represent that an applicant has applied for a job?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Master-detail field from Aplicant to Job"
            },
            {
                "key": "B",
                "text": "Junction object between Applicant and Job"
            },
            {
                "key": "C",
                "text": "Lookup field from Applicant to Job"
            },
            {
                "key": "D",
                "text": "Formula field on Applicant that references Job"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": ""
        },
        "question-zh": "Universal Containers 正在构建招聘应用，其中 Applicant 对象存储个人信息，Job 对象表示职位。每位申请人可以申请多个职位。开发人员应实现什么来表示申请人已申请某职位？",
        "options-zh": [
            { "key": "A", "text": "从 Applicant 到 Job 的主从字段。" },
            { "key": "B", "text": "Applicant 与 Job 之间的中间对象。" },
            { "key": "C", "text": "从 Applicant 到 Job 的查找字段。" },
            { "key": "D", "text": "Applicant 上引用 Job 的公式字段。" }
        ],
        "explanation-zh": {"B":"申请人与职位是多对多关系，应使用中间对象表示一次具体申请。"},
        "difficulty": "简单",
        "accuracy": 82
    },
    {
        "type": "single_choice",
        "question": "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an OrderItem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders.\nWhat should a developer do to allow their code to move some existing OrderItem records to a new Order record?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Select the Allow reparenting option on the master-detail relationship."
            },
            {
                "key": "B",
                "text": "Change the master-detail relationship to an external lookup relationship."
            },
            {
                "key": "C",
                "text": "Add without sharing to the Apex class declaration."
            },
            {
                "key": "D",
                "text": "Create a junction object between OrderItem and Order."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "a master-detail relationship typically does not allow the child (OrderItem) to be reassigned to a different parent (Order) once the record is created. However, selecting the Allow reparenting option on the master-detail relationship allows you to change the parent for existing records, which enables you to move OrderItem records from one Order to another."
        },
        "question-zh": "开发人员创建了使用 Apex 类的自定义订单管理应用。订单由 Order 对象表示，OrderItem 通过主从关系关联到 Order。订单处理过程中，一张订单可能被拆分为多张订单。如何让代码将已有的部分 OrderItem 移动到新 Order？",
        "options-zh": [
            { "key": "A", "text": "在主从关系中选择“允许重新设置父记录”选项。" },
            { "key": "B", "text": "将主从关系改为外部查找关系。" },
            { "key": "C", "text": "在 Apex 类声明中添加 `without sharing`。" },
            { "key": "D", "text": "在 OrderItem 和 Order 之间创建中间对象。" }
        ],
        "explanation-zh": {"A":"启用“允许重新设置父记录”后，已有明细记录可改关联到其他主记录。"},
        "difficulty": "简单",
        "accuracy": 80
    },
    {
        "type": "single_choice",
        "question": "A developer is integrating with a legacy on-premise SQL database.\nWhat should the developer use to ensure the data being integrated is matched to the right records in Salesforce?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Lookup field"
            },
            {
                "key": "B",
                "text": "External ID field"
            },
            {
                "key": "C",
                "text": "Formula field"
            },
            {
                "key": "D",
                "text": "External Object"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "External ID field: This is specifically designed for integration scenarios. It is used to uniquely identify and match records in Salesforce with data from external systems. It supports integration and upsert operations without needing Salesforce record IDs."
        },
        "question-zh": "开发人员正在与旧版本地 SQL 数据库集成。应使用什么确保集成数据与 Salesforce 中正确的记录匹配？",
        "options-zh": [
            { "key": "A", "text": "查找字段" },
            { "key": "B", "text": "外部 ID 字段" },
            { "key": "C", "text": "公式字段" },
            { "key": "D", "text": "外部对象" }
        ],
        "explanation-zh": {"B":"外部 ID 用于唯一标识外部系统记录，适合匹配记录并执行 upsert。"},
        "difficulty": "简单",
        "accuracy": 96
    },
    {
        "type": "single_choice",
        "question": "Which process automation should be used to post a message to Chatter without using Apex code?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Outbound Message"
            },
            {
                "key": "B",
                "text": "Entitlement Process"
            },
            {
                "key": "C",
                "text": "Strategy Builder"
            },
            {
                "key": "D",
                "text": "Flow Builder"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "Flow Builder can be used to automate actions like posting messages to Chatter without the need for Apex code. You can create a Flow that posts a message to a Chatter feed based on specific criteria or events. This provides a declarative solution, allowing you to automate the process without writing any code."
        },
        "question-zh": "不使用 Apex 代码时，应使用哪种流程自动化将消息发布到 Chatter？",
        "options-zh": [
            { "key": "A", "text": "出站消息" },
            { "key": "B", "text": "权益流程" },
            { "key": "C", "text": "Strategy Builder" },
            { "key": "D", "text": "Flow Builder" }
        ],
        "explanation-zh": {"D":"Flow 可使用 Chatter 相关操作发布消息，属于声明式自动化。"},
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "single_choice",
        "question": "UC uses a Master-Detail relationship and stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items \nare available.\nWhich method should be used to calculate the estimated ship date for an Order?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use a LATEST formula on each of the latest availability date fields."
            },
            {
                "key": "B",
                "text": "Use a CEILING formula on each of the latest availability date fields."
            },
            {
                "key": "C",
                "text": "Use a MAX Roll-Up Summary field on the latest availability date fields."
            },
            {
                "key": "D",
                "text": "Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "In a Master-Detail relationship, Roll-Up Summary fields allow you to aggregate data from the child records to the parent record. In this case, using a MAX Roll-Up Summary field on the availability date fields will help calculate the latest (maximum) availability date across all Line Items for the Order. Since the Order should be shipped only when all Line Items are available, this approach ensures that the ship date is set to the latest availability date across all related Line Items, indicating the earliest possible shipping date."
        },
        "question-zh": "UC 使用主从关系，并在订单的每个订单行上存储可用日期。只有所有订单行均可用时才发货。应使用哪种方法计算订单的预计发货日期？",
        "options-zh": [
            { "key": "A", "text": "对每个最晚可用日期字段使用 LATEST 公式。" },
            { "key": "B", "text": "对每个最晚可用日期字段使用 CEILING 公式。" },
            { "key": "C", "text": "对可用日期字段使用 MAX 汇总字段。" },
            { "key": "D", "text": "对每个可用日期字段使用 DAYS 公式，并在 Order 上使用 COUNT 汇总字段。" }
        ],
        "explanation-zh": {"C":"订单必须等待最晚可用的订单行；MAX 汇总字段可返回所有订单行中最大的可用日期。"},
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "multiple_choice",
        "question": "A developer created these three roll-up summary fields on the custom object, Project__c:\nTotal_Timesheets__c\nTotal_Approved_Timesheets__c\nTotal_Rejected_Timesheet__c\nThe developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project.\nWhat are two benefits of choosing a formula field instead of an Apex trigger to fulfill the request? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "A test class will validate the formula field during deployment."
            },
            {
                "key": "B",
                "text": "Using a formula field reduces maintenance overhead."
            },
            {
                "key": "C",
                "text": "A formula field will calculate the value retroactively for existing records."
            },
            {
                "key": "D",
                "text": "A formula field will trigger existing automation when delpoyed."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "Formula fields reduce maintenance overhead: Formula fields are declarative and do not require Apex code, so once created, they don’t need ongoing maintenance. They automatically update as data changes, reducing the complexity and upkeep of custom code.\n\nFormula fields calculate retroactively: Formula fields are automatically calculated based on the current data whenever they are accessed. This means the formula value will be immediately available for all existing records without needing to run additional processes, unlike triggers where you would have to re-run logic for historical data.",
            "C": "Formula fields reduce maintenance overhead: Formula fields are declarative and do not require Apex code, so once created, they don’t need ongoing maintenance. They automatically update as data changes, reducing the complexity and upkeep of custom code.\n\nFormula fields calculate retroactively: Formula fields are automatically calculated based on the current data whenever they are accessed. This means the formula value will be immediately available for all existing records without needing to run additional processes, unlike triggers where you would have to re-run logic for historical data."
        },
        "question-zh": "开发人员在 Project__c 上创建了总工时表数、已批准工时表数和被拒绝工时表数三个汇总字段。现在需创建字段以显示被拒绝与已批准工时表的比率。使用公式字段而非 Apex 触发器有哪两项好处？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "测试类会在部署时验证公式字段。" },
            { "key": "B", "text": "使用公式字段可降低维护开销。" },
            { "key": "C", "text": "公式字段会为已有记录追溯计算值。" },
            { "key": "D", "text": "部署公式字段会触发现有自动化。" }
        ],
        "explanation-zh": {"B":"公式字段是声明式配置，无需维护 Apex 代码和测试类。","C":"公式在访问记录时根据当前数据计算，因此对历史记录也会立即生效。"},
        "difficulty": "简单",
        "accuracy": 68
    },
    {
        "type": "single_choice",
        "question": "In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "In the system debug log by filtering on Paused Flow Interview"
            },
            {
                "key": "B",
                "text": "On the Paused Flow Interviews related list for a given record"
            },
            {
                "key": "C",
                "text": "On the Paused Flow Interviews component on the Home page"
            },
            {
                "key": "D",
                "text": "In the Paused Interviews section of the Apex Flex Queue"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://help.salesforce.com/s/articleView?id=platform.flow_pause_cmp.htm&type=5"
        },
        "question-zh": "在 Lightning 用户界面中，开发人员应在哪里查看有关已暂停 Flow Interview 的信息？",
        "options-zh": [
            { "key": "A", "text": "在系统调试日志中按 Paused Flow Interview 过滤。" },
            { "key": "B", "text": "在指定记录的 Paused Flow Interviews 相关列表中。" },
            { "key": "C", "text": "在主页的 Paused Flow Interviews 组件中。" },
            { "key": "D", "text": "在 Apex Flex Queue 的 Paused Interviews 部分中。" }
        ],
        "explanation-zh": {"C":"主页上的 Paused Flow Interviews 组件可显示已暂停的 Flow Interview 信息。"},
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "single_choice",
        "question": "What should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name \"UC\"?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "SELECT lead(id, name), account(id, name), contact(id, name) FROM Lead, Account, Contact WHERE Name = 'UC'"
            },
            {
                "key": "B",
                "text": "FIND 'UC' IN Name Fields RETURNING lead (id, name), account (id, name), contact (id, name)"
            },
            {
                "key": "C",
                "text": "SELECT Lead.id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'UC'"
            },
            {
                "key": "D",
                "text": "FIND 'UC' IN CompanyName Fields RETURNING lead(id, name), account(id, name), contact(id, name)"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_syntax.htm"
        },
        "question-zh": "开发人员应使用什么来获取公司名称为“UC”的所有 Lead、Account 和 Contact 的 Id 与 Name？",
        "options-zh": [
            { "key": "A", "text": "`SELECT lead(id, name), account(id, name), contact(id, name) FROM Lead, Account, Contact WHERE Name = 'UC'`" },
            { "key": "B", "text": "`FIND 'UC' IN Name Fields RETURNING lead(id, name), account(id, name), contact(id, name)`" },
            { "key": "C", "text": "`SELECT Lead.Id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'UC'`" },
            { "key": "D", "text": "`FIND 'UC' IN CompanyName Fields RETURNING lead(id, name), account(id, name), contact(id, name)`" }
        ],
        "explanation-zh": {"B":"S​​OSL 可跨多个对象的 Name 字段搜索，并使用 RETURNING 返回各对象所需字段。"},
        "difficulty": "简单",
        "accuracy": 76
    },
    {
        "type": "multiple_choice",
        "question": "What are two benefits of using declarative customizations over code? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Declarative customizations automatically update with each Salesforce release."
            },
            {
                "key": "B",
                "text": "Declarative customizations cannot generate run time errors."
            },
            {
                "key": "C",
                "text": "Declarative customizations automatically generate test classes."
            },
            {
                "key": "D",
                "text": "Declarative customizations generally require less maintenance."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "Declarative customizations automatically update with each Salesforce release: Salesforce ensures that declarative tools like Process Builder, Flow Builder, and Validation Rules are automatically updated with new Salesforce releases, so they work with the latest features and enhancements without additional effort from the developer.\n\nDeclarative customizations generally require less maintenance: Declarative solutions (e.g., flows, workflows) typically require less ongoing maintenance compared to custom code. They are easier to manage, less prone to errors, and don't require developers to write or update test classes, which is common with Apex code.",
            "D": "Declarative customizations automatically update with each Salesforce release: Salesforce ensures that declarative tools like Process Builder, Flow Builder, and Validation Rules are automatically updated with new Salesforce releases, so they work with the latest features and enhancements without additional effort from the developer.\n\nDeclarative customizations generally require less maintenance: Declarative solutions (e.g., flows, workflows) typically require less ongoing maintenance compared to custom code. They are easier to manage, less prone to errors, and don't require developers to write or update test classes, which is common with Apex code."
        },
        "question-zh": "相较于代码，使用声明式自定义有哪两项好处？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "声明式自定义会随每次 Salesforce 版本发布自动更新。" },
            { "key": "B", "text": "声明式自定义不会产生运行时错误。" },
            { "key": "C", "text": "声明式自定义会自动生成测试类。" },
            { "key": "D", "text": "声明式自定义通常需要更少维护。" }
        ],
        "explanation-zh": {"A":"声明式工具由 Salesforce 平台随版本升级维护和支持。","D":"声明式配置通常比自定义代码更易维护，无需编写或维护 Apex 测试。"},
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "single_choice",
        "question": "The values 'High', 'Medium', and 'Low' are identified as common values for multiple picklists across different objects.\nWhat is an approach a developer can take to streamline maintenance of the picklists and their values, while also restricting \nthe values to the ones mentioned above?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Create the Picklist on each object and use a Global Picklist Value Set containing the values."
            },
            {
                "key": "B",
                "text": "Create the Picklist on each object as a required field and select \"Display values alphabetically, not in the order entered\"."
            },
            {
                "key": "C",
                "text": "Create the Picklist on each object and select \"Restrict picklist to the values defined in the value set\"."
            },
            {
                "key": "D",
                "text": "Create the Picklist on each object and add a validation rule to ensure data integrity."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "sing a Global Picklist Value Set is the best approach because it allows you to define a common set of picklist values ('High', 'Medium', and 'Low') and reuse them across multiple objects. This ensures consistency and makes maintenance easier, as updating the values in the global value set will automatically apply the changes to all picklists using it. It also restricts the picklist values to the ones defined in the global value set."
        },
        "question-zh": "High、Medium 和 Low 是不同对象上多个选项列表共有的值。开发人员应采用什么方法，既简化选项列表和值的维护，又将可选值限制为上述值？",
        "options-zh": [
            { "key": "A", "text": "在每个对象上创建选项列表，并使用包含这些值的全局选项列表值集。" },
            { "key": "B", "text": "在每个对象上将选项列表创建为必填字段，并选择“按字母顺序显示值”。" },
            { "key": "C", "text": "在每个对象上创建选项列表，并选择“将选项列表限制为值集中定义的值”。" },
            { "key": "D", "text": "在每个对象上创建选项列表，并添加验证规则来确保数据完整性。" }
        ],
        "explanation-zh": {"A":"全局选项列表值集可在多个对象间复用，统一维护值，并限制各字段使用该值集。"},
        "difficulty": "简单",
        "accuracy": 89
    },
    {
        "type": "multiple_choice",
        "question": "When importing and exporting data into Salesforce, Which two statement are true?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Data import wizard is a client application provided by Salesforce."
            },
            {
                "key": "B",
                "text": "Developer and Developer Pro sandboxes have different storage limits."
            },
            {
                "key": "C",
                "text": "Bulk API can be used to import large data volumes in development environments without bypassing the storage limits."
            },
            {
                "key": "D",
                "text": "Bulk API can be used to bypass the storage limits when importing large data volumes in development environments."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "Developer and Developer Pro sandboxes have different storage limits: Developer and Developer Pro sandboxes have different storage capacities. Developer sandboxes typically have 200MB of storage, while Developer Pro sandboxes offer 1GB, making them suitable for more extensive data usage in testing and development environments.\n\nBulk API can be used to import large data volumes in development environments without bypassing the storage limits: The Bulk API can be used to handle large datasets during imports in development environments, but it does not bypass Salesforce’s storage limits. Data will still count against the storage quota, but the Bulk API optimizes performance for large data volumes.",
            "C": "Developer and Developer Pro sandboxes have different storage limits: Developer and Developer Pro sandboxes have different storage capacities. Developer sandboxes typically have 200MB of storage, while Developer Pro sandboxes offer 1GB, making them suitable for more extensive data usage in testing and development environments.\n\nBulk API can be used to import large data volumes in development environments without bypassing the storage limits: The Bulk API can be used to handle large datasets during imports in development environments, but it does not bypass Salesforce’s storage limits. Data will still count against the storage quota, but the Bulk API optimizes performance for large data volumes."
        },
        "question-zh": "向 Salesforce 导入或导出数据时，哪两项陈述正确？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "Data Import Wizard 是 Salesforce 提供的客户端应用程序。" },
            { "key": "B", "text": "Developer Sandbox 与 Developer Pro Sandbox 的存储限制不同。" },
            { "key": "C", "text": "Bulk API 可在开发环境导入大量数据，但不会绕过存储限制。" },
            { "key": "D", "text": "Bulk API 可在开发环境导入大量数据时绕过存储限制。" }
        ],
        "explanation-zh": {"B":"Developer 与 Developer Pro 沙盒分配的存储容量不同。","C":"Bulk API 适合大数据量导入，但导入数据仍会计入组织或沙盒的存储配额。"},
        "difficulty": "简单",
        "accuracy": 74
    },
    {
        "type": "single_choice",
        "question": "What is an example of a polymorphic lookup field in Salesforce?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The Leadld and Contactld fields on the standard Campaign Member object"
            },
            {
                "key": "B",
                "text": "A custom field, Link__c, on the standard Contact object that looks up to an Account or a Campaign"
            },
            {
                "key": "C",
                "text": "The Whatld field on the standard Event object"
            },
            {
                "key": "D",
                "text": "The Parentld field on the standard Account object"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "The WhatId field on the standard Event object is an example of a polymorphic lookup field. This field can reference different types of objects, such as Account, Opportunity, or Case, depending on the context. This flexibility makes the WhatId field polymorphic, as it can link to multiple object types."
        },
        "question-zh": "Salesforce 中多态查找字段的示例是什么？",
        "options-zh": [
            { "key": "A", "text": "标准 Campaign Member 对象上的 LeadId 和 ContactId 字段。" },
            { "key": "B", "text": "标准 Contact 对象上可查找 Account 或 Campaign 的自定义字段 Link__c。" },
            { "key": "C", "text": "标准 Event 对象上的 WhatId 字段。" },
            { "key": "D", "text": "标准 Account 对象上的 ParentId 字段。" }
        ],
        "explanation-zh": {"C":"WhatId 可根据上下文引用 Account、Opportunity、Case 等不同对象，因此属于多态查找字段。"},
        "difficulty": "简单",
        "accuracy": 92
    },
    {
        "type": "multiple_choice",
        "question": "UC wants to assess the advantages of declarative development versus programmatic customization for specific use cases in its Salesforce implementation.\n\nWhat are two characteristics of declarative development over programmatic customization? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Declarative development has higher design limits and query limits."
            },
            {
                "key": "B",
                "text": "Declarative development can be done using the Setup UI."
            },
            {
                "key": "C",
                "text": "Declarative development does not require maintenance."
            },
            {
                "key": "D",
                "text": "Declarative development does not require Apex test classes."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "https://help.salesforce.com/s/articleView?id=sf.flow_distribute_deploy_active.htm&type=5",
            "C": "https://help.salesforce.com/s/articleView?id=sf.flow_distribute_deploy_active.htm&type=5"
        },
        "question-zh": "UC 希望评估其 Salesforce 实施中，针对特定用例采用声明式开发相较于程序化自定义的优势。声明式开发有哪些两项特征？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "声明式开发具有更高的设计限制和查询限制。" },
            { "key": "B", "text": "可使用 Setup 用户界面完成声明式开发。" },
            { "key": "C", "text": "声明式开发不需要维护。" },
            { "key": "D", "text": "声明式开发不需要 Apex 测试类。" }
        ],
        "explanation-zh": {"B":"管理员和开发人员可通过 Setup 中的声明式工具配置功能。","C":"声明式配置由平台管理，通常不需要维护自定义代码。"},
        "difficulty": "简单",
        "accuracy": 60
    },
    {
        "type": "multiple_choice",
        "question": "UC decides to use purely declarative development to build out a new Salesforce application.\nWhich three options can be used to build out the business logic layer for this application?Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
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
                "text": "Process Builder"
            },
            {
                "key": "D",
                "text": "Flow Builder"
            },
            {
                "key": "E",
                "text": "Batch Jobs"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C",
            "D"
        ],
        "explanation": {
            "A": "Validation Rules: These are declarative rules that ensure data integrity by enforcing field values based on specific criteria. Validation Rules automatically validate data before records are saved, making them part of the business logic layer.\n\nProcess Builder: Process Builder is a declarative automation tool that allows you to automate business processes like field updates, sending emails, or creating records based on specified conditions. It helps implement business logic by automating actions without needing code.\n\nFlow Builder: Flow Builder enables the creation of guided, multi-step processes (flows) that can automate business logic, including creating, updating, or deleting records. It can also integrate with other Salesforce features, like collecting data from users or invoking other processes.",
            "C": "Validation Rules: These are declarative rules that ensure data integrity by enforcing field values based on specific criteria. Validation Rules automatically validate data before records are saved, making them part of the business logic layer.\n\nProcess Builder: Process Builder is a declarative automation tool that allows you to automate business processes like field updates, sending emails, or creating records based on specified conditions. It helps implement business logic by automating actions without needing code.\n\nFlow Builder: Flow Builder enables the creation of guided, multi-step processes (flows) that can automate business logic, including creating, updating, or deleting records. It can also integrate with other Salesforce features, like collecting data from users or invoking other processes.",
            "D": "Validation Rules: These are declarative rules that ensure data integrity by enforcing field values based on specific criteria. Validation Rules automatically validate data before records are saved, making them part of the business logic layer.\n\nProcess Builder: Process Builder is a declarative automation tool that allows you to automate business processes like field updates, sending emails, or creating records based on specified conditions. It helps implement business logic by automating actions without needing code.\n\nFlow Builder: Flow Builder enables the creation of guided, multi-step processes (flows) that can automate business logic, including creating, updating, or deleting records. It can also integrate with other Salesforce features, like collecting data from users or invoking other processes."
        },
        "question-zh": "UC 决定完全使用声明式开发构建新的 Salesforce 应用程序。可用于构建该应用业务逻辑层的哪三项？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "验证规则" },
            { "key": "B", "text": "Remote Actions" },
            { "key": "C", "text": "Process Builder" },
            { "key": "D", "text": "Flow Builder" },
            { "key": "E", "text": "批处理作业" }
        ],
        "explanation-zh": {"A":"验证规则可声明式地强制执行业务数据规则。","C":"Process Builder 可按条件自动执行业务操作。","D":"Flow Builder 可构建多步骤业务自动化流程。"},
        "difficulty": "简单",
        "accuracy": 89
    },
    {
        "type": "single_choice",
        "question": "A PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's id number and is marked as Unique in the schema definition.\n\nAs part of a data enrichment process, UC has a CSV file that contains updated data for all candidates in the system. The file contains each Candidate's primary id as a data point. UC wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system.\n\nWhich technique should the developer implement to streamline the data upload?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Create a before insert trigger to correctly map the records. "
            },
            {
                "key": "B",
                "text": "Upload the CSV into a custom object related to Candidate__c. "
            },
            {
                "key": "C",
                "text": "Update the Primaryld__c field definition to mark it as an External Id."
            },
            {
                "key": "D",
                "text": "Create a Process Builder on the Candidate__c object to map the records."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://help.salesforce.com/articleView?id=000320964&type=1&mode=1"
        },
        "question-zh": "Candidate__c 自定义对象上有 PrimaryId__c 字段，用于存储候选人 ID 编号，且架构中已标记为唯一。UC 有一个包含所有候选人更新数据的 CSV 文件，其中含每位候选人的主 ID。为了上传时正确匹配每一行与系统中的 Candidate，应采用什么技术？",
        "options-zh": [
            { "key": "A", "text": "创建 before insert 触发器正确映射记录。" },
            { "key": "B", "text": "将 CSV 上传到与 Candidate__c 关联的自定义对象。" },
            { "key": "C", "text": "将 PrimaryId__c 标记为外部 ID。" },
            { "key": "D", "text": "在 Candidate__c 上创建 Process Builder 映射记录。" }
        ],
        "explanation-zh": {"C":"将唯一主 ID 设为外部 ID 后，可在导入时按其执行 upsert，准确匹配现有 Candidate 记录。"},
        "difficulty": "简单",
        "accuracy": 85
    },
    {
        "type": "multiple_choice",
        "question": "What are two characteristics related to formulas? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Formulas can reference themselves."
            },
            {
                "key": "B",
                "text": "Formulas are calculated at runtime and are not stored in the database."
            },
            {
                "key": "C",
                "text": "Fields that are used in a formula field can be deleted or edited without editing the formula."
            },
            {
                "key": "D",
                "text": "Formulas can reference values in related objects."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "Formulas are calculated at runtime and are not stored in the database: Formula fields are computed dynamically when a record is viewed or queried. The values are not stored in the database but are calculated each time they are accessed, ensuring that they always reflect the current state of the data.\n\nFormulas can reference values in related objects: Formula fields can reference fields from related objects, such as parent or child records in a lookup or master-detail relationship. This allows for more flexible calculations based on data from related records.",
            "D": "Formulas are calculated at runtime and are not stored in the database: Formula fields are computed dynamically when a record is viewed or queried. The values are not stored in the database but are calculated each time they are accessed, ensuring that they always reflect the current state of the data.\n\nFormulas can reference values in related objects: Formula fields can reference fields from related objects, such as parent or child records in a lookup or master-detail relationship. This allows for more flexible calculations based on data from related records."
        },
        "question-zh": "公式具有哪两项特性？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "公式可以引用自身。" },
            { "key": "B", "text": "公式在运行时计算，值不存储在数据库中。" },
            { "key": "C", "text": "公式字段所使用的字段可删除或编辑，而无需编辑公式。" },
            { "key": "D", "text": "公式可以引用相关对象中的值。" }
        ],
        "explanation-zh": {"B":"公式字段在访问或查询记录时动态计算，结果不会持久化存储。","D":"公式可通过关系引用父对象等相关对象字段的值。"},
        "difficulty": "简单",
        "accuracy": 75
    },
    {
        "type": "multiple_choice",
        "question": "Which three operations affect the number of times a trigger can fire? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Email messages"
            },
            {
                "key": "B",
                "text": "Roll-Up Summary fields"
            },
            {
                "key": "C",
                "text": "Workflow Rules"
            },
            {
                "key": "D",
                "text": "Criteria-based Sharing calculations"
            },
            {
                "key": "E",
                "text": "Lightning Flows"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C",
            "E"
        ],
        "explanation": {
            "B": "Workflow Rules: Workflow Rules can trigger field updates, and those updates can cause a trigger to fire again if the workflow rule modifies a field that the trigger is monitoring. This can result in multiple trigger executions.\n\nRoll-Up Summary fields: Roll-Up Summary fields update automatically when related records are changed. These updates can affect the parent record, which can cause the trigger to fire again if the trigger is monitoring that field.\n\nLightning Flows: If a Lightning Flow updates a record's field, it can cause a trigger to fire, especially if the flow is updating a field that the trigger is monitoring. This can lead to repeated trigger executions.",
            "C": "Workflow Rules: Workflow Rules can trigger field updates, and those updates can cause a trigger to fire again if the workflow rule modifies a field that the trigger is monitoring. This can result in multiple trigger executions.\n\nRoll-Up Summary fields: Roll-Up Summary fields update automatically when related records are changed. These updates can affect the parent record, which can cause the trigger to fire again if the trigger is monitoring that field.\n\nLightning Flows: If a Lightning Flow updates a record's field, it can cause a trigger to fire, especially if the flow is updating a field that the trigger is monitoring. This can lead to repeated trigger executions.",
            "E": "Workflow Rules: Workflow Rules can trigger field updates, and those updates can cause a trigger to fire again if the workflow rule modifies a field that the trigger is monitoring. This can result in multiple trigger executions.\n\nRoll-Up Summary fields: Roll-Up Summary fields update automatically when related records are changed. These updates can affect the parent record, which can cause the trigger to fire again if the trigger is monitoring that field.\n\nLightning Flows: If a Lightning Flow updates a record's field, it can cause a trigger to fire, especially if the flow is updating a field that the trigger is monitoring. This can lead to repeated trigger executions."
        },
        "question-zh": "哪三种操作会影响触发器在一次事务中执行的次数？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "电子邮件消息" },
            { "key": "B", "text": "汇总字段" },
            { "key": "C", "text": "工作流规则" },
            { "key": "D", "text": "基于条件的共享计算" },
            { "key": "E", "text": "Lightning Flow" }
        ],
        "explanation-zh": {"B":"子记录变更引起汇总字段更新时，父记录可能再次触发触发器。","C":"工作流字段更新会引发记录再次保存并可能再次运行触发器。","E":"Flow 更新记录会执行 DML，从而可触发相关触发器。"},
        "difficulty": "简单",
        "accuracy": 73
    },
    {
        "type": "single_choice",
        "question": "A developer wants to import 500 Opportunity records into a sandbox.\nWhy should the developer choose to use Data Loader instead of Data Import Wizard?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Data Import Wizard does not support Opportunities."
            },
            {
                "key": "B",
                "text": "Data Import Wizard can not import all 500 records."
            },
            {
                "key": "C",
                "text": "Data Loader runs from the developer's browser."
            },
            {
                "key": "D",
                "text": "Data Loader automatically relates Opportunities to Accounts."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "https://help.salesforce.com/s/articleView?id=sf.data_import_wizard.htm&type=5"
        },
        "question-zh": "开发人员希望向沙盒导入 500 条 Opportunity 记录。为什么应选择 Data Loader 而不是 Data Import Wizard？",
        "options-zh": [
            { "key": "A", "text": "Data Import Wizard 不支持 Opportunity。" },
            { "key": "B", "text": "Data Import Wizard 无法导入全部 500 条记录。" },
            { "key": "C", "text": "Data Loader 在开发人员的浏览器中运行。" },
            { "key": "D", "text": "Data Loader 会自动将 Opportunity 关联到 Account。" }
        ],
        "explanation-zh": {"A":"Data Import Wizard 不支持 Opportunity 对象；Data Loader 支持该对象的数据导入。"},
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "Universal Containers has an order system that uses an Order Number to indentify an order for customers and service agents. Order records will be imported into Salesforce. \nHow should the Order Number field be defined in Salesforce?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Indirect Lookup"
            },
            {
                "key": "B",
                "text": "Lookup"
            },
            {
                "key": "C",
                "text": "Number with External ID"
            },
            {
                "key": "D",
                "text": "Direct Lookup"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "The \"Order Number\" should be defined as a Number with External ID in Salesforce because it will be used to uniquely identify orders coming from an external system (during the import). By marking the field as an External ID, Salesforce ensures that the Order Number can be used to quickly match records from external systems and prevent duplicates. The field type \"Number\" is appropriate if the Order Number consists of numeric values, and using it as an External ID allows for easy integration and data matching during import."
        },
        "question-zh": "Universal Containers 的订单系统使用订单编号供客户和服务代理标识订单，订单记录将导入 Salesforce。应如何定义 Order Number 字段？",
        "options-zh": [
            { "key": "A", "text": "间接查找关系" },
            { "key": "B", "text": "查找关系" },
            { "key": "C", "text": "带外部 ID 的数字字段" },
            { "key": "D", "text": "直接查找关系" }
        ],
        "explanation-zh": {"C":"订单编号用于外部导入数据的唯一匹配，因此应定义为数字字段并标记为外部 ID。"},
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "single_choice",
        "question": "An org has an existing Visual Flow that creates an Opportunity with an Update Records element. A developer must update the Visual Flow to also create a Contact and store the created Contact's ID on the Opportunity.\nWhich update should the developer make in the Visual Flow?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Add a new Get Records element."
            },
            {
                "key": "B",
                "text": "Add a new Update Records element."
            },
            {
                "key": "C",
                "text": "Add a new Create Records element."
            },
            {
                "key": "D",
                "text": "Add a new Quick Action(of type Create) element."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "To create a new Contact in the Visual Flow and associate its ID with the Opportunity, the developer needs to add a Create Records element. This element allows the Visual Flow to create a new Contact record and store its ID in a variable. The developer can then use this variable to update the Opportunity with the created Contact's ID. Other options, like \"Get Records\" or \"Update Records,\" are used to fetch or modify existing records, not to create new ones. A Quick Action is unnecessary since the Flow itself handles the creation logic directly."
        },
        "question-zh": "某组织有一个现有 Visual Flow，使用 Update Records 元素创建 Opportunity。开发人员需要更新该 Flow，使其同时创建 Contact，并将新建 Contact 的 ID 存储在 Opportunity 上。应作何更新？",
        "options-zh": [
            { "key": "A", "text": "新增 Get Records 元素。" },
            { "key": "B", "text": "新增 Update Records 元素。" },
            { "key": "C", "text": "新增 Create Records 元素。" },
            { "key": "D", "text": "新增类型为 Create 的 Quick Action 元素。" }
        ],
        "explanation-zh": {"C":"Create Records 可创建 Contact 并将其 ID 保存到变量，随后用该变量更新 Opportunity。"},
        "difficulty": "简单",
        "accuracy": 85
    },
    {
        "type": "single_choice",
        "question": "A custom picklist field Food_Preference__c, exists an a custom object. The picklist contains the following options:\n'Vegan'. 'Kosher', 'No Preference'. The developer must ensure a value is populated every time a record is created or updated.",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Mark the field as Required on the object's page Layout."
            },
            {
                "key": "B",
                "text": "Mark the field as Required on the field definition."
            },
            {
                "key": "C",
                "text": "Set \"Use the first value in the list as default value\" as True."
            },
            {
                "key": "D",
                "text": "Set a validation rule to enforce a value is selected."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "Marking the picklist field as Required on the field definition ensures that a value is always provided whenever a record is created or updated. This approach enforces the requirement at the database level, making it consistent across all operations, including API interactions, data imports, and UI-based updates. Other options, such as marking the field as required on the page layout, only apply to UI interactions, and validation rules, while effective, add additional complexity compared to simply marking the field as required in its definition."
        },
        "question-zh": "某自定义对象上有选项列表字段 Food_Preference__c，包含 Vegan、Kosher 和 No Preference。开发人员必须确保每次创建或更新记录时都填写该字段。应如何配置？",
        "options-zh": [
            { "key": "A", "text": "在对象页面布局上将字段标记为必填。" },
            { "key": "B", "text": "在字段定义中将字段标记为必填。" },
            { "key": "C", "text": "将“使用列表中的第一个值作为默认值”设为 true。" },
            { "key": "D", "text": "创建验证规则，强制用户选择值。" }
        ],
        "explanation-zh": {"B":"在字段定义中设为必填会在数据库层强制要求值，适用于 UI、API 和数据导入等所有方式。"},
        "difficulty": "简单",
        "accuracy": 76
    },
    {
        "type": "multiple_choice",
        "question": "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application.\nWhich three options should be used to build out the database layer for the application? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Relationships"
            },
            {
                "key": "B",
                "text": "Flows"
            },
            {
                "key": "C",
                "text": "Triggers"
            },
            {
                "key": "D",
                "text": "Custom Objects and Fields"
            },
            {
                "key": "E",
                "text": "Roll-up Summaries"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D",
            "E"
        ],
        "explanation": {
            "A": "Relationships - Declarative tools like Lookup and Master-Detail relationships define how objects are linked in the database layer, enabling the creation of relational data structures.\n\nCustom Objects and Fields - These are core building blocks for the database layer in Salesforce. Custom Objects represent new tables in the database, and Custom Fields add columns to those tables, allowing for tailored data storage.\n\nRoll-up Summaries - These are declarative tools used to aggregate data from child records to parent records in Master-Detail relationships, such as sums, counts, or averages.",
            "D": "Relationships - Declarative tools like Lookup and Master-Detail relationships define how objects are linked in the database layer, enabling the creation of relational data structures.\n\nCustom Objects and Fields - These are core building blocks for the database layer in Salesforce. Custom Objects represent new tables in the database, and Custom Fields add columns to those tables, allowing for tailored data storage.\n\nRoll-up Summaries - These are declarative tools used to aggregate data from child records to parent records in Master-Detail relationships, such as sums, counts, or averages.",
            "E": "Relationships - Declarative tools like Lookup and Master-Detail relationships define how objects are linked in the database layer, enabling the creation of relational data structures.\n\nCustom Objects and Fields - These are core building blocks for the database layer in Salesforce. Custom Objects represent new tables in the database, and Custom Fields add columns to those tables, allowing for tailored data storage.\n\nRoll-up Summaries - These are declarative tools used to aggregate data from child records to parent records in Master-Detail relationships, such as sums, counts, or averages."
        },
        "question-zh": "Universal Containers 决定完全使用声明式开发构建新的 Salesforce 应用程序。应使用哪三项构建应用程序的数据层？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "关系" },
            { "key": "B", "text": "Flow" },
            { "key": "C", "text": "触发器" },
            { "key": "D", "text": "自定义对象和字段" },
            { "key": "E", "text": "汇总字段" }
        ],
        "explanation-zh": {"A":"关系定义对象之间的数据结构。","D":"自定义对象和字段是 Salesforce 数据模型的基本构件。","E":"汇总字段可在主从关系中声明式汇总子记录数据。"},
        "difficulty": "简单",
        "accuracy": 66
    },
    {
        "type": "single_choice",
        "question": "An org tracks customer orders on an Order object and the line items of an Order on the Line Item object. The Line Item object has a \nMaster/Detail relationship to the Order object. A developer has requirement to calculate the order amount on an Order and the line amount \non each Line Item based on quantity and price.\nWhat is the correct implementation?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Write a process an the Line Item that calculated the item amount and order amount and updates the fields on the Line Item and the Order."
            },
            {
                "key": "B",
                "text": "Implement the line amount as a numeric formula field and the order amount as a roll-up summary field."
            },
            {
                "key": "C",
                "text": "Implement the line amount as a currency field and the order amount as SUM formula field."
            },
            {
                "key": "D",
                "text": "Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "The best practice for this requirement is to use a numeric formula field on the Line Item object to automatically calculate the line amount based on quantity and price. Additionally, use a roll-up summary field on the Order object to aggregate these line amounts from all related Line Items. This method leverages built-in Salesforce functionality for automatic calculations and aggregations, minimizing the need for custom code and simplifying maintenance."
        },
        "question-zh": "某组织在 Order 对象上跟踪客户订单，在 Line Item 对象上跟踪订单行；Line Item 与 Order 为主从关系。需要根据数量和价格计算每条订单行的金额，并计算订单总金额。正确实现是什么？",
        "options-zh": [
            { "key": "A", "text": "在 Line Item 上编写流程，计算订单行和订单金额并更新字段。" },
            { "key": "B", "text": "将订单行金额实现为数值公式字段，并将订单金额实现为汇总字段。" },
            { "key": "C", "text": "将订单行金额实现为货币字段，并将订单金额实现为 SUM 公式字段。" },
            { "key": "D", "text": "在 Line Item 上编写单一 before 触发器以计算订单行金额并更新订单金额。" }
        ],
        "explanation-zh": {"B":"订单行金额可由数量和单价通过公式实时计算；Order 可通过汇总字段汇总子记录金额，无需代码。"},
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "Which aspect of Apex programming is limited due to multitenancy?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The number of methods in an Apex class"
            },
            {
                "key": "B",
                "text": "The number of records returned from database queries"
            },
            {
                "key": "C",
                "text": "The number of active Apex classes"
            },
            {
                "key": "D",
                "text": "The number of records processed in a loop."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "In Salesforce's multitenant environment, the number of records returned from database queries is limited by governor limits. These limits are in place to ensure that the actions of one tenant do not negatively impact the performance of the shared resources for other tenants on the platform. This helps maintain overall system performance and stability by preventing extensive data retrieval operations that could degrade service."
        },
        "question-zh": "由于多租户架构，Apex 编程的哪一方面会受到限制？",
        "options-zh": [
            { "key": "A", "text": "Apex 类中的方法数量。" },
            { "key": "B", "text": "数据库查询返回的记录数量。" },
            { "key": "C", "text": "活动 Apex 类数量。" },
            { "key": "D", "text": "循环中处理的记录数量。" }
        ],
        "explanation-zh": {"B":"治理限制会限制 SOQL 查询返回或处理的记录数量，以保护共享平台资源。"},
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "multiple_choice",
        "question": "In terms of the MVC paradigm, what are two advantages of implementing the view layer of a Salesforce application using Aura Component-based \ndevelopment over Visualforce?Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Server-side run-time debugging"
            },
            {
                "key": "B",
                "text": "Self-contained and reusable units of an application"
            },
            {
                "key": "C",
                "text": "Automatic code generation"
            },
            {
                "key": "D",
                "text": "Rich component ecosystem"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "1. Self-contained and reusable units of an application - Aura Components are designed to be encapsulated and modular, allowing developers to create components that can be reused in different parts of the application or even across different Salesforce orgs. This modularity enhances application development efficiency and maintainability.\n\n2. Rich component ecosystem - Aura Components benefit from a robust ecosystem of pre-built components that can be leveraged to build applications quickly. Salesforce provides a comprehensive library of components that are optimized for performance and interactivity, facilitating the development of feature-rich, interactive user interfaces.\n\nThese advantages make Aura Components preferable for developing the view layer in Salesforce applications, especially when compared to Visualforce, which lacks the same level of component reusability and ecosystem.",
            "D": "1. Self-contained and reusable units of an application - Aura Components are designed to be encapsulated and modular, allowing developers to create components that can be reused in different parts of the application or even across different Salesforce orgs. This modularity enhances application development efficiency and maintainability.\n\n2. Rich component ecosystem - Aura Components benefit from a robust ecosystem of pre-built components that can be leveraged to build applications quickly. Salesforce provides a comprehensive library of components that are optimized for performance and interactivity, facilitating the development of feature-rich, interactive user interfaces.\n\nThese advantages make Aura Components preferable for developing the view layer in Salesforce applications, especially when compared to Visualforce, which lacks the same level of component reusability and ecosystem."
        },
        "question-zh": "从 MVC 架构角度看，使用 Aura Component 开发 Salesforce 应用程序的视图层，相较于 Visualforce 有哪两项优势？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "服务器端运行时调试。" },
            { "key": "B", "text": "自包含且可复用的应用单元。" },
            { "key": "C", "text": "自动生成代码。" },
            { "key": "D", "text": "丰富的组件生态系统。" }
        ],
        "explanation-zh": {"B":"Aura 组件可封装为模块化、可复用的应用单元。","D":"Lightning 平台提供丰富的现成组件生态系统。"},
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "Universal Containers wants to back up all of the data and attachments in Salesforce org once a month.\nWhich approach should a developer use to meet this requirement?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Schedule a report"
            },
            {
                "key": "B",
                "text": "Create a Schedulable Apex Class"
            },
            {
                "key": "C",
                "text": "Define a Data Export scheduled job."
            },
            {
                "key": "D",
                "text": "Use the data loader command line."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://help.salesforce.com/s/articleView?id=sf.admin_exportdata.htm&type=5"
        },
        "question-zh": "Universal Containers 希望每月一次备份 Salesforce 组织中的全部数据和附件。开发人员应采用什么方式？",
        "options-zh": [
            { "key": "A", "text": "计划运行报表。" },
            { "key": "B", "text": "创建 Schedulable Apex 类。" },
            { "key": "C", "text": "定义 Data Export 计划作业。" },
            { "key": "D", "text": "使用 Data Loader 命令行。" }
        ],
        "explanation-zh": {"C":"Data Export 支持计划导出组织数据及附件，适合定期完整备份。"},
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "UC wants to lower its shipping cost while making the shipping process more efficient. The Distribution Officer advises UC to implement global addresses to allow multiple Accounts to share a default pickup address. The developer is tasked to create the supporting object and relationship for this business requirement and uses the Setup Menu to create a custom object called \"Global Address\".\n\nWhich field should the developer add to create the most efficient model that supports the business need?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Add a Master-Detail field on the Global Address object to the Account object."
            },
            {
                "key": "B",
                "text": "Add a Lookup field on the Account object to the Global Address object."
            },
            {
                "key": "C",
                "text": "Add a Master-Detail field on the Account object to the Global Address object."
            },
            {
                "key": "D",
                "text": "Add a Lookup field on the Global Address object to the Account object."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "multiple Accounts to share a default pickup address, so a Lookup field on the Account object to the Global Address object is Ok."
        },
        "question-zh": "UC 希望降低运输成本并提高运输效率。配送负责人建议实施全局地址，使多个 Account 可共享默认提货地址。开发人员已创建名为 Global Address 的自定义对象。为支持该业务需求，最有效的数据模型应添加哪个字段？",
        "options-zh": [
            { "key": "A", "text": "在 Global Address 对象上添加指向 Account 的主从字段。" },
            { "key": "B", "text": "在 Account 对象上添加指向 Global Address 对象的查找字段。" },
            { "key": "C", "text": "在 Account 对象上添加指向 Global Address 对象的主从字段。" },
            { "key": "D", "text": "在 Global Address 对象上添加指向 Account 对象的查找字段。" }
        ],
        "explanation-zh": {"B":"多个 Account 可通过各自的查找字段引用同一个 Global Address，从而实现地址共享。"},
        "difficulty": "简单",
        "accuracy": 72
    },
    {
        "type": "multiple_choice",
        "question": "A developer at Universal Containers is tasked with implementing a new Salesforce application that must built by their company's Salesforce administrator.\nWhich three options should be considered for building out the business logic layer of the application? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Scheduled Jobs"
            },
            {
                "key": "B",
                "text": "Validation Rules"
            },
            {
                "key": "C",
                "text": "Invocable Actions"
            },
            {
                "key": "D",
                "text": "Workflows"
            },
            {
                "key": "E",
                "text": "Process Builder"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D",
            "E"
        ],
        "explanation": {
            "B": "Declarative tools：Valudation Rules/Workflows/Process Builder",
            "D": "Declarative tools：Valudation Rules/Workflows/Process Builder",
            "E": "Declarative tools：Valudation Rules/Workflows/Process Builder"
        },
        "question-zh": "Universal Containers 的开发人员需要实现一个必须由公司 Salesforce 管理员构建的新应用程序。构建应用业务逻辑层时应考虑哪三项？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "计划作业" },
            { "key": "B", "text": "验证规则" },
            { "key": "C", "text": "可调用操作" },
            { "key": "D", "text": "工作流" },
            { "key": "E", "text": "Process Builder" }
        ],
        "explanation-zh": {"B":"验证规则是管理员可配置的声明式业务规则。","D":"工作流可声明式自动执行业务操作。","E":"Process Builder 可由管理员配置条件驱动的自动化逻辑。"},
        "difficulty": "简单",
        "accuracy": 76
    },
    {
        "type": "single_choice",
        "question": "A developer has the following requirements:\n      Calculate the total amount on an Order.\n      Calculate the amount for each Line Item based on quantity selected and price.\n      Move Line Items to a different Order if a Line Item is not in stock.\nWhich relationship implementation supports these requirements?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Line Item has a Master-Detail field to Order and the Master can be re-parented."
            },
            {
                "key": "B",
                "text": "Order has a Lookup field to Line Item and there can be many Line Item per Order."
            },
            {
                "key": "C",
                "text": "Line Item has a Lookup field to Order and there can be many Line Item per Order."
            },
            {
                "key": "D",
                "text": "Order has a Master-Detail field to Line Item and there can be many Line Item per Order."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "https://help.salesforce.com/s/articleView?id=sf.overview_of_custom_object_relationships.htm&type=5"
        },
        "question-zh": "开发人员有以下需求：计算 Order 总金额；根据选择的数量和价格计算每条 Line Item 金额；若 Line Item 缺货，能够将其移动到不同的 Order。哪种关系实现支持这些需求？",
        "options-zh": [
            { "key": "A", "text": "Line Item 有指向 Order 的主从字段，且允许重新设置主记录。" },
            { "key": "B", "text": "Order 有指向 Line Item 的查找字段，且每个 Order 可有多条 Line Item。" },
            { "key": "C", "text": "Line Item 有指向 Order 的查找字段，且每个 Order 可有多条 Line Item。" },
            { "key": "D", "text": "Order 有指向 Line Item 的主从字段，且每个 Order 可有多条 Line Item。" }
        ],
        "explanation-zh": {"A":"主从关系支持在 Order 上汇总 Line Item 金额；启用重新设置父记录后，Line Item 可移动到其他 Order。"},
        "difficulty": "简单",
        "accuracy": 77
    }
];

export default questions;
