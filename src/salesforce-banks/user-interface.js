const questions = [
    {
        "type": "single_choice",
        "question": "A developer is tasked with building a custom Lightning web component to collect Contact information.\nThe form will be shared among many different types of users in the org. There are security requirements that only certain fields should be edited and viewed by certain groups of users.\nWhat should the developer use in their Lightning Web Component to support the security requirements?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "force-input-field"
            },
            {
                "key": "B",
                "text": "ui-input-field"
            },
            {
                "key": "C",
                "text": "aura-input-field"
            },
            {
                "key": "D",
                "text": "lightning-input-field"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "This component is used within a lightning-record-edit-form or lightning-record-view-form and respects the field-level security and sharing settings of the running user."
        },
        "question-zh": "开发人员需要构建自定义 Lightning Web Component 来收集 Contact 信息。该表单会供组织中多类用户使用；安全要求规定，只有特定用户组能查看或编辑特定字段。开发人员应在 LWC 中使用什么来支持这些安全要求？",
        "options-zh": [
            { "key": "A", "text": "force-input-field" },
            { "key": "B", "text": "ui-input-field" },
            { "key": "C", "text": "aura-input-field" },
            { "key": "D", "text": "lightning-input-field" }
        ],
        "explanation-zh": {"D":"`lightning-input-field` 在 `lightning-record-edit-form` 或 `lightning-record-view-form` 中使用时会遵从运行用户的字段级安全性和共享设置。"},
        "difficulty": "简单",
        "accuracy": 92
    },
    {
        "type": "single_choice",
        "question": "A developer must perform a complex SOQL query that joins two objects in a Lightning component.\nHow can the Lightning component execute the query?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Write the query in a custom Lightning web component wrapper and invoke from the Lightning component."
            },
            {
                "key": "B",
                "text": "Invoke an Apex class with the method annotated as @AuraEnabled to perform the query."
            },
            {
                "key": "C",
                "text": "Use the Salesforce Streaming API to perform the SOQL query."
            },
            {
                "key": "D",
                "text": "Create a flow to execute the query and invoke from the Lightning component."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "Invoke an Apex class with the method annotated as @AuraEnabled to perform the query.\n\nThis is the standard way to execute complex SOQL queries from a Lightning component. The @AuraEnabled annotation makes an Apex method accessible to your Lightning component."
        },
        "question-zh": "开发人员必须在 Lightning 组件中执行一个联结两个对象的复杂 SOQL 查询。Lightning 组件如何执行该查询？",
        "options-zh": [
            { "key": "A", "text": "在自定义 Lightning Web Component 包装器中编写查询，并从 Lightning 组件调用。" },
            { "key": "B", "text": "调用带 `@AuraEnabled` 注解方法的 Apex 类来执行查询。" },
            { "key": "C", "text": "使用 Salesforce Streaming API 执行 SOQL 查询。" },
            { "key": "D", "text": "创建 Flow 执行查询，并从 Lightning 组件调用。" }
        ],
        "explanation-zh": {"B":"`@AuraEnabled` 使 Apex 方法可供 Lightning 组件调用，是从组件执行复杂 SOQL 的标准方式。"},
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "Universal Containers decided to transition from Classic to Lightning Experience. They asked a developer to replace a JavaScript button that was being used to create records with prepopulated values.\nWhat can the developer use to accomplish this?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Validation rules"
            },
            {
                "key": "B",
                "text": "Apex triggers"
            },
            {
                "key": "C",
                "text": "Record triggered flows"
            },
            {
                "key": "D",
                "text": "Quick Actions"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "Quick Actions in Salesforce Lightning Experience can be configured to create records with predefined values, making them a suitable replacement for JavaScript buttons used in Salesforce Classic for the same purpose."
        },
        "question-zh": "Universal Containers 决定从 Classic 迁移到 Lightning Experience，并要求开发人员替换一个用于创建预填值记录的 JavaScript 按钮。开发人员可使用什么实现？",
        "options-zh": [
            { "key": "A", "text": "验证规则" },
            { "key": "B", "text": "Apex 触发器" },
            { "key": "C", "text": "记录触发 Flow" },
            { "key": "D", "text": "快速操作" }
        ],
        "explanation-zh": {"D":"Lightning Experience 中的快速操作可配置预定义字段值来创建记录，可替代该类 JavaScript 按钮。"},
        "difficulty": "简单",
        "accuracy": 85
    },
    {
        "type": "multiple_choice",
        "question": "Which two characteristics are true for Lightning Web Component custom events?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Data may be passed in the payload of a custom event using @wire decorated properties."
            },
            {
                "key": "B",
                "text": "Data may be passed in the payload of a custom event using a property called detail."
            },
            {
                "key": "C",
                "text": "By default a custom event only propagates to its immediate container and to its immediate child component."
            },
            {
                "key": "D",
                "text": "By default a custom event only propagates to it's immediate container."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/platform/lwc/guide/events-create-dispatch.html",
            "D": "https://developer.salesforce.com/docs/platform/lwc/guide/events-create-dispatch.html"
        },
        "question-zh": "Lightning Web Component 自定义事件具有哪两项特征？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "可使用带 `@wire` 装饰的属性，在自定义事件的负载中传递数据。" },
            { "key": "B", "text": "可使用名为 `detail` 的属性，在自定义事件的负载中传递数据。" },
            { "key": "C", "text": "默认情况下，自定义事件只传播到其直接容器和直接子组件。" },
            { "key": "D", "text": "默认情况下，自定义事件只传播到其直接容器。" }
        ],
        "explanation-zh": {"B":"自定义事件使用 `detail` 属性传递事件数据。","D":"默认事件不会跨越 Shadow DOM 边界，只传播到直接容器。"},
        "difficulty": "简单",
        "accuracy": 61
    },
    {
        "type": "single_choice",
        "question": "What can be easily developed using the Lightning Component framework?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Salesforce Classic user interface pages"
            },
            {
                "key": "B",
                "text": "Lightning Pages"
            },
            {
                "key": "C",
                "text": "Customized JavaScript buttons"
            },
            {
                "key": "D",
                "text": "Salesforce integrations"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": ""
        },
        "question-zh": "使用 Lightning Component 框架可以轻松开发什么？",
        "options-zh": [
            { "key": "A", "text": "Salesforce Classic 用户界面页面" },
            { "key": "B", "text": "Lightning 页面" },
            { "key": "C", "text": "自定义 JavaScript 按钮" },
            { "key": "D", "text": "Salesforce 集成" }
        ],
        "explanation-zh": {"B":"Lightning Component 框架用于构建和扩展 Lightning Experience 中的 Lightning 页面。"},
        "difficulty": "简单",
        "accuracy": 91
    },
    {
        "type": "single_choice",
        "question": "Universal Containers needs to create a custom user interface component that allows users to enter information about their accounts. The component should be able to validate the user input before saving the information to the database.\nWhat is the best technology to create this component?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Flow"
            },
            {
                "key": "B",
                "text": "Lightning Web Components"
            },
            {
                "key": "C",
                "text": "Visualforce"
            },
            {
                "key": "D",
                "text": "VUE JavaScript framework"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": ""
        },
        "question-zh": "Universal Containers 需要创建一个自定义用户界面组件，让用户输入 Account 信息，并能在保存到数据库前验证输入。创建此组件的最佳技术是什么？",
        "options-zh": [
            { "key": "A", "text": "Flow" },
            { "key": "B", "text": "Lightning Web Components" },
            { "key": "C", "text": "Visualforce" },
            { "key": "D", "text": "VUE JavaScript 框架" }
        ],
        "explanation-zh": {"B":"LWC 适合构建原生 Lightning 用户界面组件，并可在客户端验证输入后保存记录。"},
        "difficulty": "简单",
        "accuracy": 83
    },
    {
        "type": "single_choice",
        "question": "Which Lightning Web Component custom event property settings ebable the event to bubble up the containment hierarchy and cross the Shadow DOM boundary?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "bubbles: true, composed: false"
            },
            {
                "key": "B",
                "text": "bubbles: false, composed: false"
            },
            {
                "key": "C",
                "text": "bubbles: true, composed: true"
            },
            {
                "key": "D",
                "text": "bubbles: false, composed: true"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "This configuration allows the event to bubble and also to pass through the Shadow DOM boundary to the regular DOM."
        },
        "question-zh": "Lightning Web Component 的自定义事件应设置哪些属性，才能沿容器层级冒泡并跨越 Shadow DOM 边界？",
        "options-zh": [
            { "key": "A", "text": "`bubbles: true, composed: false`" },
            { "key": "B", "text": "`bubbles: false, composed: false`" },
            { "key": "C", "text": "`bubbles: true, composed: true`" },
            { "key": "D", "text": "`bubbles: false, composed: true`" }
        ],
        "explanation-zh": {"C":"`bubbles: true` 允许事件向上冒泡，`composed: true` 允许其跨越 Shadow DOM 边界。"},
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "single_choice",
        "question": "A developer needs to make a custom Lightning Web Component available in the Salesforce Classic user interface.\nWhich approach can be used to accomplish this?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Embed the Lightning Web Component is a Visualforce Component and add directly to the page layout."
            },
            {
                "key": "B",
                "text": "Use the Lightning Out JavaScript library to embed the Lightning Web Component in a Visualforce page and add to the page layout."
            },
            {
                "key": "C",
                "text": "Use a Visualforce page with a custom controller to invoke the Lightning Web Component using a call to an Apex method."
            },
            {
                "key": "D",
                "text": "Wrap the Lightning Web Component in an Aura Component and surface the Aura Component as a Visualforce tab."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": ""
        },
        "question-zh": "开发人员需要让自定义 Lightning Web Component 可用于 Salesforce Classic 用户界面。可以采用哪种方法？",
        "options-zh": [
            { "key": "A", "text": "将 LWC 嵌入 Visualforce 组件并直接添加到页面布局。" },
            { "key": "B", "text": "使用 Lightning Out JavaScript 库将 LWC 嵌入 Visualforce 页面，再添加到页面布局。" },
            { "key": "C", "text": "使用带自定义控制器的 Visualforce 页面，并通过 Apex 方法调用 LWC。" },
            { "key": "D", "text": "将 LWC 包装在 Aura 组件中，并将 Aura 组件显示为 Visualforce 选项卡。" }
        ],
        "explanation-zh": {"B":"Lightning Out 可将 Lightning 组件嵌入 Visualforce 页面，从而在 Classic 中使用。"},
        "difficulty": "简单",
        "accuracy": 77
    },
    {
        "type": "multiple_choice",
        "question": "As part of new feature development, a developer is asked to build a responsive application capable of responding to touch events, that will be executed on stateful clients.\nWhich two technologies are built on a framework that fully supports the business requirement?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Lightning Web Components"
            },
            {
                "key": "B",
                "text": "Visualforce Components"
            },
            {
                "key": "C",
                "text": "Visualforce Pages"
            },
            {
                "key": "D",
                "text": "Aura Components"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "Lightning Web Components and Aura Components，Both are part of the Salesforce Lightning component framework designed to create responsive applications for any device, and they support client-side state management which is necessary for stateful clients. ",
            "D": "Lightning Web Components and Aura Components，Both are part of the Salesforce Lightning component framework designed to create responsive applications for any device, and they support client-side state management which is necessary for stateful clients. "
        },
        "question-zh": "开发人员需要构建一个响应式应用：能够响应触摸事件，并在有状态客户端上运行。以下哪两种技术建立在完全支持该需求的框架上？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "Lightning Web Components" },
            { "key": "B", "text": "Visualforce 组件" },
            { "key": "C", "text": "Visualforce 页面" },
            { "key": "D", "text": "Aura 组件" }
        ],
        "explanation-zh": {"A":"LWC 属于 Lightning 组件框架，支持响应式、交互式客户端体验。","D":"Aura 组件同样基于 Lightning 组件框架，支持触摸事件和客户端状态管理。"},
        "difficulty": "简单",
        "accuracy": 83
    },
    {
        "type": "single_choice",
        "question": "Which annotation should a developer use on an Apex method to make it available to be wired to a property in a Lightning web component?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "@AuraEnabled"
            },
            {
                "key": "B",
                "text": "@AuraEnabled(cacheable=true)"
            },
            {
                "key": "C",
                "text": "@RemoteAction(cacheable=true)"
            },
            {
                "key": "D",
                "text": "@RemoteAction"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm"
        },
        "question-zh": "开发人员应在 Apex 方法上使用哪种注解，使其可被 Lightning Web Component 中的属性通过 `@wire` 调用？",
        "options-zh": [
            { "key": "A", "text": "@AuraEnabled" },
            { "key": "B", "text": "@AuraEnabled(cacheable=true)" },
            { "key": "C", "text": "@RemoteAction(cacheable=true)" },
            { "key": "D", "text": "@RemoteAction" }
        ],
        "explanation-zh": {"B":"通过 `@wire` 调用 Apex 的方法必须使用 `@AuraEnabled(cacheable=true)`，且方法不得修改数据。"},
        "difficulty": "简单",
        "accuracy": 82
    },
    {
        "type": "single_choice",
        "question": "A developer wrote an Apex method to update a list of Contacts and wants to make it available for use by Lightning web components.\nWhich annotation should the developer add to the Apex method to achieve this?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "@AuraEnabled(cacheable=true)"
            },
            {
                "key": "B",
                "text": "@RemoteAction"
            },
            {
                "key": "C",
                "text": "@RemoteAction(cacheable=true)"
            },
            {
                "key": "D",
                "text": "@AuraEnabled"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/controllers_server_apex_auraenabled_annotation.htm"
        },
        "question-zh": "开发人员编写了一个 Apex 方法来更新一组 Contact，并希望 Lightning Web Components 能调用该方法。应添加哪种注解？",
        "options-zh": [
            { "key": "A", "text": "@AuraEnabled(cacheable=true)" },
            { "key": "B", "text": "@RemoteAction" },
            { "key": "C", "text": "@RemoteAction(cacheable=true)" },
            { "key": "D", "text": "@AuraEnabled" }
        ],
        "explanation-zh": {"D":"修改数据的 Apex 方法可使用 `@AuraEnabled` 暴露给 LWC；不能标记为 cacheable。"},
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "Which code statement includes an Apex method named updateAccounts in the class AccountController for use in a Lightning web component?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "import updateAccounts from 'AccountController';"
            },
            {
                "key": "B",
                "text": "import updateAccounts from 'AccountController.updateAccounts';"
            },
            {
                "key": "C",
                "text": "import updateAccounts from '@salesforce/apex/AccountController';"
            },
            {
                "key": "D",
                "text": "import updateAccounts from '@salesforce/apex/AccountController.updateAccounts';"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/apex_import_method"
        },
        "question-zh": "以下哪条代码语句可导入 AccountController 类中名为 `updateAccounts` 的 Apex 方法，以供 Lightning Web Component 使用？",
        "options-zh": [
            { "key": "A", "text": "import updateAccounts from 'AccountController';" },
            { "key": "B", "text": "import updateAccounts from 'AccountController.updateAccounts';" },
            { "key": "C", "text": "import updateAccounts from '@salesforce/apex/AccountController';" },
            { "key": "D", "text": "import updateAccounts from '@salesforce/apex/AccountController.updateAccounts';" }
        ],
        "explanation-zh": {"D":"LWC 导入 Apex 方法的语法为 `@salesforce/apex/类名.方法名`。"},
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "single_choice",
        "question": "A developer is asked to create a Visualforce page that lists the contacts owned by the current user. This component will be embedded in a Lightning page.\nWithout writing unnecessary code, which controller should be used for this purpose?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Lightning controller"
            },
            {
                "key": "B",
                "text": "Standard list controller"
            },
            {
                "key": "C",
                "text": "Standard controller"
            },
            {
                "key": "D",
                "text": "Custom controller"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_std.htm"
        },
        "question-zh": "开发人员需要创建一个 Visualforce 页面，列出当前用户拥有的 Contact。该组件将嵌入 Lightning 页面。为避免编写不必要的代码，应使用哪种控制器？",
        "options-zh": [
            { "key": "A", "text": "Lightning 控制器" },
            { "key": "B", "text": "标准列表控制器" },
            { "key": "C", "text": "标准控制器" },
            { "key": "D", "text": "自定义控制器" }
        ],
        "explanation-zh": {"C":"标准控制器提供对单个标准对象记录的基本访问，适合此简单 Visualforce 用例。"},
        "difficulty": "简单",
        "accuracy": 77
    },
    {
        "type": "single_choice",
        "question": "UC has a Visualforce page that displays a table of every Container__c being rented by a given Account. Recently this page is failing with a view state limit because some of the customers rent over 10,000 containers.\nWhat should a developer change about the Visualforce page to help with the page load errors?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Implement pagination with a StandardSetController."
            },
            {
                "key": "B",
                "text": "Implement pagination with an OffsetController."
            },
            {
                "key": "C",
                "text": "Use JavaScript remoting with SOQL Offset."
            },
            {
                "key": "D",
                "text": "Use lazy loading and a transient List variable."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/apex_pages_standardsetcontroller.htm"
        },
        "question-zh": "UC 有一个 Visualforce 页面，显示某 Account 租用的全部 Container__c。由于某些客户租用超过 10,000 个容器，页面因视图状态限制而失败。开发人员应如何修改页面来减少加载错误？",
        "options-zh": [
            { "key": "A", "text": "使用 StandardSetController 实现分页。" },
            { "key": "B", "text": "使用 OffsetController 实现分页。" },
            { "key": "C", "text": "使用 JavaScript Remoting 和 SOQL OFFSET。" },
            { "key": "D", "text": "使用延迟加载和 transient List 变量。" }
        ],
        "explanation-zh": {"A":"StandardSetController 支持有效分页，避免一次将大量记录放入 Visualforce 视图状态。"},
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "single_choice",
        "question": "A developer is creating an app that contains multiple Lightning web components.\nOne of the child components is used for navigation purposes.When a user clicks a button called component, the parent component must be alerted so it can navigate to the next page.\nHow should this be accomplished?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Fire a notification."
            },
            {
                "key": "B",
                "text": "Update a property on the parent."
            },
            {
                "key": "C",
                "text": "Call a method in the Apex controller."
            },
            {
                "key": "D",
                "text": "Create a custom event."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/platform/lwc/guide/events-create-dispatch.html"
        },
        "question-zh": "开发人员正在创建包含多个 Lightning Web Component 的应用。其中一个子组件用于导航；当用户单击该组件中的按钮时，必须通知父组件，以便父组件导航到下一页。应如何实现？",
        "options-zh": [
            { "key": "A", "text": "触发通知。" },
            { "key": "B", "text": "更新父组件上的属性。" },
            { "key": "C", "text": "调用 Apex 控制器中的方法。" },
            { "key": "D", "text": "创建自定义事件。" }
        ],
        "explanation-zh": {"D":"子组件应 dispatch 自定义事件，父组件在模板中监听该事件并执行导航。"},
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "multiple_choice",
        "question": "Which two statements are true about getter and setter methods as they relate to Visualforce?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "A corresponding setter method is required for each getter method."
            },
            {
                "key": "B",
                "text": "Getter methods pass values from controller to a page."
            },
            {
                "key": "C",
                "text": "Setter methods always have to be declared global."
            },
            {
                "key": "D",
                "text": "Getter methods must be named getVariable and setter methods must be named setVariable."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "Getter methods pass values from controller to a page:\nGetter methods are used in Apex controllers to retrieve values and pass them to Visualforce pages. The Visualforce page can then reference the values returned by the getter method for display.\n\nA corresponding setter method is required for each getter method:\nIf you want to allow data to flow both ways (from page to controller and from controller to page), you should have both getter and setter methods for the variables. The setter method allows the Visualforce page to pass values back to the controller, while the getter allows the controller to send values to the page. If a getter method is used, having a corresponding setter is a common practice to maintain two-way communication.",
            "B": "Getter methods pass values from controller to a page:\nGetter methods are used in Apex controllers to retrieve values and pass them to Visualforce pages. The Visualforce page can then reference the values returned by the getter method for display.\n\nA corresponding setter method is required for each getter method:\nIf you want to allow data to flow both ways (from page to controller and from controller to page), you should have both getter and setter methods for the variables. The setter method allows the Visualforce page to pass values back to the controller, while the getter allows the controller to send values to the page. If a getter method is used, having a corresponding setter is a common practice to maintain two-way communication."
        },
        "question-zh": "关于 Visualforce 中的 getter 和 setter 方法，哪两项陈述正确？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "每个 getter 方法都需要对应的 setter 方法。" },
            { "key": "B", "text": "getter 方法将值从控制器传递到页面。" },
            { "key": "C", "text": "setter 方法始终必须声明为 global。" },
            { "key": "D", "text": "getter 方法必须命名为 getVariable，setter 方法必须命名为 setVariable。" }
        ],
        "explanation-zh": {"A":"若页面需要写回属性，getter 应有相应 setter 以接收页面值。","B":"getter 从控制器提供值给 Visualforce 页面显示。"},
        "difficulty": "简单",
        "accuracy": 64
    },
    {
        "type": "single_choice",
        "question": "A developer created a weather app that contains multiple Lightning web components.\nOne of the components, called Toggle, has a toggle for Fahrenheit or Celsius units,Another Temperature, displays the current temperature in the unit selected in the Toggle component,.When a user toggles from Fahrenheit to Celsius or vice versa in the Toggle component, sent to the Temperature component so the temperature can be converted and displayed.\nWhat is the recommended way to accomplish this?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "The Toggle component should call a method in the Temperature component."
            },
            {
                "key": "B",
                "text": "Create a custom event to handle the communication between components."
            },
            {
                "key": "C",
                "text": "Use an application event to communicate between the components."
            },
            {
                "key": "D",
                "text": "Use Lightning Message Service to communicate between the components."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "In Salesforce Lightning Web Components (LWC), when two components need to communicate, especially when one component is a parent and the other is a child, a custom event is the recommended way to facilitate that communication.\n\nHere’s why:\n\nCustom events are designed for sending information between components, especially when a child component needs to communicate changes to a parent or another component.\nThe Toggle component can dispatch a custom event when the user changes the temperature unit (Fahrenheit to Celsius or vice versa), and the Temperature component can listen for that event to update and display the temperature accordingly."
        },
        "question-zh": "开发人员创建了一个包含多个 Lightning Web Component 的天气应用。Toggle 组件用于切换华氏或摄氏单位，Temperature 组件显示所选单位的当前温度。用户在 Toggle 中切换单位时，必须通知 Temperature 组件以转换并显示温度。推荐做法是什么？",
        "options-zh": [
            { "key": "A", "text": "Toggle 组件应调用 Temperature 组件中的方法。" },
            { "key": "B", "text": "创建自定义事件处理组件间通信。" },
            { "key": "C", "text": "使用应用程序事件在组件之间通信。" },
            { "key": "D", "text": "使用 Lightning Message Service 在组件之间通信。" }
        ],
        "explanation-zh": {"B":"组件间通过自定义事件传递单位变更，父组件可协调状态并向 Temperature 组件传值。"},
        "difficulty": "简单",
        "accuracy": 85
    },
    {
        "type": "single_choice",
        "question": "A credit card company needs to implement the functionality for a service agent to process credit cards. When the customers call in, the service agent must gather many places of information tasked to implement this functionality.\nWhat should the developer use to satisfy this requirement in the most efficient manner?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Flow Builder"
            },
            {
                "key": "B",
                "text": "Lightning Component"
            },
            {
                "key": "C",
                "text": "Approval Process"
            },
            {
                "key": "D",
                "text": "Apex Trigger"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "Flow Builder is the most efficient and user-friendly tool to automate business processes where users interact with the system, especially for gathering information in a structured and guided manner.\n\nWith Flow Builder, you can create a screen flow that guides the service agent through a series of steps (screens), collecting and processing customer information. This is ideal for situations where user input is required, as flows provide a seamless and interactive experience without needing custom code."
        },
        "question-zh": "信用卡公司需要为服务代理实现信用卡处理功能。客户来电时，代理必须收集多项信息。开发人员采用什么方式最有效？",
        "options-zh": [
            { "key": "A", "text": "Flow Builder" },
            { "key": "B", "text": "Lightning 组件" },
            { "key": "C", "text": "审批流程" },
            { "key": "D", "text": "Apex 触发器" }
        ],
        "explanation-zh": {"A":"屏幕 Flow 可按步骤引导服务代理收集和处理信息，无需自定义代码。"},
        "difficulty": "简单",
        "accuracy": 72
    },
    {
        "type": "multiple_choice",
        "question": "A third-party vendor created an unmanaged Lightning web component. The Salesforce Administrators expose the component only on Record Page Layouts.\nWhich two actions should the developer take to accomplish this business objective?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Ensure isExposed Is set to true on the XML file."
            },
            {
                "key": "B",
                "text": "Specify lightningcommunity_ PageLayout as a target in the XML file."
            },
            {
                "key": "C",
                "text": "Specify lightningcommunity_Page as a target in the XML file."
            },
            {
                "key": "D",
                "text": "Specify lightning_ RecordPage as a target in the XML file."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/platform/lwc/guide/reference-configuration-tags.html",
            "D": "https://developer.salesforce.com/docs/platform/lwc/guide/reference-configuration-tags.html"
        },
        "question-zh": "第三方供应商创建了一个非托管 Lightning Web Component。Salesforce 管理员只需在记录页面上公开该组件。开发人员应采取哪两项操作？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "确保 XML 文件中的 `isExposed` 设为 true。" },
            { "key": "B", "text": "在 XML 文件中将 `lightningCommunity__PageLayout` 指定为 target。" },
            { "key": "C", "text": "在 XML 文件中将 `lightningCommunity__Page` 指定为 target。" },
            { "key": "D", "text": "在 XML 文件中将 `lightning__RecordPage` 指定为 target。" }
        ],
        "explanation-zh": {"A":"组件配置文件必须设置 `isExposed` 为 true 才能在构建器中使用。","D":"`lightning__RecordPage` target 使组件可添加到 Lightning 记录页面。"},
        "difficulty": "简单",
        "accuracy": 82
    },
    {
        "type": "multiple_choice",
        "question": "What are two best practices when it comes to Lightning Web Component events?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Use event.target to communicate data to elements that aren't in the same shadow tree."
            },
            {
                "key": "B",
                "text": "Use events configured with bubbles: false and composed: false."
            },
            {
                "key": "C",
                "text": "Use CuatomEvent to pass data from a child to a parent component."
            },
            {
                "key": "D",
                "text": "Use event.detail to communicate data to elements in the same shadow tree."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/platform/lwc/guide/events-best-practices.html",
            "C": "https://developer.salesforce.com/docs/platform/lwc/guide/events-best-practices.html"
        },
        "question-zh": "关于 Lightning Web Component 事件，哪两项是最佳实践？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "使用 `event.target` 向不在同一 shadow tree 中的元素传递数据。" },
            { "key": "B", "text": "使用 `bubbles: false` 且 `composed: false` 配置的事件。" },
            { "key": "C", "text": "使用 `CustomEvent` 将数据从子组件传递给父组件。" },
            { "key": "D", "text": "使用 `event.detail` 向同一 shadow tree 中的元素传递数据。" }
        ],
        "explanation-zh": {"B":"默认限制事件范围（不冒泡、不跨 Shadow DOM）可避免不必要的事件传播。","C":"子组件应通过 `CustomEvent` 向父组件传递数据。"},
        "difficulty": "简单",
        "accuracy": 63
    },
    {
        "type": "single_choice",
        "question": "An org has two custom objects:\nPlan_c, that has a master-detail relationship to the Account object\nPlan_Item__c, that has a master-detail relationship to the Plan_c object\nWhat should a developer use to create a Visualforce section on the Account page layout that displays all of the Plan__c records related to the Account and all of the Plan_Item__c records related to those Plan_c records.",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "A standard controller with a controller extension"
            },
            {
                "key": "B",
                "text": "A standard controller with a custom controller"
            },
            {
                "key": "C",
                "text": "A custom controller by itself"
            },
            {
                "key": "D",
                "text": "A controller extension with a custom controller"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_extension.htm"
        },
        "question-zh": "某组织有两个自定义对象：Plan__c 通过主从关系关联到 Account；Plan_Item__c 通过主从关系关联到 Plan__c。开发人员需在 Account 页面布局中创建 Visualforce 区域，显示该 Account 的所有 Plan__c 记录及其所有 Plan_Item__c 记录。应使用什么？",
        "options-zh": [
            { "key": "A", "text": "带控制器扩展的标准控制器。" },
            { "key": "B", "text": "带自定义控制器的标准控制器。" },
            { "key": "C", "text": "单独使用自定义控制器。" },
            { "key": "D", "text": "带自定义控制器的控制器扩展。" }
        ],
        "explanation-zh": {"A":"标准 Account 控制器提供当前记录上下文，控制器扩展可查询并提供嵌套的 Plan 与 Plan Item 数据。"},
        "difficulty": "简单",
        "accuracy": 86
    },
    {
        "type": "single_choice",
        "question": "A developer is creating a Lightning web component to show a list of sales records.\nThe Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the record except the commission field.\nHow should this be enforced so that the component works for both users without showing any errors?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Use Lightning Data Service to get the collection of sales records."
            },
            {
                "key": "B",
                "text": "Use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component."
            },
            {
                "key": "C",
                "text": "Use Security.stripInaccessible to remove fields inaccessible to the current user."
            },
            {
                "key": "D",
                "text": "Use Lightning Locker Service to enforce sharing rules and field-level security."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_stripInaccessible.htm"
        },
        "question-zh": "开发人员正在创建 LWC 来显示销售记录列表。Sales Representative 应能查看每条记录的佣金字段，而 Sales Assistant 除佣金字段外可查看所有字段。如何强制执行此要求，且让组件对两类用户都不报错？",
        "options-zh": [
            { "key": "A", "text": "使用 Lightning Data Service 获取销售记录集合。" },
            { "key": "B", "text": "在获取组件数据的 SOQL 中使用 `WITH SECURITY_ENFORCED`。" },
            { "key": "C", "text": "使用 `Security.stripInaccessible` 移除当前用户无权访问的字段。" },
            { "key": "D", "text": "使用 Lightning Locker Service 强制执行共享规则和字段级安全性。" }
        ],
        "explanation-zh": {"C":"`Security.stripInaccessible` 会在返回数据前移除当前用户没有字段级权限的字段，避免组件因访问佣金字段而出错。"},
        "difficulty": "简单",
        "accuracy": 69
    },
    {
        "type": "multiple_choice",
        "question": "A developer created a child Lightning web component nested inside a parent Lightning web component. The parent component needs to pass a string value to the child component.\nIn which two ways can this be accomplished?\nChoose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "The parent component can use the Apex controller class to send data to the child component."
            },
            {
                "key": "B",
                "text": "The parent component can invoke a method in the child component."
            },
            {
                "key": "C",
                "text": "The parent component can use a public property to pass the data to the child component."
            },
            {
                "key": "D",
                "text": "The parent component can use a custom event to pass the data to the child component."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D"
        ],
        "explanation": {
            "C": "https://trailhead.salesforce.com/content/learn/projects/communicate-between-lightning-web-components/communicate-from-parent-to-child",
            "D": "https://trailhead.salesforce.com/content/learn/projects/communicate-between-lightning-web-components/communicate-from-parent-to-child"
        },
        "question-zh": "开发人员创建了嵌套在父 LWC 中的子 LWC。父组件需要向子组件传递字符串值。可通过哪两种方式实现？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "父组件使用 Apex 控制器类向子组件发送数据。" },
            { "key": "B", "text": "父组件调用子组件中的方法。" },
            { "key": "C", "text": "父组件使用公共属性向子组件传递数据。" },
            { "key": "D", "text": "父组件使用自定义事件向子组件传递数据。" }
        ],
        "explanation-zh": {"C":"父组件可通过子组件公开的 `@api` 属性传递数据。","D":"自定义事件可用于组件间消息传递；本题将其作为父子通信选项。"},
        "difficulty": "简单",
        "accuracy": 57
    },
    {
        "type": "multiple_choice",
        "question": "A developer needs to allow users to complete a form on an Account record that will create a record for a custom object. The form needs to display different fields depending on the user's job role. The functionality should only be available to a small group of users.\nWhich three things should the developer do to satisfy these requirements?\nChoose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Add a dynamic action to the user's assigned page layouts."
            },
            {
                "key": "B",
                "text": "Create a Lightning web component."
            },
            {
                "key": "C",
                "text": "Create a dynamic form."
            },
            {
                "key": "D",
                "text": "Add a dynamic action to the Account record page."
            },
            {
                "key": "E",
                "text": "Create a custom permission for the users."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D",
            "E"
        ],
        "explanation": {
            "C": "https://help.salesforce.com/s/articleView?id=platform.lightning_app_builder_create_dynamic_action.htm&type=5\nhttps://help.salesforce.com/s/articleView?id=platform.dynamic_forms_migrate.htm&type=5",
            "D": "https://help.salesforce.com/s/articleView?id=platform.lightning_app_builder_create_dynamic_action.htm&type=5\nhttps://help.salesforce.com/s/articleView?id=platform.dynamic_forms_migrate.htm&type=5",
            "E": "https://help.salesforce.com/s/articleView?id=platform.lightning_app_builder_create_dynamic_action.htm&type=5\nhttps://help.salesforce.com/s/articleView?id=platform.dynamic_forms_migrate.htm&type=5"
        },
        "question-zh": "开发人员需要让用户在 Account 记录上填写表单以创建自定义对象记录。表单应根据用户的岗位角色显示不同字段，且功能仅对小部分用户可用。开发人员应做哪三项？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "在用户分配的页面布局上添加动态操作。" },
            { "key": "B", "text": "创建 Lightning Web Component。" },
            { "key": "C", "text": "创建动态表单。" },
            { "key": "D", "text": "在 Account 记录页面上添加动态操作。" },
            { "key": "E", "text": "为用户创建自定义权限。" }
        ],
        "explanation-zh": {"C":"动态表单可按用户和记录条件显示不同字段。","D":"动态操作可在 Lightning 记录页面上条件显示操作。","E":"自定义权限可限制该功能仅供指定用户使用。"},
        "difficulty": "简单",
        "accuracy": 64
    },
    {
        "type": "single_choice",
        "question": "A Salesforce Administrator used Flow Builder to create a flow named \"accountOnboarding\". The flow must be used inside an Aura component.\nWhich tag should a developer use to display the flow in the component?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "lightning-flow"
            },
            {
                "key": "B",
                "text": "aura:flow"
            },
            {
                "key": "C",
                "text": "aura-flow"
            },
            {
                "key": "D",
                "text": "lightning:flow"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://developer.salesforce.com/docs/component-library/bundle/lightning-flow/documentation"
        },
        "question-zh": "Salesforce 管理员使用 Flow Builder 创建了名为 `accountOnboarding` 的 Flow。该 Flow 必须在 Aura 组件内使用。开发人员应使用哪个标签显示该 Flow？",
        "options-zh": [
            { "key": "A", "text": "lightning-flow" },
            { "key": "B", "text": "aura:flow" },
            { "key": "C", "text": "aura-flow" },
            { "key": "D", "text": "lightning:flow" }
        ],
        "explanation-zh": {"D":"Aura 组件使用 `lightning:flow` 基础组件来嵌入和运行 Flow。"},
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "multiple_choice",
        "question": "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple sObjects. The wizard accepts \ndata from user inputs across multiple Visualforce pages and from a parameter on the initial URL.\nWhich three statements are useful inside the unit test to effectively test the custom controller? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "String nextPage = controller.save( ).getUrl( );"
            },
            {
                "key": "B",
                "text": "Test.setCurrentPage(pageRef);"
            },
            {
                "key": "C",
                "text": "insert pageRef;"
            },
            {
                "key": "D",
                "text": "ApexPages.currentPage( ).getParameters( ).put('input', 'TestValue');"
            },
            {
                "key": "E",
                "text": "public ExtendedController(ApexPages.StandardController cntrl) { }"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B",
            "D"
        ],
        "explanation": {
            "A": "String nextPage = controller.save().getUrl();\nThis statement allows the unit test to check the URL returned by the controller’s save method. By testing the URL, you can validate if the navigation logic (for example, moving to the next step in the wizard) is working as expected.\n\nTest.setCurrentPage(pageRef);\nThis is essential for simulating the current Visualforce page context in the unit test. It sets the page reference for the test, which is crucial for validating how the controller behaves when the Visualforce page is accessed in the test environment.\n\nApexPages.currentPage().getParameters().put('input', 'TestValue');\nThis allows you to mock the input parameters that are passed to the Visualforce page, which is especially important for testing controllers that depend on URL parameters. By setting the parameters in the unit test, you simulate how the controller should behave with different inputs.",
            "B": "String nextPage = controller.save().getUrl();\nThis statement allows the unit test to check the URL returned by the controller’s save method. By testing the URL, you can validate if the navigation logic (for example, moving to the next step in the wizard) is working as expected.\n\nTest.setCurrentPage(pageRef);\nThis is essential for simulating the current Visualforce page context in the unit test. It sets the page reference for the test, which is crucial for validating how the controller behaves when the Visualforce page is accessed in the test environment.\n\nApexPages.currentPage().getParameters().put('input', 'TestValue');\nThis allows you to mock the input parameters that are passed to the Visualforce page, which is especially important for testing controllers that depend on URL parameters. By setting the parameters in the unit test, you simulate how the controller should behave with different inputs.",
            "D": "String nextPage = controller.save().getUrl();\nThis statement allows the unit test to check the URL returned by the controller’s save method. By testing the URL, you can validate if the navigation logic (for example, moving to the next step in the wizard) is working as expected.\n\nTest.setCurrentPage(pageRef);\nThis is essential for simulating the current Visualforce page context in the unit test. It sets the page reference for the test, which is crucial for validating how the controller behaves when the Visualforce page is accessed in the test environment.\n\nApexPages.currentPage().getParameters().put('input', 'TestValue');\nThis allows you to mock the input parameters that are passed to the Visualforce page, which is especially important for testing controllers that depend on URL parameters. By setting the parameters in the unit test, you simulate how the controller should behave with different inputs."
        },
        "question-zh": "开发人员有一个配合 Visualforce 向导使用的自定义控制器类，可创建和编辑多个 sObject。该向导从多个 Visualforce 页面上的用户输入以及初始 URL 参数接收数据。为有效测试该控制器，单元测试中哪三条语句有用？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "`String nextPage = controller.save().getUrl();`" },
            { "key": "B", "text": "`Test.setCurrentPage(pageRef);`" },
            { "key": "C", "text": "`insert pageRef;`" },
            { "key": "D", "text": "`ApexPages.currentPage().getParameters().put('input', 'TestValue');`" },
            { "key": "E", "text": "`public ExtendedController(ApexPages.StandardController cntrl) { }`" }
        ],
        "explanation-zh": {"A":"可验证 `save()` 返回的页面 URL，确认向导导航逻辑。","B":"`Test.setCurrentPage` 可模拟 Visualforce 页面上下文。","D":"可设置 URL 参数，测试控制器对初始参数的处理。"},
        "difficulty": "简单",
        "accuracy": 62
    },
    {
        "type": "single_choice",
        "question": "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org.\nWhich tool should the developer use to troubleshoot query performance?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "AppExchange"
            },
            {
                "key": "B",
                "text": "Developer Console"
            },
            {
                "key": "C",
                "text": "Visual Studio Code IDE"
            },
            {
                "key": "D",
                "text": "Setup Menu"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "The Developer Console is the best tool for troubleshooting query performance in Salesforce. It allows developers to view logs, run queries, and analyze performance issues. Specifically, the Query Plan tool within the Developer Console can be used to examine the performance of SOQL queries and identify any inefficiencies, such as missing indexes or poorly optimized queries, that might be contributing to slow page load times."
        },
        "question-zh": "开发人员必须排查组织中自定义页面加载时的性能问题。应使用什么工具排查查询性能？",
        "options-zh": [
            { "key": "A", "text": "AppExchange" },
            { "key": "B", "text": "Developer Console" },
            { "key": "C", "text": "Visual Studio Code IDE" },
            { "key": "D", "text": "Setup 菜单" }
        ],
        "explanation-zh": {"B":"Developer Console 的 Query Plan 等工具可分析 SOQL 查询计划、选择性和索引使用情况。"},
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "multiple_choice",
        "question": "What are three capabilities of the <ltng:require> tag when loading JavaScript resources in Aura components? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Specifying loading order "
            },
            {
                "key": "B",
                "text": "Loading scripts in parallel"
            },
            {
                "key": "C",
                "text": "Loading files from Documents"
            },
            {
                "key": "D",
                "text": "One-time loading for duplicate scripts"
            },
            {
                "key": "E",
                "text": "Loading externally hosted scripts"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B",
            "D"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/component-library/bundle/ltng:require/documentation",
            "B": "https://developer.salesforce.com/docs/component-library/bundle/ltng:require/documentation",
            "D": "https://developer.salesforce.com/docs/component-library/bundle/ltng:require/documentation"
        },
        "question-zh": "Aura 组件加载 JavaScript 资源时，`<ltng:require>` 标签具备哪三项能力？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "指定加载顺序。" },
            { "key": "B", "text": "并行加载脚本。" },
            { "key": "C", "text": "从 Documents 加载文件。" },
            { "key": "D", "text": "对重复脚本仅加载一次。" },
            { "key": "E", "text": "加载外部托管的脚本。" }
        ],
        "explanation-zh": {"A":"可通过资源声明顺序控制加载顺序。","B":"可并行加载互不依赖的资源。","D":"同一脚本资源只会加载一次，避免重复加载。"},
        "difficulty": "简单",
        "accuracy": 58
    },
    {
        "type": "multiple_choice",
        "question": "What are two ways that a controller and extension can be specified for a custom object named Notice on a Visualforce page? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "apex:page controller = \"Notice__c\" extensions=\"myControllerExtension\""
            },
            {
                "key": "B",
                "text": "apex:page standardController = \"Notice__c\" extensions=\"myControllerExtension\""
            },
            {
                "key": "C",
                "text": "apex:page controllers = \"Notice__c, myControllerExtension\""
            },
            {
                "key": "D",
                "text": "apex:page = Notice extends = \"myControllerExtension\""
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_extension.htm",
            "B": "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_extension.htm"
        },
        "question-zh": "在 Visualforce 页面中，如何为名为 Notice 的自定义对象指定控制器和扩展？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "`<apex:page controller=\"Notice__c\" extensions=\"myControllerExtension\">`" },
            { "key": "B", "text": "`<apex:page standardController=\"Notice__c\" extensions=\"myControllerExtension\">`" },
            { "key": "C", "text": "`<apex:page controllers=\"Notice__c, myControllerExtension\">`" },
            { "key": "D", "text": "`<apex:page=\"Notice\" extends=\"myControllerExtension\">`" }
        ],
        "explanation-zh": {"A":"页面可使用自定义控制器，并指定扩展。","B":"页面也可使用 Notice__c 的标准控制器，并指定控制器扩展。"},
        "difficulty": "简单",
        "accuracy": 63
    },
    {
        "type": "multiple_choice",
        "question": "Which three resources in an Aura Component can contain JavaScript functions? Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Helper"
            },
            {
                "key": "B",
                "text": "Controller"
            },
            {
                "key": "C",
                "text": "Style"
            },
            {
                "key": "D",
                "text": "Design"
            },
            {
                "key": "E",
                "text": "Renderer"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B",
            "E"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_bundle.htm",
            "B": "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_bundle.htm",
            "E": "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_bundle.htm"
        },
        "question-zh": "Aura 组件中的哪三种资源可以包含 JavaScript 函数？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "Helper" },
            { "key": "B", "text": "Controller" },
            { "key": "C", "text": "Style" },
            { "key": "D", "text": "Design" },
            { "key": "E", "text": "Renderer" }
        ],
        "explanation-zh": {"A":"Helper 包含可由控制器复用的 JavaScript 函数。","B":"Controller 包含处理组件事件的 JavaScript 函数。","E":"Renderer 可包含自定义渲染行为的 JavaScript 函数。"},
        "difficulty": "简单",
        "accuracy": 83
    },
    {
        "type": "multiple_choice",
        "question": "Which three Salesforce resources can be accessed from a Lighting web component?  Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "All external libraries"
            },
            {
                "key": "B",
                "text": "Static resources"
            },
            {
                "key": "C",
                "text": "Content asset files"
            },
            {
                "key": "D",
                "text": "Third-party web components"
            },
            {
                "key": "E",
                "text": "SVG resources"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C",
            "E"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/create_global_value_providers",
            "C": "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/create_global_value_providers",
            "E": "https://developer.salesforce.com/docs/component-library/documentation/en/lwc/create_global_value_providers"
        },
        "question-zh": "Lightning Web Component 可访问哪三类 Salesforce 资源？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "所有外部库" },
            { "key": "B", "text": "静态资源" },
            { "key": "C", "text": "内容资产文件" },
            { "key": "D", "text": "第三方 Web 组件" },
            { "key": "E", "text": "SVG 资源" }
        ],
        "explanation-zh": {"B":"LWC 可通过资源模块引用静态资源。","C":"LWC 可引用内容资产文件。","E":"LWC 可访问 SVG 资源。"},
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "single_choice",
        "question": "How does the Lightning Component framework help developers implement solutions faster?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "By providing an Agile process with default steps"
            },
            {
                "key": "B",
                "text": "By providing device-awareness for mobile and desktops"
            },
            {
                "key": "C",
                "text": "By providing code review standards and processes"
            },
            {
                "key": "D",
                "text": "By providing change history and version control"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "The Lightning Component framework is built with device-awareness, meaning components are designed to automatically adjust and function correctly on both desktop and mobile devices. This responsiveness allows developers to build solutions that work seamlessly across different platforms without having to create separate versions of the components for mobile and desktop, speeding up the development process."
        },
        "question-zh": "Lightning Component 框架如何帮助开发人员更快实现解决方案？",
        "options-zh": [
            { "key": "A", "text": "提供带默认步骤的敏捷流程。" },
            { "key": "B", "text": "提供对移动设备和桌面设备的感知能力。" },
            { "key": "C", "text": "提供代码审查标准和流程。" },
            { "key": "D", "text": "提供变更历史和版本控制。" }
        ],
        "explanation-zh": {"B":"Lightning 组件具备设备感知和响应式能力，可在桌面与移动端运行，开发人员无需分别构建两套界面。"},
        "difficulty": "简单",
        "accuracy": 85
    },
    {
        "type": "multiple_choice",
        "question": "which two are best practices when it comes to Aura component and application event handling? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Reuse the event logic in a component bundle, by putting the logic in the helper."
            },
            {
                "key": "B",
                "text": "Handle low-level events in the event handler and re-fire them as higher-level events."
            },
            {
                "key": "C",
                "text": "Use component events to communicate actions that should be handled at the application level."
            },
            {
                "key": "D",
                "text": "Try to use application events as opposed to component events."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "Reuse the event logic in a component bundle, by putting the logic in the helper: This is a best practice because it keeps the component's controller focused on managing user interaction, while the helper can handle the actual event logic. This makes the code more reusable and easier to maintain.\n\nHandle low-level events in the event handler and re-fire them as higher-level events: This technique helps in maintaining a clean event-driven architecture by ensuring that low-level events, which are specific to a component, can be transformed and re-fired as higher-level events that may be handled by parent components or even at the application level.",
            "B": "Reuse the event logic in a component bundle, by putting the logic in the helper: This is a best practice because it keeps the component's controller focused on managing user interaction, while the helper can handle the actual event logic. This makes the code more reusable and easier to maintain.\n\nHandle low-level events in the event handler and re-fire them as higher-level events: This technique helps in maintaining a clean event-driven architecture by ensuring that low-level events, which are specific to a component, can be transformed and re-fired as higher-level events that may be handled by parent components or even at the application level."
        },
        "question-zh": "关于 Aura 组件和应用程序事件处理，哪两项是最佳实践？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "将事件逻辑放在 helper 中，以便在组件包内复用。" },
            { "key": "B", "text": "在事件处理程序中处理低级事件，并将其重新触发为高级事件。" },
            { "key": "C", "text": "使用组件事件传递应在应用程序级别处理的操作。" },
            { "key": "D", "text": "优先使用应用程序事件而不是组件事件。" }
        ],
        "explanation-zh": {"A":"将可复用事件逻辑放入 helper 可保持控制器精简。","B":"将低级事件转换为高级事件有助于保持清晰的事件驱动架构。"},
        "difficulty": "简单",
        "accuracy": 68
    },
    {
        "type": "single_choice",
        "question": "An Apex method, getAccounts, that returns a List of Accounts given a searchTerm, is available for Lightning Web components to use.\nWhat is the correct definition of a Lightning Web component property that uses the getAccounts method?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": " @AuraEnabled (getAccounts, { searchTerm: '$searchTerm' } )\naccountList;"
            },
            {
                "key": "B",
                "text": " @wire (getAccounts, '$searchTerm')\naccountList;"
            },
            {
                "key": "C",
                "text": " @wire (getAccounts, { searchTerm: '$searchTerm' })\naccountList;"
            },
            {
                "key": "D",
                "text": " @AuraEnabled(getAccounts, '$searchTerm')\naccountList;"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/platform/lwc/guide/apex-wire-method.html"
        },
        "question-zh": "Apex 方法 `getAccounts` 根据 `searchTerm` 返回 Account 列表，供 LWC 使用。使用该方法的 LWC 属性应如何正确定义？",
        "options-zh": [
            { "key": "A", "text": "`@AuraEnabled(getAccounts, { searchTerm: '$searchTerm' }) accountList;`" },
            { "key": "B", "text": "`@wire(getAccounts, '$searchTerm') accountList;" },
            { "key": "C", "text": "`@wire(getAccounts, { searchTerm: '$searchTerm' }) accountList;" },
            { "key": "D", "text": "`@AuraEnabled(getAccounts, '$searchTerm') accountList;" }
        ],
        "explanation-zh": {"C":"`@wire` 调用 Apex 时，参数以对象形式传递；以 `$` 前缀引用响应式属性。"},
        "difficulty": "简单",
        "accuracy": 82
    },
    {
        "type": "multiple_choice",
        "question": "Which three steps allow a custom SVG to be included in a Lightning web component?Choose 3 answers",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "Reference the getter in the HTML template."
            },
            {
                "key": "B",
                "text": "Upload the SVG as a static resource."
            },
            {
                "key": "C",
                "text": "Import the SVG as a content asset file."
            },
            {
                "key": "D",
                "text": "Import the static resource and provide a getter for it in JavaScript."
            },
            {
                "key": "E",
                "text": "Reference the import in the HTML template."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D",
            "E"
        ],
        "explanation": {
            "B": "1. Upload the SVG as a static resource - Uploading the SVG file as a static resource in Salesforce allows it to be stored centrally and accessed within the Salesforce environment. This step is necessary to make the SVG file available for inclusion in a Lightning Web Component (LWC).\n\n2. Import the static resource and provide a getter for it in JavaScript - After uploading the SVG as a static resource, it needs to be imported into the LWC’s JavaScript file. This involves using the @salesforce/resourceUrl module to import the SVG file. Additionally, a JavaScript getter function is typically used to expose the SVG URL to the component’s template.\n\n3. Reference the import in the HTML template - The final step is to reference the SVG within the LWC’s HTML template. This is done by utilizing the URL obtained from the getter function in the JavaScript file, often within an <img> tag or as a style background image, depending on how the SVG is intended to be displayed in the component.\n\nThese steps enable the inclusion of a custom SVG in a Lightning Web Component, allowing developers to use detailed graphics and icons in their custom components within the Salesforce platform.",
            "D": "1. Upload the SVG as a static resource - Uploading the SVG file as a static resource in Salesforce allows it to be stored centrally and accessed within the Salesforce environment. This step is necessary to make the SVG file available for inclusion in a Lightning Web Component (LWC).\n\n2. Import the static resource and provide a getter for it in JavaScript - After uploading the SVG as a static resource, it needs to be imported into the LWC’s JavaScript file. This involves using the @salesforce/resourceUrl module to import the SVG file. Additionally, a JavaScript getter function is typically used to expose the SVG URL to the component’s template.\n\n3. Reference the import in the HTML template - The final step is to reference the SVG within the LWC’s HTML template. This is done by utilizing the URL obtained from the getter function in the JavaScript file, often within an <img> tag or as a style background image, depending on how the SVG is intended to be displayed in the component.\n\nThese steps enable the inclusion of a custom SVG in a Lightning Web Component, allowing developers to use detailed graphics and icons in their custom components within the Salesforce platform.",
            "E": "1. Upload the SVG as a static resource - Uploading the SVG file as a static resource in Salesforce allows it to be stored centrally and accessed within the Salesforce environment. This step is necessary to make the SVG file available for inclusion in a Lightning Web Component (LWC).\n\n2. Import the static resource and provide a getter for it in JavaScript - After uploading the SVG as a static resource, it needs to be imported into the LWC’s JavaScript file. This involves using the @salesforce/resourceUrl module to import the SVG file. Additionally, a JavaScript getter function is typically used to expose the SVG URL to the component’s template.\n\n3. Reference the import in the HTML template - The final step is to reference the SVG within the LWC’s HTML template. This is done by utilizing the URL obtained from the getter function in the JavaScript file, often within an <img> tag or as a style background image, depending on how the SVG is intended to be displayed in the component.\n\nThese steps enable the inclusion of a custom SVG in a Lightning Web Component, allowing developers to use detailed graphics and icons in their custom components within the Salesforce platform."
        },
        "question-zh": "将自定义 SVG 包含在 Lightning Web Component 中，需要哪三个步骤？（选 3 项）",
        "options-zh": [
            { "key": "A", "text": "在 HTML 模板中引用 getter。" },
            { "key": "B", "text": "将 SVG 上传为静态资源。" },
            { "key": "C", "text": "将 SVG 作为内容资产文件导入。" },
            { "key": "D", "text": "导入静态资源，并在 JavaScript 中为其提供 getter。" },
            { "key": "E", "text": "在 HTML 模板中引用导入内容。" }
        ],
        "explanation-zh": {"B":"首先将 SVG 上传为静态资源。","D":"在 JavaScript 中通过资源模块导入该静态资源并提供 URL。","E":"在 HTML 模板中引用导入的资源 URL。"},
        "difficulty": "简单",
        "accuracy": 58
    },
    {
        "type": "single_choice",
        "question": "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience.\nWhat should the developer do to provide the custom user interface?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Override the Contact's Edit button with a Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience."
            },
            {
                "key": "B",
                "text": "Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience."
            },
            {
                "key": "C",
                "text": "Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience."
            },
            {
                "key": "D",
                "text": "Override the Contacts's Edit button with a Lightning component in Salesforce Classic and a Lightning component in Lightning Experience."
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "To ensure compatibility across both Salesforce Classic and Lightning Experience while providing a custom user interface for editing a Contact, the best approach is to override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience. Visualforce pages are supported in both environments but are more commonly associated with Salesforce Classic, providing a familiar development model. Lightning components, designed specifically for the Lightning Experience, offer a more modern, interactive user interface that aligns with the enhanced features of Lightning. This approach allows the developer to optimize the user experience in each environment accordingly."
        },
        "question-zh": "开发人员必须在用户编辑 Contact 时提供自定义用户界面，并让用户能在 Salesforce Classic 和 Lightning Experience 中使用。应如何实现？",
        "options-zh": [
            { "key": "A", "text": "在 Classic 中用 Lightning 页面覆盖 Contact 编辑按钮，在 Lightning Experience 中用 Visualforce 页面覆盖。" },
            { "key": "B", "text": "在 Classic 中用 Visualforce 页面覆盖 Contact 编辑按钮，在 Lightning Experience 中用 Lightning 组件覆盖。" },
            { "key": "C", "text": "在 Classic 中用 Visualforce 页面覆盖 Contact 编辑按钮，在 Lightning Experience 中用 Lightning 页面覆盖。" },
            { "key": "D", "text": "在 Classic 和 Lightning Experience 中均用 Lightning 组件覆盖 Contact 编辑按钮。" }
        ],
        "explanation-zh": {"B":"Visualforce 页面可用于 Classic，而 Lightning 组件适合 Lightning Experience，可分别提供最佳自定义体验。"},
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "A developer has an Apex controller for a Visualforce page that takes an ID as a URL parameter.\nHow should the developer prevent a cross site scripting vulnerability?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "String.escapeSingleQuotes(ApexPages.currentPage().getParameters().get('url_param'))"
            },
            {
                "key": "B",
                "text": "ApexPage.currentPage().getParameters().get('url_param')"
            },
            {
                "key": "C",
                "text": "String.ValueOf(ApexPages.currentPage().getParameters().get('url_param'))"
            },
            {
                "key": "D",
                "text": "ApePages.currentPage().getParameters().get('url_param').escapeHtml4()"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "https://salesforce.stackexchange.com/questions/233885/apex-classes-should-escape-sanitize-strings-obtained-from-url-parameters-how"
        },
        "question-zh": "开发人员有一个 Visualforce 页面用的 Apex 控制器，该页面通过 URL 参数接收 ID。开发人员应如何防止跨站脚本（XSS）漏洞？",
        "options-zh": [
            { "key": "A", "text": "`ApexPages.currentPage().getParameters().get('url_param')`" },
            { "key": "B", "text": "`String.valueOf(ApexPages.currentPage().getParameters().get('url_param'))`" },
            { "key": "C", "text": "`ApexPages.currentPage().getParameters().get('url_param').escapeHtml4()`" },
            { "key": "D", "text": "使用 `escapeHtml4()` 对 URL 参数进行 HTML 转义。" }
        ],
        "explanation-zh": {"D":"对 URL 参数使用 `escapeHtml4()` 进行输出编码，可防止恶意脚本作为 HTML 执行。"},
        "difficulty": "简单",
        "accuracy": 70
    },
    {
        "type": "multiple_choice",
        "question": "Which two are phases in the Aura Application Event propagation framework? Choose 2 answers",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "Control"
            },
            {
                "key": "B",
                "text": "Default"
            },
            {
                "key": "C",
                "text": "Bubble"
            },
            {
                "key": "D",
                "text": "Emit"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/events_application_propagation.htm",
            "C": "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/events_application_propagation.htm"
        },
        "question-zh": "Aura 应用程序事件传播框架包含哪两个阶段？（选 2 项）",
        "options-zh": [
            { "key": "A", "text": "Control" },
            { "key": "B", "text": "Default" },
            { "key": "C", "text": "Bubble" },
            { "key": "D", "text": "Emit" }
        ],
        "explanation-zh": {"B":"Default 是 Aura 应用程序事件传播阶段之一。","C":"Bubble 是 Aura 应用程序事件传播阶段之一。"},
        "difficulty": "简单",
        "accuracy": 71
    },
    {
        "type": "single_choice",
        "question": "Since Aura application events follow the traditional publish-subscribe model,\nWhich method is used to fire an event?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "fire()"
            },
            {
                "key": "B",
                "text": "emit()"
            },
            {
                "key": "C",
                "text": "fireEvent()"
            },
            {
                "key": "D",
                "text": "registerEvent()"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/events_component_fire.htm"
        },
        "question-zh": "Aura 应用程序事件遵循传统的发布/订阅模型。应使用哪个方法触发事件？",
        "options-zh": [
            { "key": "A", "text": "fire()" },
            { "key": "B", "text": "emit()" },
            { "key": "C", "text": "fireEvent()" },
            { "key": "D", "text": "registerEvent()" }
        ],
        "explanation-zh": {"A":"Aura 事件实例通过 `fire()` 方法触发。"},
        "difficulty": "简单",
        "accuracy": 86
    },
    {
        "type": "single_choice",
        "question": "Universal Containers has a large number of custom applications that were built using a third-party JavaScript framework and exposed using Visualforce pages. The company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience.\nWhat should the developer do to fulfill the business request in the quickest and most effective manner?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Set the attribute enableLightning to true in the definition."
            },
            {
                "key": "B",
                "text": "Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications. "
            },
            {
                "key": "C",
                "text": "Enable Available for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application. "
            },
            {
                "key": "D",
                "text": "Rewrite all Visualfocre pages as Lightning components. "
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "The Salesforce Lightning Design System (SLDS) provides a CSS framework that mimics the look and feel of the Lightning Experience. By incorporating SLDS into existing Visualforce pages and their associated third-party JavaScript applications, the developer can quickly update the user interface to align with the styling of Lightning Experience. This method does not require rewriting the applications as Lightning Components, which would be more time-consuming and resource-intensive. Instead, applying the SLDS stylesheets directly to the existing Visualforce pages ensures consistency with Lightning Experience while leveraging the existing application infrastructure. This approach is both efficient and effective, providing a straightforward path to a modernized interface without extensive redevelopment."
        },
        "question-zh": "Universal Containers 有大量使用第三方 JavaScript 框架构建、并通过 Visualforce 页面公开的自定义应用。公司希望更新这些应用，使其样式接近 Lightning Experience。开发人员最快且最有效的做法是什么？",
        "options-zh": [
            { "key": "A", "text": "在定义中将 `enableLightning` 属性设为 true。" },
            { "key": "B", "text": "将 Salesforce Lightning Design System（SLDS）CSS 样式表纳入 JavaScript 应用。" },
            { "key": "C", "text": "在自定义应用使用的 Visualforce 页面上启用“可用于 Lightning Experience、Lightning Communities 和移动应用”。" },
            { "key": "D", "text": "将所有 Visualforce 页面重写为 Lightning 组件。" }
        ],
        "explanation-zh": {"B":"将 SLDS 引入现有应用可快速采用 Lightning 风格，无需重写所有页面或替换第三方框架。"},
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "single_choice",
        "question": "What does the Lightning Component framework provide to developers?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Extended governor limits for applications"
            },
            {
                "key": "B",
                "text": "Templated to create custom components"
            },
            {
                "key": "C",
                "text": "Prebuilt components that can be reused"
            },
            {
                "key": "D",
                "text": "Support for Classic and Lightning UIs"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "https://help.salesforce.com/s/articleView?id=sf.aura_features.htm&type=5"
        },
        "question-zh": "Lightning Component 框架为开发人员提供什么？",
        "options-zh": [
            { "key": "A", "text": "应用程序的扩展治理限制。" },
            { "key": "B", "text": "用于创建自定义组件的模板。" },
            { "key": "C", "text": "可复用的预构建组件。" },
            { "key": "D", "text": "对 Classic 和 Lightning 用户界面的支持。" }
        ],
        "explanation-zh": {"C":"Lightning 组件框架提供可组合、可复用的预构建组件，加快应用开发。"},
        "difficulty": "简单",
        "accuracy": 85
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A developer created a Visualforce page and custom controller to display the account type field as shown below.</span></p><p><span style=\"text-wrap-mode: nowrap;\">Custom controller code:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">public with sharing class customCtrlr {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;private Account theAccount;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public String actType;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public customCtrlr( ) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; theAccount = [SELECT Id, Type FROM Account WHERE Id = :ApexPages.currentPage().getParameters().get(&#39;Id&#39;)];</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; actType = theAccount.Type;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">Visualforce page snippet:</span></p><p><span style=\"text-wrap-mode: nowrap;\">The Account Type is {!actType}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is properly&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">referenced on the Visualforce page, what should the developer do to correct the problem?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Add a getter method for the actType attribute.</p>"
            },
            {
                "key": "B",
                "text": "<p>Convert theAccount.Type to a String.</p>"
            },
            {
                "key": "C",
                "text": "<p>Add with sharing to the custom controller.</p>"
            },
            {
                "key": "D",
                "text": "<p>Change theAccount attribute to public.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>In Visualforce, for the page to correctly display the value of the actType attribute, it needs to be accessible. By default, public instance variables are automatically accessible to the Visualforce page, but the correct way to ensure data is available and potentially modify access control is by adding a getter method. This allows the actType attribute to be explicitly retrieved in a controlled manner.</p>"
        },
        "question-zh": "<p>开发人员创建了一个 Visualforce 页面和自定义控制器，用于显示 Account 的 Type 字段。控制器查询 Account 后将 `theAccount.Type` 赋给 `actType`，页面使用 `{!actType}` 显示该值；但页面未正确显示 Account Type。在自定义控制器已被正确引用的前提下，开发人员应如何修复？</p>",
        "options-zh": [
            { "key": "A", "text": "<p>为 `actType` 属性添加 getter 方法。</p>" },
            { "key": "B", "text": "<p>将 `theAccount.Type` 转换为 String。</p>" },
            { "key": "C", "text": "<p>在自定义控制器中添加 `with sharing`。</p>" },
            { "key": "D", "text": "<p>将 `theAccount` 属性改为 public。</p>" }
        ],
        "explanation-zh": {"A":"Visualforce 应通过公开的 getter 访问控制器属性；添加 `getActType()` 可使页面正确取得该值。"},
        "difficulty": "简单",
        "accuracy": 78
    },
    {
        "type": "single_choice",
        "question": "<p>A developer must crreate a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary__c custom field.</p><p>What should the developer use, along with a lightning-record-edit-form, so that Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary__c ?</p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>&lt;lightning-input-field field-name=&quot;Salary__c&quot;&gt;&lt;/lightning-input-field&gt;</p>"
            },
            {
                "key": "B",
                "text": "<p>&lt;lightning-input-currency value=&quot;Salary__c&quot;&gt;&lt;/lightning-input-currency&gt;</p>"
            },
            {
                "key": "C",
                "text": "<p>&lt;lightning-input type=&quot;number&quot; value=&quot;Salary__c&quot; formatter=&quot;currency&quot;&gt;&lt;/lightning-input&gt;</p>"
            },
            {
                "key": "D",
                "text": "<p>&lt;lightning-formatted-number value=&quot;Salary__c&quot; format-style=&quot;currency&quot;&gt;&lt;/lightning-formatted-number&gt;</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p><span style=\"text-wrap-mode: nowrap;\">The &lt;lightning-input-field&gt; component is specifically designed to work within a &lt;lightning-record-edit-form&gt; and respects Salesforce field-level security (FLS). It ensures that the Salary__c field behaves as a currency input and is only viewable and editable by users with the correct FLS permissions.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Other options like &lt;lightning-input-currency&gt; or &lt;lightning-input&gt; do not respect field-level security automatically and require additional custom logic to enforce FLS, making them unsuitable for this scenario. &lt;lightning-formatted-number&gt; is for display purposes only and cannot be used for input.</span></p><p><br/></p>"
        },
        "question-zh": "<p>开发人员需要创建一个 Lightning 组件，供用户输入 Contact 信息以新建 Contact 记录，其中包含自定义字段 Salary__c。</p><p>开发人员应在 `lightning-record-edit-form` 中使用什么，使 Salary__c 以货币输入字段的形式工作，并且只有对 Salary__c 具有相应字段级安全性（FLS）权限的用户才能查看和编辑它？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>&lt;lightning-input-field field-name=&quot;Salary__c&quot;&gt;&lt;/lightning-input-field&gt;</p>"
          },
          {
            "key": "B",
            "text": "<p>&lt;lightning-input-currency value=&quot;Salary__c&quot;&gt;&lt;/lightning-input-currency&gt;</p>"
          },
          {
            "key": "C",
            "text": "<p>&lt;lightning-input type=&quot;number&quot; value=&quot;Salary__c&quot; formatter=&quot;currency&quot;&gt;&lt;/lightning-input&gt;</p>"
          },
          {
            "key": "D",
            "text": "<p>&lt;lightning-formatted-number value=&quot;Salary__c&quot; format-style=&quot;currency&quot;&gt;&lt;/lightning-formatted-number&gt;</p>"
          }
        ],
        "explanation-zh": {
          "A": "`lightning-input-field` 专为 `lightning-record-edit-form` 设计，会根据字段元数据以正确的货币格式呈现 `Salary__c`，并自动遵从字段级安全性。其他输入组件不会自动实施 FLS；`lightning-formatted-number` 仅用于显示，不能用于输入。"
        },
        "difficulty": "简单",
        "accuracy": 80
    },
    {
        "type": "single_choice",
        "question": "<p>Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records.\nWhich Visualforce feature supports this requirement?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>recordSetVar page attribute</p>"
            },
            {
                "key": "B",
                "text": "<p>&lt;apex:listButton&gt; tag</p>"
            },
            {
                "key": "C",
                "text": "<p>custom controller</p>"
            },
            {
                "key": "D",
                "text": "<p>controller extension</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>The recordSetVar page attribute is used in Visualforce pages to work with a collection of records from a list view or related list. When a list button is clicked, Salesforce passes the selected records to the Visualforce page, and the recordSetVar attribute makes them available as a collection. This enables developers to display and edit multiple records simultaneously. Other options, like custom controller or controller extension, can add functionality but do not directly enable working with multiple records selected via a list button.</p>"
        },
        "question-zh": "<p>Universal Containers 希望通过列表按钮打开一个 Visualforce 页面，让用户能够编辑多条记录。哪项 Visualforce 功能支持此要求？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>`recordSetVar` 页面属性</p>"
          },
          {
            "key": "B",
            "text": "<p>`&lt;apex:listButton&gt;` 标签</p>"
          },
          {
            "key": "C",
            "text": "<p>自定义控制器</p>"
          },
          {
            "key": "D",
            "text": "<p>控制器扩展</p>"
          }
        ],
        "explanation-zh": {
          "A": "`recordSetVar` 可使 Visualforce 页面接收来自列表视图或相关列表的一组记录，包括通过列表按钮选择的记录，因此能够同时显示和编辑多条记录。自定义控制器和控制器扩展可增加逻辑，但本身不能提供这种记录集上下文。"
        },
        "difficulty": "简单",
        "accuracy": 70
    },
    {
        "type": "single_choice",
        "question": "<p>A Lightning component has a wired property, searchResults, that stores a list of Opportunities.\nWhich definition of the Apex method, to which the searchResults property is wired, should be used?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>@AuraEnabled(cacheable=false)</p><p>public List&lt;Opportunity&gt; search(String term){ /*implementation*/ }</p><p><br/></p>"
            },
            {
                "key": "B",
                "text": "<p>@AuraEnabled(cacheable=true)</p><p>public List&lt;Opportunity&gt; search(String term){ /*implementation*/ }</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>@AuraEnabled(cacheable=false)</p><p>public static List&lt;Opportunity&gt; search(String term){ /*implementation*/ }</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>@AuraEnabled(cacheable=true)</p><p>public static List&lt;Opportunity&gt; search(String term){ /*implementation*/ }</p><p><br/></p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>The method should be defined as static and marked with @AuraEnabled(cacheable=true) to be used with a wired property in a Lightning component. This setup enables the Lightning Web Components framework to cache the results returned by the method, which improves performance by reducing server trips for the same data. The static keyword is required because the method must be callable without an instance of the class.</p>"
        },
        "question-zh": "<p>一个 Lightning 组件有一个 wired 属性 `searchResults`，用于存储 Opportunity 列表。应使用下面哪种 Apex 方法定义，作为 `searchResults` 所连接的方法？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>@AuraEnabled(cacheable=false)</p><p>public List&lt;Opportunity&gt; search(String term){ /*implementation*/ }</p><p><br/></p>"
          },
          {
            "key": "B",
            "text": "<p>@AuraEnabled(cacheable=true)</p><p>public List&lt;Opportunity&gt; search(String term){ /*implementation*/ }</p><p><br/></p>"
          },
          {
            "key": "C",
            "text": "<p>@AuraEnabled(cacheable=false)</p><p>public static List&lt;Opportunity&gt; search(String term){ /*implementation*/ }</p><p><br/></p>"
          },
          {
            "key": "D",
            "text": "<p>@AuraEnabled(cacheable=true)</p><p>public static List&lt;Opportunity&gt; search(String term){ /*implementation*/ }</p><p><br/></p>"
          }
        ],
        "explanation-zh": {
          "D": "通过 `@wire` 调用的 Apex 方法必须是 `static`，并且必须使用 `@AuraEnabled(cacheable=true)` 标注。该设置允许框架缓存只读查询结果并满足 wired Apex 的调用要求。"
        },
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "<p>A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violations to the user.\n\nHow can the developer make sure that validation rule violations are displayed?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Include &lt;apex:messages&gt; on the Visualforce page.</p>"
            },
            {
                "key": "B",
                "text": "<p>Perform the DML using the Database.upsert( ) method.</p>"
            },
            {
                "key": "C",
                "text": "<p>Add custom controller attributes to display the message.</p>"
            },
            {
                "key": "D",
                "text": "<p>Use a try/catch with a custom exception class.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_compref_messages.htm</p>"
        },
        "question-zh": "<p>开发人员使用 Visualforce 页面和自定义控制器保存 Account 记录，并希望向用户显示所有违反验证规则的错误。开发人员应如何确保这些错误显示出来？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>在 Visualforce 页面中包含 `&lt;apex:messages&gt;`。</p>"
          },
          {
            "key": "B",
            "text": "<p>使用 `Database.upsert()` 方法执行 DML。</p>"
          },
          {
            "key": "C",
            "text": "<p>添加自定义控制器属性来显示消息。</p>"
          },
          {
            "key": "D",
            "text": "<p>将 try/catch 与自定义异常类结合使用。</p>"
          }
        ],
        "explanation-zh": {
          "A": "`&lt;apex:messages&gt;` 会呈现页面消息队列中的错误，包括 DML 操作触发的验证规则错误。仅更换 DML 方法或在控制器中捕获异常，并不会自动将消息显示在页面上。"
        },
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "single_choice",
        "question": "<p>Which code displays the contents of a Visualforce page as a PDF?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>&lt;apex:page renderAs=&quot;pdf&quot;&gt;</p>"
            },
            {
                "key": "B",
                "text": "<p>&lt;apex:page contentType=&quot;pdf&quot;&gt;</p>"
            },
            {
                "key": "C",
                "text": "<p>&lt;apex:page contentType=&quot;application/pdf&quot;&gt;</p>"
            },
            {
                "key": "D",
                "text": "<p>&lt;apex:page renderAs=&quot;application/pdf&quot;&gt;</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm</p>"
        },
        "question-zh": "<p>哪段代码可将 Visualforce 页面的内容呈现为 PDF？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>&lt;apex:page renderAs=&quot;pdf&quot;&gt;</p>"
          },
          {
            "key": "B",
            "text": "<p>&lt;apex:page contentType=&quot;pdf&quot;&gt;</p>"
          },
          {
            "key": "C",
            "text": "<p>&lt;apex:page contentType=&quot;application/pdf&quot;&gt;</p>"
          },
          {
            "key": "D",
            "text": "<p>&lt;apex:page renderAs=&quot;application/pdf&quot;&gt;</p>"
          }
        ],
        "explanation-zh": {
          "A": "Visualforce 使用 `&lt;apex:page&gt;` 的 `renderAs=&quot;pdf&quot;` 属性将页面输出渲染为 PDF。`contentType` 仅设置响应内容类型，不能触发 Visualforce 的 PDF 渲染。"
        },
        "difficulty": "简单",
        "accuracy": 81
    },
    {
        "type": "single_choice",
        "question": "<p>Consider the following code snippet for a Visualforce page that is launched using a Custom Button on the Account detail page layout.</p><p>&lt;apex:page standardController=”Account”&gt;</p><p>&nbsp; &lt;!--additional UI elements --&gt;</p><p>&nbsp; &lt;apex:commandButton action=”{!save}” value=”Save” /&gt;</p><p>&lt;/apex:page&gt;</p><p>When the Save button is pressed the developer must perform a complex validation that involves multiple objects and, upon success, redirect the user to another Visualforce page.</p><p>What can the developer use to meet this business requirement?</p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Custom controller</p>"
            },
            {
                "key": "B",
                "text": "<p>Controller extension</p>"
            },
            {
                "key": "C",
                "text": "<p>Validation rule</p>"
            },
            {
                "key": "D",
                "text": "<p>Apex trigger</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "<p>https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_def.htm</p>"
        },
        "question-zh": "<p>请考虑以下 Visualforce 页面代码。该页面通过 Account 详细信息页面布局上的自定义按钮启动：</p><p>&lt;apex:page standardController=”Account”&gt;</p><p>&nbsp;&lt;!-- 其他 UI 元素 --&gt;</p><p>&nbsp;&lt;apex:commandButton action=”{!save}” value=”保存” /&gt;</p><p>&lt;/apex:page&gt;</p><p>用户单击“保存”后，开发人员必须执行涉及多个对象的复杂验证；验证成功后，还要将用户重定向到另一个 Visualforce 页面。可使用什么满足此业务需求？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>自定义控制器</p>"
          },
          {
            "key": "B",
            "text": "<p>控制器扩展</p>"
          },
          {
            "key": "C",
            "text": "<p>验证规则</p>"
          },
          {
            "key": "D",
            "text": "<p>Apex 触发器</p>"
          }
        ],
        "explanation-zh": {
          "B": "该页面已使用 Account 标准控制器。控制器扩展可在保留标准控制器及其 `save` 行为的基础上，加入跨多个对象的复杂验证，并在成功后返回 `PageReference` 进行重定向。"
        },
        "difficulty": "简单",
        "accuracy": 72
    },
    {
        "type": "single_choice",
        "question": "<p>Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>&lt;aura:application access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;</p><p>&nbsp;&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;</p><p>&lt;/aura:application&gt;</p>"
            },
            {
                "key": "B",
                "text": "<p>&lt;aura:component access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;</p><p>&nbsp;&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;</p><p>&lt;/aura:component&gt;</p>"
            },
            {
                "key": "C",
                "text": "<p>&lt;aura:application access=&quot;GLOBAL&quot; &gt;</p><p>&nbsp;&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;</p><p>&lt;/aura:application&gt;</p>"
            },
            {
                "key": "D",
                "text": "<p>&lt;aura:component access=&quot;GLOBAL&quot; &gt;</p><p>&nbsp;&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;</p><p>&lt;/aura:component&gt;</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_visualforce.htm</p>"
        },
        "question-zh": "<p>若要在 Visualforce 页面中使用 Lightning 组件 `c:accountList`，应编写哪段 Lightning 代码来声明其依赖关系？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>&lt;aura:application access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;</p><p>&nbsp;&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;</p><p>&lt;/aura:application&gt;</p>"
          },
          {
            "key": "B",
            "text": "<p>&lt;aura:component access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;</p><p>&nbsp;&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;</p><p>&lt;/aura:component&gt;</p>"
          },
          {
            "key": "C",
            "text": "<p>&lt;aura:application access=&quot;GLOBAL&quot;&gt;</p><p>&nbsp;&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;</p><p>&lt;/aura:application&gt;</p>"
          },
          {
            "key": "D",
            "text": "<p>&lt;aura:component access=&quot;GLOBAL&quot;&gt;</p><p>&nbsp;&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;</p><p>&lt;/aura:component&gt;</p>"
          }
        ],
        "explanation-zh": {
          "A": "Lightning Out 需要一个全局 Aura 应用程序，并且该应用程序须继承 `ltng:outApp`。使用 `aura:dependency` 声明 `c:accountList` 后，Visualforce 页面才能加载并创建该组件。"
        },
        "difficulty": "简单",
        "accuracy": 66
    },
    {
        "type": "multiple_choice",
        "question": "<p>Refer to the code snippet below:</p><p>import fetchOpps from &#39;@salesforce/apex/OpportunitySearch.fetchOpportunities&#39;;</p><p>@wire(fetchOpps)</p><p>opportunities;</p><p>When a Lightning web component is rendered, a list of opportunities that match certain criteria should be retrieved from the database and displayed to the end-user.</p><p>Which three considerations must the developer implement to make the fetchOpportunities method available within the Lightning web component? Choose 3 answers</p><p><br/></p>",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "<p>The method cannot mutate the result set retrieved from the database.</p>"
            },
            {
                "key": "B",
                "text": "<p>The method must be annotated with the @InvocableMethod annotation</p>"
            },
            {
                "key": "C",
                "text": "<p>The method must specify the(continuation=true) attribute.</p>"
            },
            {
                "key": "D",
                "text": "<p>The method must be annotated with the @AuraEnabled annotation</p>"
            },
            {
                "key": "E",
                "text": "<p>The method must specify the(cacheable=true) attribute.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D",
            "E"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/docs/platform/lwc/guide/apex-result-caching.html</p>",
            "D": "<p>https://developer.salesforce.com/docs/platform/lwc/guide/apex-result-caching.html</p>",
            "E": "<p>https://developer.salesforce.com/docs/platform/lwc/guide/apex-result-caching.html</p>"
        },
        "question-zh": "<p>请参考以下代码：</p><p>import fetchOpps from &#39;@salesforce/apex/OpportunitySearch.fetchOpportunities&#39;;</p><p>@wire(fetchOpps)</p><p>opportunities;</p><p>当 Lightning Web Component 渲染时，需要从数据库检索符合条件的 Opportunity 列表并显示给最终用户。为了让 `fetchOpportunities` 方法可供该 LWC 使用，开发人员必须实现哪三项要求？（选 3 项）</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>该方法不能修改从数据库检索到的结果集。</p>"
          },
          {
            "key": "B",
            "text": "<p>该方法必须使用 `@InvocableMethod` 注解。</p>"
          },
          {
            "key": "C",
            "text": "<p>该方法必须指定 `(continuation=true)` 属性。</p>"
          },
          {
            "key": "D",
            "text": "<p>该方法必须使用 `@AuraEnabled` 注解。</p>"
          },
          {
            "key": "E",
            "text": "<p>该方法必须指定 `(cacheable=true)` 属性。</p>"
          }
        ],
        "explanation-zh": {
          "A": "使用 `@wire` 的 `cacheable=true` Apex 方法必须是只读的，不能执行会修改数据库结果或状态的操作。",
          "D": "Apex 方法必须使用 `@AuraEnabled` 标注，LWC 才能导入并调用它。",
          "E": "wired Apex 调用要求方法指定 `cacheable=true`，以支持客户端缓存并表明该方法只读。"
        },
        "difficulty": "简单",
        "accuracy": 77
    },
    {
        "type": "multiple_choice",
        "question": "<p>A developer created a Lightning web component called statusComponent to be inserted into the Account record page.\nWhich two things should the developer do to make this component available? Choose 2 answers</p>",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "<p>Add &lt;isExposed&gt;true&lt;/isExposed&gt; to the statusComponent.js-meta.xml file.</p>"
            },
            {
                "key": "B",
                "text": "<p>Add &lt;target&gt;lightning__RecordPage&lt;/target&gt; to the statusComponent.js-meta.xml file.</p>"
            },
            {
                "key": "C",
                "text": "<p>Add &lt;masterLabel&gt;Account&lt;/masterLabel&gt; to the statusComponent.js-meta.xml file.</p>"
            },
            {
                "key": "D",
                "text": "<p>Add &lt;target&gt;lightning__RecordPage&lt;/target&gt; to the statusComponent.js file.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/docs/platform/lwc/guide/reference-configuration-tags.html</p>",
            "B": "<p>https://developer.salesforce.com/docs/platform/lwc/guide/reference-configuration-tags.html</p>"
        },
        "question-zh": "<p>开发人员创建了一个名为 `statusComponent` 的 Lightning Web Component，准备将其添加到 Account 记录页面。开发人员应执行哪两项操作，使该组件可供使用？（选 2 项）</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>在 `statusComponent.js-meta.xml` 文件中添加 `&lt;isExposed&gt;true&lt;/isExposed&gt;`。</p>"
          },
          {
            "key": "B",
            "text": "<p>在 `statusComponent.js-meta.xml` 文件中添加 `&lt;target&gt;lightning__RecordPage&lt;/target&gt;`。</p>"
          },
          {
            "key": "C",
            "text": "<p>在 `statusComponent.js-meta.xml` 文件中添加 `&lt;masterLabel&gt;Account&lt;/masterLabel&gt;`。</p>"
          },
          {
            "key": "D",
            "text": "<p>在 `statusComponent.js` 文件中添加 `&lt;target&gt;lightning__RecordPage&lt;/target&gt;`。</p>"
          }
        ],
        "explanation-zh": {
          "A": "组件的配置元数据中必须将 `isExposed` 设为 `true`，组件才会显示在 Lightning App Builder 中。",
          "B": "`lightning__RecordPage` target 声明该组件可用于 Lightning 记录页面；此配置必须写在 `.js-meta.xml` 文件中。"
        },
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "single_choice",
        "question": "<p>A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculations and redirect the user to a custom Visualforce page. The developer wants to ensure the Visualforce page matches the Lightning Experience user interface.</p><p>What attribute needs to be defined within the &lt;apex:page&gt; tag to meet the requirement?</p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>applyHtmlTag=&quot;true&quot;</p>"
            },
            {
                "key": "B",
                "text": "<p>wizard=&quot;true&quot;</p>"
            },
            {
                "key": "C",
                "text": "<p>setup=&quot;true&quot;</p>"
            },
            {
                "key": "D",
                "text": "<p>lightningStylesheets=&quot;true&quot;</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>https://help.salesforce.com/s/articleView?id=sf.lex_prepare_vf_styling.htm&amp;type=5</p>"
        },
        "question-zh": "<p>开发人员需要为 Account 对象创建一个自定义按钮。用户单击该按钮后，系统将执行一系列计算并重定向到自定义 Visualforce 页面。开发人员希望该 Visualforce 页面与 Lightning Experience 的用户界面风格一致。</p><p>为满足该要求，应在 `&lt;apex:page&gt;` 标签上定义哪个属性？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>applyHtmlTag=&quot;true&quot;</p>"
          },
          {
            "key": "B",
            "text": "<p>wizard=&quot;true&quot;</p>"
          },
          {
            "key": "C",
            "text": "<p>setup=&quot;true&quot;</p>"
          },
          {
            "key": "D",
            "text": "<p>lightningStylesheets=&quot;true&quot;</p>"
          }
        ],
        "explanation-zh": {
          "D": "`lightningStylesheets=&quot;true&quot;` 会为 Visualforce 页面应用与 Lightning Experience 一致的样式。其余属性与页面 HTML 包装、向导或设置页面相关，不能实现 Lightning 样式匹配。"
        },
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "<p>A custom Visualforce controller calls the ApexPages.addMessage( ) method, but no messages are rendering on the page.\nWhich component should be added to the Visualforce page to display the message?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>&lt;apex:pageMessages /&gt;</p>"
            },
            {
                "key": "B",
                "text": "<p>&lt;apex:pageMessages severity=&quot;info&quot; /&gt;</p>"
            },
            {
                "key": "C",
                "text": "<p>&lt;apex:facet name=&quot;message&quot; /&gt;</p>"
            },
            {
                "key": "D",
                "text": "<p>&lt;apex:message for=&quot;info&quot; /&gt;</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>The &lt;apex:pageMessages /&gt; component is used to display the messages that are added using the ApexPages.addMessage() method in a Visualforce page. This component renders all messages (such as errors, info, and warnings) that are generated during the Apex execution and are stored in the ApexPages message queue. Without this component on the page, the messages will not be visible to the user.</p>"
        },
        "question-zh": "<p>一个自定义 Visualforce 控制器调用 `ApexPages.addMessage()` 方法，但页面上没有呈现任何消息。应向 Visualforce 页面添加哪个组件来显示这些消息？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>&lt;apex:pageMessages /&gt;</p>"
          },
          {
            "key": "B",
            "text": "<p>&lt;apex:pageMessages severity=&quot;info&quot; /&gt;</p>"
          },
          {
            "key": "C",
            "text": "<p>&lt;apex:facet name=&quot;message&quot; /&gt;</p>"
          },
          {
            "key": "D",
            "text": "<p>&lt;apex:message for=&quot;info&quot; /&gt;</p>"
          }
        ],
        "explanation-zh": {
          "A": "`ApexPages.addMessage()` 会将消息加入页面消息队列；`&lt;apex:pageMessages /&gt;` 负责呈现该队列中的错误、警告和提示消息。未将此组件放在页面上时，用户不会看到消息。"
        },
        "difficulty": "简单",
        "accuracy": 87
    },
    {
        "type": "multiple_choice",
        "question": "<p>Which three code lines are required to create a Lightning component on a Visualforce page? Choose 3 answers</p>",
        "score": 1,
        "chooseCount": 3,
        "options": [
            {
                "key": "A",
                "text": "<p>$lightning.useComponent</p>"
            },
            {
                "key": "B",
                "text": "<p>&lt;apex:slds/&gt;</p>"
            },
            {
                "key": "C",
                "text": "<p>$lightning.use</p>"
            },
            {
                "key": "D",
                "text": "<p>&lt;apex:includeLightning/&gt;</p>"
            },
            {
                "key": "E",
                "text": "<p>$Lightning.createComponent</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D",
            "E"
        ],
        "explanation": {
            "C": "<p>https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_visualforce.htm</p>",
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_visualforce.htm</p>",
            "E": "<p>https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_visualforce.htm</p>"
        },
        "question-zh": "<p>要在 Visualforce 页面上创建 Lightning 组件，需要哪三行代码？（选 3 项）</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>$lightning.useComponent</p>"
          },
          {
            "key": "B",
            "text": "<p>&lt;apex:slds/&gt;</p>"
          },
          {
            "key": "C",
            "text": "<p>$lightning.use</p>"
          },
          {
            "key": "D",
            "text": "<p>&lt;apex:includeLightning/&gt;</p>"
          },
          {
            "key": "E",
            "text": "<p>$Lightning.createComponent</p>"
          }
        ],
        "explanation-zh": {
          "C": "`$lightning.use()` 用于初始化 Lightning Out 并指定要加载的 Aura 应用。",
          "D": "`&lt;apex:includeLightning/&gt;` 将 Lightning 组件所需的 JavaScript 资源包含到 Visualforce 页面中。",
          "E": "初始化完成后，使用 `$Lightning.createComponent()` 在指定 DOM 元素中创建组件实例。"
        },
        "difficulty": "简单",
        "accuracy": 67
    },
    {
        "type": "single_choice",
        "question": "<p>Which code in a Visualforce page and/or cotroller might present a security vulnerability?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>&lt;apex : outputText escape=&quot;false&quot; value= &quot;{ !$CurrentPage . parameters .userInput } &quot; /&gt;</p>"
            },
            {
                "key": "B",
                "text": "<p>&lt;apex : outputField value=&quot;{ !ctrl . userInput }&quot; / &gt;</p>"
            },
            {
                "key": "C",
                "text": "<p>&lt;apex : outputText value=&quot;{ !$CurrentPage . parameters . userInput } &quot; /&gt;</p>"
            },
            {
                "key": "D",
                "text": "<p>&lt;apex : outputField escape=&quot;false&quot; value=&quot;{ !ctrl . userInput }&quot; /&gt;</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/forums/?id=9062I000000IRXaQAO</p>"
        },
        "question-zh": "<p>Visualforce 页面和/或控制器中的哪段代码可能造成安全漏洞？</p>",
        "options-zh": [
          {
            "key": "A",
            "text": "<p>&lt;apex:outputText escape=&quot;false&quot; value=&quot;{!$CurrentPage.parameters.userInput}&quot; /&gt;</p>"
          },
          {
            "key": "B",
            "text": "<p>&lt;apex:outputField value=&quot;{!ctrl.userInput}&quot; /&gt;</p>"
          },
          {
            "key": "C",
            "text": "<p>&lt;apex:outputText value=&quot;{!$CurrentPage.parameters.userInput}&quot; /&gt;</p>"
          },
          {
            "key": "D",
            "text": "<p>&lt;apex:outputField escape=&quot;false&quot; value=&quot;{!ctrl.userInput}&quot; /&gt;</p>"
          }
        ],
        "explanation-zh": {
          "A": "该代码直接输出 URL 参数 `userInput`，同时将 `escape` 设为 `false`，会关闭 HTML 转义。攻击者可借此注入并执行脚本，形成 XSS 漏洞。`apex:outputText` 默认会进行转义。"
        },
        "difficulty": "简单",
        "accuracy": 78
    }
];

export default questions;
