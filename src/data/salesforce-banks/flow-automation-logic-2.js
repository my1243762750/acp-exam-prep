const questions = [
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A developer is asked to write helper methods that create test data for unit tests.</span></p><p><span style=\"text-wrap-mode: nowrap;\">01:&nbsp; public TestUtils {</span></p><p><span style=\"text-wrap-mode: nowrap;\">02:&nbsp;&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">03:&nbsp; &nbsp; public static Account createAccount( ) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">04:&nbsp; &nbsp; &nbsp; Account act = new Account( );</span></p><p><span style=\"text-wrap-mode: nowrap;\">05:&nbsp; &nbsp; &nbsp; // …set some fields on acct…</span></p><p><span style=\"text-wrap-mode: nowrap;\">06:&nbsp; &nbsp; &nbsp; return act;</span></p><p><span style=\"text-wrap-mode: nowrap;\">07:&nbsp; &nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">08:&nbsp; &nbsp; //…other methods…</span></p><p><span style=\"text-wrap-mode: nowrap;\">09:&nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">What should be changed in the TestUtils class so that its methods are only usable by unit test methods?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Change public to private on line 01.</p>"
            },
            {
                "key": "B",
                "text": "<p>Add @IsTest above line 03.</p>"
            },
            {
                "key": "C",
                "text": "<p>Add @IsTest above line 01.</p>"
            },
            {
                "key": "D",
                "text": "<p>Remove static from line 03.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "<p><span style=\"text-wrap-mode: nowrap;\">Add @IsTest above line 01.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">This will define the TestUtils class as a test utility class,&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">and its methods will only be accessible from test methods.&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">This is a Salesforce best practice to prevent the utility methods from being available to non-test execution contexts.</span></p><p><br/></p>"
        },
        "difficulty": "简单",
        "accuracy": 88
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
        "accuracy": 80
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
        "accuracy": 80
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A lead developer creates a virtual class called &quot;OrderRequest&quot;. Consider the following code snippet:</span></p><p><span style=\"text-wrap-mode: nowrap;\">public class CustomerOrder {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; //code implementation</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">How can a developer use the OrderRequest class within the CustomerOrder class?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>@Extends(class=&quot;OrderRequest&quot;)&nbsp;</p><p>public class CustomerOder</p>"
            },
            {
                "key": "B",
                "text": "<p>public class CustomerOrder implements Order</p>"
            },
            {
                "key": "C",
                "text": "<p>public class CustomerOrder extends OrderRequest</p>"
            },
            {
                "key": "D",
                "text": "<p>@Implements(class=&quot;OrderRequest&quot;)&nbsp;</p><p>public class CustomerOrder</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 83
    },
    {
        "type": "single_choice",
        "question": "<p>Refer to the following Apex code:</p><p>Integer x= 0;</p><p>do {</p><p>&nbsp; &nbsp; &nbsp;x=1;</p><p>&nbsp; &nbsp; &nbsp;x++;</p><p>}while(x&lt;1);</p><p>System.debug(x);</p><p>What is the value of x when it is written to the debug log?</p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>0</p>"
            },
            {
                "key": "B",
                "text": "<p>1</p>"
            },
            {
                "key": "C",
                "text": "<p>2</p>"
            },
            {
                "key": "D",
                "text": "<p>3</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "<p><span style=\"text-wrap-mode: nowrap;\">The code snippet uses a do-while loop. Here&#39;s the flow:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The initial value of x is set to 0.</span></p><p><span style=\"text-wrap-mode: nowrap;\">The do block is executed first (since it&#39;s a do-while loop), regardless of the condition:</span></p><p><span style=\"text-wrap-mode: nowrap;\">x = 1; sets x to 1.</span></p><p><span style=\"text-wrap-mode: nowrap;\">x++; increments x by 1, so now x = 2.</span></p><p><span style=\"text-wrap-mode: nowrap;\">The while(x &lt; 1) condition is then checked:</span></p><p><span style=\"text-wrap-mode: nowrap;\">Since x = 2, the condition x &lt; 1 is false.</span></p><p><span style=\"text-wrap-mode: nowrap;\">Therefore, the loop stops.</span></p><p><span style=\"text-wrap-mode: nowrap;\">Finally, System.debug(x); outputs the current value of x, which is 2.</span></p><p><span style=\"text-wrap-mode: nowrap;\">Thus, the value of x written to the debug log is 2.</span></p><p><br/></p>"
        },
        "difficulty": "简单",
        "accuracy": 85
    },
    {
        "type": "single_choice",
        "question": "<p>Considering the following code snippet:</p><p>public static void insertAccounts(List&lt;Account&gt; theseAccounts){</p><p>&nbsp; &nbsp; &nbsp; for(Account thisAccount : theseAccounts) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(thisAccount.website == null) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; thisAccount.website = &#39;https://www.demo.com&#39;;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;}</p><p>&nbsp; &nbsp; &nbsp; &nbsp;}</p><p>&nbsp; &nbsp; &nbsp; &nbsp;update theseAccounts;</p><p>}</p><p>when the code executes, a DML exceptionis thrown.</p><p>How should the developer modify the code to ensure exceptions are handled gracefully?</p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Remove null items from the list of Accounts.</p>"
            },
            {
                "key": "B",
                "text": "<p>Implement Change Data Capture.</p>"
            },
            {
                "key": "C",
                "text": "<p>Implement the upsert DML statement.</p>"
            },
            {
                "key": "D",
                "text": "<p>Implement a try/catch block for the DML.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>A try/catch block is used to handle exceptions gracefully. When performing a DML operation like update, if any error occurs (e.g., due to validation rule failure, field requirement issues, or other DML exceptions), the exception will be caught in the catch block, preventing the transaction from failing entirely and allowing the developer to handle the error appropriately.</p>"
        },
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A developer wrote the following two classes:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">public with sharing class statusFetcher{</span></p><p><span style=\"text-wrap-mode: nowrap;\">private Boolean active = true;</span></p><p><span style=\"text-wrap-mode: nowrap;\">private Boolean isActive(){</span></p><p><span style=\"text-wrap-mode: nowrap;\">return active;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">public with sharing class Calculator{</span></p><p><span style=\"text-wrap-mode: nowrap;\">public void doCalculations(){</span></p><p><span style=\"text-wrap-mode: nowrap;\">StatusFetcher sFetcher = new StatusFetcher();</span></p><p><span style=\"text-wrap-mode: nowrap;\">if(sFetcher.isActive()){</span></p><p><span style=\"text-wrap-mode: nowrap;\">//do calculatlons here</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The StatusFetcher class successfully complled and saved.However, the calculator class has a compile time error.</span></p><p><span style=\"text-wrap-mode: nowrap;\">How should the developer fix this code?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Make the docalculations method in the calculator class private.</p>"
            },
            {
                "key": "B",
                "text": "<p>Change the class declaration for the calculator class to public with inherited sharing.</p>"
            },
            {
                "key": "C",
                "text": "<p>Change the class declaration for the statusFetcher class to public with inherited sharing.</p>"
            },
            {
                "key": "D",
                "text": "<p>Make the isActive method in the statusFetcher class public.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>The issue arises because the isActive() method in the StatusFetcher class is private, which means it cannot be accessed outside of that class, including within the Calculator class. To resolve the compile-time error, the isActive() method must be made public or at least protected to allow access from the Calculator class.</p>"
        },
        "difficulty": "简单",
        "accuracy": 88
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
        "accuracy": 73
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
        "accuracy": 82
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
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A developer is building custom search functionality that uses SOSL to search account and contact records that match search terms provided by the end user. The feature is exposed through a Lightning web component, and the end user is able to provide a list of terms to search.</span></p><p><span style=\"text-wrap-mode: nowrap;\">Consider the following code snippet:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">@AuraEnabled</span></p><p><span style=\"text-wrap-mode: nowrap;\">public static List&lt;List&lt;sObject&gt;&gt; searchTerms(List&lt;String&gt; termlist){</span></p><p><span style=\"text-wrap-mode: nowrap;\">List&lt;List&lt;sObject&gt;&gt; result = new List&lt;List&lt;sObject&gt;&gt;() :</span></p><p><span style=\"text-wrap-mode: nowrap;\">for(string term: termList) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">result.addAl1([FIND :term IN ALL FIELDS RETURNING Account Name),</span></p><p><span style=\"text-wrap-mode: nowrap;\">contact(FirstName,LastName)]};</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">return result;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">What is the maximum number of search terms the end user can provide to successfully execute the search without exceeding a governor limit?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>20</p>"
            },
            {
                "key": "B",
                "text": "<p>150</p>"
            },
            {
                "key": "C",
                "text": "<p>200</p>"
            },
            {
                "key": "D",
                "text": "<p>2000</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apexgov.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 73
    },
    {
        "type": "single_choice",
        "question": "<p>A developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to include helper methods that are not used by the Web Application in the implementation of the Web Service Class.\nWhich code segment shows the correct declaration of the class and methods?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>webservice class WebserviceClass {</p><p>private Boolean helperMethod() { /* implementation ... */ }&nbsp;</p><p>webservice static string updateRecords() { /* implementation ... */}</p><p>}</p><p><br/></p>"
            },
            {
                "key": "B",
                "text": "<p>global class WebServiceClass{</p><p>private Boolean helperMethod() { /* implementation ... */ }</p><p>global string updateRecords() ( /* implementation ... */ }</p><p>}</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>global class WebServiceClass {</p><p>private Boolean helperMethod() { /* implementation ... &quot;/ }</p><p>webservice static string updateRecords() { /* implementation ... */ }</p><p>}</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>webservice class WebServiceClass {</p><p>private Boolean helperMethod() { /* implementation ... */ }</p><p>g1obal static string updateRecords() { /* implementation ... */}</p><p>}</p><p><br/></p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "<p>global class: Required for a web service to be accessible outside the Salesforce org.\nprivate Boolean helperMethod(): Helper methods not used by the web application can remain private. This prevents them from being exposed as part of the web service interface.\nwebservice static string updateRecords(): Declares the method as part of the web service interface. The webservice keyword ensures it is exposed to external systems, and static is required for SOAP web service methods in Salesforce.</p>"
        },
        "difficulty": "简单",
        "accuracy": 70
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">Consider the following code snippet:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">public static List&lt;Lead&gt; obtainAllFields(Set&lt;Id&gt; 1eadIds) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">List&lt;Lead&gt; result = new List&lt;Lead&gt;();</span></p><p><span style=\"text-wrap-mode: nowrap;\">for(Id leadId : leadIds) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">result.add([SELECT FIELDS(ALL) FROM Lead WHERE Id = :leadId];</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">return result;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">Given the multi-tenant architecture of the Salesforce platform, what is a best practice a developer should implement and ensure successful execution of the method?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Avoid executing queries without a limit clause.</p>"
            },
            {
                "key": "B",
                "text": "<p>Avoid returning an empty List of records.</p>"
            },
            {
                "key": "C",
                "text": "Avoid using variables as query flters."
            },
            {
                "key": "D",
                "text": "<p>Avoid performing queries inside for loops.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>Executing SOQL queries inside a for loop is against Salesforce best practices due to the risk of exceeding governor limits. Each SOQL query consumes a resource limit, and the Salesforce platform enforces strict limits to ensure equitable resource usage in its multi-tenant environment.\nIn this code snippet, the query inside the loop could easily lead to too many SOQL queries errors if the leadIds set contains a large number of IDs.</p>"
        },
        "difficulty": "简单",
        "accuracy": 89
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
        "accuracy": 79
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
        "accuracy": 74
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
        "accuracy": 76
    },
    {
        "type": "single_choice",
        "question": "<p>A Next Best Action strategy uses an Enhance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors.\nWhat is the correct definition of the Apex method?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>@InvocableMethod</p><p>&nbsp;global static List&lt;List&lt;Recommendation&gt;&gt;</p><p>&nbsp;getLevel (List&lt;ContactWrapper&gt; input)</p><p>&nbsp;{ /*implementation*/ }</p><p><br/></p>"
            },
            {
                "key": "B",
                "text": "<p>@InvocableMethod</p><p>&nbsp;global List&lt;List&lt;Recommendation&gt;&gt;</p><p>&nbsp;getLevel (List&lt;ContactWrapper&gt; input)</p><p>&nbsp;{ /*implementation*/ }</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>@InvocableMethod</p><p>&nbsp;global Recommendation getLevel (ContactWrapper input)</p><p>&nbsp;{ /*implementation*/ }</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>@InvocableMethod</p><p>&nbsp;global static ListRecommendation</p><p>&nbsp;getLevel (List&lt;ContactWrapper&gt; input)</p><p>&nbsp;{ /*implementation*/ }</p><p><br/></p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 80
    },
    {
        "type": "multiple_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">Refer to the following code snippet for an environment has more than 200 Accounts belonging to the &#39;Technology&#39; industry:</span></p><p><span style=\"text-wrap-mode: nowrap;\">for(Account thisAccount : [Select Id, Industry FROM Account LIMIT 150]){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp;if(thisAccount.Industry == &#39;Technology&#39; ){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;thisAccount.Is_Tech__c = true;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">update thisAccount;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">When he code executes which two events occur as a result of the Apex transaction?Choose 2 answers</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "<p>If executed in a synchronous context, the apex transaction is likely to fail by exceeding the DML governor limit.</p>"
            },
            {
                "key": "B",
                "text": "<p>The Apex transaction fails with the following message: &quot;SObject row was retrieved via SOQL without querying the requested field:Account.Is_Tech__ c&quot; .</p>"
            },
            {
                "key": "C",
                "text": "<p>If executed in an asynchronous context, the apex transaction is likely to fail by exceeding the DML governor limit.</p>"
            },
            {
                "key": "D",
                "text": "<p>The Apex transcation succeeds regardless of any uncaught exception and all processed accounts are updated.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A",
            "B"
        ],
        "explanation": {
            "A": "<p><span style=\"text-wrap-mode: nowrap;\">If executed in a synchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit: The code performs a DML operation (update) for every record inside the loop. Salesforce has a governor limit of 150 DML operations per transaction in synchronous code. Since the code attempts to perform an update for each Account in the loop, it will likely exceed the DML limit if the loop processes more than 150 records, leading to a failure.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The Apex transaction fails with the following message: &quot;SObject row was retrieved via SOQL without querying the requested field: Account.Is_Tech__c&quot;: The Is_Tech__c field is not included in the original SOQL query. Because the code tries to update the Is_Tech__c field on each Account, but the field was not queried, Salesforce will throw this exception indicating that the field was not retrieved in the query.</span></p><p><br/></p>",
            "B": "<p><span style=\"text-wrap-mode: nowrap;\">If executed in a synchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit: The code performs a DML operation (update) for every record inside the loop. Salesforce has a governor limit of 150 DML operations per transaction in synchronous code. Since the code attempts to perform an update for each Account in the loop, it will likely exceed the DML limit if the loop processes more than 150 records, leading to a failure.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The Apex transaction fails with the following message: &quot;SObject row was retrieved via SOQL without querying the requested field: Account.Is_Tech__c&quot;: The Is_Tech__c field is not included in the original SOQL query. Because the code tries to update the Is_Tech__c field on each Account, but the field was not queried, Salesforce will throw this exception indicating that the field was not retrieved in the query.</span></p><p><br/></p>"
        },
        "difficulty": "简单",
        "accuracy": 64
    },
    {
        "type": "single_choice",
        "question": "<p>A developer wants to mark each Account in a List&lt;Account&gt; as either Active or Inactive based on the LastModifiedDate field value being more than 90 days.</p><p>Which Apex technique should the developer use?</p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>A switch statement, with a for loop inside</p>"
            },
            {
                "key": "B",
                "text": "<p>A for loop, with a switch statement inside</p>"
            },
            {
                "key": "C",
                "text": "<p>An if/else statement, with a for loop inside</p>"
            },
            {
                "key": "D",
                "text": "<p>A for loop, with an if/else statement inside</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>To mark each Account in a List&lt;Account&gt; as either Active or Inactive based on the LastModifiedDate field, the most appropriate approach is to use a for loop to iterate through each Account, and within the loop, use an if/else statement to check if the LastModifiedDate is more than 90 days ago. Depending on the result, you can then set the Account status to Active or Inactive.</p>"
        },
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">What is the result of the following code snippet?</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">public void doWork(Account acct){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; for (Integer i = 0; i &lt;= 200; i++){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; insert acct;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp;}</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>0 Accounts are inserted.</p>"
            },
            {
                "key": "B",
                "text": "1 Account is inserted."
            },
            {
                "key": "C",
                "text": "<p>200 Accounts are inserted.</p>"
            },
            {
                "key": "D",
                "text": "<p>201 Acconts are inerted.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>The reason no Account records are inserted is due to the governor limits in Salesforce. Specifically:\n\nDML Governor Limit: Salesforce has a limit of 150 DML operations per transaction in synchronous context.\nIn the provided code, the insert acct; statement is inside a loop that runs 201 times, which exceeds the governor limit of 150 DML operations. As a result, Salesforce will throw a DmlException once the 150 DML operations are exceeded, and none of the records will be inserted.</p>"
        },
        "difficulty": "简单",
        "accuracy": 86
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">How many Accounts will be inserted by the following block of code?</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">for(Integer i = 0; i&lt; 500; i++){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; Account a = new Account (Name= &#39;New Account &#39; +i);</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; insert a;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>500</p>"
            },
            {
                "key": "B",
                "text": "<p>0</p>"
            },
            {
                "key": "C",
                "text": "<p>100</p>"
            },
            {
                "key": "D",
                "text": "<p>150</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "<p>The reason the code will not insert any Account records is due to a governor limit issue in Salesforce. Specifically, Salesforce has a limit of 150 DML statements per transaction in synchronous operations.</p>"
        },
        "difficulty": "简单",
        "accuracy": 90
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
        "accuracy": 81
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
        "accuracy": 57
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
        "accuracy": 82
    },
    {
        "type": "multiple_choice",
        "question": "<p>Assuming that &#39;name&#39; is a Stirng obtained by an &lt;apex:inputText&gt; tag on a Visualforce page, which two SOQL queries performed are safe from SOQL injection?Choose 2 answers</p>",
        "score": 1,
        "chooseCount": 2,
        "options": [
            {
                "key": "A",
                "text": "<p>String query = &#39;SELECT Id FROM Account WHERE Name LIKE \\&#39;&#39;%&#39; + name + &#39;%\\&#39;&#39;;</p><p>List&lt;Account&gt; results = Database.query(query);</p><p><br/></p>"
            },
            {
                "key": "B",
                "text": "<p>String query = &#39;SELECT Id FROM Account WHERE Name LIKE \\&#39;&#39;%&#39; + name.noQuotes() + &#39;%\\&#39;&#39;;</p><p>List&lt;Account&gt; results = Database.query(query);</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>String query = &#39;%&#39; + name + &#39;%&#39;;</p><p>List&lt;Account&gt; results =[SELECT Id FROM Account WHERE Name LIKE :query];</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>String query = &#39;SELECT Id FROM Account WHERE Name LIKE \\&#39;&#39;%&#39; + String.escapeSingleQuotes(name) + &#39;%\\&#39;&#39;;</p><p>List&lt;Account&gt; results = Database.query(query);</p><p><br/></p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D"
        ],
        "explanation": {
            "C": "<p>https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_security_tips_soql_injection.htm</p>",
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_security_tips_soql_injection.htm</p>"
        },
        "difficulty": "简单",
        "accuracy": 79
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">Given the following Anonymous Block:</span></p><p><span style=\"text-wrap-mode: nowrap;\">List&lt;Case&gt; casesToUpdate = new List&lt;Case&gt;( );</span></p><p><span style=\"text-wrap-mode: nowrap;\">for(Case thisCase : [Select Id, Status FROM Case LIMIT 50000]){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp;thiscase. Status = &#39;Working&#39;;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp;casesToUpdate. add(hisCase);</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">try{</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; Database. update(casesToUpdate, false);</span></p><p><span style=\"text-wrap-mode: nowrap;\">}catch(Exception e){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; System. debug(e. getMessage());</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">What should a developer consider for an environment that has over 10,000 Case records?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>The try/catch block will handle exceptions thrown by governor limits.</p>"
            },
            {
                "key": "B",
                "text": "<p>The transaction will succeed and changes will be committed.</p>"
            },
            {
                "key": "C",
                "text": "<p>The try/catch block will handle any DML exceptions thrown.</p>"
            },
            {
                "key": "D",
                "text": "<p>The transcation will fail due to exceeding the governor limit.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>The code attempts to query and update 50,000 Case records, which exceeds the Salesforce governor limit for the number of DML rows that can be processed in a single transaction. Salesforce enforces a limit of 10,000 rows for DML operations in a single transaction. As a result, even though the code uses a try/catch block to handle exceptions, the transaction will fail because the governor limits are enforced before the try/catch block can handle the exception. This is a limitation of the Salesforce platform that ensures optimal performance and fairness in a multitenant environment.</p>"
        },
        "difficulty": "简单",
        "accuracy": 70
    },
    {
        "type": "single_choice",
        "question": "<p>Which statement generates a list of Leads and Contacts that have a field with the phrase &#39;ACME&#39;?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>List&lt;sObject&gt; searchList = [FIND &quot;*ACME*&quot; IN ALL FIELDS RETURNING Contact, Lead];</p>"
            },
            {
                "key": "B",
                "text": "<p>List&lt;List&lt;sObject&gt;&gt; searchList = [FIND &quot;*ACME*&quot; IN ALL FIELDS RETURNING Contact, Lead];</p>"
            },
            {
                "key": "C",
                "text": "<p>List&lt;List&lt;sObject&gt;&gt; searchList = [SELECT Name, ID FROM Contact, Lead WHERE Name like &#39;%ACME%&#39;];</p>"
            },
            {
                "key": "D",
                "text": "<p>Map&lt;sObject&gt; searchList = [FIND &quot;*ACME*&quot; IN ALL FIELDS RETURNING Contact, Lead];</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "<p>This code uses Salesforce&#39;s SOSL (Salesforce Object Search Language) to perform a search for the phrase &quot;ACME&quot; across all fields of the Contact and Lead objects. The syntax FIND &quot;*ACME*&quot; IN ALL FIELDS RETURNING Contact, Lead specifies a search for any records in the Contact and Lead objects where any field contains the phrase &quot;ACME&quot;. The results are returned as a list of lists of sObjects, where each inner list contains the search results for one of the specified objects. This is because SOSL queries can return multiple types of objects in separate lists, each corresponding to one of the specified objects in the RETURNING clause. The correct type declaration for such a result set is List&lt;List</p>"
        },
        "difficulty": "简单",
        "accuracy": 84
    },
    {
        "type": "single_choice",
        "question": "<p>A developer needs to prevent the creation of Request records when certain conditions exist in the system. A RequestLogic class exists that checks the conditions.\nWhat is the correct implementation?</p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>trigger RequestTrigger on Request (before insert){</p><p>RequestLogic.validateRecords(trigger.new);</p><p>}</p><p><br/></p>"
            },
            {
                "key": "B",
                "text": "<p>trigger RequestTrigger on Request (after insert){</p><p>RequestLogic.validateRecords(trigger.new);</p><p>}</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>trigger RequestTrigger on Request (after insert){</p><p>if(RequestLogic.isValid(Request))</p><p>request.addError(&#39;Your request cannot be created at this time.&#39;);</p><p>}</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>trigger RequestTrigger on Request (before insert){</p><p>if(RequestLogic.isValid(Request))</p><p>request.addError(&#39;Your request cannot be created at this time.&#39;);</p><p>}</p><p><br/></p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "A"
        ],
        "explanation": {
            "A": "<p>The best implementation is to use the RequestLogic.validateRecords method within a before insert trigger. This approach leverages an existing class that contains all the necessary logic to check if the records meet the required conditions. By invoking this method within the trigger, it ensures that all validation rules are applied before the records are inserted into the database. If the conditions are not met, the method will handle the situation by either throwing an exception or using the addError method on the records to prevent them from being saved. This implementation maintains clean separation of concerns and encapsulates the validation logic within the RequestLogic class, enhancing code maintainability and reusability.</p>"
        },
        "difficulty": "简单",
        "accuracy": 73
    },
    {
        "type": "single_choice",
        "question": "<p>A developer must create a DrawList class that provides capabilities defined in the Sortable and Drawable interfaces.</p><p>Public interface Sortable{</p><p>void sort();</p><p>}</p><p>Public interface Drawable{</p><p>void draw();</p><p>}</p><p>Which is the correct implementation?</p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p><span style=\"text-wrap-mode: nowrap;\">public class DrawList implements Sortable, implements Drawable{</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public void sort() { /*implementation*/ }</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public void draw(){ /*implementation*/ }</span></p><p><"
            },
            {
                "key": "B",
                "text": "<p>public class DrawList extends Sortable, Drawable{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public void sort() { /*implementation*/ }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public void draw(){ /*implementation*/ }</p><p>}</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>public class DrawList extends Sortable, extends Drawable{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public void sort() { /*implementation*/ }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public void draw(){ /*implementation*/ }</p><p>}</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>public class DrawList implements Sortable, Drawable{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public void sort() { /*implementation*/ }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;public void draw(){ /*implementation*/ }</p><p>}</p><p><br/></p>"
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
        "accuracy": 89
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
        "accuracy": 75
    },
    {
        "type": "single_choice",
        "question": "<p>The following Apex method is part of the ContactService class that is called from a trigger:</p><p>public static void setBusinessUnitToEMEA(Contact thisContact){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; thisContact.Business_Unit__c = &#39;EMEA&#39;;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; update thisContact;</p><p>}</p><p>How should the developer modify the code to ensure best practices are met?</p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>public static void setBusinessUnitToEMEA(Contact thisContact){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; List&lt;Contact&gt; contacts = new List&lt;Contact&gt;();</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; contacts.add(thisContact.Business_Unit__c = &#39;EMEA&#39;);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; update contacts;</p><p>}</p><p><br/></p>"
            },
            {
                "key": "B",
                "text": "<p>public static void setBusinessUnitToEMEA(List&lt;Contact&gt; contacts){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; for(Contact thisContact : contacts){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;thisContact.Business_Unit__c = &#39;EMEA&#39;;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; update contacts;</p><p>}</p><p><br/></p>"
            },
            {
                "key": "C",
                "text": "<p>public static void setBusinessUnitToEMEA(List&lt;Contact&gt; contacts){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; for(Contact thisContact : contacts){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;thisContact.Business_Unit__c = &#39;EMEA&#39;;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;update contacts[0];</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }&nbsp;&nbsp;</p><p>}</p><p><br/></p>"
            },
            {
                "key": "D",
                "text": "<p>public static void setBusinessUnitToEMEA(List&lt;Contact&gt; contacts){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;contacts[0].Business_Unit__c = &#39;EMEA&#39;;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; update contacts[0];</p><p>}</p><p><br/></p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "<p>Option B modifies the original method to handle a list of contacts, rather than a single contact. This practice is known as &quot;bulkification&quot; and is essential for writing efficient Apex code that scales well with larger data volumes and adheres to Salesforce&#39;s governor limits. The method iterates over each contact in the list, setting the Business_Unit__c field to &#39;EMEA&#39; for all of them before performing a single update DML operation. This approach minimizes the number of DML operations, which is crucial for optimizing performance and avoiding governor limit exceptions when the code is executed in environments with multiple records processed simultaneously, such as bulk data operations or high-volume data entry scenarios.</p>"
        },
        "difficulty": "简单",
        "accuracy": 90
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit.</span></p><p><span style=\"text-wrap-mode: nowrap;\">public class without sharing OpportunityService{</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; public static List&lt;OpportunityLineItem&gt; getOpportunityProducts(Set&lt;Id&gt; opportunityIds){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; List&lt;OpportunityLineItem&gt; oppLineItems = new List&lt;OpportunityLineItem&gt;();</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;for(Id thisOppId : opportunityIds){</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; oppLineItems. addAll([Select Id FROM OppLineItem WHERE OpportunityId = :thisOppId]);</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;}</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp; &nbsp; return oppLineItems;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; &nbsp;}</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp;}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The above method might be called during a trigger execution via a Lightning component.</span></p><p><span style=\"text-wrap-mode: nowrap;\">Which technique should be implemented to avoid reaching the governor limit?</span></p><p><br/></p>",
        "score": 1,
        "chooseCount": 1,
        "options": [
            {
                "key": "A",
                "text": "<p>Refactor the code above to perform the SOQL query only if the Set of opportunityIds contains less 100 Ids.</p>"
            },
            {
                "key": "B",
                "text": "<p>Refactor the code above to perform only one SOQL query, filtering by the Set of opportunityIds.</p>"
            },
            {
                "key": "C",
                "text": "<p>Use the System. Limits. getQueries( ) method to ensure the number of queries is less than 100.</p>"
            },
            {
                "key": "D",
                "text": "<p>Use the System. Limits. getLimitQueries( ) method to ensure the number of queries is less than 100.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "B"
        ],
        "explanation": {
            "B": "<p>The best approach to prevent exceeding the governor limits on SOQL queries is to optimize the number of queries by reducing them to a single query whenever possible. In the provided code snippet, a SOQL query is executed within a loop, which can quickly reach the governor limit of 100 SOQL queries in a single transaction if the number of opportunities is large.</p>"
        },
        "difficulty": "简单",
        "accuracy": 73
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
        "accuracy": 93
    }
];

export default questions;
