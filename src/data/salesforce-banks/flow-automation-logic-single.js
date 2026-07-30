const questions = [
    {
        "type": "single_choice",
        "question": "An org has an existing flow that edits an Opportunity with an Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity.\nWhich update must the developer make in the flow?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Add a new Update Records element."
            },
            {
                "key": "B",
                "text": "Add a new Roll Back Records element."
            },
            {
                "key": "C",
                "text": "Add a new Create Records element."
            },
            {
                "key": "D",
                "text": "Add a new Get Records element."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "Add a new Create Records element to the flow in order to create a Contact and then store the created Contact's ID on the Opportunity. This element will handle the creation of the new Contact record within the flow."
        },
        "difficulty": "简单",
        "accuracy": 95,
        "question-zh": "一个组织现有的流使用“更新记录”（Update Records）元素编辑商机。开发人员必须更新该流，使其还能够创建联系人（Contact），并将新建联系人的 ID 存储在商机上。开发人员应在流中进行哪项更新？",
        "options-zh": [
            {
                "key": "A",
                "text": "添加一个新的“更新记录”元素。"
            },
            {
                "key": "B",
                "text": "添加一个新的“回滚记录”元素。"
            },
            {
                "key": "C",
                "text": "添加一个新的“创建记录”元素。"
            },
            {
                "key": "D",
                "text": "添加一个新的“获取记录”元素。"
            }
        ],
        "explanation-zh": {
            "C": "向流中添加“创建记录”（Create Records）元素，以创建 Contact 并将新建 Contact 的 ID 存储在 Opportunity 上。该元素负责在流内创建新的 Contact 记录。"
        }
    },
    {
        "type": "single_choice",
        "question": "A company has a custom object, Order__c, that has a required, unique external ID field called Order_Number__c.\nWhich statement should be used to perform the DML necessary to insert new records and update existing records in a list of Order__c records using the external ID field?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "merge orders;"
            },
            {
                "key": "B",
                "text": "merge orders Order_Number__c;"
            },
            {
                "key": "C",
                "text": "upsert orders Order_Number__c;"
            },
            {
                "key": "D",
                "text": "upsert orders;"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "This statement allows for both insertion of new records and updating of existing ones based on the presence of the external ID."
        },
        "difficulty": "简单",
        "accuracy": 88,
        "question-zh": "公司有一个自定义对象 Order__c，其中包含名为 Order_Number__c 的必填且唯一的外部 ID 字段。应使用哪条语句，基于该外部 ID 字段对 Order__c 记录列表执行插入新记录和更新现有记录所需的 DML？",
        "options-zh": [
            {
                "key": "A",
                "text": "merge orders;"
            },
            {
                "key": "B",
                "text": "merge orders Order_Number__c;"
            },
            {
                "key": "C",
                "text": "upsert orders Order_Number__c;"
            },
            {
                "key": "D",
                "text": "upsert orders;"
            }
        ],
        "explanation-zh": {
            "C": "该语句可根据外部 ID 是否存在，同时插入新记录并更新现有记录。"
        }
    },
    {
        "type": "single_choice",
        "question": "A developer created a new after insert trigger on the Lead object that creates Task records for each Lead.\nAfter deploying to production, an existing outside Integration that inserts Lead records in batches to Salesforce is occasionally reporting total batch failures being caused by the Task insert statement. This causes the Integration process in the outside system to stop, requiring a manual restart.\nWhich change should the developer make to allow the Integration to continue when some records in a batch cause failures due to the Task insert statement, so that manual restarts are not needed?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Deactivate the trigger before the integration runs."
            },
            {
                "key": "B",
                "text": "Use a try-catch block after the insert statement."
            },
            {
                "key": "C",
                "text": "Use the Database method with allOrNone set to false."
            },
            {
                "key": "D",
                "text": "Remove the Apex class from the integration user's profile."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_5\n\nThe optional allOrNone parameter specifies whether the operation allows partial success. \nIf you specify false for this parameter and a record fails, the remainder of the DML operation can still succeed. "
        },
        "difficulty": "简单",
        "accuracy": 88,
        "question-zh": "开发人员在 Lead 对象上创建了一个 after insert 触发器，为每个 Lead 创建 Task。部署到生产环境后，外部集成会批量插入 Lead，偶尔因 Task 插入语句而导致整个批次失败，进而使外部集成停止并需要手动重启。为了在批次中部分记录因 Task 插入失败时仍能让集成继续运行，开发人员应作何修改？",
        "options-zh": [
            {
                "key": "A",
                "text": "在集成运行前停用触发器。"
            },
            {
                "key": "B",
                "text": "在 insert 语句后使用 try-catch 块。"
            },
            {
                "key": "C",
                "text": "使用 Database 方法，并将 allOrNone 设为 false。"
            },
            {
                "key": "D",
                "text": "从集成用户的配置文件中移除 Apex 类。"
            }
        ],
        "explanation-zh": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_5\n\n可选的 allOrNone 参数决定操作是否允许部分成功。将该参数设为 false 时，即使某条记录失败，DML 操作中的其余记录仍可成功。"
        }
    },
    {
        "type": "single_choice",
        "question": "A developer wants to improve runtime performance of Apex calls by caching results on the client.\nWhat is the most efficient way to implement this and follow best practices?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Decorate the server-side method with @AuraEnabled(storable=true)"
            },
            {
                "key": "B",
                "text": "Call the setStorable() method on the action in the JavaScript client-side code."
            },
            {
                "key": "C",
                "text": "Decorate the server-side method with @AuraEnabled(cacheable=true)"
            },
            {
                "key": "D",
                "text": "Set a cookie in the browser for use upon return to the page."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_result_caching"
        },
        "difficulty": "简单",
        "accuracy": 96,
        "question-zh": "开发人员希望通过在客户端缓存结果来提高 Apex 调用的运行性能。遵循最佳实践的最高效实现方式是什么？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用 @AuraEnabled(storable=true) 修饰服务器端方法。"
            },
            {
                "key": "B",
                "text": "在 JavaScript 客户端代码中对操作调用 setStorable() 方法。"
            },
            {
                "key": "C",
                "text": "使用 @AuraEnabled(cacheable=true) 修饰服务器端方法。"
            },
            {
                "key": "D",
                "text": "在浏览器中设置 Cookie，以便返回页面时使用。"
            }
        ],
        "explanation-zh": {
            "C": "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.apex_result_caching"
        }
    },
    {
        "type": "single_choice",
        "question": "UC processes orders in Salesforce in a custom object, Order__c. They also allow sales reps to upload CSV files with thousands of orders at a time.\nA developer is tasked with integrating orders places in Salesforce with UC's enterprise resource planning (ERP) system.\nAfter the status for an Order__c is first set to 'Placed', the order information must be sent to a REST endpoint in the ERP system that can process one order at a time.\nWhat should the developer implement to accomplish this?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Flow with a callout from an invovable method"
            },
            {
                "key": "B",
                "text": "Callout from an @future method called from a trigger"
            },
            {
                "key": "C",
                "text": "Callout from a Batchable class called from a scheduled job"
            },
            {
                "key": "D",
                "text": "Callout from a Queueable class from a trigger"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm"
        },
        "difficulty": "简单",
        "accuracy": 61,
        "question-zh": "UC 使用自定义对象 Order__c 在 Salesforce 中处理订单，也允许销售代表一次上传包含数千个订单的 CSV 文件。开发人员需要将 Salesforce 中状态首次设为 Placed 的订单集成到 UC 的 ERP 系统；该系统的 REST 端点一次只能处理一个订单。应实现什么？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用流，并从可调用方法（Invocable Method）发起调用。"
            },
            {
                "key": "B",
                "text": "从触发器调用 @future 方法，再由该方法发起调用。"
            },
            {
                "key": "C",
                "text": "从计划作业调用 Batchable 类，再由该类发起调用。"
            },
            {
                "key": "D",
                "text": "从触发器调用 Queueable 类，再由该类发起调用。"
            }
        ],
        "explanation-zh": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm"
        }
    },
    {
        "type": "single_choice",
        "question": "UMS has a custom object, ServiceJob__c, with an optinal Lookup field to Account called Partner_Service_Provider__c.\nThe TotalJobs__c field on Account tracks the total number of ServiceJob__c records to which a partner service provider Account is related.\nWhat is the most efficient way to ensure that the TotalJobs__c field is kept up to date?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": " Create a schedule-triggered flow on ServiceJob__c"
            },
            {
                "key": "B",
                "text": "Create an Apex trigger on ServiceJob__c"
            },
            {
                "key": "C",
                "text": "Change TotalJobs__c to a roll-up summary field."
            },
            {
                "key": "D",
                "text": "Create a record-triggered flow on ServiceJob__c"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": ""
        },
        "difficulty": "简单",
        "accuracy": 68,
        "question-zh": "UMS 有自定义对象 ServiceJob__c，其中包含可选的、指向 Account 的查找字段 Partner_Service_Provider__c。Account 上的 TotalJobs__c 字段跟踪与合作服务提供商 Account 相关的 ServiceJob__c 记录总数。确保 TotalJobs__c 始终保持最新的最高效方式是什么？",
        "options-zh": [
            {
                "key": "A",
                "text": "在 ServiceJob__c 上创建计划触发流。"
            },
            {
                "key": "B",
                "text": "在 ServiceJob__c 上创建 Apex 触发器。"
            },
            {
                "key": "C",
                "text": "将 TotalJobs__c 改为汇总字段。"
            },
            {
                "key": "D",
                "text": "在 ServiceJob__c 上创建记录触发流。"
            }
        ],
        "explanation-zh": {
            "D": ""
        }
    },
    {
        "type": "single_choice",
        "question": "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "OrgLimits"
            },
            {
                "key": "B",
                "text": "Messaging"
            },
            {
                "key": "C",
                "text": "Exception"
            },
            {
                "key": "D",
                "text": "Limits"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm"
        },
        "difficulty": "简单",
        "accuracy": 90,
        "question-zh": "哪个 Apex 类包含可返回特定治理限制已使用资源量（例如已执行 DML 语句数）的方法？",
        "options-zh": [
            {
                "key": "A",
                "text": "OrgLimits"
            },
            {
                "key": "B",
                "text": "Messaging"
            },
            {
                "key": "C",
                "text": "Exception"
            },
            {
                "key": "D",
                "text": "Limits"
            }
        ],
        "explanation-zh": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_limits.htm"
        }
    },
    {
        "type": "single_choice",
        "question": "As part of a data cleanup strategy, AW Computing wants to proactively delete associated opportunity records when the related Account is deleted.\nWhich automation tool should be used to meet this business requirement?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Outbound messaging"
            },
            {
                "key": "B",
                "text": "Record-triggered flow"
            },
            {
                "key": "C",
                "text": "Scheduled job"
            },
            {
                "key": "D",
                "text": "Flow Orchestration"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "To proactively delete related Opportunity records when an Account is deleted, the best approach is to use a Record-triggered flow.\n\nA Record-triggered flow can be set to trigger when an Account record is deleted. In the flow, you can then use the Delete Records element to remove any related Opportunity records (using a relationship query like AccountId).\n\nOther options like Outbound messaging or Scheduled jobs are not suitable because they don't allow for direct deletion of related records based on a deletion trigger. Flow Orchestration is used for coordinating multiple flows, which isn't necessary for this case."
        },
        "difficulty": "简单",
        "accuracy": 92,
        "question-zh": "作为数据清理策略的一部分，AW Computing 希望在删除相关 Account 时主动删除关联的 Opportunity 记录。应使用哪种自动化工具满足此业务需求？",
        "options-zh": [
            {
                "key": "A",
                "text": "出站消息（Outbound Messaging）。"
            },
            {
                "key": "B",
                "text": "记录触发流（Record-Triggered Flow）。"
            },
            {
                "key": "C",
                "text": "计划作业（Scheduled Job）。"
            },
            {
                "key": "D",
                "text": "流编排（Flow Orchestration）。"
            }
        ],
        "explanation-zh": {
            "B": "当删除 Account 时主动删除关联 Opportunity 的最佳方法是使用记录触发流。该流可在 Account 删除时触发，并使用“删除记录”（Delete Records）元素删除相关 Opportunity（例如根据 AccountId 筛选）。出站消息和计划作业无法依据删除触发器直接删除相关记录；流编排用于协调多个流，此处并非必要。"
        }
    },
    {
        "type": "single_choice",
        "question": "While writing an Apex class, a developer wants to make sure that all functionality being developed is handled as specified by the requirements.\nWhich approach should the developer use to be sure that the Apex class is working according to specifications?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Create a test class to execute the business logic and run the test in the Developer Console."
            },
            {
                "key": "B",
                "text": "Include a try/catch block to the Apex class."
            },
            {
                "key": "C",
                "text": "Run the code in an Execute Anonymous block in the Developer Console."
            },
            {
                "key": "D",
                "text": "Include a savepoint and Database.rollback()."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_intro.htm"
        },
        "difficulty": "简单",
        "accuracy": 93,
        "question-zh": "在编写 Apex 类时，开发人员希望确保正在开发的全部功能均按需求规定执行。开发人员应采用哪种方法来确认 Apex 类符合规格？",
        "options-zh": [
            {
                "key": "A",
                "text": "创建测试类执行业务逻辑，并在开发者控制台运行测试。"
            },
            {
                "key": "B",
                "text": "在 Apex 类中加入 try/catch 块。"
            },
            {
                "key": "C",
                "text": "在开发者控制台的 Execute Anonymous 代码块中运行代码。"
            },
            {
                "key": "D",
                "text": "加入保存点和 Database.rollback()。"
            }
        ],
        "explanation-zh": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_intro.htm"
        }
    },
    {
        "type": "single_choice",
        "question": "A developer migrated functionality from JavaScript Remoting to a Lightning web component and wants to use the existing getOpportunities() method to provide data.\nWhich modification to the method is necessary?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The method must be decorated with (cacheable=true)."
            },
            {
                "key": "B",
                "text": "The method must be decorated with @AuraEnabled."
            },
            {
                "key": "C",
                "text": "The method must return a JSON Object."
            },
            {
                "key": "D",
                "text": "The method must return a String of serialized JSON Array."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm"
        },
        "difficulty": "简单",
        "accuracy": 85,
        "question-zh": "开发人员将功能从 JavaScript Remoting 迁移到 Lightning Web Component，并希望使用现有的 getOpportunities() 方法提供数据。该方法必须进行哪项修改？",
        "options-zh": [
            {
                "key": "A",
                "text": "方法必须使用 (cacheable=true) 修饰。"
            },
            {
                "key": "B",
                "text": "方法必须使用 @AuraEnabled 修饰。"
            },
            {
                "key": "C",
                "text": "方法必须返回 JSON 对象。"
            },
            {
                "key": "D",
                "text": "方法必须返回序列化 JSON 数组的 String。"
            }
        ],
        "explanation-zh": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_AuraEnabled.htm"
        }
    },
    {
        "type": "single_choice",
        "question": "The orderHelper class is a utility class that contains business logic for processing orders. Consider the code snippet:\n\npublic class without sharing OrderHelper{\n//code implementation.\n}\n\nA developer needs to create a constant named DELIVERY_MULTIPLIER with a value of 4.15, The valua of instant should not change at any time in the code.\nHow should the developer declare the DELIVERY_MULTIPLIER Constant to meet the business objectives?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "static decimal DELIVERY MULTIPLIER =4.15;"
            },
            {
                "key": "B",
                "text": "static final decimal DELIVERY MULTIPLIER =4.15;"
            },
            {
                "key": "C",
                "text": "decimal DELIVERY MULTIPLIER =4.15;"
            },
            {
                "key": "D",
                "text": "constant decimal DELIVERY MULTIPLIER =4.15;"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm"
        },
        "difficulty": "简单",
        "accuracy": 93,
        "question-zh": "OrderHelper 是包含订单处理业务逻辑的实用工具类。开发人员需要创建名为 DELIVERY_MULTIPLIER、值为 4.15 的常量，且其值在代码中任何时候均不能改变。应如何声明此常量？",
        "options-zh": [
            {
                "key": "A",
                "text": "static decimal DELIVERY_MULTIPLIER = 4.15;"
            },
            {
                "key": "B",
                "text": "static final decimal DELIVERY_MULTIPLIER = 4.15;"
            },
            {
                "key": "C",
                "text": "decimal DELIVERY_MULTIPLIER = 4.15;"
            },
            {
                "key": "D",
                "text": "constant decimal DELIVERY_MULTIPLIER = 4.15;"
            }
        ],
        "explanation-zh": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm"
        }
    },
    {
        "type": "single_choice",
        "question": "Managers at Universal Containers want to ensure that only decommissioned containers are able the system. To meet the business requirement a Salesforce developer adds \"Decommissioned\"for the status_c custom field within the container_c object.\nWhich tool should the developer use to enforce only Container records with a status of \"Decommissioned\" deleted?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "After record-triggered flow"
            },
            {
                "key": "B",
                "text": "validation rule"
            },
            {
                "key": "C",
                "text": "Before record-triggered flow"
            },
            {
                "key": "D",
                "text": "Apex trigger"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "Requirement: Only \"Decommissioned\" Container records should be allowed to be deleted.\nBefore Record-Triggered Flow: A before trigger is ideal because it allows you to prevent the deletion of a record before the DML operation is executed. In this case, you can check the value of the status_c field and prevent the deletion if it doesn't match \"Decommissioned\"."
        },
        "difficulty": "简单",
        "accuracy": 64,
        "question-zh": "Universal Containers 的管理人员希望确保只有状态为“已退役”（Decommissioned）的容器可从系统中删除。开发人员在 container_c 对象的 status_c 自定义字段中添加了“Decommissioned”值。应使用哪种工具来强制仅删除状态为“Decommissioned”的 Container 记录？",
        "options-zh": [
            {
                "key": "A",
                "text": "记录触发后流。"
            },
            {
                "key": "B",
                "text": "验证规则。"
            },
            {
                "key": "C",
                "text": "记录触发前流。"
            },
            {
                "key": "D",
                "text": "Apex 触发器。"
            }
        ],
        "explanation-zh": {
            "C": "要求是仅允许删除状态为“Decommissioned”的 Container 记录。记录触发前流适用，因为它能在执行 DML 操作之前阻止记录删除。可检查 status_c 字段；若其不等于“Decommissioned”，则阻止删除。"
        }
    },
    {
        "type": "single_choice",
        "question": "A business implemented a gamification plan to encourage its customers to watch some educational videos.\nCustomers can watch videos over several days, and their progress is recorded.Award points are grantedcustomers for all completed videos. When the video is marked as completed in Salesforce, an external webservice must be called so that points can be awarded to the user.\nA developer implemented these requirements in the after update trigger by making a call to an external webservice.However, a Syetem.CalloutException is occurring.\nWhat should the developer do to fix this error?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Move the callout to an asynchronous method with @future(callout=true) annotation."
            },
            {
                "key": "B",
                "text": "Replace the after update trigger with a before insert trigger."
            },
            {
                "key": "C",
                "text": "Surround the external call with a try-catch block to handle the exception."
            },
            {
                "key": "D",
                "text": "Write a REST service to integrate with the external web service."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "Salesforce does not allow synchronous callouts to external web services directly from an after update trigger because it would violate the platform's transaction processing rules. This results in a System.CalloutException.\n\nThe correct solution is to use an asynchronous method, such as one annotated with @future(callout=true), which enables the callout to be performed after the trigger's execution has completed. This avoids holding up the current transaction while making the external HTTP request."
        },
        "difficulty": "简单",
        "accuracy": 80,
        "question-zh": "一家企业实施了游戏化计划，鼓励客户观看教育视频。客户可在数天内观看视频并记录进度；完成视频后授予积分。当视频在 Salesforce 中标记为完成时，必须调用外部 Web 服务为用户授予积分。开发人员在 after update 触发器中直接调用外部 Web 服务，却发生 System.CalloutException。应如何修复？",
        "options-zh": [
            {
                "key": "A",
                "text": "将调用移至使用 @future(callout=true) 注解的异步方法。"
            },
            {
                "key": "B",
                "text": "将 after update 触发器替换为 before insert 触发器。"
            },
            {
                "key": "C",
                "text": "用 try-catch 块包围外部调用。"
            },
            {
                "key": "D",
                "text": "编写 REST 服务与外部 Web 服务集成。"
            }
        ],
        "explanation-zh": {
            "A": "Salesforce 不允许直接从 after update 触发器对外部 Web 服务进行同步调用，否则会违反平台事务处理规则并导致 System.CalloutException。应使用 @future(callout=true) 等异步方法，在触发器执行完成后发起调用，避免当前事务在外部 HTTP 请求期间被阻塞。"
        }
    },
    {
        "type": "single_choice",
        "question": "A custom object Trainer_c has a lookup field to another custom object Gym_c.\nWhich SOQL query will get the record for the Viridian City Gym and all it's trainers?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "SELECT Id,(SELECT Id FROMTrainer_c)FROM Gym__c WHERE Name = \"Viridian City Sym'"
            },
            {
                "key": "B",
                "text": "SELECT ID FROM Trainer__c WHEREGym_r.Name = 'Viridian city Gym'"
            },
            {
                "key": "C",
                "text": "SELECT Id,(SELECT Id FROM Trainers_c)FROM Gym_c WHERE Name = 'Viridian City Gym'"
            },
            {
                "key": "D",
                "text": "SELECT Id,(SELECT Id FROMTrainer__r)FROM Gym_c WHERE Name = 'Viridian City Gym'"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_custom_objects.htm"
        },
        "difficulty": "简单",
        "accuracy": 83,
        "question-zh": "自定义对象 Trainer__c 具有指向另一自定义对象 Gym__c 的查找字段。哪条 SOQL 查询可获取 Viridian City Gym 记录及其所有 Trainer？",
        "options-zh": [
            {
                "key": "A",
                "text": "SELECT Id,(SELECT Id FROMTrainer_c)FROM Gym__c WHERE Name = \"Viridian City Sym'"
            },
            {
                "key": "B",
                "text": "SELECT ID FROM Trainer__c WHEREGym_r.Name = 'Viridian city Gym'"
            },
            {
                "key": "C",
                "text": "SELECT Id,(SELECT Id FROM Trainers_c)FROM Gym_c WHERE Name = 'Viridian City Gym'"
            },
            {
                "key": "D",
                "text": "SELECT Id,(SELECT Id FROMTrainer__r)FROM Gym_c WHERE Name = 'Viridian City Gym'"
            }
        ],
        "explanation-zh": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_custom_objects.htm"
        }
    },
    {
        "type": "single_choice",
        "question": "The Salesforce Administrator created a custom picklist field Account_ status_c, on the Account object. This picklist has possible values of \"Inactive\" and \"Active\". As part of a new business process, management wants to ensure an opportunity record is created only for Accounts marked as Active. A developer is asked to implement this business requirement.\nWhich automation tool should be used to fulfill the business need?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Entitlement Process"
            },
            {
                "key": "B",
                "text": "Salesforce Flow"
            },
            {
                "key": "C",
                "text": "Outbound Messaing"
            },
            {
                "key": "D",
                "text": "Approval Process"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "A Salesforce Flow is the most appropriate automation tool for this requirement. You can create a record-triggered or screen flow that checks the value of the Account_Status__c field on the Account object when an opportunity is being created. The flow can then ensure that the opportunity is only created if the associated account is marked as \"Active.\" If the account is \"Inactive,\" the flow can block the creation of the opportunity, satisfying the business requirement."
        },
        "difficulty": "简单",
        "accuracy": 93,
        "question-zh": "Salesforce 管理员在 Account 对象上创建了自定义选项列表字段 Account_Status__c，其值为 Inactive 和 Active。新业务流程要求仅为标记为 Active 的 Account 创建 Opportunity。开发人员应使用哪种自动化工具实现该需求？",
        "options-zh": [
            {
                "key": "A",
                "text": "服务级别协议流程（Entitlement Process）。"
            },
            {
                "key": "B",
                "text": "Salesforce 流（Flow）。"
            },
            {
                "key": "C",
                "text": "出站消息（Outbound Messaging）。"
            },
            {
                "key": "D",
                "text": "审批流程（Approval Process）。"
            }
        ],
        "explanation-zh": {
            "B": "Salesforce Flow 最适合此需求。可创建记录触发流或屏幕流，在创建 Opportunity 时检查相关 Account 的 Account_Status__c 值。仅当 Account 为 Active 时允许创建；若为 Inactive，则阻止创建 Opportunity。"
        }
    },
    {
        "type": "single_choice",
        "question": "A developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opportunity Status to Closed Lost If the lost reason is blank.\nWhich automation allows the developer to satisfy this requirement in the most efficient manner?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "An error condition formula on a validation rule on Opportunity"
            },
            {
                "key": "B",
                "text": "A record trigger flow on the Opportunity object"
            },
            {
                "key": "C",
                "text": "An approval process on the Opportunity object"
            },
            {
                "key": "D",
                "text": "An Apex trigger on the Opportunity object"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "In a scenario where each applicant can apply for multiple jobs, and each job can have multiple applicants, a junction object is the correct solution. This is because the relationship between Applicant and Job is many-to-many, which cannot be directly represented by standard fields like Master-Detail or Lookup.\n\nA junction object acts as a bridge between the two objects (Applicant and Job) and typically contains two master-detail relationships, one to each of the related objects. This allows you to track which applicants applied for which jobs and provides flexibility for multiple job applications per applicant."
        },
        "difficulty": "简单",
        "accuracy": 62,
        "question-zh": "开发人员需要阻止除 Sales Manager 配置文件用户外的任何人：当丢失原因为空时，将 Opportunity 状态更改为 Closed Lost。哪种自动化能以最高效方式满足该要求？",
        "options-zh": [
            {
                "key": "A",
                "text": "Opportunity 验证规则上的错误条件公式。"
            },
            {
                "key": "B",
                "text": "Opportunity 对象上的记录触发流。"
            },
            {
                "key": "C",
                "text": "Opportunity 对象上的审批流程。"
            },
            {
                "key": "D",
                "text": "Opportunity 对象上的 Apex 触发器。"
            }
        ],
        "explanation-zh": {
            "A": "验证规则可使用错误条件公式检查用户的 Profile、状态是否变为 Closed Lost 以及丢失原因是否为空；条件满足时阻止保存，是此需求最直接且高效的声明式方案。"
        }
    },
    {
        "type": "single_choice",
        "question": "On a brand new developer org, a developer writes a single trigger named AccountTrigger on the Account object to perform complex validations on the after insert and after update DML events. A Salesforce administrator creates a Process Builder to update a custom field within the same object every time an Account is created or updated.\nHow many times will the AccountTrigger fire if a new Account is inserted, assuming no other automation logic is implemented on the Account?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "1"
            },
            {
                "key": "B",
                "text": "2"
            },
            {
                "key": "C",
                "text": "6"
            },
            {
                "key": "D",
                "text": "4"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "When a new Account is inserted:\nThe AccountTrigger runs once for the after insert event.\nThe Process Builder then updates the Account's custom field. This update action causes a second DML operation (update), which fires the AccountTrigger again for the after update event.\nThus, the AccountTrigger fires twice: once for the initial insert and once for the update triggered by the Process Builder."
        },
        "difficulty": "简单",
        "accuracy": 83,
        "question-zh": "在全新的开发人员组织中，开发人员在 Account 对象上编写名为 AccountTrigger 的单一触发器，在 after insert 和 after update 事件中执行复杂验证。管理员创建 Process Builder，每当创建或更新 Account 时更新同一对象上的自定义字段。假定 Account 上没有其他自动化逻辑，插入一个新 Account 时 AccountTrigger 会触发几次？",
        "options-zh": [
            {
                "key": "A",
                "text": "1"
            },
            {
                "key": "B",
                "text": "2"
            },
            {
                "key": "C",
                "text": "6"
            },
            {
                "key": "D",
                "text": "4"
            }
        ],
        "explanation-zh": {
            "B": "插入新 Account 时，AccountTrigger 会因 after insert 运行一次。随后 Process Builder 更新 Account 的自定义字段，产生第二次 DML 更新操作，并触发 AccountTrigger 的 after update。因此触发器共运行两次。"
        }
    },
    {
        "type": "single_choice",
        "question": "<p>Universal Containers uses Service Cloud with a custom field, stage_c, on the Case object.\nManagement wants to send a follow-up email reminder 6 hours after the stage_c field is set to &quot;Waiting on Customer&quot;. The Salesforce Administrator wants to ensure the solution used is bulk safe.\nWhich automation tool should a developer recommend to meet these business requirements?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Record-Triggered Flow</p>"
            },
            {
                "key": "B",
                "text": "<p>Entitlement Process</p>"
            },
            {
                "key": "C",
                "text": "<p>Scheduled Flow</p>"
            },
            {
                "key": "D",
                "text": "<p>Einstein Next Best Action</p>"
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
        "accuracy": 64,
        "question-zh": "<p>Universal Containers 使用 Service Cloud，并在 Case 对象上有自定义字段 stage_c。管理层希望在 stage_c 设为“Waiting on Customer”后 6 小时发送后续电子邮件提醒。管理员希望确保方案可安全处理批量数据。开发人员应推荐哪种自动化工具？</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>记录触发流。</p>"
            },
            {
                "key": "B",
                "text": "<p>服务级别协议流程。</p>"
            },
            {
                "key": "C",
                "text": "<p>计划流。</p>"
            },
            {
                "key": "D",
                "text": "<p>Einstein Next Best Action。</p>"
            }
        ],
        "explanation-zh": {
            "A": ""
        }
    },
    {
        "type": "single_choice",
        "question": "A developer is tasked with performing a complex validation using Apex as part of advanced business logic. When certain criteria are met for a PurchaseOrder, the developer must throw a custom exception.\nWhat is the correct way for the developer to declare a class that can be used as an exception?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "public class PurchaseOrderException implements Exception{}"
            },
            {
                "key": "B",
                "text": "public class PurchaseOrder extends Exception{}"
            },
            {
                "key": "C",
                "text": "public class PurchaseOrderException extends Exception{)"
            },
            {
                "key": "D",
                "text": "public class PurchaseOrder implements Exception{}"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_exception_custom.htm"
        },
        "question-zh": "开发人员需要在高级业务逻辑中使用 Apex 执行复杂验证。当采购订单满足特定条件时，开发人员必须抛出自定义异常。开发人员应如何正确声明可用作异常的类？",
        "options-zh": [
            {
                "key": "A",
                "text": "public class PurchaseOrderException implements Exception{}"
            },
            {
                "key": "B",
                "text": "public class PurchaseOrder extends Exception{}"
            },
            {
                "key": "C",
                "text": "public class PurchaseOrderException extends Exception{}"
            },
            {
                "key": "D",
                "text": "public class PurchaseOrder implements Exception{}"
            }
        ],
        "explanation-zh": {
            "A": "自定义异常类必须继承 Exception；正确语法为 `public class PurchaseOrderException extends Exception {}`。"
        },
        "difficulty": "简单",
        "accuracy": 73
    },
    {
        "type": "single_choice",
        "question": "A Salesforce Administrator is creating a record-triggered flow. When certain criteria are met, the flow must call an Apex method to execute a complex validation involving several types of objects.\nWhen creating the Apex method, which annotation should a developer use to ensure the method can be used within the flow?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "@future"
            },
            {
                "key": "B",
                "text": "@AuraEnabled"
            },
            {
                "key": "C",
                "text": "@InvocableMethod"
            },
            {
                "key": "D",
                "text": "@RemoteAction"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm"
        },
        "question-zh": "Salesforce 管理员正在创建记录触发的流。当满足特定条件时，该流必须调用 Apex 方法，对多种对象执行复杂验证。创建 Apex 方法时，开发人员应使用哪种注解以确保该方法可在流中使用？",
        "options-zh": [
            {
                "key": "A",
                "text": "@future"
            },
            {
                "key": "B",
                "text": "@AuraEnabled"
            },
            {
                "key": "C",
                "text": "@InvocableMethod"
            },
            {
                "key": "D",
                "text": "@RemoteAction"
            }
        ],
        "explanation-zh": {
            "A": "使用 `@InvocableMethod` 注解的方法可作为可调用操作供 Flow 使用。"
        },
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "CK has a multi-screen flow that its call center agents use when handling inbound service desk calls.\nAt one of the steps in the flow, the agents should be presented with a list of order numbers and dates that are retrieved from an external order management system in real time and displayed on the screen.\nWhat should a developer use to satisfy this requirement?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "An Apex REST class"
            },
            {
                "key": "B",
                "text": "An outbound message"
            },
            {
                "key": "C",
                "text": "An Apex controller"
            },
            {
                "key": "D",
                "text": "An invocable method"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "An invocable method: This allows a developer to write Apex code to fetch data from an external system in real time and make it available to the flow. Flows can call this method directly, making it the best choice for integrating external data into the multi-screen flow."
        },
        "question-zh": "CK 有一个供呼叫中心坐席处理呼入服务台电话时使用的多屏流。在其中一步，坐席应看到从外部订单管理系统实时获取并显示在屏幕上的订单编号和日期列表。开发人员应使用什么来满足该需求？",
        "options-zh": [
            {
                "key": "A",
                "text": "Apex REST 类"
            },
            {
                "key": "B",
                "text": "出站消息"
            },
            {
                "key": "C",
                "text": "Apex 控制器"
            },
            {
                "key": "D",
                "text": "可调用方法"
            }
        ],
        "explanation-zh": {
            "A": "可调用方法允许 Flow 直接调用 Apex，从外部系统实时获取数据并提供给屏幕流。"
        },
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "single_choice",
        "question": "A developer is migrating a Visualforce page into a Lightning web component.\nThe Visualforce page shows information about a single record. The developer decides to use Lightning Data Service to access record data.\nWhich security consideration should the developer be aware of？",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Lightning Data Service handles sharing rules and field-level security."
            },
            {
                "key": "B",
                "text": "Lightning Data Service ignores field-level security."
            },
            {
                "key": "C",
                "text": "The ishccessible() method must be used for field-level access checks."
            },
            {
                "key": "D",
                "text": "The with sharing keyword must be used to enforce sharing rules."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "Lightning Data Service automatically enforces sharing rules and field-level security for the record data it retrieves. This means that it respects both the user's visibility into records (sharing rules) and the accessibility of specific fields (field-level security) without the need for the developer to manually implement those checks. This reduces the complexity and ensures that data is retrieved and displayed securely according to the user's permissions."
        },
        "question-zh": "开发人员正将 Visualforce 页面迁移为 Lightning Web Component。该 Visualforce 页面显示单条记录的信息，开发人员决定使用 Lightning Data Service 访问记录数据。开发人员应注意哪项安全性考虑？",
        "options-zh": [
            {
                "key": "A",
                "text": "Lightning Data Service 会处理共享规则和字段级安全性。"
            },
            {
                "key": "B",
                "text": "Lightning Data Service 会忽略字段级安全性。"
            },
            {
                "key": "C",
                "text": "必须使用 `isAccessible()` 方法检查字段访问权限。"
            },
            {
                "key": "D",
                "text": "必须使用 `with sharing` 关键字来强制执行共享规则。"
            }
        ],
        "explanation-zh": {
            "A": "Lightning Data Service 会自动遵从共享规则和字段级安全性，仅返回当前用户有权访问的记录和字段。"
        },
        "difficulty": "简单",
        "accuracy": 80
    },
    {
        "type": "single_choice",
        "question": "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship.\nHow can this be achieved?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Write a trigger on the child object and use a red-black tree sorting to sum the amount for all related child objects under the Opportunity."
            },
            {
                "key": "B",
                "text": "Write a Process Builder that links the custom object to the Opportunity."
            },
            {
                "key": "C",
                "text": "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity."
            },
            {
                "key": "D",
                "text": "Use the Streaming API to create real-time roll-up summaries."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "Since the custom object is not in a master-detail relationship with the Opportunity, you cannot use a roll-up summary field, which is only available in master-detail relationships. Instead, a trigger can be written on the child object (the custom object) to perform an aggregation using SOQL with aggregate functions (like SUM()) to calculate the total amount. The trigger can then update the related Opportunity with the calculated value."
        },
        "question-zh": "需要将某个并非主从关系的自定义对象中的金额汇总到 Opportunity 上。如何实现？",
        "options-zh": [
            {
                "key": "A",
                "text": "在子对象上编写触发器，并使用红黑树排序来汇总该 Opportunity 下所有相关子对象的金额。"
            },
            {
                "key": "B",
                "text": "编写 Process Builder，将自定义对象链接到 Opportunity。"
            },
            {
                "key": "C",
                "text": "在子对象上编写触发器，并使用聚合函数汇总该 Opportunity 下所有相关子对象的金额。"
            },
            {
                "key": "D",
                "text": "使用 Streaming API 创建实时汇总。"
            }
        ],
        "explanation-zh": {
            "A": "没有主从关系时不能使用汇总字段。可在子对象触发器中使用带 `SUM()` 等聚合函数的 SOQL 计算总金额，再更新关联的 Opportunity。"
        },
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "single_choice",
        "question": "Which statement describes the execution order when triggers are associated to the same object and event?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Trigger execution order cannot be guaranteed."
            },
            {
                "key": "B",
                "text": "Triggers are executed in the order they are created."
            },
            {
                "key": "C",
                "text": "Triggers are executed alphabetically by trigger name."
            },
            {
                "key": "D",
                "text": "Triggers are executed in the order they are modified."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "when multiple triggers are associated with the same object and event (such as \"before insert\" or \"after update\"), the execution order is not guaranteed. Salesforce doesn't guarantee the order in which the triggers will run. If you need to control the execution order of logic in triggers, you must use a single trigger and include your logic in that trigger, often utilizing handler classes to manage different operations (e.g., DML operations, logic checks, etc.)."
        },
        "question-zh": "当触发器关联到同一对象和同一事件时，哪项陈述描述了其执行顺序？",
        "options-zh": [
            {
                "key": "A",
                "text": "无法保证触发器的执行顺序。"
            },
            {
                "key": "B",
                "text": "触发器按创建顺序执行。"
            },
            {
                "key": "C",
                "text": "触发器按触发器名称的字母顺序执行。"
            },
            {
                "key": "D",
                "text": "触发器按修改顺序执行。"
            }
        ],
        "explanation-zh": {
            "A": "Salesforce 不保证同一对象、同一事件上的多个触发器的执行顺序。若需要控制顺序，应使用单一触发器并通过处理程序类组织逻辑。"
        },
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "single_choice",
        "question": "UC wants Opportunities to no longer be editable when reaching the Closed/Won stage.\nHow should a developer accomplish this?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use a validation rule."
            },
            {
                "key": "B",
                "text": "Use the Process Automation settings."
            },
            {
                "key": "C",
                "text": "Use Flow Builder."
            },
            {
                "key": "D",
                "text": "Mark fields as read-only on the page layout."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "A validation rule can be created to prevent any edits when the Opportunity reaches the Closed/Won stage. This can be done by checking if the Stage field is set to 'Closed/Won' and using a formula to return TRUE, which will trigger an error if someone tries to make changes. This ensures that Opportunities in the Closed/Won stage are no longer editable, while keeping the logic centralized and declarative."
        },
        "question-zh": "UC 希望 Opportunity 到达 Closed/Won 阶段后不再可编辑。开发人员应如何实现？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用验证规则。"
            },
            {
                "key": "B",
                "text": "使用流程自动化设置。"
            },
            {
                "key": "C",
                "text": "使用 Flow Builder。"
            },
            {
                "key": "D",
                "text": "在页面布局中将字段标记为只读。"
            }
        ],
        "explanation-zh": {
            "A": "使用验证规则可在阶段为 Closed/Won 时阻止任何编辑，并将控制逻辑集中在声明式配置中。"
        },
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "single_choice",
        "question": "A developer created a new trigger that inserts a Task when a new Lead is created. After deploying to production, an outside integration that reads task \nrecords is periodically reporting errors.\nWhich change should the developer make to ensure the integration is not affected with minimal impact to business logic?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use the Database method with allOrNone set to false."
            },
            {
                "key": "B",
                "text": "Deactivate the trigger before the integration runs."
            },
            {
                "key": "C",
                "text": "Use a try-catch block after the insert statement."
            },
            {
                "key": "D",
                "text": "Remove the Apex class from the integration user's profile."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "By using the Database.insert() method with the allOrNone parameter set to false, Salesforce will ensure that if the Task insert fails, it will not cause the entire transaction to fail. This allows the Lead to be created successfully even if there is an issue with inserting the Task, thus minimizing the impact on the business logic and preventing errors in the integration. This approach provides more control over handling partial successes in DML operations."
        },
        "question-zh": "开发人员创建了一个触发器，在新建 Lead 时插入 Task。部署到生产环境后，一个读取 Task 记录的外部集成会间歇性报告错误。开发人员应作何修改，以确保对集成没有影响且尽量减少对业务逻辑的影响？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用 `Database` 方法，并将 `allOrNone` 设为 `false`。"
            },
            {
                "key": "B",
                "text": "在集成运行前停用触发器。"
            },
            {
                "key": "C",
                "text": "在 insert 语句后使用 try-catch 块。"
            },
            {
                "key": "D",
                "text": "从集成用户的配置文件中移除 Apex 类。"
            }
        ],
        "explanation-zh": {
            "A": "使用 `Database.insert(..., false)` 可允许部分 DML 成功；Task 插入失败不会导致整个事务失败，从而避免影响集成。"
        },
        "difficulty": "简单",
        "accuracy": 97
    },
    {
        "type": "single_choice",
        "question": "Which annotation exposes an Apex class as a RESTful web service?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "@AuraEnabled"
            },
            {
                "key": "B",
                "text": "@RestResource"
            },
            {
                "key": "C",
                "text": "@RemoteAction"
            },
            {
                "key": "D",
                "text": "@HttpInvocable"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_rest_resource.htm"
        },
        "question-zh": "哪种注解可将 Apex 类公开为 RESTful Web 服务？",
        "options-zh": [
            {
                "key": "A",
                "text": "@AuraEnabled"
            },
            {
                "key": "B",
                "text": "@RestResource"
            },
            {
                "key": "C",
                "text": "@RemoteAction"
            },
            {
                "key": "D",
                "text": "@HttpInvocable"
            }
        ],
        "explanation-zh": {
            "A": "`@RestResource` 注解将 Apex 类公开为 RESTful Web 服务资源。"
        },
        "difficulty": "简单",
        "accuracy": 76
    },
    {
        "type": "single_choice",
        "question": "What is the value of the Trigger.old context variable in a Before Insert trigger?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "A list of newly created sObjects without IDs"
            },
            {
                "key": "B",
                "text": "Undefined"
            },
            {
                "key": "C",
                "text": "An empty list of sObjects"
            },
            {
                "key": "D",
                "text": "null"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables.htm"
        },
        "question-zh": "在 Before Insert 触发器中，`Trigger.old` 上下文变量的值是什么？",
        "options-zh": [
            {
                "key": "A",
                "text": "没有 ID 的新建 sObject 列表"
            },
            {
                "key": "B",
                "text": "未定义"
            },
            {
                "key": "C",
                "text": "空的 sObject 列表"
            },
            {
                "key": "D",
                "text": "null"
            }
        ],
        "explanation-zh": {
            "A": "`Trigger.old` 仅适用于更新和删除上下文；在插入触发器中其值为 `null`。"
        },
        "difficulty": "简单",
        "accuracy": 80
    },
    {
        "type": "single_choice",
        "question": "Which statement should be used to allow some of the records in a list of records to be inserted if others fail to be inserted?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "insert records"
            },
            {
                "key": "B",
                "text": "Database.insert(records, true)"
            },
            {
                "key": "C",
                "text": "insert(records, false)"
            },
            {
                "key": "D",
                "text": "Database.insert(records, false)"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insert_2"
        },
        "question-zh": "应使用哪条语句，才能在记录列表中的其他记录插入失败时仍允许部分记录插入？",
        "options-zh": [
            {
                "key": "A",
                "text": "insert records"
            },
            {
                "key": "B",
                "text": "Database.insert(records, true)"
            },
            {
                "key": "C",
                "text": "insert(records, false)"
            },
            {
                "key": "D",
                "text": "Database.insert(records, false)"
            }
        ],
        "explanation-zh": {
            "A": "`Database.insert(records, false)` 允许部分成功，不会因单条记录失败而回滚整个列表。"
        },
        "difficulty": "简单",
        "accuracy": 89
    },
    {
        "type": "single_choice",
        "question": "Which action may cause triggers to fire?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Updates to Feed Items"
            },
            {
                "key": "B",
                "text": "Cascading delete operations"
            },
            {
                "key": "C",
                "text": "Renaming or replacing a picklist entry"
            },
            {
                "key": "D",
                "text": "Changing a user's default division when the transfer division option is checked"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_ignoring_operations.htm"
        },
        "question-zh": "哪项操作可能导致触发器触发？",
        "options-zh": [
            {
                "key": "A",
                "text": "更新动态中的 Feed Item"
            },
            {
                "key": "B",
                "text": "级联删除操作"
            },
            {
                "key": "C",
                "text": "重命名或替换选项列表条目"
            },
            {
                "key": "D",
                "text": "在选中转移部门选项时更改用户的默认部门"
            }
        ],
        "explanation-zh": {
            "A": "对 Feed Item 的更新可能触发触发器。"
        },
        "difficulty": "简单",
        "accuracy": 77
    },
    {
        "type": "single_choice",
        "question": "What is the result of the following code?\nAccount a = new Account( );\nDatabase. insert(a, false);",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The record will not be created and no error will be reported ."
            },
            {
                "key": "B",
                "text": "The record will be created and no error will be reported."
            },
            {
                "key": "C",
                "text": "The record will be created and a message will be in the debug log. "
            },
            {
                "key": "D",
                "text": "The record will not be created and an exception will be thrown."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "The code attempts to insert an Account record without setting any required fields. However, because the insert method is called with the false parameter (for partial DML operations), Salesforce will silently ignore the error and not insert the record. No exception will be thrown, and no record will be created. The false parameter allows the DML operation to complete even if there are validation failures, and in this case, the missing required fields (like Name) prevent the record from being inserted.\n\nTo fix this, the developer would need to set the required fields before attempting to insert the record."
        },
        "question-zh": "以下代码的结果是什么？\n`Account a = new Account();`\n`Database.insert(a, false);`",
        "options-zh": [
            {
                "key": "A",
                "text": "不会创建记录，也不会报告错误。"
            },
            {
                "key": "B",
                "text": "会创建记录，且不会报告错误。"
            },
            {
                "key": "C",
                "text": "会创建记录，并在调试日志中显示消息。"
            },
            {
                "key": "D",
                "text": "不会创建记录，并会抛出异常。"
            }
        ],
        "explanation-zh": {
            "A": "Account 缺少必填的 Name 字段。`allOrNone=false` 时不会抛异常；若未检查返回的 SaveResult，插入失败会被静默处理，记录不会创建。"
        },
        "difficulty": "简单",
        "accuracy": 71
    },
    {
        "type": "single_choice",
        "question": "A developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type, and set certain default values based on the record type before inserting the record.\nHow can the developer find the current user's default record type?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use the Schema.userInfo.Opportunity.getDefaultRecordType( ) method."
            },
            {
                "key": "B",
                "text": "Query the Profile where the ID equals userInfo.getProfileID( ) and then use the profile.Opportunity.getDefaultRecordType( ) method."
            },
            {
                "key": "C",
                "text": "Use Opportunity.SObjectType.getDescribe( ).getRecordTypeInfos( ) to get a list of record types, and iterate through them until isDefaultRecordTypeMapping( ) is true."
            },
            {
                "key": "D",
                "text": "Create the opportunity and check the opportunity.recordType before inserting, which will have the record ID of the current user's default record type."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "To find the current user's default record type for Opportunities, you can use the getDescribe() method on the Opportunity object to retrieve metadata about its record types. The method getRecordTypeInfos() returns a list of all record types for the Opportunity object, and you can then iterate through these record types to identify which one is the default by checking the isDefaultRecordTypeMapping() method.\n\nThis approach allows you to dynamically determine the current user's default record type for Opportunity and set default values accordingly."
        },
        "question-zh": "开发人员正在创建一个允许用户创建多个 Opportunity 的页面。需要在插入记录前验证当前用户的默认 Opportunity 记录类型，并根据记录类型设置默认值。开发人员如何找到当前用户的默认记录类型？",
        "options-zh": [
            {
                "key": "A",
                "text": "使用 `Schema.userInfo.Opportunity.getDefaultRecordType()` 方法。"
            },
            {
                "key": "B",
                "text": "查询 ID 等于 `UserInfo.getProfileId()` 的 Profile，然后使用 `profile.Opportunity.getDefaultRecordType()` 方法。"
            },
            {
                "key": "C",
                "text": "使用 `Opportunity.SObjectType.getDescribe().getRecordTypeInfos()` 获取记录类型列表，并遍历至 `isDefaultRecordTypeMapping()` 为 true 的类型。"
            },
            {
                "key": "D",
                "text": "创建 Opportunity，并在插入前检查 `opportunity.recordType`，其中包含当前用户默认记录类型的记录 ID。"
            }
        ],
        "explanation-zh": {
            "A": "通过 Opportunity 的 describe 信息取得 RecordTypeInfo，并以 `isDefaultRecordTypeMapping()` 找到当前用户的默认映射。"
        },
        "difficulty": "简单",
        "accuracy": 75
    },
    {
        "type": "single_choice",
        "question": "The sales management team at Universal Containers requires that the Lead Source field of the Lead record be populated when a Lead is converted.\nWhat should be used to ensure that user poulates the Lead Source field prior to converting a Lead?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Validation Rule"
            },
            {
                "key": "B",
                "text": "Formula Field"
            },
            {
                "key": "C",
                "text": "Process Builder"
            },
            {
                "key": "D",
                "text": "Workflow Rule"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "A Validation Rule is the best option to ensure that the Lead Source field is populated before a Lead is converted. Validation rules allow you to enforce data integrity by preventing the record from being saved if the condition (in this case, the Lead Source field being blank) is not met. By creating a validation rule that checks if the Lead Source field is blank when the Lead status is \"Converted,\" you can ensure that users cannot proceed with the conversion until this field is populated."
        },
        "question-zh": "Universal Containers 的销售管理团队要求：转换 Lead 时，必须填写 Lead 记录的 Lead Source 字段。应使用什么来确保用户在转换 Lead 前填写该字段？",
        "options-zh": [
            {
                "key": "A",
                "text": "验证规则"
            },
            {
                "key": "B",
                "text": "公式字段"
            },
            {
                "key": "C",
                "text": "Process Builder"
            },
            {
                "key": "D",
                "text": "工作流规则"
            }
        ],
        "explanation-zh": {
            "A": "验证规则可在 Lead Source 为空时阻止保存/转换，从而强制用户先填写该字段。"
        },
        "difficulty": "简单",
        "accuracy": 82
    },
    {
        "type": "single_choice",
        "question": "Which action causes a before trigger to fire by default for Accounts?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Renaming or replacing picklists"
            },
            {
                "key": "B",
                "text": "Importing data using the Data Loader and the Bulk API"
            },
            {
                "key": "C",
                "text": "Updating addresses using the Mass Address update tool"
            },
            {
                "key": "D",
                "text": "Converting Leads to Person accounts"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_ignoring_operations.htm"
        },
        "question-zh": "默认情况下，哪项操作会使 Account 的 before 触发器触发？",
        "options-zh": [
            {
                "key": "A",
                "text": "重命名或替换选项列表"
            },
            {
                "key": "B",
                "text": "使用 Data Loader 和 Bulk API 导入数据"
            },
            {
                "key": "C",
                "text": "使用批量地址更新工具更新地址"
            },
            {
                "key": "D",
                "text": "将 Lead 转换为 Person Account"
            }
        ],
        "explanation-zh": {
            "A": "通过 Data Loader 或 Bulk API 导入数据会执行 DML，因此会触发 Account 的 before 触发器。"
        },
        "difficulty": "简单",
        "accuracy": 80
    },
    {
        "type": "single_choice",
        "question": "The Job_Application__c custom object has a field that is a Master-Detail relationship to the Contact object, where the Contact object is the Master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology' while also retrieving the contact's Job_ Application__ c records.\n\nBased on the object's relationships, what is the most efficient statement to retrieve the list of contacts?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "[SELECT Id, (SELECT Id FROM Job_ Application__ c) FROM Contact WHERE Accounts. Industry = 'Technology'];"
            },
            {
                "key": "B",
                "text": "[SELECT Id, (SELECT Id FROM Job_ Application__ c) FROM Contact WHERE Account. Industry = 'Technology'];"
            },
            {
                "key": "C",
                "text": "[SELECT Id, (SELECT Id FROM Job_ Application__ r) FROM Contact WHERE Account. Industry = 'Technology'];"
            },
            {
                "key": "D",
                "text": "[SELECT Id, (SELECT Id FROM Job_ Application__ r) FROM Contact WHERE Accounts. Industry = 'Technology'];"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_custom_objects.htm"
        },
        "question-zh": "自定义对象 Job_Application__c 有一个指向 Contact 的主从关系字段，其中 Contact 为主对象。开发人员需要检索相关 Account 的 Industry 为 Technology 的所有 Contact，并同时取得这些 Contact 的 Job_Application__c 记录。基于对象关系，哪条语句效率最高？",
        "options-zh": [
            {
                "key": "A",
                "text": "[SELECT Id, (SELECT Id FROM Job_Application__c) FROM Contact WHERE Accounts.Industry = 'Technology'];"
            },
            {
                "key": "B",
                "text": "[SELECT Id, (SELECT Id FROM Job_Application__c) FROM Contact WHERE Account.Industry = 'Technology'];"
            },
            {
                "key": "C",
                "text": "[SELECT Id, (SELECT Id FROM Job_Application__r) FROM Contact WHERE Account.Industry = 'Technology'];"
            },
            {
                "key": "D",
                "text": "[SELECT Id, (SELECT Id FROM Job_Application__r) FROM Contact WHERE Accounts.Industry = 'Technology'];"
            }
        ],
        "explanation-zh": {
            "A": "应通过父关系 `Account.Industry` 过滤 Contact，并使用子关系名称 `Job_Application__r` 的子查询取得相关记录。"
        },
        "difficulty": "简单",
        "accuracy": 91
    },
    {
        "type": "single_choice",
        "question": "A developer is debugging the following code to determine why Account are not being created.\nAccount a = new Account(Name='A');\nDatabase.insert(a, false);\n\nHow should the code be altered to help debug the issue?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Collect the insert method return value in a SaveResult record."
            },
            {
                "key": "B",
                "text": "Add a System.debug() statement before the insert method."
            },
            {
                "key": "C",
                "text": "Add a try/catch around the insert method."
            },
            {
                "key": "D",
                "text": "Set the second insert method parameter to TRUE."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "The Database.insert() method, when called with false as the second parameter, performs a partial DML operation and does not throw an exception if an error occurs. Instead, it returns a Database.SaveResult object, which contains information about the success or failure of the operation.\n\nBy collecting this return value, the developer can inspect the SaveResult object to determine whether the insert succeeded and, if it failed, why it failed (e.g., accessing the getErrors() method for details). This approach provides precise debugging information while maintaining code flexibility."
        },
        "question-zh": "开发人员正在调试以下代码，以确定为何未创建 Account。\n`Account a = new Account(Name='A');`\n`Database.insert(a, false);`\n\n应如何修改代码以帮助调试问题？",
        "options-zh": [
            {
                "key": "A",
                "text": "将 insert 方法的返回值保存到 SaveResult 记录中。"
            },
            {
                "key": "B",
                "text": "在 insert 方法前添加 `System.debug()` 语句。"
            },
            {
                "key": "C",
                "text": "在 insert 方法周围添加 try/catch。"
            },
            {
                "key": "D",
                "text": "将 insert 方法的第二个参数设为 TRUE。"
            }
        ],
        "explanation-zh": {
            "A": "当 `Database.insert(..., false)` 出错时不会抛异常，而会返回 `Database.SaveResult`。检查该结果的 `getErrors()` 可获知失败原因。"
        },
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "single_choice",
        "question": "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application, One of the application modules allows the user to \ncalculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by \nthe consumer of the application when developing customizations outside the ISV's package namespace.\nWhich approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Declare the class and method using the global asscess modifier."
            },
            {
                "key": "B",
                "text": "Declare the class and method using the public asscess modifier."
            },
            {
                "key": "C",
                "text": "Declare the class as global and use the public access modifier on the method."
            },
            {
                "key": "D",
                "text": "Declare the class as public and use the global access modifier on the method."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "To ensure that the calculateBodyFat() method in the BodyFat class is accessible outside the managed package namespace, the class and the method both need to be declared with the global access modifier. This modifier is specifically designed for use in managed packages to allow access to classes and members from outside the package namespace, facilitating integration and customization by other developers and applications. Declaring both the class and the method as global provides the necessary visibility to consumers of the application who are developing outside the ISV’s package."
        },
        "question-zh": "Cloud Kicks Fitness 是 Salesforce ISV 合作伙伴，正在开发托管包应用。其中一个模块使用 Apex 类 BodyFat 及其 `calculateBodyFat()` 方法计算体脂。产品负责人希望应用使用者在 ISV 包命名空间外开发自定义功能时也能访问该方法。开发人员应采用何种方法？",
        "options-zh": [
            {
                "key": "A",
                "text": "将类和方法都声明为 `global` 访问修饰符。"
            },
            {
                "key": "B",
                "text": "将类和方法都声明为 `public` 访问修饰符。"
            },
            {
                "key": "C",
                "text": "将类声明为 `global`，方法使用 `public` 访问修饰符。"
            },
            {
                "key": "D",
                "text": "将类声明为 `public`，方法使用 `global` 访问修饰符。"
            }
        ],
        "explanation-zh": {
            "A": "托管包命名空间外的代码要访问类及其方法，两者都必须声明为 `global`。"
        },
        "difficulty": "简单",
        "accuracy": 74
    },
    {
        "type": "single_choice",
        "question": "Given the following Apex statement:\nAccount myAccount = [SELECT Id, Name FROM Account];\nWhat occurs when more than one Account is returned by the SOQL query?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The query fails and an error is written to the debug log."
            },
            {
                "key": "B",
                "text": "The first Account returned is assigned to myAccount."
            },
            {
                "key": "C",
                "text": "The variable, myAccount, is automatically cast to the List data type."
            },
            {
                "key": "D",
                "text": "An unhandled exception is thrown and the code terminates."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "When a SOQL query is used to directly assign results to a single sObject variable like Account myAccount and the query returns more than one record, Salesforce Apex will throw a QueryException. This exception occurs because the single sObject variable cannot hold more than one record, and Apex does not automatically cast the result to a List or choose the first record. If this exception is not caught with a try-catch block, it results in an unhandled exception that terminates the execution of the code."
        },
        "question-zh": "给定以下 Apex 语句：\n`Account myAccount = [SELECT Id, Name FROM Account];`\n当 SOQL 查询返回多个 Account 时会发生什么？",
        "options-zh": [
            {
                "key": "A",
                "text": "查询失败，并在调试日志中写入错误。"
            },
            {
                "key": "B",
                "text": "将返回的第一个 Account 赋给 myAccount。"
            },
            {
                "key": "C",
                "text": "变量 myAccount 会自动转换为 List 数据类型。"
            },
            {
                "key": "D",
                "text": "会抛出未处理异常，代码终止。"
            }
        ],
        "explanation-zh": {
            "A": "将返回多条记录的 SOQL 结果直接赋给单个 sObject 变量会抛出 QueryException；若未捕获，代码将终止。"
        },
        "difficulty": "简单",
        "accuracy": 74
    },
    {
        "type": "single_choice",
        "question": "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to \nhelp sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report can see Accounts they do not own.\nWhat should the developer use to enforce sharing permissions for the currently logged-in user while using the custom search tool?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use the with sharing keyword on the class declaration."
            },
            {
                "key": "B",
                "text": "Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user."
            },
            {
                "key": "C",
                "text": "Use the without sharing keyword on the class declaration."
            },
            {
                "key": "D",
                "text": "Use the schema describe calls to detemine if the logged-in user has access to the Account object."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "Using the with sharing keyword on the Apex class declaration enforces the sharing rules that apply to the currently logged-in user. This ensures that the custom search tool adheres to the private sharing model configured for the Account object, allowing sales representatives to only access Accounts that they are permitted to see based on Salesforce's built-in security and sharing settings. This approach maintains the integrity of data visibility as defined by the organization's sharing policies."
        },
        "question-zh": "Universal Containers 为 Account 对象实施了私有共享模型。使用 Apex 开发的自定义 Account 搜索工具可帮助销售代表按多项指定条件查找客户。发布后，用户报告他们可以看到自己不拥有的 Account。开发人员应使用什么来为当前登录用户强制执行共享权限？",
        "options-zh": [
            {
                "key": "A",
                "text": "在类声明中使用 `with sharing` 关键字。"
            },
            {
                "key": "B",
                "text": "使用 UserInfo Apex 类过滤所有 SOQL 查询，仅返回当前登录用户拥有的记录。"
            },
            {
                "key": "C",
                "text": "在类声明中使用 `without sharing` 关键字。"
            },
            {
                "key": "D",
                "text": "使用 schema describe 调用确定当前登录用户是否有 Account 对象访问权限。"
            }
        ],
        "explanation-zh": {
            "A": "在 Apex 类声明中使用 `with sharing` 会强制执行当前用户的共享规则，使搜索结果遵从私有共享模型。"
        },
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable.\nWhich method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "accountRec.isDeletable()"
            },
            {
                "key": "B",
                "text": "Schema.sObjectType.Account.isDeletable()"
            },
            {
                "key": "C",
                "text": "accountRec.sObjectType.isDeletable()"
            },
            {
                "key": "D",
                "text": "Account.isDeletable()"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "The method Schema.sObjectType.Account.isDeletable() should be used to ensure that only users with the appropriate permissions can delete Accounts. This method checks the user's permissions against the Account object at the schema level to determine if the user has the necessary delete rights. This ensures that the code adheres to the organization's security and access control policies, preventing unauthorized deletions."
        },
        "question-zh": "开发人员必须编写一个由 Lightning 组件调用的 Apex 方法。该方法可能删除存储在 `accountRec` 变量中的 Account。开发人员应使用哪种方法，以确保只有有权删除 Account 的用户才能成功删除？",
        "options-zh": [
            {
                "key": "A",
                "text": "accountRec.isDeletable()"
            },
            {
                "key": "B",
                "text": "Schema.sObjectType.Account.isDeletable()"
            },
            {
                "key": "C",
                "text": "accountRec.sObjectType.isDeletable()"
            },
            {
                "key": "D",
                "text": "Account.isDeletable()"
            }
        ],
        "explanation-zh": {
            "A": "`Schema.sObjectType.Account.isDeletable()` 会在对象级别检查当前用户是否具有删除 Account 的权限。"
        },
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "single_choice",
        "question": "Which exception type cannot be caught?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "A Custom Exception"
            },
            {
                "key": "B",
                "text": "NoAccessException"
            },
            {
                "key": "C",
                "text": "CalloutException"
            },
            {
                "key": "D",
                "text": "LimitException"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_exception_statements.htm"
        },
        "question-zh": "哪种异常类型无法被捕获？",
        "options-zh": [
            {
                "key": "A",
                "text": "自定义异常"
            },
            {
                "key": "B",
                "text": "NoAccessException"
            },
            {
                "key": "C",
                "text": "CalloutException"
            },
            {
                "key": "D",
                "text": "LimitException"
            }
        ],
        "explanation-zh": {
            "A": "Apex 的 `LimitException` 无法通过 try-catch 捕获。"
        },
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "single_choice",
        "question": "A developer has an integer variable called maxAttempts. The developer needs to ensure that once maxAttempts is initialized, it preserves its value for the length of the Apex transaction; while being able to share the variable's state between trigger executions.\n\nHow should the developer declare max attempts to meet these requirements?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Declare maxAttempts as a variable on a helper class."
            },
            {
                "key": "B",
                "text": "Declare maxAttempts as constant using the static and final keywords."
            },
            {
                "key": "C",
                "text": "Declare maxAttempts as a private static variable on a helper class. "
            },
            {
                "key": "D",
                "text": "Declare maxAttempts as a member variable on the trigger definition."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm\nhttps://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm?q=static%20keywords"
        },
        "question-zh": "开发人员有一个名为 `maxAttempts` 的整数变量。需要确保 `maxAttempts` 初始化后在整个 Apex 事务期间保持其值，同时可在多次触发器执行间共享该变量状态。应如何声明 `maxAttempts`？",
        "options-zh": [
            {
                "key": "A",
                "text": "将 maxAttempts 声明为辅助类上的变量。"
            },
            {
                "key": "B",
                "text": "使用 `static` 和 `final` 关键字将 maxAttempts 声明为常量。"
            },
            {
                "key": "C",
                "text": "将 maxAttempts 声明为辅助类上的私有静态变量。"
            },
            {
                "key": "D",
                "text": "将 maxAttempts 声明为触发器定义上的成员变量。"
            }
        ],
        "explanation-zh": {
            "A": "`static final` 常量在事务中保持固定值，且静态状态可在同一事务中的触发器执行间共享。"
        },
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "single_choice",
        "question": "A develper writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules.\nWhat is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on theAccount?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "4"
            },
            {
                "key": "B",
                "text": "2"
            },
            {
                "key": "C",
                "text": "1"
            },
            {
                "key": "D",
                "text": "3"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "When an Account is inserted with an initial count value of zero, the trigger does not act because it is configured for the \"before update\" event only, not on insert. The workflow rule increments the count by 1 on insert, setting it to 1. When the Account is subsequently updated, the trigger increments the count by 1, making it 2. The workflow rule's field update also triggers on update, but it is configured to not re-evaluate workflow rules, thus it increments the count again to 2, but does not trigger further updates. Hence, the final value of the count field after one update is 2."
        },
        "question-zh": "开发人员在 Account 对象上编写了一个 before update 触发器，用于递增计数字段。工作流规则也会在每次创建或更新 Account 时递增该字段，且其字段更新配置为不重新评估工作流规则。假设没有其他自动化逻辑，若插入 Account 时计数初始值为 0，计数字段的值是多少？",
        "options-zh": [
            {
                "key": "A",
                "text": "4"
            },
            {
                "key": "B",
                "text": "2"
            },
            {
                "key": "C",
                "text": "1"
            },
            {
                "key": "D",
                "text": "3"
            }
        ],
        "explanation-zh": {
            "A": "插入时 before update 触发器不会运行；工作流将计数从 0 增加到 1。工作流字段更新引发一次更新，before update 触发器再加 1，最终为 2。"
        },
        "difficulty": "简单",
        "accuracy": 84
    }
];

export default questions;
