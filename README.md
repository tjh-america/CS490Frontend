#CS490 Frontend
Version 0.3
The Frontend for a CS490 Project at NJIT.

The project, in it's final form, will be an automated testing system for an introductory Python class. The site will be have 2 different types of users, Professor and Student. Unlike most classes, the professor does not grade the test. Rather, the tests are graded automatically by the system.

A Professor can:

1. Add questions to a question bank
2. Create a test from questions in the question bank
3. Release scores so the test can be graded
4. Add comments and alter scores

A Student can:

1. Take a test
2. View his or her grade

In the Current 0.3 Beta Version:

Professor/createQuestion.html accepts input and returns JSON

Professor/createTest.html allows professor to move questions from the question bank to the tentative test. When submitted, the test returns JSON

Student/takeTest.html allows student to answer questions from the test. Submitting the test returns JSON

To Do:

Connect to Middle End/database


Ability for Professor to search test bank by type of question or keywords

Look and feel

© 2017 Thomas J. Harrigan

tjh.america@gmail.com
