let arr = [
    {
  "type": "multiple_choice",
  "question": "Universal Containers wants Opportunities to no longer be editable when it reaches the Closed/Won stage. Which two strategies can a developer use to accomplish this?",
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
  "userAnswers": ["C", "D"],
  "correctAnswers": ["C", "D"],
  "explanation": {
    "C": "A validation rule can check whether StageName is Closed/Won and return an error to prevent subsequent edits.",
    "D": "A before-save Apex trigger can detect that the Opportunity is already Closed/Won and use addError to prevent changes from being saved."
  },
  "difficulty": "简单",
  "accuracy": 84
},
{
  "type": "single_choice",
  "question": "A software company is using Salesforce to track the companies they sell their software to in the Account object. They also use Salesforce to track bugs in their software with a custom object, Bug__c. As part of a process improvement initiative, they want to be able to report on which companies have reported which bugs. Each company should be able to report multiple bugs and bugs can also be reported by multiple companies. What is needed to allow this reporting?",
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
  "correctAnswers": ["B"],
  "explanation": {
    "B": "Account and Bug__c have a many-to-many relationship. A junction object is required to associate multiple accounts with multiple bugs and support reporting."
  }
},
{
  "type": "single_choice",
  "question": "A developer created a trigger on the Account object. While testing the trigger, the developer sees the error message “Maximum trigger depth exceeded”. What could be the possible causes?",
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
  "correctAnswers": ["B"],
  "explanation": {
    "B": "The error occurs when a trigger fires recursively, typically because a DML operation causes the trigger to execute repeatedly. Salesforce allows a maximum trigger depth of 16 within a single transaction."
  },
  "difficulty": "简单",
  "accuracy": 94
},
{
  "type": "multiple_choice",
  "question": "A developer creates a Lightning web component that imports a method within an Apex class. When a Validate button is pressed, the method runs to execute complex validations. In this implementation scenario, which two options are part of the Controller according to the MVC architecture?",
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
  "correctAnswers": ["A", "C"],
  "explanation": {
    "A": "The JavaScript file handles user interactions and invokes server-side methods, so it forms part of the Controller.",
    "C": "The Apex class processes the complex server-side validation logic and forms part of the Controller."
  }
},
{
  "type": "multiple_choice",
  "question": "A developer wants to send an outbound message when a record meets specific criteria. Which two features satisfy this use case?",
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
  "correctAnswers": ["B", "C"],
  "explanation": {
    "B": "An Approval Process can evaluate record criteria and execute an outbound message as an approval action without Apex code.",
    "C": "Flow Builder can evaluate record criteria and send an outbound message through automation."
  }
},
{
  "type": "single_choice",
  "question": "Universal Containers wants to automatically assign new cases to the appropriate support representative based on the case origin. They have created a custom field on the Case object to store the support representative name. What is the best solution to assign the case to the appropriate support representative?",
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
  "correctAnswers": ["D"],
  "explanation": {
    "D": "An Assignment element in Flow can set the custom support representative field according to the Case Origin without requiring Apex code."
  }
},
{
  "type": "multiple_choice",
  "question": "What are two considerations for running a flow in debug mode?",
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
  "correctAnswers": ["A", "B"],
  "explanation": {
    "A": "Callouts to external systems are not executed while debugging a flow.",
    "B": "When rollback mode is enabled during debugging, DML changes are rolled back after the debug run ends."
  }
},
{
  "type": "single_choice",
  "question": "A developer is designing a new application on the Salesforce platform and wants to ensure it can support multiple tenants effectively. Which design framework should the developer consider to ensure scalability and maintainability?",
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
  "correctAnswers": ["C"],
  "explanation": {
    "C": "The MVC pattern separates the user interface, data, and business logic, which improves maintainability and scalability. Salesforce itself is built on an MVC framework."
  },
  "difficulty": "简单",
  "accuracy": 93
},
{
  "type": "multiple_choice",
  "question": "What are two benefits of using External IDs?",
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
  "correctAnswers": ["A", "D"],
  "explanation": {
    "A": "An External ID field stores an identifier from an external system and supports matching records during integration.",
    "D": "External ID fields are indexed, which can improve the performance of selective SOQL queries."
  }
},
{
  "type": "single_choice",
  "question": "A company decides to implement a new process where every time an Opportunity is created, a follow up Task should be created and assigned to the Opportunity Owner. What is the most efficient way for a developer to implement this?",
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
  "correctAnswers": ["D"],
  "explanation": {
    "D": "A record-triggered flow on Opportunity can run automatically when an Opportunity is created, create the follow-up Task, and assign it to the Opportunity Owner without requiring Apex code."
  },
  "difficulty": "简单",
  "accuracy": null
},
{
  "type": "single_choice",
  "question": "Universal Containers wants to ensure that all new leads created in the system have a valid email address. They have created a validation rule to enforce this requirement, but want to add an additional layer of validation using automation. What would be the best solution for this requirement?",
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
  "correctAnswers": ["C"],
  "explanation": {
    "C": "A before-save Apex trigger can validate the email address before the Lead is saved and use addError() to prevent saving an invalid record."
  }
},
{
  "type": "single_choice",
  "question": "A developer created a trigger on a custom object. This custom object also has some dependent pick lists. According to the order of execution rules, which step happens first?",
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
  "correctAnswers": ["B"],
  "explanation": {
    "B": "System validation runs first to verify items such as field formats, maximum field lengths, required fields, and valid values for dependent picklists."
  },
  "difficulty": "简单",
  "accuracy": null
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
  "correctAnswers": ["C"],
  "explanation": {
    "C": "Declaring the Apex class with sharing enforces the current user's record-level sharing rules, so only records the user can access are returned."
  },
  "difficulty": "简单",
  "accuracy": 89
},
{
  "type": "single_choice",
  "question": "A company wants to implement a new call center process for handling customer service calls. It requires service reps to ask for the caller's account number before proceeding with the rest of their call script. Following best practices, what is the optimal approach to satisfy this requirement?",
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
  "correctAnswers": ["A"],
  "explanation": {
    "A": "Flow Builder can be used to create a screen flow that requires the service representative to enter the caller's account number before continuing with the remaining call script."
  },
  "difficulty": "简单",
  "accuracy": 87
},
{
  "type": "single_choice",
  "question": "A developer created these three Rollup Summary fields on the custom object, Project__c: Total_Timesheets__c, Total_Approved_Timesheets__c, and Total_Rejected_Timesheet__c. The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. Which should the developer use to implement the business requirement in order to minimize maintenance overhead?",
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
  "correctAnswers": ["C"],
  "explanation": {
    "C": "A formula field can calculate the ratio directly from the existing roll-up summary fields without code or additional automation, minimizing maintenance overhead."
  }
},
{
  "type": "single_choice",
  "question": "A company has a custom object, Sales_Help_Request__c, that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c. A developer is tasked with creating a field, Total_hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity. What should the developer use to implement this?",
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
      "text": "A roll-up summary field on the Sales_Help_Request__c object"
    }
  ],
  "userAnswers": [],
  "correctAnswers": ["C"],
  "explanation": {
    "C": "A standard roll-up summary field cannot summarize records through a Lookup relationship. A record-triggered flow on Sales_Help_Request__c can recalculate and update Total_hours__c on the related Opportunity when child records are created, updated, or deleted."
  },
  "difficulty": "简单",
  "accuracy": null
},
{
  "type": "single_choice",
  "question": "AW Computing tracks order information in custom objects called Order__c and Order_Line__c. Currently, all shipping information is stored in the Order__c object. The company wants to expand its order application to support split shipments so that any number of Order_Line__c records on a single Order__c can be shipped to different locations. What should a developer add to fulfill this requirement?",
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
  "correctAnswers": ["D"],
  "explanation": {
    "D": "Create Order_Shipment_Group__c and relate it to both Order__c and Order_Line__c. This supports multiple shipment groups per order and associates individual order lines with the appropriate shipping destination."
  },
  "difficulty": "简单",
  "accuracy": 73
},
{
  "type": "multiple_choice",
  "question": "UC is developing a process for their sales teams that requires all sales reps to go through a set of scripted steps with each new customer they create. In the first step of collecting information, UC's ERP system must be checked via a REST endpoint to see if the customer exists. If the customer exists, the data must be presented to the sales rep in Salesforce. Which two should a developer implement to satisfy the requirements?",
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
  "correctAnswers": ["B", "C"],
  "explanation": {
    "B": "An invocable method can call the ERP system's REST endpoint, determine whether the customer exists, and return the customer data to the flow.",
    "C": "A flow can guide sales representatives through the scripted steps, invoke the Apex invocable method, and display the returned customer data in the Salesforce user interface."
  },
  "difficulty": "简单",
  "accuracy": 60
},
{
  "type": "multiple_choice",
  "question": "A business has a proprietary Order Management System (OMS) that creates orders from their website. When an order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact identified by the email on the order. As the order goes through different stages in the OMS, the integration also updates it in Salesforce. It is noticed that each update from the OMS creates a new order record in Salesforce. Which two actions will prevent duplicate order records from being created in Salesforce?",
  "score": 1,
  "chooseCount": 2,
  "options": [
    {
      "key": "A",
      "text": "Ensure that the order number in the OMS is unique."
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
      "text": "Write a before trigger on the order object to delete any duplicates."
    }
  ],
  "userAnswers": [],
  "correctAnswers": ["A", "B"],
  "explanation": {
    "A": "A unique OMS order number ensures that every order has a stable and distinct identifier.",
    "B": "Using the OMS order number as an External ID allows the integration to upsert and update the existing Salesforce order instead of creating a new record."
  },
  "difficulty": "简单",
  "accuracy": 83
},
{
  "type": "single_choice",
  "question": "UH is using Salesforce to capture job applications. A Salesforce administrator created two custom objects: Job__c acting as the master object and Job_Application__c acting as the detail. Within the Job__c object, a custom multi-select picklist, Preferred_Locations__c, contains a list of approved states for the position. Each Job_Application__c record relates to a Contact within the system through a master-detail relationship. Recruiters have requested the ability to view whether the Contact's Mailing State value matches a value selected in the Preferred_Locations__c field within the Job_Application__c record. Recruiters would like this value to be kept in sync if changes occur to the Contact's Mailing State or if the Job's Preferred_Locations__c field is updated. What is the recommended tool a developer should use to meet the business requirement?",
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
  "correctAnswers": ["A"],
  "explanation": {
    "A": "An Apex trigger is required because the value must remain synchronized when either the related Contact's Mailing State or the parent Job's multi-select Preferred_Locations__c field changes. Apex can handle updates across both related objects and evaluate membership in a multi-select picklist."
  },
  "difficulty": "简单",
  "accuracy": 51
},
{
  "type": "single_choice",
  "question": "A large corporation stores Orders and Line Items in Salesforce for different lines of business. Users are allowed to see Orders across the entire organization, but, for security purposes, should only be able to see the Line Items in their line of business. Which type of relationship should be used between Line Items and Orders?",
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
  "correctAnswers": ["B"],
  "explanation": {
    "B": "A lookup relationship allows Line Items to maintain independent ownership and sharing settings, so users can see all Orders while access to Line Items remains restricted by line of business."
  },
  "difficulty": "简单",
  "accuracy": 78
},
{
  "type": "single_choice",
  "question": "What is an example of a polymorphic lookup field in Salesforce?",
  "score": 1,
  "chooseCount": 1,
  "options": [
    {
      "key": "A",
      "text": "The WhatId field on the standard Event object"
    },
    {
      "key": "B",
      "text": "A custom field, Link__c, on the standard Contact object that looks up to an Account"
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
  "correctAnswers": ["A"],
  "explanation": {
    "A": "Event.WhatId is a polymorphic lookup field because it can reference records from multiple object types, such as Account, Opportunity, Campaign, Case, or a custom object."
  },
  "difficulty": "简单",
  "accuracy": 88
},
{
    "type": "multiple_choice",
    "question": "Which two process automations can be used on their own to send Salesforce Outbound Message?",
    "score": 1,
    "chooseCount": 2,
    "options": [
      {
        "key": "A",
        "text": "Process Builder"
      },
      {
        "key": "B",
        "text": "Workflow Rule"
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
    "correctAnswers": ["B", "C"],
    "explanation": {
      "B": "A Workflow Rule can send an outbound message directly as a workflow action.",
      "C": "Flow Builder can send an outbound message directly through an outbound message action."
    },
    "difficulty": "简单",
    "accuracy": 59
  },
  {
    "type": "single_choice",
    "question": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in a PostalCodeToTimezone__c custom object. What is the optimal way to implement this feature?",
    "score": 1,
    "chooseCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Create an account approval process."
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
        "text": "Build an account assignment rule."
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["B"],
    "explanation": {
      "B": "Flow Builder can run when the Postal Code changes, query PostalCodeToTimezone__c for the matching timezone, and update the Account's Timezone field declaratively."
    },
    "difficulty": "简单",
    "accuracy": 81
  },
  {
    "type": "multiple_choice",
    "question": "In terms of the MVC paradigm, what are two advantages of implementing the view layer of an application using Lightning Web Component-based development over Visualforce?",
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
    "correctAnswers": ["C", "D"],
    "explanation": {
      "C": "Lightning Web Components are self-contained and reusable, making applications easier to compose and maintain.",
      "D": "Lightning Web Components provide access to a rich ecosystem of standard and custom components."
    },
    "difficulty": "简单",
    "accuracy": 85
  },
  {
    "type": "single_choice",
    "question": "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a relationship with the standard Account object. Based on some internal discussions, the UC administrator tried to change the lookup relationship to a master-detail relationship, but was not able to do so. What is a possible reason that this change was not permitted?",
    "score": 1,
    "chooseCount": 1,
    "options": [
      {
        "key": "A",
        "text": "The organization-wide default for the Vendor object is Public Read/Write."
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
    "correctAnswers": ["C"],
    "explanation": {
      "C": "A relationship cannot be changed while a roll-up summary field depends on it. The roll-up summary field must first be removed before changing the relationship type."
    },
    "difficulty": "简单",
    "accuracy": 88
  },
  {
    "type": "single_choice",
    "question": "Universal Containers has a support process that allows users to request support from its engineering team using a custom object, Engineering_Support__c. Users should be able to associate multiple Engineering_Support__c records to a single Opportunity record. Additionally, aggregate information about the Engineering_Support__c records should be shown on the Opportunity record. What should a developer implement to support these requirements?",
    "score": 1,
    "chooseCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Lookup field from Engineering_Support__c to Opportunity"
      },
      {
        "key": "B",
        "text": "Master-detail field from Engineering_Support__c to Opportunity"
      },
      {
        "key": "C",
        "text": "Lookup field from Opportunity to Engineering_Support__c"
      },
      {
        "key": "D",
        "text": "Master-detail field from Opportunity to Engineering_Support__c"
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["B"],
    "explanation": {
      "B": "A master-detail field on Engineering_Support__c creates a one-to-many relationship with Opportunity and allows roll-up summary fields on Opportunity."
    },
    "difficulty": "简单",
    "accuracy": 77
  },
  {
    "type": "single_choice",
    "question": "A software company uses the following objects and relationships: Case handles customer support issues; Defect__c represents known issues with the company's software; Case_Defect__c is a junction object between Case and Defect__c representing that a defect caused a customer issue. Case and Defect__c have Private organization-wide defaults. What should be done to share a specific Case_Defect__c record with a user?",
    "score": 1,
    "chooseCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Share the parent Case and Defect__c records."
      },
      {
        "key": "B",
        "text": "Share the parent Case record."
      },
      {
        "key": "C",
        "text": "Share the Case_Defect__c record."
      },
      {
        "key": "D",
        "text": "Share the parent Defect__c record."
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["A"],
    "explanation": {
      "A": "A junction object inherits access from its master-detail parent records. The user must have access to both the Case and Defect__c parent records."
    },
    "difficulty": "简单",
    "accuracy": 92
  },
  {
    "type": "single_choice",
    "question": "Universal Containers has implemented an order management application. Each Order can have one or more Order Line Items. The Order Line object is related to the Order through a master-detail relationship. For each Order Line Item, the total price is calculated by multiplying the item price by the quantity ordered. What is the best practice to get the sum of all Order Line Item totals on the Order record?",
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
    "correctAnswers": ["A"],
    "explanation": {
      "A": "A roll-up summary field on Order can automatically sum the calculated totals of all related Order Line Items in the master-detail relationship."
    },
    "difficulty": "简单",
    "accuracy": 90
  },
  {
    "type": "multiple_choice",
    "question": "Which two settings must be defined in order to update a record of a junction object?",
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
    "correctAnswers": ["A", "C"],
    "explanation": {
      "A": "The user needs read/write access through the junction object's primary master-detail relationship.",
      "C": "The user also needs read/write access through the secondary master-detail relationship."
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
    "correctAnswers": ["B"],
    "explanation": {
      "B": "A Lightning component can be assigned as an override for a standard object action such as the Account Edit button."
    },
    "difficulty": "简单",
    "accuracy": 82
  },
  {
    "type": "single_choice",
    "question": "Universal Containers is building a recruiting app with an Applicant object that stores information about an individual person and a Job object that represents a job. Each applicant may apply for more than one job. What should a developer implement to represent that an applicant has applied for a job?",
    "score": 1,
    "chooseCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Master-detail field from Applicant to Job"
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
    "correctAnswers": ["B"],
    "explanation": {
      "B": "Applicants can apply for multiple jobs, and each job can receive applications from multiple applicants. A junction object represents this many-to-many relationship."
    },
    "difficulty": "简单",
    "accuracy": 82
  },
  {
    "type": "single_choice",
    "question": "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an OrderItem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders. What should a developer do to allow their code to move some existing OrderItem records to a new Order record?",
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
    "correctAnswers": ["A"],
    "explanation": {
      "A": "Enabling Allow reparenting permits an existing child record in a master-detail relationship to be reassigned to another parent record."
    },
    "difficulty": "简单",
    "accuracy": 80
  },
  {
    "type": "single_choice",
    "question": "A developer is integrating with a legacy on-premise SQL database. What should the developer use to ensure the data being integrated is matched to the right records in Salesforce?",
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
    "correctAnswers": ["B"],
    "explanation": {
      "B": "An External ID stores the identifier used by the external database and allows integrations to match and upsert the correct Salesforce records."
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
    "correctAnswers": ["D"],
    "explanation": {
      "D": "Flow Builder provides a declarative action for posting messages to Chatter without requiring Apex code."
    },
    "difficulty": "简单",
    "accuracy": 87
  },
  {
    "type": "single_choice",
    "question": "Universal Containers uses a master-detail relationship and stores the availability date on each Line Item of an Order. Orders are shipped only when all Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
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
        "text": "Use a MAX roll-up summary field on the latest availability date fields."
      },
      {
        "key": "D",
        "text": "Use a DAYS formula on each of the availability date fields and a COUNT roll-up summary field on the Order."
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["C"],
    "explanation": {
      "C": "A MAX roll-up summary field returns the latest availability date among all related Line Items, which is the earliest date the complete Order can ship."
    },
    "difficulty": "简单",
    "accuracy": 84
  },
  {
    "type": "multiple_choice",
    "question": "A developer created these three roll-up summary fields on the custom object, Project__c: Total_Timesheets__c, Total_Approved_Timesheets__c, and Total_Rejected_Timesheet__c. The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. What are two benefits of choosing a formula field instead of an Apex trigger to fulfill the request?",
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
        "text": "A formula field will trigger existing automation when deployed."
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["B", "C"],
    "explanation": {
      "B": "A formula field is declarative and automatically recalculates, reducing the maintenance required compared with custom Apex code.",
      "C": "The formula is calculated dynamically for existing records, so no data migration or backfill process is required."
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
    "correctAnswers": ["C"],
    "explanation": {
      "C": "The Paused Flow Interviews component on the Lightning Home page displays information about paused flow interviews."
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
    "correctAnswers": ["B"],
    "explanation": {
      "B": "SOSL searches text across multiple objects and can return the Id and Name fields from matching Lead, Account, and Contact records."
    },
    "difficulty": "简单",
    "accuracy": 76
  },
  {
    "type": "multiple_choice",
    "question": "What are two benefits of using declarative customizations over code?",
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
    "correctAnswers": ["A", "D"],
    "explanation": {
      "A": "Salesforce maintains its declarative platform features and updates them as part of platform releases.",
      "D": "Declarative solutions generally require less custom development, testing, and ongoing maintenance than code."
    },
    "difficulty": "简单",
    "accuracy": 81
  },
  {
    "type": "single_choice",
    "question": "An org has an existing Visual Flow that creates an Opportunity with an Update Records element. A developer must update the Visual Flow to also create a Contact and store the created Contact's ID on the Opportunity. Which update should the developer make in the Visual Flow?",
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
        "text": "Add a new Quick Action (of type Create) element."
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["C"],
    "explanation": {
      "C": "A Create Records element can create the Contact and store its ID in a variable, which can then be assigned to the Opportunity."
    },
    "difficulty": "简单",
    "accuracy": 85
  },
  {
    "type": "single_choice",
    "question": "A custom picklist field, Food_Preference__c, exists on a custom object. The picklist contains the following options: 'Vegan', 'Kosher', and 'No Preference'. The developer must ensure a value is populated every time a record is created or updated.",
    "score": 1,
    "chooseCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Mark the field as Required on the object's page layout."
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
    "correctAnswers": ["B"],
    "explanation": {
      "B": "Making the field required in its field definition enforces the requirement at the database level across the UI, API, imports, and automation."
    },
    "difficulty": "简单",
    "accuracy": 76
  },
  {
    "type": "multiple_choice",
    "question": "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application?",
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
    "correctAnswers": ["A", "D", "E"],
    "explanation": {
      "A": "Relationships declaratively define how objects are connected.",
      "D": "Custom objects and fields define the application's data structure.",
      "E": "Roll-up summary fields declaratively aggregate child-record data in master-detail relationships."
    },
    "difficulty": "简单",
    "accuracy": 66
  },
  {
    "type": "single_choice",
    "question": "An org tracks customer orders on an Order object and the line items of an Order on the Line Item object. The Line Item object has a master-detail relationship to the Order object. A developer must calculate the order amount on an Order and the line amount on each Line Item based on quantity and price. What is the correct implementation?",
    "score": 1,
    "chooseCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Write a process on the Line Item that calculates the item amount and order amount and updates the fields on the Line Item and the Order."
      },
      {
        "key": "B",
        "text": "Implement the line amount as a numeric formula field and the order amount as a roll-up summary field."
      },
      {
        "key": "C",
        "text": "Implement the line amount as a currency field and the order amount as a SUM formula field."
      },
      {
        "key": "D",
        "text": "Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order."
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["B"],
    "explanation": {
      "B": "A numeric formula field can calculate each Line Item amount from quantity and price, while a roll-up summary field can sum those amounts on the parent Order."
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
        "text": "The number of records processed in a loop"
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["B"],
    "explanation": {
      "B": "Salesforce governor limits restrict the number of records returned by database queries to protect shared resources in the multitenant platform."
    },
    "difficulty": "简单",
    "accuracy": 79
  },
  {
    "type": "multiple_choice",
    "question": "In terms of the MVC paradigm, what are two advantages of implementing the view layer of a Salesforce application using Aura Component-based development over Visualforce?",
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
    "correctAnswers": ["B", "D"],
    "explanation": {
      "B": "Aura components are modular, self-contained, and reusable across different parts of an application.",
      "D": "Aura provides a rich ecosystem of standard and custom components for building interactive interfaces."
    },
    "difficulty": "简单",
    "accuracy": 88
  },
  {
    "type": "single_choice",
    "question": "Universal Containers wants to back up all of the data and attachments in its Salesforce org once a month. Which approach should a developer use to meet this requirement?",
    "score": 1,
    "chooseCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Schedule a report"
      },
      {
        "key": "B",
        "text": "Create a Schedulable Apex class"
      },
      {
        "key": "C",
        "text": "Define a Data Export scheduled job."
      },
      {
        "key": "D",
        "text": "Use the Data Loader command line."
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["C"],
    "explanation": {
      "C": "Salesforce Data Export can be scheduled monthly to export the organization's data and include files and attachments."
    },
    "difficulty": "简单",
    "accuracy": 79
  },
  {
    "type": "single_choice",
    "question": "Universal Containers wants to lower its shipping cost while making the shipping process more efficient. Multiple Accounts must be able to share a default pickup address stored in a custom Global Address object. Which field should the developer add to create the most efficient model that supports the business need?",
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
    "correctAnswers": ["B"],
    "explanation": {
      "B": "A lookup field from Account to Global Address allows multiple Account records to reference and share the same default pickup address."
    },
    "difficulty": "简单",
    "accuracy": 72
  },
  {
    "type": "multiple_choice",
    "question": "A developer at Universal Containers is tasked with implementing a new Salesforce application that must be built by the company's Salesforce administrator. Which three options should be considered for building out the business logic layer of the application?",
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
    "correctAnswers": ["B", "D", "E"],
    "explanation": {
      "B": "Validation Rules declaratively enforce business rules and data integrity.",
      "D": "Workflow Rules declaratively automate actions based on record criteria.",
      "E": "Process Builder declaratively implements multi-step business automation."
    },
    "difficulty": "简单",
    "accuracy": 76
  },
  {
    "type": "single_choice",
    "question": "A developer must calculate the total amount on an Order, calculate the amount for each Line Item based on quantity and price, and move Line Items to a different Order when an item is not in stock. Which relationship implementation supports these requirements?",
    "score": 1,
    "chooseCount": 1,
    "options": [
      {
        "key": "A",
        "text": "Line Item has a Master-Detail field to Order and the Master can be re-parented."
      },
      {
        "key": "B",
        "text": "Order has a Lookup field to Line Item and there can be many Line Items per Order."
      },
      {
        "key": "C",
        "text": "Line Item has a Lookup field to Order and there can be many Line Items per Order."
      },
      {
        "key": "D",
        "text": "Order has a Master-Detail field to Line Item and there can be many Line Items per Order."
      }
    ],
    "userAnswers": [],
    "correctAnswers": ["A"],
    "explanation": {
      "A": "A master-detail relationship supports roll-up summaries for the Order total, while allowing reparenting lets existing Line Items be moved to another Order."
    },
    "difficulty": "简单",
    "accuracy": 77
  }
]