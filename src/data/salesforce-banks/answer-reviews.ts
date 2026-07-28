export interface ReviewReference {
  bankId: string;
  questionNumber: number;
}

export interface AnswerReview {
  bankId: string;
  questionNumber: number;
  correctAnswers: string[];
  originalExplanation: Record<string, string>;
  verifiedAnswers: string[];
  verifiedExplanation?: Record<string, string>;
  sourceReview?: ReviewReference;
  reason: string;
  reviewedAt: string;
}

const answerReviews: AnswerReview[] = [
  {
    "bankId": "development-basics",
    "questionNumber": 12,
    "correctAnswers": [
      "B"
    ],
    "verifiedAnswers": [
      "D"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "B": ""
    },
    "verifiedExplanation": {
      "D": "JavaScript validation runs in the browser before the request reaches Salesforce. Server-side order of execution, including loading the original record and system validation, begins only after the request is submitted."
    }
  },
  {
    "bankId": "development-basics",
    "questionNumber": 44,
    "correctAnswers": [
      "B",
      "C"
    ],
    "verifiedAnswers": [
      "B",
      "D"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "B": "https://help.salesforce.com/s/articleView?id=sf.flow_distribute_deploy_active.htm&type=5",
      "C": "https://help.salesforce.com/s/articleView?id=sf.flow_distribute_deploy_active.htm&type=5"
    },
    "verifiedExplanation": {
      "B": "Declarative customization is configured through the Salesforce Setup UI with point-and-click tools.",
      "D": "Declarative automation does not contain Apex code, so it does not require Apex test classes or Apex code-coverage deployment requirements."
    }
  },
  {
    "bankId": "flow-automation-logic-single",
    "questionNumber": 5,
    "correctAnswers": [
      "C"
    ],
    "verifiedAnswers": [
      "D"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm"
    },
    "verifiedExplanation": {
      "D": "A trigger can enqueue one Queueable job when an order first becomes Placed. Queueable Apex supports asynchronous REST callouts and can process or chain orders one at a time without waiting for a scheduled batch."
    }
  },
  {
    "bankId": "flow-automation-logic-single",
    "questionNumber": 42,
    "correctAnswers": [
      "B"
    ],
    "verifiedAnswers": [
      "C"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm\nhttps://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm?q=static%20keywords"
    },
    "verifiedExplanation": {
      "C": "A private static variable on a helper class retains its value for the current Apex transaction and is shared across trigger executions in that transaction. It remains mutable, unlike a static final constant."
    }
  },
  {
    "bankId": "flow-automation-logic-multiple",
    "questionNumber": 2,
    "correctAnswers": [
      "B",
      "D"
    ],
    "verifiedAnswers": [
      "A",
      "D"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "B": "https://help.salesforce.com/s/articleView?id=sf.platform_events.htm&type=5",
      "D": "https://help.salesforce.com/s/articleView?id=sf.platform_events.htm&type=5"
    },
    "verifiedExplanation": {
      "A": "A record-triggered flow can detect the Status__c change declaratively, which reduces custom-code maintenance.",
      "D": "Publishing a platform event decouples Salesforce from multiple external subscribers, so each external system can receive the notification independently."
    }
  },
  {
    "bankId": "flow-automation-logic-multiple",
    "questionNumber": 14,
    "correctAnswers": [
      "A",
      "B"
    ],
    "verifiedAnswers": [
      "A",
      "C"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "A": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm",
      "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm"
    },
    "verifiedExplanation": {
      "A": "Each Batch Apex execute() invocation runs as a separate transaction, so governor limits reset for every batch chunk.",
      "C": "Batch Apex runs asynchronously, and some asynchronous Apex limits are higher than synchronous limits. The limits still apply and can still be exceeded."
    }
  },
  {
    "bankId": "flow-automation-logic-multiple",
    "questionNumber": 16,
    "correctAnswers": [
      "A",
      "C"
    ],
    "verifiedAnswers": [
      "B",
      "C"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "A": "Lightning Component: This method uses the modern features of the Salesforce Lightning framework. A Lightning component can make an HTTP REST callout directly, providing a dynamic user interface with immediate feedback. This option is ideal for user-initiated actions and enhances user interaction on the Opportunity detail page.\n\nAfter Trigger with @Future Method: This approach uses an after trigger on the Opportunity, which calls a helper method marked with @Future(Callout=true) to perform asynchronous HTTP callouts. While not directly initiated by a user interaction, this method efficiently handles data synchronization with external systems following updates to Opportunity records, ensuring that system processes do not interfere with user transactions and providing a fail-safe mechanism for external communication.",
      "C": "Lightning Component: This method uses the modern features of the Salesforce Lightning framework. A Lightning component can make an HTTP REST callout directly, providing a dynamic user interface with immediate feedback. This option is ideal for user-initiated actions and enhances user interaction on the Opportunity detail page.\n\nAfter Trigger with @Future Method: This approach uses an after trigger on the Opportunity, which calls a helper method marked with @Future(Callout=true) to perform asynchronous HTTP callouts. While not directly initiated by a user interaction, this method efficiently handles data synchronization with external systems following updates to Opportunity records, ensuring that system processes do not interfere with user transactions and providing a fail-safe mechanism for external communication."
    },
    "verifiedExplanation": {
      "B": "A Visualforce quick action places an explicit user-initiated action on the Opportunity record page and can invoke controller callout logic.",
      "C": "A Lightning component exposed as a Lightning action provides a user-initiated action on the Opportunity page and can invoke the REST callout logic."
    }
  },
  {
    "bankId": "flow-automation-logic-2",
    "questionNumber": 8,
    "correctAnswers": [
      "D"
    ],
    "verifiedAnswers": [
      "C"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "D": "<p>Using a WHERE clause ensures the query retrieves only relevant records, reducing unnecessary processing and staying within governor limits.</p>"
    },
    "verifiedExplanation": {
      "C": "A LIMIT clause places a hard upper bound on the number of queried Account records. A WHERE clause can reduce rows but does not guarantee that the query will stay below a governor limit."
    }
  },
  {
    "bankId": "flow-automation-logic-2",
    "questionNumber": 18,
    "correctAnswers": [
      "A",
      "B"
    ],
    "verifiedAnswers": [
      "A",
      "C"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "A": "<p><span style=\"text-wrap-mode: nowrap;\">If executed in a synchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit: The code performs a DML operation (update) for every record inside the loop. Salesforce has a governor limit of 150 DML operations per transaction in synchronous code. Since the code attempts to perform an update for each Account in the loop, it will likely exceed the DML limit if the loop processes more than 150 records, leading to a failure.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The Apex transaction fails with the following message: &quot;SObject row was retrieved via SOQL without querying the requested field: Account.Is_Tech__c&quot;: The Is_Tech__c field is not included in the original SOQL query. Because the code tries to update the Is_Tech__c field on each Account, but the field was not queried, Salesforce will throw this exception indicating that the field was not retrieved in the query.</span></p><p><br/></p>",
      "B": "<p><span style=\"text-wrap-mode: nowrap;\">If executed in a synchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit: The code performs a DML operation (update) for every record inside the loop. Salesforce has a governor limit of 150 DML operations per transaction in synchronous code. Since the code attempts to perform an update for each Account in the loop, it will likely exceed the DML limit if the loop processes more than 150 records, leading to a failure.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The Apex transaction fails with the following message: &quot;SObject row was retrieved via SOQL without querying the requested field: Account.Is_Tech__c&quot;: The Is_Tech__c field is not included in the original SOQL query. Because the code tries to update the Is_Tech__c field on each Account, but the field was not queried, Salesforce will throw this exception indicating that the field was not retrieved in the query.</span></p><p><br/></p>"
    },
    "verifiedExplanation": {
      "A": "The update statement is inside the loop, producing one DML statement per Account. In a synchronous transaction this reaches the 150-DML limit and can fail when any additional DML is performed.",
      "C": "Asynchronous Apex is also limited to 150 DML statements per transaction, so moving this pattern to an asynchronous context does not remove the DML-limit risk."
    }
  },
  {
    "bankId": "flow-automation-logic-2",
    "questionNumber": 23,
    "correctAnswers": [
      "C",
      "D"
    ],
    "verifiedAnswers": [
      "A",
      "C"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "C": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/pages_security_tips_soql_injection.htm</p>",
      "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/pages_security_tips_soql_injection.htm</p>"
    },
    "verifiedExplanation": {
      "A": "Validating or allow-listing the lastName parameter with a regular expression can remove characters that could alter the SOQL structure.",
      "C": "Static SOQL with a bind variable keeps the user value separate from the query structure and is the preferred protection against SOQL injection."
    }
  },
  {
    "bankId": "user-interface",
    "questionNumber": 13,
    "correctAnswers": [
      "C"
    ],
    "verifiedAnswers": [
      "B"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "C": "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_std.htm"
    },
    "verifiedExplanation": {
      "B": "A Standard list controller, used with recordSetVar, works with a collection of records and avoids writing a custom controller just to list the current user’s Contacts."
    }
  },
  {
    "bankId": "user-interface",
    "questionNumber": 16,
    "correctAnswers": [
      "A",
      "B"
    ],
    "verifiedAnswers": [
      "B",
      "D"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "A": "Getter methods pass values from controller to a page:\nGetter methods are used in Apex controllers to retrieve values and pass them to Visualforce pages. The Visualforce page can then reference the values returned by the getter method for display.\n\nA corresponding setter method is required for each getter method:\nIf you want to allow data to flow both ways (from page to controller and from controller to page), you should have both getter and setter methods for the variables. The setter method allows the Visualforce page to pass values back to the controller, while the getter allows the controller to send values to the page. If a getter method is used, having a corresponding setter is a common practice to maintain two-way communication.",
      "B": "Getter methods pass values from controller to a page:\nGetter methods are used in Apex controllers to retrieve values and pass them to Visualforce pages. The Visualforce page can then reference the values returned by the getter method for display.\n\nA corresponding setter method is required for each getter method:\nIf you want to allow data to flow both ways (from page to controller and from controller to page), you should have both getter and setter methods for the variables. The setter method allows the Visualforce page to pass values back to the controller, while the getter allows the controller to send values to the page. If a getter method is used, having a corresponding setter is a common practice to maintain two-way communication."
    },
    "verifiedExplanation": {
      "B": "A getter returns a controller value to the Visualforce page.",
      "D": "Visualforce property access follows the getVariable and setVariable naming convention for getter and setter methods."
    }
  },
  {
    "bankId": "user-interface",
    "questionNumber": 23,
    "correctAnswers": [
      "C",
      "D"
    ],
    "verifiedAnswers": [
      "B",
      "C"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "C": "https://trailhead.salesforce.com/content/learn/projects/communicate-between-lightning-web-components/communicate-from-parent-to-child",
      "D": "https://trailhead.salesforce.com/content/learn/projects/communicate-between-lightning-web-components/communicate-from-parent-to-child"
    },
    "verifiedExplanation": {
      "B": "The parent can call a child method that is exposed publicly with @api and pass the string as a method argument.",
      "C": "The parent can assign the string to a child property exposed with @api."
    }
  },
  {
    "bankId": "user-interface",
    "questionNumber": 35,
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "verifiedAnswers": [
      "A",
      "B",
      "D"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "B": "1. Upload the SVG as a static resource - Uploading the SVG file as a static resource in Salesforce allows it to be stored centrally and accessed within the Salesforce environment. This step is necessary to make the SVG file available for inclusion in a Lightning Web Component (LWC).\n\n2. Import the static resource and provide a getter for it in JavaScript - After uploading the SVG as a static resource, it needs to be imported into the LWC’s JavaScript file. This involves using the @salesforce/resourceUrl module to import the SVG file. Additionally, a JavaScript getter function is typically used to expose the SVG URL to the component’s template.\n\n3. Reference the import in the HTML template - The final step is to reference the SVG within the LWC’s HTML template. This is done by utilizing the URL obtained from the getter function in the JavaScript file, often within an <img> tag or as a style background image, depending on how the SVG is intended to be displayed in the component.\n\nThese steps enable the inclusion of a custom SVG in a Lightning Web Component, allowing developers to use detailed graphics and icons in their custom components within the Salesforce platform.",
      "D": "1. Upload the SVG as a static resource - Uploading the SVG file as a static resource in Salesforce allows it to be stored centrally and accessed within the Salesforce environment. This step is necessary to make the SVG file available for inclusion in a Lightning Web Component (LWC).\n\n2. Import the static resource and provide a getter for it in JavaScript - After uploading the SVG as a static resource, it needs to be imported into the LWC’s JavaScript file. This involves using the @salesforce/resourceUrl module to import the SVG file. Additionally, a JavaScript getter function is typically used to expose the SVG URL to the component’s template.\n\n3. Reference the import in the HTML template - The final step is to reference the SVG within the LWC’s HTML template. This is done by utilizing the URL obtained from the getter function in the JavaScript file, often within an <img> tag or as a style background image, depending on how the SVG is intended to be displayed in the component.\n\nThese steps enable the inclusion of a custom SVG in a Lightning Web Component, allowing developers to use detailed graphics and icons in their custom components within the Salesforce platform.",
      "E": "1. Upload the SVG as a static resource - Uploading the SVG file as a static resource in Salesforce allows it to be stored centrally and accessed within the Salesforce environment. This step is necessary to make the SVG file available for inclusion in a Lightning Web Component (LWC).\n\n2. Import the static resource and provide a getter for it in JavaScript - After uploading the SVG as a static resource, it needs to be imported into the LWC’s JavaScript file. This involves using the @salesforce/resourceUrl module to import the SVG file. Additionally, a JavaScript getter function is typically used to expose the SVG URL to the component’s template.\n\n3. Reference the import in the HTML template - The final step is to reference the SVG within the LWC’s HTML template. This is done by utilizing the URL obtained from the getter function in the JavaScript file, often within an <img> tag or as a style background image, depending on how the SVG is intended to be displayed in the component.\n\nThese steps enable the inclusion of a custom SVG in a Lightning Web Component, allowing developers to use detailed graphics and icons in their custom components within the Salesforce platform."
    },
    "verifiedExplanation": {
      "A": "After JavaScript exposes the static-resource URL through a getter, the HTML template references that getter to render the SVG.",
      "B": "The SVG must first be uploaded to Salesforce as a static resource.",
      "D": "The component JavaScript imports the static resource with @salesforce/resourceUrl and exposes its URL through a getter."
    }
  },
  {
    "bankId": "testing-debugging-deployment",
    "questionNumber": 3,
    "correctAnswers": [
      "A",
      "C"
    ],
    "verifiedAnswers": [
      "A",
      "B"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "A": "",
      "C": ""
    },
    "verifiedExplanation": {
      "A": "A test data factory can create the required Pricing_Structure__c records during test setup, keeping the test isolated and repeatable.",
      "B": "@IsTest(SeeAllData=true) allows the test to access the existing Pricing_Structure__c records in the org, although isolated test data is generally preferred."
    }
  },
  {
    "bankId": "testing-debugging-deployment",
    "questionNumber": 7,
    "correctAnswers": [
      "D"
    ],
    "verifiedAnswers": [
      "C"
    ],
    "reason": "人工复核",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "D": ""
    },
    "verifiedExplanation": {
      "C": "A change set is the standard declarative deployment mechanism for moving Apex, Lightning components, and related metadata from a connected sandbox to production."
    }
  },
  {
    "bankId": "mock-exam-a",
    "questionNumber": 15,
    "correctAnswers": [
      "B",
      "C"
    ],
    "verifiedAnswers": [
      "B",
      "D"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "B": "https://help.salesforce.com/s/articleView?id=sf.flow_distribute_deploy_active.htm&type=5",
      "C": "https://help.salesforce.com/s/articleView?id=sf.flow_distribute_deploy_active.htm&type=5"
    },
    "sourceReview": {
      "bankId": "development-basics",
      "questionNumber": 44
    }
  },
  {
    "bankId": "mock-exam-a",
    "questionNumber": 39,
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "verifiedAnswers": [
      "A",
      "B",
      "D"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "B": "1. Upload the SVG as a static resource - Uploading the SVG file as a static resource in Salesforce allows it to be stored centrally and accessed within the Salesforce environment. This step is necessary to make the SVG file available for inclusion in a Lightning Web Component (LWC).\n\n2. Import the static resource and provide a getter for it in JavaScript - After uploading the SVG as a static resource, it needs to be imported into the LWC’s JavaScript file. This involves using the @salesforce/resourceUrl module to import the SVG file. Additionally, a JavaScript getter function is typically used to expose the SVG URL to the component’s template.\n\n3. Reference the import in the HTML template - The final step is to reference the SVG within the LWC’s HTML template. This is done by utilizing the URL obtained from the getter function in the JavaScript file, often within an <img> tag or as a style background image, depending on how the SVG is intended to be displayed in the component.\n\nThese steps enable the inclusion of a custom SVG in a Lightning Web Component, allowing developers to use detailed graphics and icons in their custom components within the Salesforce platform.",
      "D": "1. Upload the SVG as a static resource - Uploading the SVG file as a static resource in Salesforce allows it to be stored centrally and accessed within the Salesforce environment. This step is necessary to make the SVG file available for inclusion in a Lightning Web Component (LWC).\n\n2. Import the static resource and provide a getter for it in JavaScript - After uploading the SVG as a static resource, it needs to be imported into the LWC’s JavaScript file. This involves using the @salesforce/resourceUrl module to import the SVG file. Additionally, a JavaScript getter function is typically used to expose the SVG URL to the component’s template.\n\n3. Reference the import in the HTML template - The final step is to reference the SVG within the LWC’s HTML template. This is done by utilizing the URL obtained from the getter function in the JavaScript file, often within an <img> tag or as a style background image, depending on how the SVG is intended to be displayed in the component.\n\nThese steps enable the inclusion of a custom SVG in a Lightning Web Component, allowing developers to use detailed graphics and icons in their custom components within the Salesforce platform.",
      "E": "1. Upload the SVG as a static resource - Uploading the SVG file as a static resource in Salesforce allows it to be stored centrally and accessed within the Salesforce environment. This step is necessary to make the SVG file available for inclusion in a Lightning Web Component (LWC).\n\n2. Import the static resource and provide a getter for it in JavaScript - After uploading the SVG as a static resource, it needs to be imported into the LWC’s JavaScript file. This involves using the @salesforce/resourceUrl module to import the SVG file. Additionally, a JavaScript getter function is typically used to expose the SVG URL to the component’s template.\n\n3. Reference the import in the HTML template - The final step is to reference the SVG within the LWC’s HTML template. This is done by utilizing the URL obtained from the getter function in the JavaScript file, often within an <img> tag or as a style background image, depending on how the SVG is intended to be displayed in the component.\n\nThese steps enable the inclusion of a custom SVG in a Lightning Web Component, allowing developers to use detailed graphics and icons in their custom components within the Salesforce platform."
    },
    "sourceReview": {
      "bankId": "user-interface",
      "questionNumber": 35
    }
  },
  {
    "bankId": "mock-exam-a",
    "questionNumber": 53,
    "correctAnswers": [
      "A",
      "C"
    ],
    "verifiedAnswers": [
      "A",
      "B"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "A": "",
      "C": ""
    },
    "sourceReview": {
      "bankId": "testing-debugging-deployment",
      "questionNumber": 3
    }
  },
  {
    "bankId": "mock-exam-b",
    "questionNumber": 21,
    "correctAnswers": [
      "C"
    ],
    "verifiedAnswers": [
      "D"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "C": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm"
    },
    "sourceReview": {
      "bankId": "flow-automation-logic-single",
      "questionNumber": 5
    }
  },
  {
    "bankId": "mock-exam-b",
    "questionNumber": 24,
    "correctAnswers": [
      "B"
    ],
    "verifiedAnswers": [
      "C"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "B": "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_final.htm\nhttps://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm?q=static%20keywords"
    },
    "sourceReview": {
      "bankId": "flow-automation-logic-single",
      "questionNumber": 42
    }
  },
  {
    "bankId": "mock-exam-b",
    "questionNumber": 25,
    "correctAnswers": [
      "A",
      "C"
    ],
    "verifiedAnswers": [
      "B",
      "C"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "A": "Lightning Component: This method uses the modern features of the Salesforce Lightning framework. A Lightning component can make an HTTP REST callout directly, providing a dynamic user interface with immediate feedback. This option is ideal for user-initiated actions and enhances user interaction on the Opportunity detail page.\n\nAfter Trigger with @Future Method: This approach uses an after trigger on the Opportunity, which calls a helper method marked with @Future(Callout=true) to perform asynchronous HTTP callouts. While not directly initiated by a user interaction, this method efficiently handles data synchronization with external systems following updates to Opportunity records, ensuring that system processes do not interfere with user transactions and providing a fail-safe mechanism for external communication.",
      "C": "Lightning Component: This method uses the modern features of the Salesforce Lightning framework. A Lightning component can make an HTTP REST callout directly, providing a dynamic user interface with immediate feedback. This option is ideal for user-initiated actions and enhances user interaction on the Opportunity detail page.\n\nAfter Trigger with @Future Method: This approach uses an after trigger on the Opportunity, which calls a helper method marked with @Future(Callout=true) to perform asynchronous HTTP callouts. While not directly initiated by a user interaction, this method efficiently handles data synchronization with external systems following updates to Opportunity records, ensuring that system processes do not interfere with user transactions and providing a fail-safe mechanism for external communication."
    },
    "sourceReview": {
      "bankId": "flow-automation-logic-multiple",
      "questionNumber": 16
    }
  },
  {
    "bankId": "mock-exam-b",
    "questionNumber": 31,
    "correctAnswers": [
      "C"
    ],
    "verifiedAnswers": [
      "B"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "C": "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_std.htm"
    },
    "sourceReview": {
      "bankId": "user-interface",
      "questionNumber": 13
    }
  },
  {
    "bankId": "mock-exam-b",
    "questionNumber": 50,
    "correctAnswers": [
      "A",
      "C"
    ],
    "verifiedAnswers": [
      "A",
      "B"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "A": "",
      "C": ""
    },
    "sourceReview": {
      "bankId": "testing-debugging-deployment",
      "questionNumber": 3
    }
  },
  {
    "bankId": "mock-exam-b",
    "questionNumber": 56,
    "correctAnswers": [
      "D"
    ],
    "verifiedAnswers": [
      "C"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "D": "<p>Using a WHERE clause ensures the query retrieves only relevant records, reducing unnecessary processing and staying within governor limits.</p>"
    },
    "sourceReview": {
      "bankId": "flow-automation-logic-2",
      "questionNumber": 8
    }
  },
  {
    "bankId": "mock-exam-b",
    "questionNumber": 61,
    "correctAnswers": [
      "C",
      "D"
    ],
    "verifiedAnswers": [
      "A",
      "C"
    ],
    "reason": "与已复核练习题同步",
    "reviewedAt": "2026-07-28",
    "originalExplanation": {
      "C": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/pages_security_tips_soql_injection.htm</p>",
      "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/pages_security_tips_soql_injection.htm</p>"
    },
    "sourceReview": {
      "bankId": "flow-automation-logic-2",
      "questionNumber": 23
    }
  }
];

export default answerReviews;
