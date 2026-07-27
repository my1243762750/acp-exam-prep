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
        "difficulty": "简单",
        "accuracy": 78
    }
];

export default questions;
