const main = document.querySelector('main');

const Joke1 = "Q: How do you get a tissue to dance? A: You put a boogie in it.";
const Joke2 ="Don't use beef stew as a computer password. It's not stroganoff";
const Joke3 = "Why was the math book sad? Because it had so many problems.";


//document.write = (`${Joke1} ${Joke2} ${Joke3}`);


const template = `
    <section>
    <ul>
        <li> ${Joke1} </li>
        <li> ${Joke2} </li>
        <li> ${Joke3} </li>
         </ul>
        </section>
`;

main.innerHTML = template;

const h1 = document.createElement('h1');
h1.textContent= "That's all folks!";
main.appendChild(h1);



