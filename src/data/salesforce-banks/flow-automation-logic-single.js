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
        "accuracy": 95
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
        "accuracy": 88
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
        "accuracy": 88
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
        "accuracy": 61
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
        "accuracy": 68
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
        "accuracy": 90
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
        "accuracy": 92
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
        "accuracy": 93
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
        "accuracy": 85
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
        "accuracy": 93
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
        "accuracy": 64
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
        "accuracy": 80
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
        "accuracy": 83
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
        "accuracy": 93
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
        "accuracy": 62
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
        "accuracy": 83
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
        "accuracy": 64
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
        "difficulty": "简单",
        "accuracy": 84
    }
];

export default questions;
