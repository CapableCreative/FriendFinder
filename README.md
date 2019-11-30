# Friend Finder App
<i>Details: Assignment 13 (FSF Bootcamp)</i>
Student:<b> Stephen L. Fox</b>
Submitted:<b> 11/29/2019</b>
_____________

<h2>What is the issue to solve?</h2>
How do you find the single <b>most compatable</b> friend on your friend list?

<h2>What is the purpose of solving this problem?</h2>
Finding a friend with similar responses to key personality questions creates an opportunity to better understand who your friends are, and what you have in common. Will the similarities result in compatability, or friction?

<h2>What is the implemented approach?</h2>
<ol>
<li>Craft pseudo code to outline broad strokes
    <ul>
        <li>Craft HTML to greet user, and present app purpose</li>
        <li>Present 10 questions, each with a value 1 – 5</li>
        <li>Value each answer within 10 questions to create matchable metric between <b>user</b> and <b>friends</b></li>
        <li>Store User Entered data based on 10 questions</li>
        <li>Retrieve stored data associated with "friends" of user</li>
        <li>Compare user data against stored friend data</li>
        <li>Present user with the most compatible friend based on closest value of 10 answers</li>
    </ul>
</li>
<li>Create app file structure, adhering to MVC standards</li>
<li>Write, or scrape, existing html file for View assets</li>
<li>Code html routes via Express (using urlhandler, body-parser, and text (if needed)); store in app routes directory</li>
<li>Code api routes to perform basic comparison logic between <b>user entered</b> and <b>stored friend</b> data
<li>Test and comment code to delineate understanding</li>
<li>Deploy to GitHub repo</li>
<li>Deploy to Heroku to support database functions</li>
</ol>

<h2>Challenges</h2>
I submitted this work fairly late, and had to frequently reference old notes. Additionally, the api routing isn't as simple as you might expect; the comparison logic is fairly simple, but requires lengthy code.
