const questions = [
    {
        "type": "multiple_choice",
        "question": "Which two scenarious require an Apex method to be called imperatively from a Lightning web component? Choose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "C"
        ],
        "explanation": {
            "B": "https://developer.salesforce.com/docs/platform/lwc/guide/apex-call-imperative.html",
            "C": "https://developer.salesforce.com/docs/platform/lwc/guide/apex-call-imperative.html"
        },
        "difficulty": "简单",
        "accuracy": 65
    },
    {
        "type": "multiple_choice",
        "question": "Universal Containers has created a unique process for tracking container repairs. A custom Field,Status_c has been created within the container_c custom object. A developer is tasked with sending notifications to multiple external systems every time the value of the status_c picklist changes.\nWhich two tools should the developer use to meet the business requirement and ensure low maintenance of the solution?\nChoose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "https://help.salesforce.com/s/articleView?id=sf.platform_events.htm&type=5",
            "D": "https://help.salesforce.com/s/articleView?id=sf.platform_events.htm&type=5"
        },
        "difficulty": "简单",
        "accuracy": 45
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
        "accuracy": 87
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
        "accuracy": 68
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
        "accuracy": 78
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
        "accuracy": 90
    },
    {
        "type": "multiple_choice",
        "question": "What are two use cases for executing Anonymous Apex code?\nChoose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "B",
            "D"
        ],
        "explanation": {
            "B": "Run a batch Apex class to update all Contacts:\nAnonymous Apex can be used to invoke a batch class directly, which is useful for processing large amounts of data, such as updating all Contact records.\n\nSchedule an Apex class to run periodically:\nAnonymous Apex can be used to schedule an Apex class by invoking System.schedule() to define when the class should execute. This is a common use case when configuring scheduled jobs in an org.",
            "D": "Run a batch Apex class to update all Contacts:\nAnonymous Apex can be used to invoke a batch class directly, which is useful for processing large amounts of data, such as updating all Contact records.\n\nSchedule an Apex class to run periodically:\nAnonymous Apex can be used to schedule an Apex class by invoking System.schedule() to define when the class should execute. This is a common use case when configuring scheduled jobs in an org."
        },
        "difficulty": "简单",
        "accuracy": 73
    },
    {
        "type": "multiple_choice",
        "question": "UC hires a developer to build a custom search page to help users find the Accounts they want.\nUsers will be able to search on Name, Description, and a custom comments field.\nWhich consideration should the developer be aware of when deciding between SOQL and SOSL?\nChoose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "SOQL is able to return more records: SOQL (Salesforce Object Query Language) allows developers to query a specific object (like Account) and return all records that meet the search criteria, subject to the governor limits. SOQL can return up to 50,000 records in a query (without using LIMIT), whereas SOSL is typically used for more specific text-based search scenarios, and it does not return as many records at once.\n\nSOSL is faster for text searches: SOSL (Salesforce Object Search Language) is optimized for text-based searches and can search across multiple objects (like Account, Contact, Opportunity) simultaneously. It is generally faster when performing text searches on fields that contain searchable text (like Name, Description, or custom comments fields), making it more efficient for searching text patterns across multiple fields or objects.",
            "B": "SOQL is able to return more records: SOQL (Salesforce Object Query Language) allows developers to query a specific object (like Account) and return all records that meet the search criteria, subject to the governor limits. SOQL can return up to 50,000 records in a query (without using LIMIT), whereas SOSL is typically used for more specific text-based search scenarios, and it does not return as many records at once.\n\nSOSL is faster for text searches: SOSL (Salesforce Object Search Language) is optimized for text-based searches and can search across multiple objects (like Account, Contact, Opportunity) simultaneously. It is generally faster when performing text searches on fields that contain searchable text (like Name, Description, or custom comments fields), making it more efficient for searching text patterns across multiple fields or objects."
        },
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "multiple_choice",
        "question": "What are three considerations when using the @InvocableMethod annotation in Apex? Choose 3 answers",
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
        "difficulty": "简单",
        "accuracy": 65
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
        "accuracy": 75
    },
    {
        "type": "multiple_choice",
        "question": "A developer identifies the following triggers on the Expense__c object:\ndeleteExpense;\napplyDefaultsToExpense;\nvalidateExpenseUpdate;\n\nThe triggers process before delete, before insert, and before update events respectively.\nWhich two techniques should the developer implement to ensure reigger best practices are followed? Chooose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "Unify all three triggers in a single trigger on the Expense__c object that includes all events: Salesforce best practices recommend having only one trigger per object to avoid trigger conflicts and ensure that the logic is easier to manage. By combining the before delete, before insert, and before update events into a single trigger, the developer ensures the trigger executes sequentially in the proper order for all related actions.\n\nCreate helper classes to execute the appropriate logic when a record is saved: Using helper classes helps organize the code outside of the trigger itself. This leads to cleaner, more maintainable code, improves testability, and ensures that the trigger only calls out to the logic rather than handling complex logic within the trigger itself.",
            "B": "Unify all three triggers in a single trigger on the Expense__c object that includes all events: Salesforce best practices recommend having only one trigger per object to avoid trigger conflicts and ensure that the logic is easier to manage. By combining the before delete, before insert, and before update events into a single trigger, the developer ensures the trigger executes sequentially in the proper order for all related actions.\n\nCreate helper classes to execute the appropriate logic when a record is saved: Using helper classes helps organize the code outside of the trigger itself. This leads to cleaner, more maintainable code, improves testability, and ensures that the trigger only calls out to the logic rather than handling complex logic within the trigger itself."
        },
        "difficulty": "简单",
        "accuracy": 72
    },
    {
        "type": "multiple_choice",
        "question": "A developer has to identify a method in an Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a DML statement to save the changes to the database.\n\nWhich two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits? Choose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "C"
        ],
        "explanation": {
            "A": "Database.Savepoint method - Using Database.Savepoint ensures transaction control by allowing you to roll back changes if an error occurs, maintaining database integrity during resource-intensive operations.\n\nSystem.Limit class - The System.Limit class helps monitor governor limit consumption, such as CPU time and query limits, during the execution of the method. This allows developers to track and optimize resource usage to prevent limit violations.",
            "C": "Database.Savepoint method - Using Database.Savepoint ensures transaction control by allowing you to roll back changes if an error occurs, maintaining database integrity during resource-intensive operations.\n\nSystem.Limit class - The System.Limit class helps monitor governor limit consumption, such as CPU time and query limits, during the execution of the method. This allows developers to track and optimize resource usage to prevent limit violations."
        },
        "difficulty": "简单",
        "accuracy": 71
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
        "accuracy": 89
    },
    {
        "type": "multiple_choice",
        "question": "If Apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which two statement are true regarding governor limits? Choose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm",
            "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm"
        },
        "difficulty": "简单",
        "accuracy": 60
    },
    {
        "type": "multiple_choice",
        "question": "A developer must create an Apex class, ContactController, that a Lightning component can use to search for Contact records. Users of the \nLightning component should only be able to search for Contact records to which they have access.\nWhich two will restrict records correctly? Choose 2 answers",
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
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D"
        ],
        "explanation": {
            "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm",
            "D": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm"
        },
        "difficulty": "简单",
        "accuracy": 76
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
        "accuracy": 64
    }
];

export default questions;
