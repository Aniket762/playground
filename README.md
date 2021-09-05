<p align='center'><img src='https://github.com/Aniket762/playground/blob/main/assets/playground-logo.png' width="300" ></p>

<h1 align='center'> Playground</h1>
<p align='center'>
<img src='http://ForTheBadge.com/images/badges/built-by-developers.svg'>&nbsp;<img src='http://ForTheBadge.com/images/badges/built-with-love.svg'>
</p>




## Inspiration 🧠
### "The influence of a good teacher can never be erased and without teachers, life would have no class"
On this teachers' day, we wanted to thank all our teachers by bringing to them Playground. The playground is a web application to make life easier for our Computer Science teachers.

## What is it? ⛹️‍♂️
There are two subsystems of the Playground:
1. Evaluation of answer sheets of the exams conducted traditionally is a tedious and critical task. A lot of time and energy is invested by the teachers to check every single line of code, look for bugs and find the corresponding output. So, with Playground, you can simply upload a picture of a student's handwritten code and we will handle the rest. Using Google's Vision API, we scan the image and retrieve the text and give it back to you in a code editor. But unlike teachers, machines are not always right, so if some minor flaws are there you can edit them in the code editor, which will then run the code and give you the output. So instead of going through the entire code, use Playground to do it in less than 2 mins.
2. Teachers have to work hard everyday. Starting from explaining the concepts in a pace all students understand, to giving proper assignments, to clearing all the doubts. So we thought let us make another important job for our teachers super easy. With Playground, you can also easily create question papers and assignments for your students. This is done by crowdsourcing. Students and teachers across the world can add their favourite questions through a form and then you'll get a variety of coding questions which are pre-approved by us. So just select some of the random questions from our page and you're done with the assignment! It's that simple!


[![Starware](https://img.shields.io/badge/⭐-Starware-f5a91a?labelColor=black)](https://github.com/zepfietje/starware)

Playground is Starware.  
This means you're free to use the project, as long as you star its GitHub repository.  
Your appreciation makes us grow and glow up. ⭐


## Prerequisites 👨‍💻

## How we built it 🧑‍💻
We used Next.js in the frontend and Node.js in the backend with MongoDB as our database. Next, we used the Google Vision API for scanning the image and retrieving the handwritten text. The handwritten text was displayed in a code editor with full syntax highlighting and available for currently two languages, c++ and python. When you click submit, we generated a new code file for the corresponding language and displayed it's output on the screen. For the second section of Playground, we created a form which adds data to the database. Then we retrieve the data through axios and display the questions that are approved. We created a special route with a passcode for admins, where they can manually approve the questions in the database.

## Challenges we ran into 🥺

## Accomplishments that we're proud of 😎

## What we learned 🤓

## Built With 💕



## What's next for Playground 🔥



## Team ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://aniket.live"><img src="https://avatars.githubusercontent.com/u/67703407?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aniket Pal</b></sub></a><br /><a href="#infra-Aniket762" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/Aniket762/playground/commits?author=Aniket762" title="Tests">⚠️</a> <a href="https://github.com/Aniket762/playground/commits?author=Aniket762" title="Code">💻</a> <a href="#ideas-Aniket762" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Aniket762/playground/commits?author=Aniket762" title="Documentation">📖</a> <a href="#projectManagement-Aniket762" title="Project Management">📆</a></td>
    <td align="center"><a href="http://aabhassao.me"><img src="https://avatars.githubusercontent.com/u/58210877?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aabhas Sao </b></sub></a><br /><a href="#design-kirito-236" title="Design">🎨</a> <a href="#infra-kirito-236" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/Aniket762/playground/commits?author=kirito-236" title="Code">💻</a></td>
    <td align="center"><a href="https://sumana.live/"><img src="https://avatars.githubusercontent.com/u/63084088?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sumana Basu</b></sub></a><br /><a href="#design-sumana2001" title="Design">🎨</a> <a href="https://github.com/Aniket762/playground/commits?author=sumana2001" title="Documentation">📖</a> <a href="https://github.com/Aniket762/playground/commits?author=sumana2001" title="Code">💻</a></td>
  </tr>
</table>
