const questions = [
    {
        "type": "multiple_choice",
        "question": "Which two scenarious require an Apex method to be called imperatively from a Lightning web component? Choose 2 answers",
        "question-zh": "以下哪两种场景要求从 Lightning Web Component（LWC）中以命令式方式调用 Apex 方法？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Calling a method that makes a web service callout."
            },
            {
                "key": "B",
                "text": "Calling a method that is not annotated with cacheable=true"
            },
            {
                "key": "C",
                "text": "Calling a method with the click of a button"
            },
            {
                "key": "D",
                "text": "Calling a method that is external to the main controller for the Lightning web component"
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "调用会执行 Web 服务调用（Callout）的方法。"
            },
            {
                "key": "B",
                "text": "调用未标注 cacheable=true 的方法。"
            },
            {
                "key": "C",
                "text": "通过按钮点击调用方法。"
            },
            {
                "key": "D",
                "text": "调用 LWC 主控制器外部的方法。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/platform/lwc/guide/apex-call-imperative.html",
            "C": "https://developer.salesforce.com/docs/platform/lwc/guide/apex-call-imperative.html"
        },
        "explanation-zh": {
            "B": "https://developer.salesforce.com/docs/platform/lwc/guide/apex-call-imperative.html",
            "C": "https://developer.salesforce.com/docs/platform/lwc/guide/apex-call-imperative.html"
        },
        "difficulty": "简单",
        "accuracy": 65
    },
    {
        "type": "multiple_choice",
        "question": "Universal Containers has created a unique process for tracking container repairs. A custom Field,Status_c has been created within the container_c custom object. A developer is tasked with sending notifications to multiple external systems every time the value of the status_c picklist changes.\nWhich two tools should the developer use to meet the business requirement and ensure low maintenance of the solution?\nChoose 2 answers",
        "question-zh": "Universal Containers 创建了一个用于跟踪集装箱维修的独特流程。在自定义对象 container_c 上创建了自定义字段 Status_c。开发人员需要在 status_c 选项列表值每次变化时向多个外部系统发送通知。为满足业务需求并确保解决方案维护量较低，应使用哪两种工具？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Record-Triggered flow"
            },
            {
                "key": "B",
                "text": "Apex trigger"
            },
            {
                "key": "C",
                "text": "Apex callouts"
            },
            {
                "key": "D",
                "text": "Platform event"
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "记录触发流（Record-Triggered Flow）。"
            },
            {
                "key": "B",
                "text": "Apex 触发器。"
            },
            {
                "key": "C",
                "text": "Apex 调用（Callout）。"
            },
            {
                "key": "D",
                "text": "平台事件（Platform Event）。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "https://help.salesforce.com/s/articleView?id=sf.platform_events.htm&type=5",
            "D": "https://help.salesforce.com/s/articleView?id=sf.platform_events.htm&type=5"
        },
        "explanation-zh": {
            "B": "https://help.salesforce.com/s/articleView?id=sf.platform_events.htm&type=5",
            "D": "https://help.salesforce.com/s/articleView?id=sf.platform_events.htm&type=5"
        },
        "difficulty": "简单",
        "accuracy": 45
    },
    {
        "type": "multiple_choice",
        "question": "A developer creates a custom exception as shown below:\n\npublic class ParityException extends Exception {}\n\nWhat are two ways the developer can fire the exception in Apex?\nChoose 2 answers",
        "question-zh": "一名开发人员创建了如下自定义异常：\n\npublic class ParityException extends Exception {}\n\n开发人员可以通过哪两种方式在 Apex 中抛出该异常？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "new ParityException('parity does not match');"
            },
            {
                "key": "B",
                "text": "throw new ParityException('parity does not match');"
            },
            {
                "key": "C",
                "text": "throw new ParityException ();"
            },
            {
                "key": "D",
                "text": "new ParityException();"
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "new ParityException('parity does not match');"
            },
            {
                "key": "B",
                "text": "throw new ParityException('parity does not match');"
            },
            {
                "key": "C",
                "text": "throw new ParityException ();"
            },
            {
                "key": "D",
                "text": "new ParityException();"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "throw new ParityException('parity does not match');\n\nThis is a valid way to throw the custom exception. The exception is instantiated with a string argument, which is passed to the constructor of the ParityException class. This string can be used to provide an error message when the exception is caught.\nthrow new ParityException ();\n\nThis is another valid way to throw the exception, where the exception is instantiated without any arguments. In this case, no error message is provided, and the default constructor of the exception class is used.",
            "C": "throw new ParityException('parity does not match');\n\nThis is a valid way to throw the custom exception. The exception is instantiated with a string argument, which is passed to the constructor of the ParityException class. This string can be used to provide an error message when the exception is caught.\nthrow new ParityException ();\n\nThis is another valid way to throw the exception, where the exception is instantiated without any arguments. In this case, no error message is provided, and the default constructor of the exception class is used."
        },
        "explanation-zh": {
            "B": "throw new ParityException('parity does not match');\n\n这是抛出自定义异常的有效方式。异常使用字符串参数实例化，该参数会传递给 ParityException 类的构造函数；捕获异常时，此字符串可用于提供错误消息。\n\nthrow new ParityException ();\n\n这也是抛出异常的有效方式，异常在未传入参数的情况下实例化。此时不会提供错误消息，而会使用异常类的默认构造函数。",
            "C": "throw new ParityException('parity does not match');\n\n这是抛出自定义异常的有效方式。异常使用字符串参数实例化，该参数会传递给 ParityException 类的构造函数；捕获异常时，此字符串可用于提供错误消息。\n\nthrow new ParityException ();\n\n这也是抛出异常的有效方式，异常在未传入参数的情况下实例化。此时不会提供错误消息，而会使用异常类的默认构造函数。"
        },
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "multiple_choice",
        "question": "A company has been adding data to Salesforce and has not done a good job of limiting the creation of duplicate Lead records. The developer is considering writing an Apex process to identify duplicates and merge the recordstogether.\nWhich two statements are valid considerations when using merge?\nChoose 2 answers",
        "question-zh": "一家公司持续向 Salesforce 添加数据，但未能有效限制重复潜在客户（Lead）记录的创建。开发人员正考虑编写 Apex 流程来识别重复项并合并记录。使用 merge 时，以下哪两项是有效注意事项？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "The field values on the master record are overwritten by the records being merged."
            },
            {
                "key": "B",
                "text": "The merge method allows up to three records, including the master and two additional records withthe same sObject type,to be merged into the master record."
            },
            {
                "key": "C",
                "text": "External ID fields can be used with the merge method."
            },
            {
                "key": "D",
                "text": "Merge is supported with accounts, contacts,cases, and leads."
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "主记录上的字段值会被正在合并的记录覆盖。"
            },
            {
                "key": "B",
                "text": "merge 方法最多允许将三条相同 sObject 类型的记录合并到主记录中，其中包括主记录和另外两条记录。"
            },
            {
                "key": "C",
                "text": "merge 方法可以使用外部 ID 字段。"
            },
            {
                "key": "D",
                "text": "merge 支持 Account、Contact、Case 和 Lead。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples_merge.htm",
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples_merge.htm"
        },
        "explanation-zh": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples_merge.htm",
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples_merge.htm"
        },
        "difficulty": "简单",
        "accuracy": 68
    },
    {
        "type": "multiple_choice",
        "question": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in a PostalCodeToTimezone__c custom object.\nWhich two automation tools can be used to implement this feature?\nChoose 2 answers",
        "question-zh": "当用户编辑 Account 上的邮政编码（Postal Code）时，必须根据自定义对象 PostalCodeToTimezone__c 中的值更新名为“Timezone”的 Account 自定义文本字段。可以使用哪两种自动化工具实现该功能？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Fast Field Updates record-triggered flow"
            },
            {
                "key": "B",
                "text": "Approval process"
            },
            {
                "key": "C",
                "text": "Quick actions"
            },
            {
                "key": "D",
                "text": "Account trigger"
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "快速字段更新（Fast Field Updates）记录触发流。"
            },
            {
                "key": "B",
                "text": "审批流程（Approval Process）。"
            },
            {
                "key": "C",
                "text": "快速操作（Quick Actions）。"
            },
            {
                "key": "D",
                "text": "Account 触发器。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "Fast Field Updates record-triggered flow:\nA record-triggered flow can update the \"Timezone\" field efficiently when the \"Postal Code\" is modified. It can query the PostalCodeToTimezone__c object to get the corresponding value and perform the update without requiring Apex code.\n\nAccount trigger:\nA trigger on the Account object can be written in Apex to handle this logic. It would query the PostalCodeToTimezone__c object and update the \"Timezone\" field based on the postal code.\n\n",
            "D": "Fast Field Updates record-triggered flow:\nA record-triggered flow can update the \"Timezone\" field efficiently when the \"Postal Code\" is modified. It can query the PostalCodeToTimezone__c object to get the corresponding value and perform the update without requiring Apex code.\n\nAccount trigger:\nA trigger on the Account object can be written in Apex to handle this logic. It would query the PostalCodeToTimezone__c object and update the \"Timezone\" field based on the postal code.\n\n"
        },
        "explanation-zh": {
            "A": "快速字段更新记录触发流：\n当“Postal Code”被修改时，记录触发流可以高效更新“Timezone”字段。它可以查询 PostalCodeToTimezone__c 对象以获取相应值，并在无需 Apex 代码的情况下执行更新。\n\nAccount 触发器：\n可以在 Account 对象上编写 Apex 触发器来处理此逻辑。该触发器会查询 PostalCodeToTimezone__c 对象，并根据邮政编码更新“Timezone”字段。",
            "D": "快速字段更新记录触发流：\n当“Postal Code”被修改时，记录触发流可以高效更新“Timezone”字段。它可以查询 PostalCodeToTimezone__c 对象以获取相应值，并在无需 Apex 代码的情况下执行更新。\n\nAccount 触发器：\n可以在 Account 对象上编写 Apex 触发器来处理此逻辑。该触发器会查询 PostalCodeToTimezone__c 对象，并根据邮政编码更新“Timezone”字段。"
        },
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "multiple_choice",
        "question": "A developer wants to invoke an outbound message when a record meets a specific criteria.\nWhich two features satisfy this use case?\nChoose 2 answers",
        "question-zh": "一名开发人员希望在记录满足特定条件时调用出站消息（Outbound Message）。以下哪两项功能可以满足此用例？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Flow Builder can be used to check the record criteria and send an outbound message."
            },
            {
                "key": "B",
                "text": "Next Best Action can be used to check the record criteria and send an outbound message."
            },
            {
                "key": "C",
                "text": "Entitlement Process can be used to check the record criteria and send an outbound message without Apex code."
            },
            {
                "key": "D",
                "text": "Approval Process can be used to check the record criteria and send an outbound message withoutApex code."
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "可以使用 Flow Builder 检查记录条件并发送出站消息。"
            },
            {
                "key": "B",
                "text": "可以使用下一步最佳行动（Next Best Action）检查记录条件并发送出站消息。"
            },
            {
                "key": "C",
                "text": "可以使用服务级别协议流程（Entitlement Process）检查记录条件，并且无需 Apex 代码即可发送出站消息。"
            },
            {
                "key": "D",
                "text": "可以使用审批流程（Approval Process）检查记录条件，并且无需 Apex 代码即可发送出站消息。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "Flow Builder:\nFlow Builder allows you to evaluate record criteria and send an outbound message using the Outbound Message action. This approach does not require any Apex code.\n\nApproval Process:\nApproval Process can include an Outbound Message action as part of its steps. When criteria are met, the outbound message is sent without needing Apex code.",
            "D": "Flow Builder:\nFlow Builder allows you to evaluate record criteria and send an outbound message using the Outbound Message action. This approach does not require any Apex code.\n\nApproval Process:\nApproval Process can include an Outbound Message action as part of its steps. When criteria are met, the outbound message is sent without needing Apex code."
        },
        "explanation-zh": {
            "A": "Flow Builder：\nFlow Builder 可通过出站消息操作（Outbound Message Action）评估记录条件并发送出站消息，此方式不需要任何 Apex 代码。\n\n审批流程：\n审批流程可在其步骤中包含出站消息操作。条件满足时，无需 Apex 代码即可发送出站消息。",
            "D": "Flow Builder：\nFlow Builder 可通过出站消息操作（Outbound Message Action）评估记录条件并发送出站消息，此方式不需要任何 Apex 代码。\n\n审批流程：\n审批流程可在其步骤中包含出站消息操作。条件满足时，无需 Apex 代码即可发送出站消息。"
        },
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "multiple_choice",
        "question": "What are two use cases for executing Anonymous Apex code?\nChoose 2 answers",
        "question-zh": "执行匿名 Apex（Anonymous Apex）代码的两种用例是什么？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "To add unit test code coverage to an org"
            },
            {
                "key": "B",
                "text": "To run a batch Apex class to update all Contacts"
            },
            {
                "key": "C",
                "text": "To delete 15,000 inactive Accounts in a single transaction after a deployment"
            },
            {
                "key": "D",
                "text": "To schedule an Apex class to run periodically"
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "为组织增加单元测试代码覆盖率。"
            },
            {
                "key": "B",
                "text": "运行批处理 Apex 类以更新所有联系人（Contact）。"
            },
            {
                "key": "C",
                "text": "在部署后于单个事务中删除 15,000 条非活动 Account。"
            },
            {
                "key": "D",
                "text": "计划定期运行一个 Apex 类。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "Run a batch Apex class to update all Contacts:\nAnonymous Apex can be used to invoke a batch class directly, which is useful for processing large amounts of data, such as updating all Contact records.\n\nSchedule an Apex class to run periodically:\nAnonymous Apex can be used to schedule an Apex class by invoking System.schedule() to define when the class should execute. This is a common use case when configuring scheduled jobs in an org.",
            "D": "Run a batch Apex class to update all Contacts:\nAnonymous Apex can be used to invoke a batch class directly, which is useful for processing large amounts of data, such as updating all Contact records.\n\nSchedule an Apex class to run periodically:\nAnonymous Apex can be used to schedule an Apex class by invoking System.schedule() to define when the class should execute. This is a common use case when configuring scheduled jobs in an org."
        },
        "explanation-zh": {
            "B": "运行批处理 Apex 类以更新所有联系人：\n匿名 Apex 可用于直接调用批处理类，适合处理大量数据，例如更新全部 Contact 记录。\n\n计划定期运行 Apex 类：\n匿名 Apex 可通过调用 System.schedule() 来定义类的执行时间，从而计划定期运行 Apex 类。这是在组织中配置计划作业的常见用例。",
            "D": "运行批处理 Apex 类以更新所有联系人：\n匿名 Apex 可用于直接调用批处理类，适合处理大量数据，例如更新全部 Contact 记录。\n\n计划定期运行 Apex 类：\n匿名 Apex 可通过调用 System.schedule() 来定义类的执行时间，从而计划定期运行 Apex 类。这是在组织中配置计划作业的常见用例。"
        },
        "difficulty": "简单",
        "accuracy": 73
    },
    {
        "type": "multiple_choice",
        "question": "UC hires a developer to build a custom search page to help users find the Accounts they want.\nUsers will be able to search on Name, Description, and a custom comments field.\nWhich consideration should the developer be aware of when deciding between SOQL and SOSL?\nChoose 2 answers",
        "question-zh": "Universal Containers（UC）聘请开发人员构建一个自定义搜索页面，帮助用户找到所需的 Account。用户将能够按名称（Name）、描述（Description）和自定义备注字段搜索。在 SOQL 与 SOSL 之间作出选择时，开发人员应了解哪两项注意事项？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "SOQL is able to return more records."
            },
            {
                "key": "B",
                "text": "SOSL is faster for text searches."
            },
            {
                "key": "C",
                "text": "SOQL is faster for text searches."
            },
            {
                "key": "D",
                "text": "SOSL is able to return more records."
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "SOQL 能够返回更多记录。"
            },
            {
                "key": "B",
                "text": "SOSL 对文本搜索更快。"
            },
            {
                "key": "C",
                "text": "SOQL 对文本搜索更快。"
            },
            {
                "key": "D",
                "text": "SOSL 能够返回更多记录。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "SOQL is able to return more records: SOQL (Salesforce Object Query Language) allows developers to query a specific object (like Account) and return all records that meet the search criteria, subject to the governor limits. SOQL can return up to 50,000 records in a query (without using LIMIT), whereas SOSL is typically used for more specific text-based search scenarios, and it does not return as many records at once.\n\nSOSL is faster for text searches: SOSL (Salesforce Object Search Language) is optimized for text-based searches and can search across multiple objects (like Account, Contact, Opportunity) simultaneously. It is generally faster when performing text searches on fields that contain searchable text (like Name, Description, or custom comments fields), making it more efficient for searching text patterns across multiple fields or objects.",
            "B": "SOQL is able to return more records: SOQL (Salesforce Object Query Language) allows developers to query a specific object (like Account) and return all records that meet the search criteria, subject to the governor limits. SOQL can return up to 50,000 records in a query (without using LIMIT), whereas SOSL is typically used for more specific text-based search scenarios, and it does not return as many records at once.\n\nSOSL is faster for text searches: SOSL (Salesforce Object Search Language) is optimized for text-based searches and can search across multiple objects (like Account, Contact, Opportunity) simultaneously. It is generally faster when performing text searches on fields that contain searchable text (like Name, Description, or custom comments fields), making it more efficient for searching text patterns across multiple fields or objects."
        },
        "explanation-zh": {
            "A": "SOQL 能够返回更多记录：SOQL（Salesforce Object Query Language）允许开发人员查询特定对象（例如 Account），并在治理限制范围内返回符合搜索条件的所有记录。单个 SOQL 查询最多可返回 50,000 条记录（未使用 LIMIT 时）；SOSL 通常用于更特定的基于文本的搜索场景，单次不会返回这么多记录。\n\nSOSL 对文本搜索更快：SOSL（Salesforce Object Search Language）针对文本搜索进行了优化，可同时跨多个对象（如 Account、Contact 和 Opportunity）进行搜索。对包含可搜索文本的字段（如 Name、Description 或自定义备注字段）执行文本搜索时，它通常更快，因此更适合跨多个字段或对象查找文本模式。",
            "B": "SOQL 能够返回更多记录：SOQL（Salesforce Object Query Language）允许开发人员查询特定对象（例如 Account），并在治理限制范围内返回符合搜索条件的所有记录。单个 SOQL 查询最多可返回 50,000 条记录（未使用 LIMIT 时）；SOSL 通常用于更特定的基于文本的搜索场景，单次不会返回这么多记录。\n\nSOSL 对文本搜索更快：SOSL（Salesforce Object Search Language）针对文本搜索进行了优化，可同时跨多个对象（如 Account、Contact 和 Opportunity）进行搜索。对包含可搜索文本的字段（如 Name、Description 或自定义备注字段）执行文本搜索时，它通常更快，因此更适合跨多个字段或对象查找文本模式。"
        },
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "multiple_choice",
        "question": "What are three considerations when using the @InvocableMethod annotation in Apex? Choose 3 answers",
        "question-zh": "在 Apex 中使用 @InvocableMethod 注解时，有哪三项注意事项？请选择 3 个答案。",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Only one method using the @InvocableMethod annotation can be defined per Apex class."
            },
            {
                "key": "B",
                "text": "A method using the @InvocableMethod annotation must be declared as static. "
            },
            {
                "key": "C",
                "text": "A method using the @InvocableMethod annotation must define a return value."
            },
            {
                "key": "D",
                "text": "A method using the @InvocableMethod can have multiple input parameters."
            },
            {
                "key": "E",
                "text": "A method using the @InvocableMethod annotation can be declared as Public or Global."
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "每个 Apex 类中只能定义一个使用 @InvocableMethod 注解的方法。"
            },
            {
                "key": "B",
                "text": "使用 @InvocableMethod 注解的方法必须声明为 static。"
            },
            {
                "key": "C",
                "text": "使用 @InvocableMethod 注解的方法必须定义返回值。"
            },
            {
                "key": "D",
                "text": "使用 @InvocableMethod 的方法可以有多个输入参数。"
            },
            {
                "key": "E",
                "text": "使用 @InvocableMethod 注解的方法可以声明为 public 或 global。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B",
            "E"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm",
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm",
            "E": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm"
        },
        "explanation-zh": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm",
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm",
            "E": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm"
        },
        "difficulty": "简单",
        "accuracy": 65
    },
    {
        "type": "multiple_choice",
        "question": "A developer is implementing an Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debitAmount' should not be able to change once a value is assigned.\nIn which two ways can the developer declare the variables to ensure their value can only be assigned one time? Choose 2 answers",
        "question-zh": "一名开发人员正在为财务系统实现一个 Apex 类。在该类中，变量 creditAmount 和 debitAmount 一旦被赋值后便不应再改变。开发人员可以通过哪两种方式声明变量，以确保其值只能被赋值一次？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Use the final keyword and assign its value in the class constructor. "
            },
            {
                "key": "B",
                "text": "Use the static keyword and assign its value in the dass constructor. "
            },
            {
                "key": "C",
                "text": "Use the static keyword and assign its value in sstatic initializer. "
            },
            {
                "key": "D",
                "text": "Use the final keyword and assign its value when declaring the variable. "
            }
        ],
        "options-zh": [
            {
                "key": "A",
                "text": "使用 final 关键字，并在类构造函数中为其赋值。"
            },
            {
                "key": "B",
                "text": "使用 static 关键字，并在类构造函数中为其赋值。"
            },
            {
                "key": "C",
                "text": "使用 static 关键字，并在静态初始化器中为其赋值。"
            },
            {
                "key": "D",
                "text": "使用 final 关键字，并在声明变量时为其赋值。"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "Use the final keyword and assign its value in the class constructor: The final keyword ensures that once a value is assigned to the variable, it cannot be changed. The value can be assigned in the class constructor, and after that, it is immutable. This is a common practice for setting values that should remain constant after initialization.\n\nUse the final keyword and assign its value when declaring the variable: Another approach is to use the final keyword and assign a value directly when declaring the variable. This ensures the variable is immutable immediately upon declaration and cannot be reassigned later.",
            "D": "Use the final keyword and assign its value in the class constructor: The final keyword ensures that once a value is assigned to the variable, it cannot be changed. The value can be assigned in the class constructor, and after that, it is immutable. This is a common practice for setting values that should remain constant after initialization.\n\nUse the final keyword and assign its value when declaring the variable: Another approach is to use the final keyword and assign a value directly when declaring the variable. This ensures the variable is immutable immediately upon declaration and cannot be reassigned later."
        },
        "explanation-zh": {
            "A": "使用 final 关键字并在类构造函数中赋值：final 关键字确保变量一旦被赋值，其值便无法更改。可在类构造函数中赋值，此后变量不可变。这是设置初始化后应保持常量的值的常见做法。\n\n使用 final 关键字并在声明变量时赋值：另一种方法是使用 final 关键字，并在声明变量时直接赋值。这确保变量在声明后立即不可变，之后不能再次赋值。",
            "D": "使用 final 关键字并在类构造函数中赋值：final 关键字确保变量一旦被赋值，其值便无法更改。可在类构造函数中赋值，此后变量不可变。这是设置初始化后应保持常量的值的常见做法。\n\n使用 final 关键字并在声明变量时赋值：另一种方法是使用 final 关键字，并在声明变量时直接赋值。这确保变量在声明后立即不可变，之后不能再次赋值。"
        },
        "difficulty": "简单",
        "accuracy": 75
    },
    {
        "type": "multiple_choice",
        "question": "A developer identifies the following triggers on the Expense__c object:\ndeleteExpense;\napplyDefaultsToExpense;\nvalidateExpenseUpdate;\n\nThe triggers process before delete, before insert, and before update events respectively.\nWhich two techniques should the developer implement to ensure reigger best practices are followed? Chooose 2 answers",
        "question-zh": "一名开发人员发现 Expense__c 对象上存在以下触发器：\ndeleteExpense；\napplyDefaultsToExpense；\nvalidateExpenseUpdate。\n\n这些触发器分别处理删除前、插入前和更新前事件。为确保遵循触发器最佳实践，开发人员应实施哪两项技术？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Unify all three triggers in a single trigger on the Expense__c object that includes all events."
            },
            {
                "key": "B",
                "text": "Create helper classes to execute the appropriate logic when a record is saved."
            },
            {
                "key": "C",
                "text": "Maintain all three triggers on the Expense__c object, but move the Apex logic out of the trigger definition."
            },
            {
                "key": "D",
                "text": "Unify the before insert and before update triggers and use Process Builder for the delete action."
            }
        ],
        "options-zh": [
            { "key": "A", "text": "在 Expense__c 对象上将三个触发器统一为一个包含所有事件的单一触发器。" },
            { "key": "B", "text": "创建帮助器类，在记录保存时执行相应逻辑。" },
            { "key": "C", "text": "保留 Expense__c 对象上的三个触发器，但将 Apex 逻辑移出触发器定义。" },
            { "key": "D", "text": "合并插入前和更新前触发器，并使用 Process Builder 处理删除操作。" }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "Unify all three triggers in a single trigger on the Expense__c object that includes all events: Salesforce best practices recommend having only one trigger per object to avoid trigger conflicts and ensure that the logic is easier to manage. By combining the before delete, before insert, and before update events into a single trigger, the developer ensures the trigger executes sequentially in the proper order for all related actions.\n\nCreate helper classes to execute the appropriate logic when a record is saved: Using helper classes helps organize the code outside of the trigger itself. This leads to cleaner, more maintainable code, improves testability, and ensures that the trigger only calls out to the logic rather than handling complex logic within the trigger itself.",
            "B": "Unify all three triggers in a single trigger on the Expense__c object that includes all events: Salesforce best practices recommend having only one trigger per object to avoid trigger conflicts and ensure that the logic is easier to manage. By combining the before delete, before insert, and before update events into a single trigger, the developer ensures the trigger executes sequentially in the proper order for all related actions.\n\nCreate helper classes to execute the appropriate logic when a record is saved: Using helper classes helps organize the code outside of the trigger itself. This leads to cleaner, more maintainable code, improves testability, and ensures that the trigger only calls out to the logic rather than handling complex logic within the trigger itself."
        },
        "explanation-zh": {
            "A": "将 Expense__c 对象上的三个触发器统一为一个包含所有事件的单一触发器：Salesforce 最佳实践建议每个对象只使用一个触发器，以避免触发器冲突并使逻辑更易于管理。通过将删除前、插入前和更新前事件合并到单个触发器中，开发人员可以确保针对所有相关操作按适当顺序依次执行触发器。\n\n创建帮助器类，在记录保存时执行相应逻辑：使用帮助器类可将代码组织在触发器外部，使代码更清晰、更易维护并提高可测试性；触发器仅负责调用逻辑，而不在其内部处理复杂逻辑。",
            "B": "将 Expense__c 对象上的三个触发器统一为一个包含所有事件的单一触发器：Salesforce 最佳实践建议每个对象只使用一个触发器，以避免触发器冲突并使逻辑更易于管理。通过将删除前、插入前和更新前事件合并到单个触发器中，开发人员可以确保针对所有相关操作按适当顺序依次执行触发器。\n\n创建帮助器类，在记录保存时执行相应逻辑：使用帮助器类可将代码组织在触发器外部，使代码更清晰、更易维护并提高可测试性；触发器仅负责调用逻辑，而不在其内部处理复杂逻辑。"
        },
        "difficulty": "简单",
        "accuracy": 72
    },
    {
        "type": "multiple_choice",
        "question": "A developer has to identify a method in an Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a DML statement to save the changes to the database.\n\nWhich two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits? Choose 2 answers",
        "question-zh": "开发人员需要识别 Apex 类中一个方法：该方法通过遍历 Account 上 SOQL 语句的结果集，在内存中执行资源密集型操作，并执行 DML 语句将更改保存到数据库。为确保事务控制并避免超出治理限制，开发人员应实施哪两项最佳实践？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Use the Database.Savepoint method to enforce database integrity."
            },
            {
                "key": "B",
                "text": "Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL."
            },
            {
                "key": "C",
                "text": "Use the System.Limit class to monitor the current CPU governor limit consumption. "
            },
            {
                "key": "D",
                "text": "Use Partial DML statements to ensure only valid data is committed."
            }
        ],
        "options-zh": [
            { "key": "A", "text": "使用 Database.Savepoint 方法来确保数据库完整性。" },
            { "key": "B", "text": "使用 @ReadOnly 注解绕过 SOQL 返回行数的限制。" },
            { "key": "C", "text": "使用 System.Limit 类监控当前 CPU 治理限制的消耗。" },
            { "key": "D", "text": "使用部分 DML 语句以确保仅提交有效数据。" }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "Database.Savepoint method - Using Database.Savepoint ensures transaction control by allowing you to roll back changes if an error occurs, maintaining database integrity during resource-intensive operations.\n\nSystem.Limit class - The System.Limit class helps monitor governor limit consumption, such as CPU time and query limits, during the execution of the method. This allows developers to track and optimize resource usage to prevent limit violations.",
            "C": "Database.Savepoint method - Using Database.Savepoint ensures transaction control by allowing you to roll back changes if an error occurs, maintaining database integrity during resource-intensive operations.\n\nSystem.Limit class - The System.Limit class helps monitor governor limit consumption, such as CPU time and query limits, during the execution of the method. This allows developers to track and optimize resource usage to prevent limit violations."
        },
        "explanation-zh": {
            "A": "Database.Savepoint 方法：使用 Database.Savepoint 可在发生错误时回滚更改，从而在资源密集型操作期间保持数据库完整性并确保事务控制。\n\nSystem.Limit 类：System.Limit 类有助于在方法执行过程中监控治理限制的消耗，例如 CPU 时间和查询限制。这样开发人员可跟踪并优化资源使用情况，防止违反限制。",
            "C": "Database.Savepoint 方法：使用 Database.Savepoint 可在发生错误时回滚更改，从而在资源密集型操作期间保持数据库完整性并确保事务控制。\n\nSystem.Limit 类：System.Limit 类有助于在方法执行过程中监控治理限制的消耗，例如 CPU 时间和查询限制。这样开发人员可跟踪并优化资源使用情况，防止违反限制。"
        },
        "difficulty": "简单",
        "accuracy": 71
    },
    {
        "type": "multiple_choice",
        "question": "Which three data types can a SOQL query return? Choose 3 answers",
        "question-zh": "SOQL 查询可以返回哪三种数据类型？请选择 3 个答案。",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Long"
            },
            {
                "key": "B",
                "text": "sObject"
            },
            {
                "key": "C",
                "text": "List"
            },
            {
                "key": "D",
                "text": "Integer"
            },
            {
                "key": "E",
                "text": "Double"
            }
        ],
        "options-zh": [{"key":"A","text":"Long。"},{"key":"B","text":"sObject。"},{"key":"C","text":"List。"},{"key":"D","text":"Integer。"},{"key":"E","text":"Double。"}],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C",
            "D"
        ],
        "explanation": {
            "B": "https://shreysharma.com/soql-return-type/",
            "C": "https://shreysharma.com/soql-return-type/",
            "D": "https://shreysharma.com/soql-return-type/"
        },
        "explanation-zh": {"B":"https://shreysharma.com/soql-return-type/","C":"https://shreysharma.com/soql-return-type/","D":"https://shreysharma.com/soql-return-type/"},
        "difficulty": "简单",
        "accuracy": 89
    },
    {
        "type": "multiple_choice",
        "question": "If Apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which two statement are true regarding governor limits? Choose 2 answers",
        "question-zh": "当实现 Batchable 接口的 Apex 类在 execute() 方法中执行 Apex 代码时，关于治理限制，以下哪两项说法正确？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "The Apex governor limits are reset for each iteration of execute() method."
            },
            {
                "key": "B",
                "text": "The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction."
            },
            {
                "key": "C",
                "text": "The Apex governor limits might be higher due to the asynchronous nature of the transaction."
            },
            {
                "key": "D",
                "text": "The Apex governor limits are relaxed while calling the constructor of the Apex class."
            }
        ],
        "options-zh": [{"key":"A","text":"execute() 方法的每次迭代都会重置 Apex 治理限制。"},{"key":"B","text":"由于事务具有异步性质，因此不会超出 Apex 治理限制。"},{"key":"C","text":"由于事务具有异步性质，Apex 治理限制可能更高。"},{"key":"D","text":"调用 Apex 类构造函数时，Apex 治理限制会放宽。"}],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm",
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm"
        },
        "explanation-zh": {"A":"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm","B":"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm"},
        "difficulty": "简单",
        "accuracy": 60
    },
    {
        "type": "multiple_choice",
        "question": "A developer must create an Apex class, ContactController, that a Lightning component can use to search for Contact records. Users of the \nLightning component should only be able to search for Contact records to which they have access.\nWhich two will restrict records correctly? Choose 2 answers",
        "question-zh": "开发人员必须创建一个名为 ContactController 的 Apex 类，供 Lightning 组件搜索 Contact 记录。该 Lightning 组件的用户只能搜索自己有权访问的 Contact 记录。以下哪两种声明能正确限制记录？请选择 2 个答案。",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "public without sharing class ContactController"
            },
            {
                "key": "B",
                "text": "public class ContactController"
            },
            {
                "key": "C",
                "text": "public inherited sharing class ContactController"
            },
            {
                "key": "D",
                "text": "public with sharing class ContactController"
            }
        ],
        "options-zh": [{"key":"A","text":"public without sharing class ContactController"},{"key":"B","text":"public class ContactController"},{"key":"C","text":"public inherited sharing class ContactController"},{"key":"D","text":"public with sharing class ContactController"}],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm",
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm"
        },
        "explanation-zh": {"C":"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm","D":"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm"},
        "difficulty": "简单",
        "accuracy": 76
    },
    {
        "type": "multiple_choice",
        "question": "Universal Containers recently transitioned from Classic to Lightning Experience. One of its business processes requires \ncontain values from the Opportunity object to be sent via an HTTP REST callout to its external order management system \nbased on a user-initiated action on the Opportunity detail page, Example values are as follows:\nName\nAmount\nAccount\nWhich two methods should the developer implement to fulfill the business requirement?",
        "question-zh": "Universal Containers 最近从 Classic 迁移至 Lightning Experience。其一项业务流程要求根据用户在 Opportunity 详细信息页上发起的操作，通过 HTTP REST 调用将 Opportunity 对象中的值发送到外部订单管理系统，例如 Name、Amount 和 Account。开发人员应实施哪两种方法来满足此业务需求？",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Create an after trigger on the Opportunity object that calls a helper method using @Future(Callout=true) to perform \nthe HTTP REST callout."
            },
            {
                "key": "B",
                "text": "Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component \non the Opportunity detail page."
            },
            {
                "key": "C",
                "text": "Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component \non the Opportunity detail page."
            },
            {
                "key": "D",
                "text": "Create a Process Builder on the Opportunity object that exeutes an Apex immediate action to perform the HTTP RESR callout \nwhenever the Opportunity is updated."
            }
        ],
        "options-zh": [
            {"key":"A","text":"在 Opportunity 对象上创建 after 触发器，调用使用 @Future(Callout=true) 的帮助器方法执行 HTTP REST 调用。"},
            {"key":"B","text":"创建执行 HTTP REST 调用的 Visualforce 页面，并使用 Visualforce 快速操作将组件公开在 Opportunity 详细信息页上。"},
            {"key":"C","text":"创建执行 HTTP REST 调用的 Lightning 组件，并使用 Lightning 操作将组件公开在 Opportunity 详细信息页上。"},
            {"key":"D","text":"在 Opportunity 对象上创建 Process Builder，当 Opportunity 更新时执行 Apex 立即操作以执行 HTTP REST 调用。"}
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "Lightning Component: This method uses the modern features of the Salesforce Lightning framework. A Lightning component can make an HTTP REST callout directly, providing a dynamic user interface with immediate feedback. This option is ideal for user-initiated actions and enhances user interaction on the Opportunity detail page.\n\nAfter Trigger with @Future Method: This approach uses an after trigger on the Opportunity, which calls a helper method marked with @Future(Callout=true) to perform asynchronous HTTP callouts. While not directly initiated by a user interaction, this method efficiently handles data synchronization with external systems following updates to Opportunity records, ensuring that system processes do not interfere with user transactions and providing a fail-safe mechanism for external communication.",
            "C": "Lightning Component: This method uses the modern features of the Salesforce Lightning framework. A Lightning component can make an HTTP REST callout directly, providing a dynamic user interface with immediate feedback. This option is ideal for user-initiated actions and enhances user interaction on the Opportunity detail page.\n\nAfter Trigger with @Future Method: This approach uses an after trigger on the Opportunity, which calls a helper method marked with @Future(Callout=true) to perform asynchronous HTTP callouts. While not directly initiated by a user interaction, this method efficiently handles data synchronization with external systems following updates to Opportunity records, ensuring that system processes do not interfere with user transactions and providing a fail-safe mechanism for external communication."
        },
        "explanation-zh": {
            "A":"Lightning 组件：此方法使用 Salesforce Lightning 框架的现代功能。Lightning 组件可直接发起 HTTP REST 调用，提供具有即时反馈的动态用户界面。它适用于用户发起的操作，并增强 Opportunity 详细信息页上的用户交互。\n\n带 @Future 方法的 after 触发器：此方法在 Opportunity 上使用 after 触发器，该触发器调用标有 @Future(Callout=true) 的帮助器方法来执行异步 HTTP 调用。尽管它并非由用户交互直接启动，但可在 Opportunity 记录更新后高效处理与外部系统的数据同步，确保系统流程不干扰用户事务，并为外部通信提供故障保护机制。",
            "C":"Lightning 组件：此方法使用 Salesforce Lightning 框架的现代功能。Lightning 组件可直接发起 HTTP REST 调用，提供具有即时反馈的动态用户界面。它适用于用户发起的操作，并增强 Opportunity 详细信息页上的用户交互。\n\n带 @Future 方法的 after 触发器：此方法在 Opportunity 上使用 after 触发器，该触发器调用标有 @Future(Callout=true) 的帮助器方法来执行异步 HTTP 调用。尽管它并非由用户交互直接启动，但可在 Opportunity 记录更新后高效处理与外部系统的数据同步，确保系统流程不干扰用户事务，并为外部通信提供故障保护机制。"
        },
        "difficulty": "简单",
        "accuracy": 64
    }
];

export default questions;
