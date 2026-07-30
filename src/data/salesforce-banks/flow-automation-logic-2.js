const questions = [
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A developer is asked to write helper methods that create test data for unit tests.</span></p><p><span style=\"text-wrap-mode: nowrap;\">01:&nbsp; public TestUtils {</span></p><p><span style=\"text-wrap-mode: nowrap;\">02:&nbsp;&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">03:&nbsp; &nbsp; public static Account createAccount( ) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">04:&nbsp; &nbsp; &nbsp; Account act = new Account( );</span></p><p><span style=\"text-wrap-mode: nowrap;\">05:&nbsp; &nbsp; &nbsp; // …set some fields on acct…</span></p><p><span style=\"text-wrap-mode: nowrap;\">06:&nbsp; &nbsp; &nbsp; return act;</span></p><p><span style=\"text-wrap-mode: nowrap;\">07:&nbsp; &nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">08:&nbsp; &nbsp; //…other methods…</span></p><p><span style=\"text-wrap-mode: nowrap;\">09:&nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">What should be changed in the TestUtils class so that its methods are only usable by unit test methods?</span></p><p><br/></p>",
        "question-zh": "<p>开发人员需要编写帮助器方法，为单元测试创建测试数据。</p><p>01:&nbsp; public TestUtils {</p><p>02:&nbsp;&nbsp;</p><p>03:&nbsp; &nbsp; public static Account createAccount( ) {</p><p>04:&nbsp; &nbsp; &nbsp; Account act = new Account( );</p><p>05:&nbsp; &nbsp; &nbsp; // …在 acct 上设置一些字段…</p><p>06:&nbsp; &nbsp; &nbsp; return act;</p><p>07:&nbsp; &nbsp; }</p><p>08:&nbsp; &nbsp; //…其他方法…</p><p>09:&nbsp; }</p><p>应如何修改 TestUtils 类，以使其方法仅可由单元测试方法使用？</p>",
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
        "options-zh": [
            {
                "key": "A",
                "text": "<p>将第 01 行的 public 改为 private。</p>"
            },
            {
                "key": "B",
                "text": "<p>在第 03 行上方添加 @IsTest。</p>"
            },
            {
                "key": "C",
                "text": "<p>在第 01 行上方添加 @IsTest。</p>"
            },
            {
                "key": "D",
                "text": "<p>移除第 03 行中的 static。</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "<p><span style=\"text-wrap-mode: nowrap;\">Add @IsTest above line 01.</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">This will define the TestUtils class as a test utility class,&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">and its methods will only be accessible from test methods.&nbsp;</span></p><p><span style=\"text-wrap-mode: nowrap;\">This is a Salesforce best practice to prevent the utility methods from being available to non-test execution contexts.</span></p><p><br/></p>"
        },
        "explanation-zh": {
            "C": "<p>在第 01 行上方添加 @IsTest。</p><p>这会将 TestUtils 类定义为测试实用工具类，其方法将只能从测试方法中访问。这是 Salesforce 的最佳实践，可防止实用工具方法在非测试执行上下文中可用。</p>"
        },
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records:</span></p><p><span style=\"text-wrap-mode: nowrap;\">@AuraEnabled</span></p><p><span style=\"text-wrap-mode: nowrap;\">public void static updateLeads( ) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; for(Lead thisLead: [SELECT Origin__c FROM Lead]) {</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; thisLead.LeadSource = thisLead.Origin__c;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; &nbsp; update thisLead;</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">Which governor limit will likely be exceeded within the Apex transaction?</span></p><p><br/></p>",
        "question-zh": "<p>以下代码片段由 Lightning Web Component 在拥有超过 2,000 条 Lead 记录的环境中执行：</p><p>@AuraEnabled</p><p>public void static updateLeads( ) {</p><p>&nbsp; for(Lead thisLead: [SELECT Origin__c FROM Lead]) {</p><p>&nbsp; &nbsp; thisLead.LeadSource = thisLead.Origin__c;</p><p>&nbsp; &nbsp; update thisLead;</p><p>&nbsp; }</p><p>}</p><p>在该 Apex 事务中，最可能超出哪项治理限制？</p>",
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
        "options-zh": [
            {
                "key": "A",
                "text": "<p>发出的 SOQL 查询总数。</p>"
            },
            {
                "key": "B",
                "text": "<p>SOQL 查询检索的记录总数。</p>"
            },
            {
                "key": "C",
                "text": "<p>发出的 DML 语句总数。</p>"
            },
            {
                "key": "D",
                "text": "<p>DML 语句处理的记录总数。</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C"
        ],
        "explanation": {
            "C": "<p>In the given code, the update DML statement is inside the for loop, meaning that for each Lead record retrieved, an update statement is executed.\nGovernor limits in Salesforce allow only 150 DML operations per transaction. Since the code is performing one update operation for each Lead record in the loop, if there are more than 150 records (which is highly likely with over 2,000 records), this limit will be exceeded.</p>"
        },
        "explanation-zh": {
            "C": "<p>在给定代码中，update DML 语句位于 for 循环内部，因此每检索到一条 Lead 记录都会执行一条更新语句。Salesforce 的治理限制规定，每个事务最多只能执行 150 次 DML 操作。代码会为循环中的每条 Lead 记录执行一次更新；若记录超过 150 条（在超过 2,000 条记录的环境中极有可能），将超出该限制。</p>"
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
        "accuracy": 80,
        "question-zh": "QUERY LENGTH LIMIT EXCEEDED. MAX ALLOWED QUERY : 500 CHARS",
        "options-zh": [
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
        "explanation-zh": {
            "B": ""
        }
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
        "accuracy": 83,
        "question-zh": "QUERY LENGTH LIMIT EXCEEDED. MAX ALLOWED QUERY : 500 CHARS",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>@ Extends (class = \"OrderRequest\")&nbsp;</p><p>public class CustomerOder</p>"
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
                "text": "<p>@ Implements (class = \"OrderRequest\")&nbsp;</p><p>public class CustomerOrder</p>"
            }
        ],
        "explanation-zh": {
            "C": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm</p>"
        }
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
        "accuracy": 85,
        "question-zh": "<p>请参阅以下Apex代码：</p><p>整数x = 0 ；</p><p> do {</p><p>x = 1 ；</p><p>&nbsp; &nbsp; &nbsp;x + +;</p><p>} while (x &lt; 1);</p><p> System.debug (x);</p><p>当x写入调试日志时，它的值是多少？</p><p><br/></p>",
        "options-zh": [
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
        "explanation-zh": {
            "C": "QUERY LENGTH LIMIT EXCEEDED. MAX ALLOWED QUERY : 500 CHARS"
        }
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
        "accuracy": 79,
        "question-zh": "QUERY LENGTH LIMIT EXCEEDED. MAX ALLOWED QUERY : 500 CHARS",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>从帐户列表中删除空项目。</p>"
            },
            {
                "key": "B",
                "text": "<p>实施变革数据捕获。</p>"
            },
            {
                "key": "C",
                "text": "<p>实现upsert DML语句。</p>"
            },
            {
                "key": "D",
                "text": "<p>为DML实现try/catch块。</p>"
            }
        ],
        "explanation-zh": {
            "D": "<p>Try/catch块用于优雅地处理异常。在执行更新等DML操作时，如果发生任何错误（例如，由于验证规则失败、字段需求问题或其他DML异常） ，异常将被捕获到catch块中，从而防止事务完全失败，并允许开发人员适当处理错误。</p>"
        }
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A developer wrote the following two classes:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">public with sharing class statusFetcher{</span></p><p><span style=\"text-wrap-mode: nowrap;\">private Boolean active = true;</span></p><p><span style=\"text-wrap-mode: nowrap;\">private Boolean isActive(){</span></p><p><span style=\"text-wrap-mode: nowrap;\">return active;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">public with sharing class Calculator{</span></p><p><span style=\"text-wrap-mode: nowrap;\">public void doCalculations(){</span></p><p><span style=\"text-wrap-mode: nowrap;\">StatusFetcher sFetcher = new StatusFetcher();</span></p><p><span style=\"text-wrap-mode: nowrap;\">if(sFetcher.isActive()){</span></p><p><span style=\"text-wrap-mode: nowrap;\">//do calculatlons here</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">&nbsp; }</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">The StatusFetcher class successfully complled and saved.However, the calculator class has a compile time error.</span></p><p><span style=\"text-wrap-mode: nowrap;\">How should the developer fix this code?</span></p><p><br/></p>",
        "question-zh": "<p>开发人员编写了以下两个类：</p><p>（代码保持不变）</p><p>StatusFetcher 类已成功编译并保存，但 Calculator 类出现编译时错误。开发人员应如何修复代码？</p>",
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
        "options-zh": [
            {
                "key": "A",
                "text": "<p>将 Calculator 类中的 doCalculations 方法设为 private。</p>"
            },
            {
                "key": "B",
                "text": "<p>将 Calculator 类声明改为 public inherited sharing。</p>"
            },
            {
                "key": "C",
                "text": "<p>将 StatusFetcher 类声明改为 public inherited sharing。</p>"
            },
            {
                "key": "D",
                "text": "<p>将 StatusFetcher 类中的 isActive 方法设为 public。</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>The issue arises because the isActive() method in the StatusFetcher class is private, which means it cannot be accessed outside of that class, including within the Calculator class. To resolve the compile-time error, the isActive() method must be made public or at least protected to allow access from the Calculator class.</p>"
        },
        "explanation-zh": {
            "D": "<p>问题在于 StatusFetcher 类中的 isActive() 方法为 private，因此无法从该类外部（包括 Calculator 类）访问。要解决编译时错误，必须将 isActive() 设为 public，或至少设为 protected，以允许 Calculator 类访问。</p>"
        },
        "difficulty": "简单",
        "accuracy": 88
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">Given the code below in an Apex class:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">List&lt;Account&gt; aList=[SELECT Id, Active_c EROM Account];</span></p><p><span style=\"text-wrap-mode: nowrap;\">for (Account a : a List){</span></p><p><span style=\"text-wrap-mode: nowrap;\">if[!a.Active_c){</span></p><p><span style=\"text-wrap-mode: nowrap;\">a.Name = &#39;INACTIVE&#39;;</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\">update aList;</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">What should a developer do to correct the code so that there is no chance of hitting a govermorlimit?</span></p><p><br/></p>",
        "question-zh": "<p>给定 Apex 类中的以下代码：</p><p>（代码保持不变）</p><p>开发人员应如何修改代码，以避免触及治理限制？</p>",
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
        "options-zh": [
            {
                "key": "A",
                "text": "<p>将 DML 改为 Database.update(aList, true)。</p>"
            },
            {
                "key": "B",
                "text": "<p>将 DML 改为 Database.update(aList, false)。</p>"
            },
            {
                "key": "C",
                "text": "<p>在 SOQL 语句中添加 LIMIT 子句。</p>"
            },
            {
                "key": "D",
                "text": "<p>在 SOQL 语句中添加 WHERE 子句。</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "D"
        ],
        "explanation": {
            "D": "<p>Using a WHERE clause ensures the query retrieves only relevant records, reducing unnecessary processing and staying within governor limits.</p>"
        },
        "explanation-zh": {
            "D": "<p>使用 WHERE 子句可确保查询仅检索相关记录，减少不必要的处理，并使执行保持在治理限制以内。</p>"
        },
        "difficulty": "简单",
        "accuracy": 73
    },
    {
        "type": "single_choice",
        "question": "<p><span style=\"text-wrap-mode: nowrap;\">A lead developer creates an Apex interface called &quot;Laptop&quot;. Consider the following code snippet:</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">public class SilverLaptop{</span></p><p><span style=\"text-wrap-mode: nowrap;\">//code implementaticn</span></p><p><span style=\"text-wrap-mode: nowrap;\">}</span></p><p><span style=\"text-wrap-mode: nowrap;\"><br/></span></p><p><span style=\"text-wrap-mode: nowrap;\">How can a developer use the Laptop interface within the SilverLaptop class?</span></p><p><br/></p>",
        "question-zh": "<p>一名首席开发人员创建了名为 Laptop 的 Apex 接口。请考虑以下代码：</p><p>public class SilverLaptop {<br/>// 代码实现<br/>}</p><p>开发人员如何在 SilverLaptop 类中使用 Laptop 接口？</p>",
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
        "options-zh": [
            {
                "key": "A",
                "text": "<p>@Extends(class=&quot;Laptop&quot;)<br/>public class SilverLaptop</p>"
            },
            {
                "key": "B",
                "text": "<p>public class SilverLaptop extends Laptop</p>"
            },
            {
                "key": "C",
                "text": "<p>@Interface(class=&quot;Laptop&quot;)<br/>public class SilverLaptop</p>"
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
        "explanation-zh": {
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
        "accuracy": 79,
        "question-zh": "<p>管理层要求为年收入超过 1,000,000 美元的 Account 自动创建 Opportunity。开发人员在 Account 对象上创建了所示触发器。用户通过 UI 更新 Account 时可正常创建 Opportunity；但管理员使用 Data Loader 上传 179 条 Account 时，操作因 System.Exception 失败。开发人员应采取哪两项措施修复该代码？请选择 2 个答案。</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>将保存 Opportunity 的 DML 操作移至 for 循环外部。</p>"
            },
            {
                "key": "B",
                "text": "<p>使用 Database.query 查询 Opportunity。</p>"
            },
            {
                "key": "C",
                "text": "<p>检查创建 Opportunity 时是否提供了全部必填字段。</p>"
            },
            {
                "key": "D",
                "text": "<p>在 for 循环外部查询现有 Opportunity。</p>"
            }
        ],
        "explanation-zh": {
            "A": "<p>应避免在循环中执行 DML 和 SOQL。循环内 insert 最多会触发 150 次 DML 操作的治理限制；应将待创建的 Opportunity 收集到 List，并在循环后一次性插入。循环内 SOQL 会触发每事务最多 100 次查询的限制；应在循环前一次查询所有相关 Opportunity 并存入 Map。</p>",
            "D": "<p>应避免在循环中执行 DML 和 SOQL。循环内 insert 最多会触发 150 次 DML 操作的治理限制；应将待创建的 Opportunity 收集到 List，并在循环后一次性插入。循环内 SOQL 会触发每事务最多 100 次查询的限制；应在循环前一次查询所有相关 Opportunity 并存入 Map。</p>"
        }
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
        "accuracy": 73,
        "question-zh": "<p>开发人员构建了一项自定义搜索功能：它使用 SOSL 搜索与最终用户提供的搜索词匹配的 Account 和 Contact 记录。该功能通过 Lightning Web Component 公开，最终用户可提供搜索词列表。给定所示代码，在不超出治理限制的情况下，最终用户最多可提供多少个搜索词来成功执行搜索？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apexgov.htm</p>"
        }
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
        "accuracy": 70,
        "question-zh": "<p>开发人员需要实现供外部 Web 应用程序使用的自定义 SOAP Web Service。开发人员希望在 Web Service 类中包含不会被该 Web 应用程序使用的帮助器方法。哪段代码正确声明了类和方法？</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>webservice class WebserviceClass {<br/>private Boolean helperMethod() { /* 实现 */ }<br/>webservice static string updateRecords() { /* 实现 */ }<br/>}</p>"
            },
            {
                "key": "B",
                "text": "<p>global class WebServiceClass {<br/>private Boolean helperMethod() { /* 实现 */ }<br/>global string updateRecords() { /* 实现 */ }<br/>}</p>"
            },
            {
                "key": "C",
                "text": "<p>global class WebServiceClass {<br/>private Boolean helperMethod() { /* 实现 */ }<br/>webservice static string updateRecords() { /* 实现 */ }<br/>}</p>"
            },
            {
                "key": "D",
                "text": "<p>webservice class WebServiceClass {<br/>private Boolean helperMethod() { /* 实现 */ }<br/>global static string updateRecords() { /* 实现 */ }<br/>}</p>"
            }
        ],
        "explanation-zh": {
            "C": "<p>global 类：Web Service 要能在 Salesforce 组织外部访问，类必须声明为 global。private Boolean helperMethod()：未供外部 Web 应用使用的帮助器方法可以保持 private，避免其暴露在 Web Service 接口中。webservice static string updateRecords()：webservice 关键字会将方法公开给外部系统；Salesforce SOAP Web Service 方法必须为 static。</p>"
        }
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
        "accuracy": 89,
        "question-zh": "<p>请考虑以下代码：</p><p>public static List&lt;Lead&gt; obtainAllFields(Set&lt;Id&gt; leadIds) {<br/>List&lt;Lead&gt; result = new List&lt;Lead&gt;();<br/>for (Id leadId : leadIds) {<br/>result.add([SELECT FIELDS(ALL) FROM Lead WHERE Id = :leadId]);<br/>}<br/>return result;<br/>}</p><p>鉴于 Salesforce 平台的多租户架构，开发人员应实施哪项最佳实践以确保该方法成功执行？</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>避免执行未使用 LIMIT 子句的查询。</p>"
            },
            {
                "key": "B",
                "text": "<p>避免返回空记录 List。</p>"
            },
            {
                "key": "C",
                "text": "避免将变量用作查询筛选条件。"
            },
            {
                "key": "D",
                "text": "<p>避免在 for 循环内执行查询。</p>"
            }
        ],
        "explanation-zh": {
            "D": "<p>在 for 循环内执行 SOQL 查询违反 Salesforce 最佳实践，因为可能超出治理限制。每次 SOQL 查询都会消耗资源配额，Salesforce 为确保多租户环境中的资源公平使用而实施严格限制。在此代码中，如果 leadIds 集合包含大量 ID，循环内的查询很容易导致“SOQL 查询次数过多”错误。</p>"
        }
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
        "accuracy": 79,
        "question-zh": "<p>以下四个示例均使用 SOQL 聚合查询，按 CampaignId 对 Opportunity 的 Amount 求平均值，并通过 AggregateResult 输出调试信息。以上哪两个示例使用 System.debug 语句正确显示聚合查询结果？请选择 2 个答案。</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>示例 1。</p>"
            },
            {
                "key": "B",
                "text": "<p>示例 2。</p>"
            },
            {
                "key": "C",
                "text": "<p>示例 3。</p>"
            },
            {
                "key": "D",
                "text": "<p>示例 4。</p>"
            }
        ],
        "explanation-zh": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm</p>",
            "B": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm</p>"
        }
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
        "accuracy": 74,
        "question-zh": "<p>以下代码是 Visualforce 页面的自定义控制器的一部分：该代码将 Contact 的 Is_Active__c 设置为 false，然后在 try/catch 中更新记录。开发人员可通过哪两种方式包围 try/catch，以强制执行对象级和字段级权限，并在当前登录用户没有适当访问权限时阻止执行 DML？请选择 2 个答案。</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>使用 if (thisContact.OwnerId == UserInfo.getUserId())。</p>"
            },
            {
                "key": "B",
                "text": "<p>使用 if (Schema.sObjectType.Contact.isUpdatable())。</p>"
            },
            {
                "key": "C",
                "text": "<p>使用 if (Schema.sObjectType.Contact.isAccessible())。</p>"
            },
            {
                "key": "D",
                "text": "<p>使用 if (Schema.sObjectType.Contact.fields.Is_Active__c.isUpdateable())。</p>"
            }
        ],
        "explanation-zh": {
            "B": "<p>Schema.sObjectType.Contact.isUpdatable() 会检查当前用户是否能更新整个 Contact 对象。若没有更新 Contact 记录的权限，update thisContact 不会执行，从而避免未经授权的更新。Schema.sObjectType.Contact.fields.Is_Active__c.isUpdateable() 会检查用户是否拥有 Is_Active__c 字段的更新权限。使用这两项检查可强制执行对象级和字段级安全性，确保 DML 仅在用户拥有适当权限时执行。</p>",
            "D": "<p>Schema.sObjectType.Contact.isUpdatable() 会检查当前用户是否能更新整个 Contact 对象。若没有更新 Contact 记录的权限，update thisContact 不会执行，从而避免未经授权的更新。Schema.sObjectType.Contact.fields.Is_Active__c.isUpdateable() 会检查用户是否拥有 Is_Active__c 字段的更新权限。使用这两项检查可强制执行对象级和字段级安全性，确保 DML 仅在用户拥有适当权限时执行。</p>"
        }
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
        "accuracy": 76,
        "question-zh": "<p>在以下示例中，调用 myMethod 时，它将在哪种共享上下文中执行？</p><p>public Class myClass {<br/>&nbsp;&nbsp;&nbsp; public void myMethod() { /* 实现 */ }<br/>}</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>将从调用上下文继承共享规则。</p>"
            },
            {
                "key": "B",
                "text": "<p>不会为运行用户强制执行共享规则。</p>"
            },
            {
                "key": "C",
                "text": "<p>会为运行用户强制执行共享规则。</p>"
            },
            {
                "key": "D",
                "text": "<p>将由实例化类强制执行共享规则。</p>"
            }
        ],
        "explanation-zh": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm</p>"
        }
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
        "accuracy": 80,
        "question-zh": "<p>一个 Next Best Action 策略使用增强元素（Enhance Element）调用 Apex 方法，根据多个因素确定 Contact 的折扣级别。该 Apex 方法的正确定义是什么？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "A": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm</p>"
        }
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
        "accuracy": 64,
        "question-zh": "<p>请参考以下代码；该环境中属于“Technology”行业的 Account 超过 200 条：</p><p>（代码保持不变）</p><p>代码执行时，Apex 事务会发生哪两项结果？请选择 2 个答案。</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>若在同步上下文中执行，Apex 事务很可能因超出 DML 治理限制而失败。</p>"
            },
            {
                "key": "B",
                "text": "<p>Apex 事务失败，并显示：“SObject row was retrieved via SOQL without querying the requested field: Account.Is_Tech__c”。</p>"
            },
            {
                "key": "C",
                "text": "<p>若在异步上下文中执行，Apex 事务很可能因超出 DML 治理限制而失败。</p>"
            },
            {
                "key": "D",
                "text": "<p>无论是否存在未捕获异常，Apex 事务都会成功，且所有处理的 Account 都会更新。</p>"
            }
        ],
        "explanation-zh": {
            "A": "<p>同步上下文中，每个事务最多允许 150 次 DML 操作。代码在循环内为每个 Account 执行 update，处理超过 150 条记录时很可能超出 DML 限制。另一个问题是原 SOQL 查询未包含 Is_Tech__c 字段，但代码试图更新此字段，因此会抛出“未查询所请求字段”的异常。</p>",
            "B": "<p>同步上下文中，每个事务最多允许 150 次 DML 操作。代码在循环内为每个 Account 执行 update，处理超过 150 条记录时很可能超出 DML 限制。另一个问题是原 SOQL 查询未包含 Is_Tech__c 字段，但代码试图更新此字段，因此会抛出“未查询所请求字段”的异常。</p>"
        }
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
        "accuracy": 88,
        "question-zh": "<p>开发人员希望根据 LastModifiedDate 字段是否超过 90 天，为 List&lt;Account&gt; 中的每个 Account 标记为“活动”或“非活动”。应使用哪种 Apex 技术？</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>在 switch 语句内使用 for 循环。</p>"
            },
            {
                "key": "B",
                "text": "<p>在 for 循环内使用 switch 语句。</p>"
            },
            {
                "key": "C",
                "text": "<p>在 if/else 语句内使用 for 循环。</p>"
            },
            {
                "key": "D",
                "text": "<p>在 for 循环内使用 if/else 语句。</p>"
            }
        ],
        "explanation-zh": {
            "D": "<p>应使用 for 循环遍历 List&lt;Account&gt; 中的每个 Account，并在循环内用 if/else 判断 LastModifiedDate 是否距今超过 90 天，再根据结果将 Account 状态设置为“活动”或“非活动”。</p>"
        }
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
        "accuracy": 86,
        "question-zh": "<p>以下代码片段的结果是什么？</p><p>public void doWork(Account acct) {<br/>&nbsp;&nbsp; for (Integer i = 0; i &lt;= 200; i++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp; insert acct;<br/>&nbsp;&nbsp; }<br/>}</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>插入 0 条 Account。</p>"
            },
            {
                "key": "B",
                "text": "<p>插入 1 条 Account。</p>"
            },
            {
                "key": "C",
                "text": "<p>插入 200 条 Account。</p>"
            },
            {
                "key": "D",
                "text": "<p>插入 201 条 Account。</p>"
            }
        ],
        "explanation-zh": {
            "A": "<p>由于 Salesforce 的治理限制，不会插入任何 Account 记录。同步上下文中每个事务最多允许 150 次 DML 操作。代码在循环中执行 201 次 insert，超过 150 次后会抛出 DmlException，整个事务回滚，因此没有记录被插入。</p>"
        }
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
        "accuracy": 90,
        "question-zh": "<p>以下代码块将插入多少条 Account？</p><p>for (Integer i = 0; i &lt; 500; i++) {<br/>&nbsp;&nbsp; Account a = new Account(Name = 'New Account ' + i);<br/>&nbsp;&nbsp; insert a;<br/>}</p>",
        "options-zh": [
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
        "explanation-zh": {
            "B": "<p>不会插入任何 Account 记录，因为同步操作中每个 Salesforce 事务最多只能执行 150 条 DML 语句。代码在循环内执行 500 次 insert，超过限制后抛出异常，整个事务回滚。</p>"
        }
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
        "accuracy": 81,
        "question-zh": "<p>开发人员必须实现一个 CheckPaymentProcessor 类，提供符合 PaymentProcessor 接口中付款定义的支票付款处理功能。</p><p>public interface PaymentProcessor {<br/>&nbsp;&nbsp; void pay(Decimal amount);<br/>}</p><p>使用 PaymentProcessor 接口的正确实现是什么？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm</p>"
        }
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
                "text": "<p>Use the String.escapeSingleQuotes method to sanitize the parameter before its use.</p>"
            }
        ],
        "userAnswers": [],
        "correctAnswers": [
            "C",
            "D"
        ],
        "explanation": {
            "C": "<p>Static SOQL with a bind variable keeps user input separate from the query structure and is the preferred protection against SOQL injection.</p>",
            "D": "<p>String.escapeSingleQuotes escapes quotation marks in the string parameter so the value cannot change the structure of the dynamic SOQL query.</p>"
        },
        "difficulty": "简单",
        "accuracy": 57,
        "question-zh": "<p>开发人员在对系统中的 ContactSearch Apex 类进行安全审查时，发现以下方法存在安全威胁：</p><p>List&lt;Contact&gt; performSearch(String lastName) {<br/>&nbsp;&nbsp; return Database.query('SELECT Id, FirstName, LastName FROM Contact WHERE LastName Like %' + lastName + '%');<br/>}</p><p>开发人员可以通过哪两种方式更新该方法以防止 SOQL 注入攻击？请选择 2 个答案。</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>对参数使用正则表达式以移除特殊字符。</p>"
            },
            {
                "key": "B",
                "text": "<p>在类上使用 @ReadOnly 注解和 with sharing 关键字。</p>"
            },
            {
                "key": "C",
                "text": "<p>使用变量绑定，并以静态 SOQL 替代动态查询。</p>"
            },
            {
                "key": "D",
                "text": "<p>在使用参数前，通过 String.escapeSingleQuotes 方法对其进行转义处理。</p>"
            }
        ],
        "explanation-zh": {
            "C": "<p>使用带绑定变量的静态 SOQL，可将用户输入与查询结构分离，是防止 SOQL 注入的首选方式。</p>",
            "D": "<p>String.escapeSingleQuotes 会转义字符串参数中的引号，防止该值改变动态 SOQL 查询的结构。</p>"
        }
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
        "accuracy": 82,
        "question-zh": "<p>开发人员考虑以下代码：</p><p>Boolean isOK;<br/>Integer x;<br/>String theString = 'Hello';</p><p>if (isOK == false &amp;&amp; theString == 'Hello') { x = 1; }<br/>else if (isOK == true &amp;&amp; theString == 'Hello') { x = 2; }<br/>else if (isOK == null &amp;&amp; theString == 'Hello') { x = 3; }<br/>else { x = 4; }</p><p>根据此代码，x 的值是什么？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "D": "<p>isOK 已声明但未初始化，因此默认值为 null。第一个条件中 null == false 为 false；第二个条件中 null == true 也为 false。第三个条件中 isOK == null 且 theString 等于 Hello，因此条件为 true，代码将 x 赋值为 3。</p>"
        }
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
        "accuracy": 79,
        "question-zh": "<p>假设 name 是从 Visualforce 页面上的 &lt;apex:inputText&gt; 标签取得的 String，以下哪两种 SOQL 查询可安全防范 SOQL 注入？请选择 2 个答案。</p>",
        "options-zh": [
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
        "explanation-zh": {
            "C": "<p>https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_security_tips_soql_injection.htm</p>",
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_security_tips_soql_injection.htm</p>"
        }
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
        "accuracy": 70,
        "question-zh": "<p>给定以下匿名代码块（Anonymous Block）：</p><p>该代码查询最多 50,000 条 Case，将状态设为 Working 后使用 Database.update 更新。</p><p>对于拥有超过 10,000 条 Case 记录的环境，开发人员应考虑什么？</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>try/catch 块会处理由治理限制抛出的异常。</p>"
            },
            {
                "key": "B",
                "text": "<p>事务会成功，且更改将被提交。</p>"
            },
            {
                "key": "C",
                "text": "<p>try/catch 块会处理抛出的任何 DML 异常。</p>"
            },
            {
                "key": "D",
                "text": "<p>事务会因超出治理限制而失败。</p>"
            }
        ],
        "explanation-zh": {
            "D": "<p>代码尝试查询并更新 50,000 条 Case 记录，超出单个事务可处理 DML 行数的 Salesforce 治理限制。单个事务中的 DML 操作最多只能处理 10,000 行。因此，即使使用 try/catch，事务仍会失败，因为治理限制在 try/catch 能处理异常之前便会被强制执行。</p>"
        }
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
        "accuracy": 84,
        "question-zh": "<p>哪条语句会生成一个 Lead 和 Contact 的列表，其中字段包含短语“ACME”？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "B": "<p>该代码使用 Salesforce SOSL（Salesforce Object Search Language）跨 Contact 和 Lead 对象的所有字段搜索短语“ACME”。FIND &quot;*ACME*&quot; IN ALL FIELDS RETURNING Contact, Lead 会查找任意字段包含该短语的记录。SOSL 可返回多个对象类型，因此结果作为 sObject 的列表的列表返回；每个内部列表对应 RETURNING 子句中指定的一个对象。</p>"
        }
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
        "accuracy": 73,
        "question-zh": "<p>当系统中存在特定条件时，开发人员需要阻止创建 Request 记录。现有 RequestLogic 类负责检查这些条件。正确的实现是什么？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "A": "<p>最佳实现是在 before insert 触发器中调用 RequestLogic.validateRecords 方法。该类封装了检查记录是否符合条件所需的逻辑；在记录插入数据库前调用它，可确保应用全部验证规则。条件不满足时，该方法可抛出异常或对记录调用 addError 以阻止保存。此方式保持职责分离，并提高代码的可维护性和可复用性。</p>"
        }
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
        "accuracy": 89,
        "question-zh": "<p>开发人员必须创建一个 DrawList 类，提供 Sortable 和 Drawable 接口所定义的功能。</p><p>public interface Sortable {<br/>void sort();<br/>}<br/>public interface Drawable {<br/>void draw();<br/>}</p><p>正确的实现是什么？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_interfaces.htm</p>"
        }
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
        "accuracy": 75,
        "question-zh": "<p>开发人员必须创建一个 CreditCardPayment 类，为现有的 Payment 类提供实现。</p><p>public virtual class Payment {<br/>&nbsp;&nbsp; public virtual void makePayment(Decimal amount) { /* 实现 */ }<br/>}</p><p>正确的实现是什么？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "B": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm?search_text=virtual</p>"
        }
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
        "accuracy": 90,
        "question-zh": "<p>以下 Apex 方法属于由触发器调用的 ContactService 类：</p><p>public static void setBusinessUnitToEMEA(Contact thisContact) {<br/>&nbsp;&nbsp; thisContact.Business_Unit__c = 'EMEA';<br/>&nbsp;&nbsp; update thisContact;<br/>}</p><p>开发人员应如何修改代码以确保符合最佳实践？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "B": "<p>选项 B 将原方法修改为处理 Contact 列表而不是单个 Contact。这种做法称为批量化（bulkification），对于编写可随数据量扩展并遵循 Salesforce 治理限制的高效 Apex 代码至关重要。方法遍历列表中的每个 Contact，先为所有记录设置 Business_Unit__c 为 EMEA，再执行一次 update DML 操作。这可最大限度减少 DML 操作次数，避免在批量数据操作等多记录场景中出现治理限制异常。</p>"
        }
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
        "accuracy": 73,
        "question-zh": "<p>开发人员必须修改以下代码，以防止发出的 SOQL 查询数量超出平台治理限制。OpportunityService 的 getOpportunityProducts 方法遍历 opportunityIds，并在循环内按 OpportunityId 查询 OpportunityLineItem。该方法可能通过 Lightning 组件在触发器执行期间被调用。应实施哪种技术来避免达到治理限制？</p>",
        "options-zh": [
            {
                "key": "A",
                "text": "<p>重构代码，仅当 opportunityIds 集合少于 100 个 ID 时才执行 SOQL 查询。</p>"
            },
            {
                "key": "B",
                "text": "<p>重构代码，仅执行一次 SOQL 查询，并按 opportunityIds 集合筛选。</p>"
            },
            {
                "key": "C",
                "text": "<p>使用 System.Limits.getQueries() 方法确保查询数量少于 100。</p>"
            },
            {
                "key": "D",
                "text": "<p>使用 System.Limits.getLimitQueries() 方法确保查询数量少于 100。</p>"
            }
        ],
        "explanation-zh": {
            "B": "<p>为避免超出 SOQL 查询治理限制，最佳方法是在可能的情况下将查询次数减少为一次。给定代码在循环内执行 SOQL；当 Opportunity 数量较大时，单个事务很快会达到 100 次 SOQL 查询的限制。应使用 opportunityIds 集合作为筛选条件进行一次批量查询。</p>"
        }
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
        "accuracy": 93,
        "question-zh": "<p>一个可视化流（Visual Flow）使用 Apex 操作，为多个 Contact 提供存储在自定义类 ContactInfo 中的附加信息。获取附加信息的 Apex 方法的正确定义是什么？</p>",
        "options-zh": [
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
        "explanation-zh": {
            "D": "<p>https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_InvocableMethod.htm</p>"
        }
    }
];

export default questions;
