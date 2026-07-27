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
        "difficulty": "简单",
        "accuracy": 77
    }
];

export default questions;
