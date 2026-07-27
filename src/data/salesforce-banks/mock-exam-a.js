const questions = [
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
        "accuracy": 93
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
        "accuracy": 91
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
        "accuracy": 93
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
        "accuracy": 99
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
        "accuracy": 96
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
        "accuracy": 93
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
        "accuracy": 91
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
        "accuracy": 98
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
        "accuracy": 97
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
        "accuracy": 84
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
        "accuracy": 80
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
        "accuracy": 85
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
        "accuracy": 78
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
        "accuracy": 74
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
        "accuracy": 96
    },
    {
        "type": "single_choice",
        "question": "Universal Containers uses Service Cloud with a custom field, stage_c, on the Case object.\nManagement wants to send a follow-up email reminder 6 hours after the stage_c field is set to \"Waiting on Customer\". The Salesforce Administrator wants to ensure the solution used is bulk safe.\nWhich automation tool should a developer recommend to meet these business requirements?",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "Record-Triggered Flow"
            },
            {
                "key": "B",
                "text": "Entitlement Process"
            },
            {
                "key": "C",
                "text": "Scheduled Flow"
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
            "A": "A record-triggered flow can run when stage_c changes to \"Waiting on Customer\" and use a scheduled path to send the reminder 6 hours later. This declarative automation is bulk-safe."
        },
        "difficulty": "简单",
        "accuracy": 42
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
        "difficulty": "简单",
        "accuracy": 91
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
        "difficulty": "简单",
        "accuracy": 86
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
        "difficulty": "简单",
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 92
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
        "accuracy": 95
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
        "difficulty": "简单",
        "accuracy": 93
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
        "accuracy": 90
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
        "accuracy": 95
    },
    {
        "type": "multiple_choice",
        "question": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in a PostalCodeToTimezone__c custom object.\nWhich two automation tools can be used to implement this feature?\nChoose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "Fast Field Updates record-triggered flow:\nA record-triggered flow can update the \"Timezone\" field efficiently when the \"Postal Code\" is modified. It can query the PostalCodeToTimezone__c object to get the corresponding value and perform the update without requiring Apex code.\n\nAccount trigger:\nA trigger on the Account object can be written in Apex to handle this logic. It would query the PostalCodeToTimezone__c object and update the \"Timezone\" field based on the postal code.\n\n",
            "D": "Fast Field Updates record-triggered flow:\nA record-triggered flow can update the \"Timezone\" field efficiently when the \"Postal Code\" is modified. It can query the PostalCodeToTimezone__c object to get the corresponding value and perform the update without requiring Apex code.\n\nAccount trigger:\nA trigger on the Account object can be written in Apex to handle this logic. It would query the PostalCodeToTimezone__c object and update the \"Timezone\" field based on the postal code.\n\n"
        },
        "difficulty": "简单",
        "accuracy": 83
    },
    {
        "type": "multiple_choice",
        "question": "A developer is implementing an Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debitAmount' should not be able to change once a value is assigned.\nIn which two ways can the developer declare the variables to ensure their value can only be assigned one time? Choose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "Use the final keyword and assign its value in the class constructor: The final keyword ensures that once a value is assigned to the variable, it cannot be changed. The value can be assigned in the class constructor, and after that, it is immutable. This is a common practice for setting values that should remain constant after initialization.\n\nUse the final keyword and assign its value when declaring the variable: Another approach is to use the final keyword and assign a value directly when declaring the variable. This ensures the variable is immutable immediately upon declaration and cannot be reassigned later.",
            "D": "Use the final keyword and assign its value in the class constructor: The final keyword ensures that once a value is assigned to the variable, it cannot be changed. The value can be assigned in the class constructor, and after that, it is immutable. This is a common practice for setting values that should remain constant after initialization.\n\nUse the final keyword and assign its value when declaring the variable: Another approach is to use the final keyword and assign a value directly when declaring the variable. This ensures the variable is immutable immediately upon declaration and cannot be reassigned later."
        },
        "difficulty": "简单",
        "accuracy": 86
    },
    {
        "type": "multiple_choice",
        "question": "A developer creates a custom exception as shown below:\n\npublic class ParityException extends Exception {}\n\nWhat are two ways the developer can fire the exception in Apex?\nChoose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "throw new ParityException('parity does not match');\n\nThis is a valid way to throw the custom exception. The exception is instantiated with a string argument, which is passed to the constructor of the ParityException class. This string can be used to provide an error message when the exception is caught.\nthrow new ParityException ();\n\nThis is another valid way to throw the exception, where the exception is instantiated without any arguments. In this case, no error message is provided, and the default constructor of the exception class is used.",
            "C": "throw new ParityException('parity does not match');\n\nThis is a valid way to throw the custom exception. The exception is instantiated with a string argument, which is passed to the constructor of the ParityException class. This string can be used to provide an error message when the exception is caught.\nthrow new ParityException ();\n\nThis is another valid way to throw the exception, where the exception is instantiated without any arguments. In this case, no error message is provided, and the default constructor of the exception class is used."
        },
        "difficulty": "简单",
        "accuracy": 95
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
        "difficulty": "简单",
        "accuracy": 96
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
        "difficulty": "简单",
        "accuracy": 92
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
        "difficulty": "简单",
        "accuracy": 90
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
        "difficulty": "简单",
        "accuracy": 89
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
        "difficulty": "简单",
        "accuracy": 98
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
        "accuracy": 95
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
        "difficulty": "简单",
        "accuracy": 95
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
        "difficulty": "简单",
        "accuracy": 85
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
        "difficulty": "简单",
        "accuracy": 89
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
        "accuracy": 86
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
        "difficulty": "简单",
        "accuracy": 72
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
        "difficulty": "简单",
        "accuracy": 75
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
        "difficulty": "简单",
        "accuracy": 90
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
        "difficulty": "简单",
        "accuracy": 85
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
        "difficulty": "简单",
        "accuracy": 81
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
        "accuracy": 89
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
        "difficulty": "简单",
        "accuracy": 93
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
        "difficulty": "简单",
        "accuracy": 98
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
        "accuracy": 93
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
        "difficulty": "简单",
        "accuracy": 95
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
        "accuracy": 93
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
        "difficulty": "简单",
        "accuracy": 85
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
        "difficulty": "简单",
        "accuracy": 86
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
        "accuracy": 82
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
        "difficulty": "简单",
        "accuracy": 94
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
        "accuracy": 93
    },
    {
        "type": "single_choice",
        "question": "<p>A Visual Flow uses an Apex Action to provide additional information about multiple Contacts, stored in a custom class, ContactInfo. \nWhich is the correct definition of the Apex method that gets the additional information?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>@InvocableMethod(label=&#39;Additional Info&#39;)</p><p>public ContactInfo getInfo(Id contactId)</p><p>（ /*implementation*/ )</p><p><br/></p>"
            },
            {
                "key": "B",
                "text": "<p>@InvocableMethod(label=&#39;Additional Info&#39;)</p><p>public static ContactInfo getInfo(Id contactId)</p><p>（/ *implementation*/)</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>@InvocableMethod(label=&#39;Additional Info&#39;)</p><p>public List&lt;ContactInfo&gt; getInfo(List&lt;Id&gt; contactIds)</p><p>（/ *implementation*/)</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>@InvocableMethod(label=&#39;Additional Info&#39;)</p><p>public static List&lt;ContactInfo&gt; getInfo(List&lt;Id&gt; contactIds)</p><p>（/ *implementation*/)</p><p><br/></p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 97
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">In the following example, which sharing context will myMethod execute when it is invoked?</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">public Class myClass {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp;public void myMethod( ) { /* implementation */ }</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Sharing rules will be inherited from the calling context.</p>"
            },
            {
                "key": "B",
                "text": "<p>Sharing rules will not be enforced for the running user.</p>"
            },
            {
                "key": "C",
                "text": "<p>Sharing rules will be enforced for the running user.</p>"
            },
            {
                "key": "D",
                "text": "<p>Sharing rules will be enforced by the instantiating class.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 93
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A Developer Edition org has five existing accounts. A developer wants to add 10 more accounts for testing purposes.</span></p><p><span style=\"text-wrap-mode: nowrap;\">The following code is executed in the Developer Console using the Execute Anonymous window:</span></p><p><span style=\"text-wrap-mode: nowrap;\">Account myAccount = new Account(Name = ‘MyAccount’);</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; Insert myAccount;</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; Integer x =1;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; List&lt;Account&gt; newAccounts = new List&lt;Account&gt;();</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; do {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp;Account acct = new Account (Name= ‘New Account ‘ + x++);</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp;newAccounts.add(acct);</span></p><p><span style=\"text-wrap-mode: nowrap;\">} while (x&lt;10);</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">How many total accounts will be in the org after this code is executed?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>5</p>"
            },
            {
                "key": "B",
                "text": "<p>6</p>"
            },
            {
                "key": "C",
                "text": "<p>10</p>"
            },
            {
                "key": "D",
                "text": "<p>15</p>"
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
        "accuracy": 95
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A developer considers the following snippet of code:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Boolean isOK;</span></p><p><span style=\"text-wrap-mode: nowrap;\">Integer x;</span></p><p><span style=\"text-wrap-mode: nowrap;\">String theString = &#39;Hello&#39;;</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">if(isOk == false &amp;&amp; theString == &#39;Hello&#39;){</span></p><p><span style=\"text-wrap-mode: nowrap;\">x=1;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}else if(isOK == true &amp;&amp; theString == &#39;Hello&#39;){</span></p><p><span style=\"text-wrap-mode: nowrap;\">x=2;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}else if(isOk == null&nbsp; &amp;&amp; theString == &#39;Hello&#39;){</span></p><p><span style=\"text-wrap-mode: nowrap;\">x=3;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}else{</span></p><p><span style=\"text-wrap-mode: nowrap;\">x=4;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Based on this code, what is the value of x?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>2</p>"
            },
            {
                "key": "B",
                "text": "<p>1</p>"
            },
            {
                "key": "C",
                "text": "<p>4</p>"
            },
            {
                "key": "D",
                "text": "<p>3</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p><span style=\"text-wrap-mode: nowrap;\">The variable isOK is declared but not initialized, so its value is null by default.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The first if condition (isOk == false &amp;&amp; theString == &#39;Hello&#39;) evaluates to false because isOk is null, and null == false is false.</span></p><p><span style=\"text-wrap-mode: nowrap;\">The second if condition (isOK == true &amp;&amp; theString == &#39;Hello&#39;) evaluates to false because null == true is false.</span></p><p><span style=\"text-wrap-mode: nowrap;\">The third if condition (isOk == null &amp;&amp; theString == &#39;Hello&#39;) evaluates to true because isOk is indeed null and theString equals &#39;Hello&#39;.</span></p><p><span style=\"text-wrap-mode: nowrap;\">Thus, the code assigns x = 3.</span></p><p><br/></p>"
        },
        "difficulty": "简单",
        "accuracy": 95
    },
    {
        "type": "multiple_choice",
        "question": "<p>Given the following code snippet, that is part of a custom controller for a Visualforce page:</p><p>public void updateContact(Contact thisContact) {</p><p>&nbsp; &nbsp; &nbsp;thisContact.Is_Active__c = false;</p><p>&nbsp; &nbsp; &nbsp;try{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; update thisContact;</p><p>&nbsp; &nbsp; &nbsp;}catch(Exception e) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; String errorMessage = &#39;An error occurred while updating the Contact. &#39; + e.getMessage());</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ApexPages.addmessage(new ApexPages.message(ApexPages.severity.FATAL.errorMessage));</p><p>&nbsp; &nbsp; &nbsp;}</p><p>}</p><p>In which two ways can the try/catch be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the&nbsp;</p><p>current logged-in user does not have the appropriate level of access?&nbsp;</p><p>Choose 2 answers</p><p><br/></p>",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "<p>Use if (thisContact.OwnerId == UserInfo.getUserId())</p>"
            },
            {
                "key": "B",
                "text": "<p>Use if (Schema.sObjectType.Contact.isUpdatable())</p>"
            },
            {
                "key": "C",
                "text": "<p>Use if (Schema.sObjectType.Contact.isAccessible())</p>"
            },
            {
                "key": "D",
                "text": "<p>Use if (Schema.sObjectType.Contact.fields.Is_Active__c.isUpdateable())</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "<p><span style=\"text-wrap-mode: nowrap;\">Schema.sObjectType.Contact.isUpdatable()</span></p><p><span style=\"text-wrap-mode: nowrap;\">This method checks if the entire Contact object is updatable by the current user. If the user does not have permission to update Contact records, the DML operation (update thisContact) will be prevented, ensuring that no unauthorized updates are attempted.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Schema.sObjectType.Contact.fields.Is_Active__c.isUpdateable()</span></p><p><span style=\"text-wrap-mode: nowrap;\">This method checks if the user has update permissions on the specific field (Is_Active__c) on the Contact object. If the user lacks permissions on this field, the DML operation will not execute, which prevents unauthorized updates to that field.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">By using these checks, you can enforce object-level and field-level security, ensuring that the DML operation only happens when the user has the appropriate permissions.</span></p><p><br/></p>",
            "D": "<p><span style=\"text-wrap-mode: nowrap;\">Schema.sObjectType.Contact.isUpdatable()</span></p><p><span style=\"text-wrap-mode: nowrap;\">This method checks if the entire Contact object is updatable by the current user. If the user does not have permission to update Contact records, the DML operation (update thisContact) will be prevented, ensuring that no unauthorized updates are attempted.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Schema.sObjectType.Contact.fields.Is_Active__c.isUpdateable()</span></p><p><span style=\"text-wrap-mode: nowrap;\">This method checks if the user has update permissions on the specific field (Is_Active__c) on the Contact object. If the user lacks permissions on this field, the DML operation will not execute, which prevents unauthorized updates to that field.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">By using these checks, you can enforce object-level and field-level security, ensuring that the DML operation only happens when the user has the appropriate permissions.</span></p><p><br/></p>"
        },
        "difficulty": "简单",
        "accuracy": 85
    },
    {
        "type": "multiple_choice",
        "question": "<p>Management asked for opportunities to be automatically created for accounts with annual revenue greater than $1000000. A developer created the following trigger on the Account object to satisfy this requirement.</p><p>For(Account a : Trigger.new) {</p><p>&nbsp; &nbsp; &nbsp; if(a.AnnualRevenue &gt; 1000000) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; List&lt;Opportunity&gt; oppList = [SELECT Id FROM Opportunity WHERE accountId = :a.Id];</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(oppList.size() ==0) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Opportunity oppty = new Opportunity(Name = a.Name, StageName = &#39;Prospecting&#39;, CloseDate = system.today().addDays(30);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; insert oppty;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;}</p><p>&nbsp; &nbsp; }</p><p>}</p><p>Users are able to update the account records via the UI and can see an opportunity created for high annual revenue accounts. However, when the administrator tries to upload a list of 179 accounts using Data Loader, if fails with System.Exception errors.</p><p>Which two actions should the developer take to fix the code segment shown above? Choose 2 answers</p><p><br/></p>",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "<p>Move the DML that saves opportunities outside the for loop.</p>"
            },
            {
                "key": "B",
                "text": "<p>Use Database.query to query the opportunities.</p>"
            },
            {
                "key": "C",
                "text": "<p>Check if all the required fields for Opportunity are being added on creation.</p>"
            },
            {
                "key": "D",
                "text": "<p>Query for existing opportunities outside the for loop.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "D"
        ],
        "explanation": {
            "A": "<p>Move the DML that saves opportunities outside the for loop:\nDML operations (like insert) should not be inside a loop. Doing so can cause governor limit exceptions because Salesforce allows a maximum of 150 DML operations per transaction. To fix this, collect all opportunities to be inserted into a List and perform a single insert operation after the loop.\n\nQuery for existing opportunities outside the for loop:\nThe code performs a SOQL query inside a loop, which violates Salesforce&#39;s governor limit of 100 SOQL queries per transaction. Instead, query all related opportunities for the accounts being processed before the loop and store them in a Map. This ensures only one query is executed for all records.</p>",
            "D": "<p>Move the DML that saves opportunities outside the for loop:\nDML operations (like insert) should not be inside a loop. Doing so can cause governor limit exceptions because Salesforce allows a maximum of 150 DML operations per transaction. To fix this, collect all opportunities to be inserted into a List and perform a single insert operation after the loop.\n\nQuery for existing opportunities outside the for loop:\nThe code performs a SOQL query inside a loop, which violates Salesforce&#39;s governor limit of 100 SOQL queries per transaction. Instead, query all related opportunities for the accounts being processed before the loop and store them in a Map. This ensures only one query is executed for all records.</p>"
        },
        "difficulty": "简单",
        "accuracy": 93
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
        "difficulty": "简单",
        "accuracy": 94
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
        "accuracy": 96
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
        "accuracy": 94
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
        "difficulty": "简单",
        "accuracy": 87
    }
];

export default questions;
