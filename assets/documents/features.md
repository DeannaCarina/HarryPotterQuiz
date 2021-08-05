<a href="https://github.com/DeannaCarina/HarryPotterQuiz">Back to README</a>

# Features

## Contents
<ul>
    <li>
        <a href="#decisions">Deciding what to Implement</a>
    </li>   
    <li>
        <a href="#implemented">Implemented Features</a>
    </li> 
    <li>
        <a href="#features-left">Features Left to Implement</a>
    </li> 
</ul>
<hr>

<h3 id="decisions">Deciding what to implement</h3>
Using the table from the Strategy Plane of the UX section (which I have included at the bottom of this page), I was able to determine what could be implemented and what would be better being left out by using a viability/importance chart. Those features that were plotted in the graph in the pink area were those that were determined to be both important AND viable enough to be implemented.<br>
<h3 id="implemented">Implemented Features</h3>
From the table, I was able to recognise which features were more likely to have a positive impact on the website and implement the following:
<ul>
    <li><em>Obvious role of the website demonstrated with 'hero' image and capture text</em> - I have tried to make the landing page (catering for all screen sizes) as obvious as possible to identify the role and purpose of the website. The background image shows Harry Potter related items (his glasses, hogwarts letter and the marauder's map) which will be recognisable to any Harry Potter fan. The capture text at the top of the main page issues a challenge to the user "Think you know Harry Potter? Tak our quiz to find out" this states very clearly that the website is a quiz, and it's theme is Harry Potter - there shouldn't be any suprises when the user clicks on one of the quiz links The quiz links themselves feature each Harry Potter book title again enforcing the fact that this website is purely based around Harry Potter. This feature meets aims 2 and 6 identified in the Strategy section of UX</li>
    <li><em>Simple design with straightforward navigation to make it easier for the user to understand where to find information</em> - The website has a simple design throughout, with each page having it's own title and each page being a quiz based on a single Harry Potter Book. The font and main text colours throughout are all the same adding continuity and familiarity to the website - improving user experience. These elements were all styled using CSS with psuedo classes for hover actions to enable the customer to visualise a transitioning style. The whole of the main page is wholely navigation based in that there is no information on there other than the links to the relevant Book quizzes. This feature meets aims 2, 4 and 6 identified in the Strategy section of UX</li>
    <li><em>A highly visually interactive website to keep the user interested</em> - by making the website interactive, the user is going to be more inclined to stay on the website and explore the website to carry out the quizzes and challenge themselves, but also potentially learn things about the Harry Potter books that they didn't know or couldn't remember. It also makes the website seem more professional and seem as if more effort has gone into the design and implementation e.g. in index.html, each of the divs linked to the specific quiz page will go transparent and reveal the image behind it, all of the answer selections in the website have the same psuedo class design to go transparent grey and all of the navigation/call to action links that appear once the 'get results' button is pressed all have the same design, and match the colours of the header for the specific page the user is on. This feature meets aims 2, 4, 5 and 6 identified in the Strategy section of UX</li>
    <li><em>A Fully accessible website able to be experienced by customers with visual imparement</em> - This feature is highly important (as outlined in TESTING.md Accessibility section) it allows all customers to interact and use the website even if they have a visual imparement, meaning that anybody who is a fan of the Harry Potter books can enjoy and interact with the website. It also makes the website more inclusive and higher on potential search engine results lists. This ensures that the company is following Equality and Diversity best practices and will not be liable to litigation from neglegt of this legislation. This feature meets aims 2, 3, 4, 5 and 6 identified in the Strategy section of UX</li>
    <li><em>A way for users to see which answer they have selected</em> - if users are unable to visualise which answer they have selected they may think that no answer is selected and navigate away from the page thinking that the quizzes are broken. It is highly important to have a visual clue as to whether the users actions have generated a response. In order to implement this feature, each of the four answers per question are actually a radio input meaning that only one answer can be selected at a time, the label for each radio input is what contains the answer text that is visible to the user. For the label and radio input to link together (for accessibility purposes) the label must be assigned using the 'for' attribute to the input with the same ID, to do this, I used the same parameters to populate the label text to populate the 'for' and 'ID' attributes of the label and input. However this did cause some bugs (see bugs section). I then used CSS to set the radio icon display to hidden, and instead had the whole label change style when the radio input is selected, this works as the label is set to activate the radio input when clicked (due to the 'for' and 'ID' attrubutes being the same). This feature meets aims 2, 4, 5 and 6 identified in the Strategy section of UX</li>
    <li><em>A way for users to see the score they have recieved for each quiz</em> - if the user doesn't know what they scored for each quiz, then there's no way for them to know how much they know about the specific Harry Potter book, which is the whole purpose of the quiz. To implement this feature, I used a javascript function with a variable to gather the answers selected by the user (containerOfQuiz.querySelectorAll('.answers');), I then used a for loop to count the numbers of answers that were correct and for every correct answer (through the full length of questions) to add 1 to the score. The containerOfResults varibale then has it's innerHTML altered to show the user's score out of 20 (the question length). This feature meets aims 2, 4, 5 and 6 identified in the Strategy section of UX</li>
    <li><em>A way for users to see the correct answers should they wish</em> - Initially I wasn't going to implement this feature as I felt that it would encourage people to cheat, however after putting my project forward for peer review this was the most requested feature. Despite the ability to see if the question was correct or incorrect, my peers still wanted to see the precise correct answer. To implement this feature I added a small tick icon to the correct answer within the varible that contains all the questions and answers. I then set their display property to hidden. From here I had to target all the ticks with the same class name and convert them to an array. With the 'reveal answers' button in the HTML I added an onClick event handler which would run a specific function from the JavaScript. On the click of the reveal answers button an if/else statement is then triggered - if the ticks are hidden: make them visible, if they're visible: make them hidden. I tried to do this in a number of ways but most of the techniques I used broke the rest of the JavaScript, howver I found an easy fix was to put the 'tick' image inside a div, and to hide/reveal the div rather than the image. This feature meets aims 2, 4, 5 and 6 identified in the Strategy section of UX</li>
    <li><em>A fully responsive website that works on a range of screen sizes and devices</em> - The majority of users that visit the Harry Potter quiz will most likely be visiting on a mobile device, therefore I have ensured that the quiz works and is displayed correctly on all screen sizes down to a width of 140px which means the quiz will be playable on most smart watches. By catering for screen sizes down to this size, I am ensuring the website is inclusive no matter the device the user has. This feature meets aims 2 and 6 identified in the Strategy section of UX</li>
    <li><em>A range of questions from all Harry Potter books that would not usually feature in the standard Harry Potter quizes found online</em> - In order to implement this feature I have had to (and I am still having to at 2 weeks from submission) read all of the Harry Potter books from cover to cover and pick out the facts that most readers might skim over and the facts that aren't touched upon in the films. I am usually quite a quick reader, however when I am trying to find obsure facts I have found I need to be a lot more scruninising of the words I am reading and therefore take my time a bit more. On average, one set of book questions (20 in total) have taken be 2-4 days to generate depending on the size of the book. For the seven books if each one is taking me 3 days to read and generate answers from - thats three weeks worth of time just taken to make the questions and answers. I am currently (on 29th July) exactly two weeks from submission and still need to generate questions and answers for two more books. Although it has taken a lot of time to implement this feature, I have found it exceptionally rewarding and the individuals that have tested the website have all been very impressed at the standard of the questions. This feature meets aims 2, 4, 5 and 6 identified in the Strategy section of UX</li>
    <li><em>For each question, a range of answers that would all make sense to the user (nothing obscure)</em> - I have found on multiple occasions when carrying out online quizzes that the correct answer to the question is obvious. There are usually four potential answers, two of which are completely obscure, one is a 'red herring' and the other is the correct answer. I have tried to steer away from this method and have given four potential answers that all sound correct. For the audience that I am targeting I feel that this style of potential answers will be more rewarding as it makes the quiz harder. For some of the potential answers I have had to do some research such as learning some latin phrases, and using Harry Potter websites to learn about other characters and events that have happened in the 'Potterverse' that could be another potential answer. This feature meets aims 2, 4, 5 and 6 identified in the Strategy section of UX</li>
    <li><em>A way for users to view step-by-step instructions for the web-quiz</em> - This will allow the users to identify the best way to interact with the website and the steps they will need to take to gain their scores. This feature meets aim 1 identified in the Strategy section of UX</li>
</ul>   

<h3 id="features-left">Features left to implement</h3>
Due to time constraints and limitations of coding knowledge I have chosen not to try and implement the following features to the website at this time, however they have the potential to become features in the future:
<ul>
    <li><em>A score table on the main page for users to see their score from each quiz on the same page</em> - at this current stage in my learning I feel that trying to incorporate this feature is beyond my skill set. I would need to learn about sessions and analytics, which for the moment are beyond my comfort zone.</li>
    <li><em>A one-page site with all quizes on the same HTML page with changes made entirely via JavaScript</em> - Throughout the design and implementation of the web-quiz I have found JavaScript a very difficult language to work with, and as such I have tried to make the website as simple as possible - this has meant that I have not followed 'dry' principles however given how much I have struggled with this project, I feel that trying to implement this particular feature would have been way beyond my comfort zone.</li>
    <li><em>A way for users to input their name/nickname for personalised alerts</em> - This feature (I think) would have been fairly easy to implement, however I feel that it wouldn't have added much to the game itself. Almost every quiz I have carried out online never ask for the users name, so I don't feel that the Harry Potter quiz would be at a disadvantage by not having this feature.</li>
    <li><em>A leaderboard showing the users name/nicknames (only shows their first attempt)</em> - I feel this feature is beyond my current coding knowledge as I would probably need to use databases? I wouldn't know where to start.</li>
</ul><br><br>
<table>
    <tr>
        <th>Opportunity/Feature</th>
        <th>Feasibility/Viability (score out of 5)</th>
        <th>Level of Importance (score out of 5)</th>
        <th>In or out?</th>
    </tr>
    <tr>
        <td>Obvious role of the website demonstrated with hero image and capture text</td>
        <td>5</td>
        <td>5</td>
        <td>In</td>
    </tr>
    <tr>
        <td>Simple design with straightforward navigation to make it easier for the user to understand where to find information</td>
        <td>4</td>
        <td>5</td>
        <td>In</td>
    </tr>
    <tr>
        <td>A highly visually interactive website to keep the user interested</td>
        <td>5</td>
        <td>4</td>
        <td>In</td>
    </tr>
    <tr>
        <td>A Fully accessible website able to be experienced by customers with visual imparement</td>
        <td>4</td>
        <td>5</td>
        <td>In</td>
    </tr>
    <tr>
        <td>A way for users to see which answer they have selected</td>
        <td>4</td>
        <td>5</td>
        <td>In</td>
    </tr>
    <tr>
        <td>A way for users to see the score they have recieved for each quiz</td>
        <td>4</td>
        <td>5</td>
        <td>In</td>
    </tr>
    <tr>
        <td>A way for users to see the correct answers should they wish</td>
        <td>3</td>
        <td>4</td>
        <td>In</td>
    </tr>
    <tr>
        <td>A score table on the main page for users to see their score from each quiz on the same page</td>
        <td>2</td>
        <td>3</td>
        <td>Out</td>
    </tr>
    <tr>
        <td>A one-page site with all quizes on the same HTML page with changes made entirely via JavaScript</td>
        <td>1</td>
        <td>2</td>
        <td>Out</td>
    </tr>
    <tr>
        <td>A fully responsive website that works on a range of screen sizes and devices</td>
        <td>5</td>
        <td>5</td>
        <td>In</td>
    </tr>
    <tr>
        <td>A range of questions from all Harry Potter books that would not usually feature in the standard Harry Potter quizes found online</td>
        <td>3</td>
        <td>4</td>
        <td>In</td>
    </tr>
    <tr>
        <td>For each question, a range of answers that would all make sense to the user (nothing obscure)</td>
        <td>3</td>
        <td>3</td>
        <td>In</td>
    </tr>
    <tr>
        <td></td>
        <td>Average Viability x number of features:<br>43</td>
        <td>Sum of Importance:<br>50</td>
        <td></td>
    </tr>
</table>
<a href="#Contents">Back to the top.</a>