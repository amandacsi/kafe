# TEST PLAN 🐑

1. INTRODUCTION

Customer wants a perfect website, which passed the full cycle of manual testing. Given the
specificity of the site it is very important to have the same quality and the site.
The Test Plan has been created to facilitate communication within the team members. This
document describe approaches and methodologies that will apply to the integration
and system testing of the "https://casinoscanada.com/" and the API "https://regres.in/api-docs/"
It includes the objectives, test responsibilities, entry and exit criteria, scope, schedule major milestones, entry and exit criteria and approach. This document has clearly identified what the test deliverables will
be, and what is deemed in and out of scope.

2. SCOPE

The document mainly targets the GUI testing and validating data in report output as per
Requirements Specifications provided by Client.

> 2.1 Functions to be tested.
> - GUI
> -  Search and Filters Logic
> -  Performance
> 2.2  Functions not to be tested.
> Not other than mentioned above in section 2.1

3. QUALITY OBJECTIVES 

> 3.1 A primary objective

A primary objective of testing is to: assure that the system meets the full requirements,
including quality requirements (functional and non-functional requirements) and fit
metrics for each quality requirement and satisfies the use case scenarios and maintain the
quality of the product. At the end of the project development cycle, the user should find
that the project has met or exceeded all of their expectations as detailed in the
requirements.
Any changes, additions, or deletions to the requirements document, Functional
Specification, or Design Specification will be documented and tested at the highest level
of quality allowed within the remaining time of the project and within the ability of the test
team.

> 3.2 The secondary objectives

The secondary objectives of testing will be to: identify and expose all issues and
associated risks, communicate all known issues to the project team, and ensure that all
issues are addressed in an appropriate matter before release

4. The approach, that used, is Analytical therefore, in accordance to requirements-based
strategy, where an analysis of the requirements specification forms the basis for planning,
estimating and designing tests. Test cases will be created during exploratory testing. All
test types are determined in Test Strategy.
Team also must used experience-based testing and error guessing utilize testers' skills and
intuition, along with their experience with similar applications or technologies.

5. TEST AUTOMATION 

Test automation is here to stay. That’s because good test automation reduces manual effort through repeatable, stable processes, increases ROI on testing, accelerates testing and feedback, and in the long run reduces business expenses. 
The tool that will be used by the qa team will be cypress.
Cypress has native control and access to the entire application, and with this feature it makes the test much faster and more reliable for those who are automating it. This makes it possible to create automated test cases simultaneously with the development of the application itself.

6. ENTRY AND EXIT CRITERIA

6.1 Entry criteria  

> -  All test hardware platforms must have been successfully installed, configured, and
>functioning properly.
> - All the necessary documentation, design, and requirements information should be
> available that will allow testers to operate the system and judge the correct behavior.
> -  All the standard software tools including the testing tools must have been
> - Successfully installed and functioning properly.
> - Proper test data is available.
> -  The test environment such as, lab, hardware, software, and system administration
> support should be ready.
> -  QA resources have completely understood the requirements
> -  QA resources have sound knowledge of functionality

6.2 EXIT CRITERIA

A certain level of requirements coverage has been achieved.
No high priority or severe bugs are left outstanding.
> - 👨‍🏫 All high-risk areas have been fully tested, with only minor residual risks left
outstanding.
> - Cost – when the budget has been spent.
> - The schedule has been achieved
> É de extrema importância que você trabalhe no seu fork, para que ao final do curso, possa rodar os testes em um _pipeline_ de integração contínua.

7. TEST STRATEGY

> - 7.1 QA role in test process
> - Creating Test Data:
Test data will be created by respective QA on client's developments/test site based on
scenarios and Test cases.
> - Executing Test Cases:
> - Test cases will be executed by respective QA on client's development/test site based on
designed scenarios, test cases and Test data.
> - Test result (Actual Result, Pass/Fail) will updated in test case document Defect Logging
and Reporting:
QA will be logging the defect/bugs in the jira plataform, found during execution of test
cases. After this, QA will inform respective developer about the defect/bugs.
> -Retesting and Regression Testing:
Retesting for fixed bugs will be done by respective QA once it is resolved by respective
developer and bug/defect status will be updated accordingly. In certain cases, regression
testing will be done if required.
> - Deployment/Delivery:
> -Once all bugs/defect reported after complete testing is fixed and no other bugs are found,
report will be deployed to client’s test site XPTO.
> -Once round of testing will be done by QA on client’s test site if required Report will be
delivered along with sample output by email to respective lead and Report group.
> - QA will be submitting the filled hard copy of delivery slip to respective developer.
> - Once lead gets the hard copy of delivery slip filled by QA and developer, he will send
the report delivery email to client.

8. TESTING TYPES 

**Black box testing:** 
It is some time called behavioral testing or Partition testing. This kind of testing focuses on
the functional requirements of the software. It enables one to derive sets of input
conditions that that will fully exercise all functional requirements for a program.
GUI Testing:
GUI testing will includes testing the UI part of report. It covers users Report format, look
and feel, error messages, spelling mistakes, GUI guideline violations.
**Integration Testing:** 
Integration testing is systematic technique for constructing the program structure while
conducting test to uncover errors associated with interacting. In Report, integration testing
includes the testing Report from respective location(s).
**Functional Testing:** 
Functional testing is carried out in order to find out unexpected behavior of the report. The
characteristic of functional testing are to provide correctness, reliability, testability and
accuracy of the report output/data.
System Testing:
System testing of software is testing conducted on a complete, integrated system to
evaluate the system's compliance with its specified requirements.

**Performance Testing:**
> - Check the optimal time the page is loaded
> - Check the operation of the system under load

**User acceptance testing:**

The purpose behind user acceptance testing is to conform that system is developed
according to the specified user requirements and is ready for operational use. Acceptance
testing is carried out at two levels - Alpha and Beta Testing. User acceptance testing
(UAT) will be done at the Client.

9. BUG SEVERITY AND PRIORITY DEFINITION 

Bug Severity and Priority fields are both very important for categorizing bugs and
prioritizing if and when the bugs will be fixed. The bug Severity and Priority levels will
be defined as outlined in the following tables below. Testing will assign a severity level to
all bugs. The Test Lead will be responsible to see that a correct severity level is assigned
to each bug.
The QA Lead, Development Lead and Project Manager will participate in bug review
meetings to assign the priority of all currently active bugs. This meeting will be known as
“Bug Triage Meetings”. The QA Lead is responsible for setting up these meetings on a
routine basis to address the current set of new and existing but unresolved bugs.

10. RESOURCE AND ENVIRONMENT NEEDS

> - 10.1 Testing Tools


       Process                   | Tools              

 _Test case creation_              **Jira**                      
 _Test case tracking_              **Microsoft Excel**
 _Test case execution automatic_   **Cypress**                                                 
 _Defect management_               **Jira**             
 _Test reporting_                   **PDF**                 

11. CONFIGURATION MANAGEMENT 

> - Documents QA: Git
> - Code QA: Git

12. TEST ENVIRONMENT 

> - Support level 1 (browsers):
> -Windows 11: Edge, Chrome (latest), Firefox (latest), Safari (latest)
> - Mac OS X: Chrome (latest), Firefox (latest), Safari (latest)
> - Linux Ubuntu: Chrome (latest), Firefox (latest)
> - Support level 1 (devices):
> - iPhone 5 / 6, iPad 3, Nokia Lumia 910, Google Nexus 7, LG G3.
> - Support level 2:
> - Windows 10: Edge, Chrome (latest), Firefox (latest), Safari (latest)
 
13. APPROVALS 

Project Manager: Name and signature
QA Lead: Name and signature
