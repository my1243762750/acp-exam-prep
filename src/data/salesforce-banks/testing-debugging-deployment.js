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
        "difficulty": "简单",
        "accuracy": 94
    }
];

export default questions;
