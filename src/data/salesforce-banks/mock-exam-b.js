const questions = [
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
        "difficulty": "简单",
        "accuracy": 89
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
        "difficulty": "简单",
        "accuracy": 97
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
        "difficulty": "简单",
        "accuracy": 98
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
        "difficulty": "简单",
        "accuracy": 96
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 100
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
        "difficulty": "简单",
        "accuracy": 100
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
        "difficulty": "简单",
        "accuracy": 84
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
        "difficulty": "简单",
        "accuracy": 85
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
        "difficulty": "简单",
        "accuracy": 99
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 98
    },
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
        "difficulty": "简单",
        "accuracy": 80
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
        "difficulty": "简单",
        "accuracy": 95
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 93
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
        "accuracy": 99
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
        "difficulty": "简单",
        "accuracy": 91
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 96
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
        "accuracy": 59
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
        "difficulty": "简单",
        "accuracy": 91
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
        "difficulty": "简单",
        "accuracy": 82
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
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "multiple_choice",
        "question": "Universal Containers recently transitioned from Classic to Lightning Experience. One of its business processes requires \ncontain values from the Opportunity object to be sent via an HTTP REST callout to its external order management system \nbased on a user-initiated action on the Opportunity detail page, Example values are as follows:\nName\nAmount\nAccount\nWhich two methods should the developer implement to fulfill the business requirement?",
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
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "Lightning Component: This method uses the modern features of the Salesforce Lightning framework. A Lightning component can make an HTTP REST callout directly, providing a dynamic user interface with immediate feedback. This option is ideal for user-initiated actions and enhances user interaction on the Opportunity detail page.\n\nAfter Trigger with @Future Method: This approach uses an after trigger on the Opportunity, which calls a helper method marked with @Future(Callout=true) to perform asynchronous HTTP callouts. While not directly initiated by a user interaction, this method efficiently handles data synchronization with external systems following updates to Opportunity records, ensuring that system processes do not interfere with user transactions and providing a fail-safe mechanism for external communication.",
            "C": "Lightning Component: This method uses the modern features of the Salesforce Lightning framework. A Lightning component can make an HTTP REST callout directly, providing a dynamic user interface with immediate feedback. This option is ideal for user-initiated actions and enhances user interaction on the Opportunity detail page.\n\nAfter Trigger with @Future Method: This approach uses an after trigger on the Opportunity, which calls a helper method marked with @Future(Callout=true) to perform asynchronous HTTP callouts. While not directly initiated by a user interaction, this method efficiently handles data synchronization with external systems following updates to Opportunity records, ensuring that system processes do not interfere with user transactions and providing a fail-safe mechanism for external communication."
        },
        "difficulty": "简单",
        "accuracy": 61
    },
    {
        "type": "multiple_choice",
        "question": "Which three data types can a SOQL query return? Choose 3 answers",
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
        "difficulty": "简单",
        "accuracy": 98
    },
    {
        "type": "multiple_choice",
        "question": "A company has been adding data to Salesforce and has not done a good job of limiting the creation of duplicate Lead records. The developer is considering writing an Apex process to identify duplicates and merge the recordstogether.\nWhich two statements are valid considerations when using merge?\nChoose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples_merge.htm",
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_examples_merge.htm"
        },
        "difficulty": "简单",
        "accuracy": 83
    },
    {
        "type": "multiple_choice",
        "question": "A developer wants to invoke an outbound message when a record meets a specific criteria.\nWhich two features satisfy this use case?\nChoose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "Flow Builder:\nFlow Builder allows you to evaluate record criteria and send an outbound message using the Outbound Message action. This approach does not require any Apex code.\n\nApproval Process:\nApproval Process can include an Outbound Message action as part of its steps. When criteria are met, the outbound message is sent without needing Apex code.",
            "D": "Flow Builder:\nFlow Builder allows you to evaluate record criteria and send an outbound message using the Outbound Message action. This approach does not require any Apex code.\n\nApproval Process:\nApproval Process can include an Outbound Message action as part of its steps. When criteria are met, the outbound message is sent without needing Apex code."
        },
        "difficulty": "简单",
        "accuracy": 98
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
        "difficulty": "简单",
        "accuracy": 96
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
        "difficulty": "简单",
        "accuracy": 89
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
        "difficulty": "简单",
        "accuracy": 82
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 99
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
        "difficulty": "简单",
        "accuracy": 91
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 95
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 96
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
        "difficulty": "简单",
        "accuracy": 90
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
        "difficulty": "简单",
        "accuracy": 95
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
        "difficulty": "简单",
        "accuracy": 98
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
        "difficulty": "简单",
        "accuracy": 96
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
        "difficulty": "简单",
        "accuracy": 88
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
        "difficulty": "简单",
        "accuracy": 99
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
        "difficulty": "简单",
        "accuracy": 90
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
        "difficulty": "简单",
        "accuracy": 98
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 98
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
        "difficulty": "简单",
        "accuracy": 95
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
        "difficulty": "简单",
        "accuracy": 88
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
        "difficulty": "简单",
        "accuracy": 77
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
        "difficulty": "简单",
        "accuracy": 90
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
        "difficulty": "简单",
        "accuracy": 89
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records:</span></p><p><span style=\"text-wrap-mode: nowrap;\">@AuraEnabled</span></p><p><span style=\"text-wrap-mode: nowrap;\">public void static updateLeads( ) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; for(Lead thisLead: [SELECT Origin__c FROM Lead]) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; thisLead.LeadSource = thisLead.Origin__c;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; update thisLead;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">Which governor limit will likely be exceeded within the Apex transaction?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Total number of SOQL queries issued</p>"
            },
            {
                "key": "B",
                "text": "<p>Total number of records retrieved by SOQL queries</p>"
            },
            {
                "key": "C",
                "text": "<p>Total number of DML statements issued</p>"
            },
            {
                "key": "D",
                "text": "<p>Total number of records processed as a result of DML statements</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "<p>In the given code, the update DML statement is inside the for loop, meaning that for each Lead record retrieved, an update statement is executed.\nGovernor limits in Salesforce allow only 150 DML operations per transaction. Since the code is performing one update operation for each Lead record in the loop, if there are more than 150 records (which is highly likely with over 2,000 records), this limit will be exceeded.</p>"
        },
        "difficulty": "简单",
        "accuracy": 92
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">Given the code below in an Apex class:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">List&lt;Account&gt; aList=[SELECT Id, Active_c EROM Account];</span></p><p><span style=\"text-wrap-mode: nowrap;\">for (Account a : a List){</span></p><p><span style=\"text-wrap-mode: nowrap;\">if[!a.Active_c){</span></p><p><span style=\"text-wrap-mode: nowrap;\">a.Name = &#39;INACTIVE&#39;;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">update aList;</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">What should a developer do to correct the code so that there is no chance of hitting a govermorlimit?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Change the DML to use Database.update(aList,true);</p>"
            },
            {
                "key": "B",
                "text": "<p>Change the DML to use Database.updiate(aList,false);</p>"
            },
            {
                "key": "C",
                "text": "<p>Add a LIMIT clause to the SOQL statement.</p>"
            },
            {
                "key": "D",
                "text": "<p>Add a WRERE clause to the SOQL statement.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>Using a WHERE clause ensures the query retrieves only relevant records, reducing unnecessary processing and staying within governor limits.</p>"
        },
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "single_choice",
        "question": "<p>A developer must create a CreditCardPayment class that provides an implementation of an existing Payment class.</p><p>public virtual class Payment{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public virtual void makePayment(Decimal amount) { /*implementation*/}</p><p>}</p><p>Which is the correct implementation?</p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>public class CreditCardPayment extends Payment{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; public virtual void makePayment(Decimal amount){/*implementation*/}</p><p>}</p><p><br/></p>"
            },
            {
                "key": "B",
                "text": "<p>public class CreditCardPayment extends Payment{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; public override void makePayment(Decimal amount){/*implementation*/}</p><p>}</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>public class CreditCardPayment implements Payment{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; public override void makePayment(Decimal amount){/*implementation*/}</p><p>}</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>public class CreditCardPayment implements Payment{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; public virtual void makePayment(Decimal amount){/*implementation*/}</p><p>}</p><p><br/></p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm?search_text=virtual</p>"
        },
        "difficulty": "简单",
        "accuracy": 80
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A lead developer creates an Apex interface called &quot;Laptop&quot;. Consider the following code snippet:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">public class SilverLaptop{</span></p><p><span style=\"text-wrap-mode: nowrap;\">//code implementaticn</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">How can a developer use the Laptop interface within the SilverLaptop class?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>@Extends(class=&quot;Laptop&quot;)&nbsp;</p><p>public class SilverLaptop</p>"
            },
            {
                "key": "B",
                "text": "<p>public class SilverLaptop extends Laptop</p>"
            },
            {
                "key": "C",
                "text": "<p>@Interface (class=&quot;Laptop&quot;)&nbsp;</p><p>public class SilverLaptop</p>"
            },
            {
                "key": "D",
                "text": "<p>public class SilverLaptop implements Laptop</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 95
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A dveloper must implement a CheckPaymentProcessor class that povides check processing payment capabilities that adhere to what is defined for payments in the PaymentProcessor interface.&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">public interface PaymentProcessor {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; void pay (Decimal amount) ;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Which is the correct implementation to use the PaymentProcessor interface class?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>public class CheckPaymentProcessor extends PaymentProcessor&nbsp; {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; public void pay (Decimal amount) { }</p><p>}</p><p><br/></p>"
            },
            {
                "key": "B",
                "text": "<p>public class CheckPaymentProcessor implements PaymentProcessor {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; public void pay(Decimal amount);</p><p>}</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>public class ChecpaymentProcessor extends PaymentProcessor {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; public void pay(Decimal amount);</p><p>}</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>public class CheckPaymentProcessor implements PaymentProcessor {</p><p>public void pay(Decimal amount) { }</p><p>}</p><p><br/></p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 93
    },
    {
        "type": "multiple_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">Example 1:</span></p><p><span style=\"text-wrap-mode: nowrap;\">AggregateResult[ ] groupedResults = [ SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId];</span></p><p><span style=\"text-wrap-mode: nowrap;\">for (AggregateResult ar : groupedResults)&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">{</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; System.debug( &#39;Campaign ID&#39; + ar.get(&#39;CampaignId&#39;));</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; System.debug( &#39;Average amount&#39; + ar.get(&#39;expr0&#39;));</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Example 2:</span></p><p><span style=\"text-wrap-mode: nowrap;\">AggregateResult[ ] groupedResults = [ SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId];</span></p><p><span style=\"text-wrap-mode: nowrap;\">for (AggregateResult ar : groupedResults)&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">{</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; System.debug( &#39;Campaign ID&#39; + ar.get(&#39;CampaignId&#39;));</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; System.debug( &#39;Average amount&#39; + ar.get(&#39;theAverage&#39;));</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Example 3:</span></p><p><span style=\"text-wrap-mode: nowrap;\">AggregateResult[ ] groupedResults = [ SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId];</span></p><p><span style=\"text-wrap-mode: nowrap;\">for (AggregateResult ar : groupedResults)&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">{</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; System.debug( &#39;Campaign ID&#39; + ar.get(&#39;CampaignId&#39;));</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; System.debug( &#39;Average amount&#39; + ar.get.AVG());</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Example 4:</span></p><p><span style=\"text-wrap-mode: nowrap;\">AggregateResult[ ] groupedResults = [ SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId];</span></p><p><span style=\"text-wrap-mode: nowrap;\">for (AggregateResult ar : groupedResults)&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">{</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; System.debug( &#39;Campaign ID&#39; + ar.get(&#39;CampaignId&#39;));</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; System.debug( &#39;Average amount&#39; + ar.theAverage);</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">Which two examples above use the System.debug statements to correctly display the results from the SOQL aggregate queries?</span></p><p><span style=\"text-wrap-mode: nowrap;\">Choose 2 answers</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "<p>Example 1</p>"
            },
            {
                "key": "B",
                "text": "<p>Example 2</p>"
            },
            {
                "key": "C",
                "text": "<p>Example 3</p>"
            },
            {
                "key": "D",
                "text": "<p>Example 4</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm</p>",
            "B": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 95
    },
    {
        "type": "multiple_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A developer is tasked to perform a security review of the ContactSearch Apex calss that exists in the system. Within the class, the developer identifies the following method as a security threat:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">List&lt;Contact&gt; performSearch(String lastName){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp;return Database.query(&#39;SELECT Id, FirstName, LastName FROM Contact WHERE LastName Like %&#39;+lastName+&#39;%&#39; );</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">What are two ways the developer can update the method to prevent a SOQL injection attack? Choose 2 answers</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "<p>Use a regular expression expression on the parameter to remove special characters.</p>"
            },
            {
                "key": "B",
                "text": "<p>Use the @ReadOnly annotation and the with sharing keyword on the class.</p>"
            },
            {
                "key": "C",
                "text": "<p>Use variable binding and replace the dynamic query with a static SOQL.</p>"
            },
            {
                "key": "D",
                "text": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D"
        ],
        "explanation": {
            "C": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/pages_security_tips_soql_injection.htm</p>",
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/pages_security_tips_soql_injection.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 87
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
        "difficulty": "简单",
        "accuracy": 98
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
        "difficulty": "简单",
        "accuracy": 95
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
        "difficulty": "简单",
        "accuracy": 98
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
        "difficulty": "简单",
        "accuracy": 77
    }
];

export default questions;
