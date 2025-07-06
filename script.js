let shownQuotes = new Set();

let btn = document.querySelector("#btn")
let input = document.querySelector("#name")
let label = document.querySelector("#label")
let inptH2 = document.querySelector("h2")
let inputDiv = document.querySelector(".input")
let emptyDiv = document.querySelector(".empty")
let outerInput = document.querySelector(".outerinput")
let mainbox = document.querySelector(".mainbox")
let toggleBtn = document.querySelector("#darkMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Toggle button text
    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
        mainbox.style.background = "linear-gradient(to right,rgb(121, 125, 255),rgb(174, 121, 254), rgb(121, 125, 255)";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        mainbox.style.background = "linear-gradient(to right, #ccceff, #e8dbfb, #ccceff)";
    }
});

let quotes = [
    "“Believe in yourself and all that you are.”",
    "“You are capable of amazing things.”",
    "“Success doesn’t come from what you do occasionally, it comes from what you do consistently.”",
    "“Push yourself, because no one else is going to do it for you.”",
    "“Doubt kills more dreams than failure ever will.”",
    "“The secret of getting ahead is getting started.”",
    "“Wake up with determination, go to bed with satisfaction.”",
    "“You are stronger than you think.”",
    "“There is no full stop in success, only commas.”",
    "“You must be the change you wish to see in the world.”",
    "“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”",
    "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”",
    "“We must accept finite disappointment, but never lose infinite hope",
    "“Success usually comes to those who are too busy to be looking for it.”",
    "“Pursue what catches your heart, not what catches your eyes.”",
    "“You cannot control the behavior of others, but you can always choose how you respond to it. ”",
    "“Life becomes easier and more beautiful when we can see the good in other people.”",
    "“Make improvements, not excuses. Seek respect, not attention.”",
    "“Follow your heart, listen to your inner voice, stop caring about what others think.”",
    "“Never lose hope. Storms make people stronger and never last forever.”",
    "“Always find opportunities to make someone smile, and to offer random acts of kindness in everyday life.”",
    "“The only way to do great work is to love what you do.”",
    "“Believe you can and you're halfway there.”",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
    "“Happiness is not something ready made. It comes from your own actions.”",
    "“Whether you think you can or you think you can’t, you’re right.”",
    "“Don’t count the days, make the days count.”",
    "“Don’t limit your challenges. Challenge your limits.”",
    "“Every day may not be good... but there's something good in every day.”",
    "“Success is the sum of small efforts repeated day in and day out.”",
    "“Great things never come from comfort zones.”",
    "“Act as if what you do makes a difference. It does.”",
    "“The harder you work for something, the greater you’ll feel when you achieve it.”",
    "“Difficult roads often lead to beautiful destinations.”",
    "“Do something today that your future self will thank you for.”",
    "“Little by little, a little becomes a lot.”",
    "“What you get by achieving your goals is not as important as what you become by achieving your goals.”",
    "“Start where you are. Use what you have. Do what you can.”",
    "“The way to get started is to quit talking and begin doing.”",
    "“Learn as if you will live forever, live like you will die tomorrow.”",
    "“Dream it. Wish it. Do it.”",
    "“Don’t wait for opportunity. Create it.”",
    "“Everything you’ve ever wanted is on the other side of fear.”",
    "“Doubt whom you will, but never yourself.”",
    "“Nothing is impossible. The word itself says ‘I’m possible!’”",
    "“Be so good they can’t ignore you.”",
    "“Try not to become a person of success, but rather try to become a person of value.”",
    "“Knowing yourself is the beginning of all wisdom.” — Aristotle",
    "“Your time is limited, so don’t waste it living someone else’s life.” — Steve Jobs",
    "“In the middle of every difficulty lies opportunity.” — Albert Einstein",
    "“It is not length of life, but depth of life.” — Ralph Waldo Emerson",
    "“He who opens a school door, closes a prison.” — Victor Hugo",
    "“Sometimes it's the journey that teaches you a lot about your destination.”",
    "“Be yourself; everyone else is already taken.” — Oscar Wilde",
    "“The quieter you become, the more you can hear.” — Ram Dass",
    "“Success is not how high you have climbed, but how you make a positive difference to the world.”",
    "“Happiness depends upon ourselves.” — Aristotle",
    "“Discipline is the bridge between goals and accomplishment.” — Jim Rohn",
    "“Winners are not afraid of losing. But losers are.” — Robert Kiyosaki",
    "“Success is 1% inspiration, 99% perspiration.” — Thomas Edison",
    "“The pain you feel today will be the strength you feel tomorrow.”",
    "“If you get tired, learn to rest, not to quit.”",
    "“Don’t watch the clock; do what it does. Keep going.”",
    "“You don’t have to be great to start, but you have to start to be great.”",
    "“Stay away from those people who try to disparage your ambitions.” — Mark Twain",
    "“Your only limit is your mind.”",
    "“Work hard in silence. Let your success make the noise.”",
    "“Love yourself first and everything else falls into line.” — Lucille Ball",
    "“You are enough just as you are.”",
    "“Be kind to yourself. You’re doing the best you can.”",
    "“You glow differently when you’re confident in yourself.”",
    "“Happiness is an inside job.”",
    "“Surround yourself with people who make you feel like sunshine.”",
    "“The more you love yourself, the less nonsense you’ll tolerate.”",
    "“Let your smile change the world, but don’t let the world change your smile.”",
    "“You deserve the love you so freely give to others.”",
    "“Fall in love with taking care of yourself.”",
    "“Shoot for the moon. Even if you miss, you’ll land among the stars.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“If your dreams don’t scare you, they’re not big enough.”",
    "“Everything you can imagine is real.” — Pablo Picasso",
    "“Go confidently in the direction of your dreams.”",
    "“Stop waiting for the perfect moment. Take the moment and make it perfect.”",
    "“The best way to predict the future is to create it.”",
    "“What lies behind us and what lies before us are tiny matters compared to what lies within us.”",
    "“If people are doubting how far you can go, go so far that you can’t hear them anymore.”",
    "“Dream big. Start small. Act now.”"
]

function capitalizeWords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
let length = quotes.length

btn.addEventListener("click", () => {
    let quote;

    if (shownQuotes.size === quotes.length) {
        alert("You’ve seen all the quotes! Starting again ✨");
        shownQuotes.clear();
    }
    do {
        quote = Math.floor(Math.random() * quotes.length);
    } while (shownQuotes.has(quote));

    shownQuotes.add(quote);
    // let quote = Math.floor(Math.random() * length);
    let inptVal = capitalizeWords(input.value);
    if (inptVal == "" && btn.textContent == "Generate Quote") {
        // if(inputDiv.style.visibility == "visible"){
        emptyDiv.textContent = "Enter your name first... "
        emptyDiv.style.visibility = "visible"
        return
    } else {
        console.log("btn is clicked!")
        console.log(inptVal)
        input.value = ""
        inputDiv.style.visibility = "hidden"
        emptyDiv.style.visibility = "hidden"
        btn.textContent = "Next Quote"
        outerInput.style.height = "4.25rem"
        outerInput.style.padding = "15px"
        outerInput.textContent = `${quotes[quote]}`
        let utterance = new SpeechSynthesisUtterance(quotes[quote]);
        speechSynthesis.speak(utterance);
        if (inptVal == "") {
            return
        } else {
            inptH2.textContent = `Welcome, ${inptVal} 💜`;
        }
    }
})