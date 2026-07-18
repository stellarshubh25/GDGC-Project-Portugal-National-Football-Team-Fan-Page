console.log("JS Loaded");
document.body.classList.add("loading");
const players = [
  { name: "Cristiano Ronaldo", club: "AL NASSR", caps: 217, goals: 130, photo: "ronaldo.jpg" },
  { name: "Bruno Fernandes", club: "MAN UNITED", caps: 87, goals: 28, photo: "2.webp" },
  { name: "João Félix", club: "AL NASSR", caps: 52, goals: 12, photo: "3.jpg" },
  { name: "João Cancelo", club: "AL HILAL", caps: 66, goals: 12, photo: "4.jpg" },
  { name: "Rúben Dias", club: "MAN CITY", caps: 74, goals: 3, photo: "5.webp" },
  { name: "João Neves", club: "PSG", caps: 21, goals: 3, photo: "6.webp" },
  { name: "Pedro Neto", club: "CHELSEA", caps: 23, goals: 2, photo: "7.jpg" },
  { name: "Renato Veiga", club: "CHELSEA", caps: 11, goals: 1, photo: "8.jpg" },
  { name: "Nuno Mendes", club: "PSG", caps: 43, goals: 1, photo: "9.jpg" },
  { name: "Vitinha", club: "PSG", caps: 37, goals: 0, photo: "10.jpg" },
  { name: "Diogo Costa", club: "FC PORTO", caps: 42, goals: 0, photo: "11.jpg" }
];

const container = document.getElementById("player-container");
container.className = "player-grid";

players.forEach(player => {
    container.innerHTML += `
        <div class="player-card">

            
            <img src="${player.photo}" alt="${player.name}" class="player-img">

            <h2 class="player-name">
    <a href="https://www.google.com/search?q=${encodeURIComponent(player.name)}"
       target="_blank"
       class="player-link">
        ${player.name}
    </a>
</h2>

            <p class="player-club">(${player.club})</p>

            <div class="player-stats">
                <div class="stat">
                    <h3>${player.caps}</h3>
                    <span>CAPS</span>
                </div>

                <div class="stat">
                    <h3>${player.goals}</h3>
                    <span>GOALS</span>
                </div>
            </div>

        </div>
    `;
});
window.addEventListener("load", () => {

    document.body.classList.add("loading");

    setTimeout(() => {

        document.getElementById("intro").classList.add("hide");

        document.body.classList.remove("loading");

    }, 4000);

});
const ctx = document.getElementById("goalsChart");

if (ctx) {
    new Chart(ctx, {
    type: 'bar',

    data: {
        labels: [
            'Ronaldo',
            'Bruno',
            'João Félix',
            'Cancelo',
            'Rúben Dias',
            'João Neves',
            'Pedro Neto',
            'Renato Veiga',
            'Nuno Mendes',
            'Vitinha',
            'Diogo Costa'
        ],

        datasets: [{
            label: 'International Goals',

            data: [130,28,12,12,3,3,2,1,1,0,0],

            backgroundColor: '#A41034',

            borderColor: '#FFD700',

            borderWidth: 2
        }]
    },

    options: {

        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },

        scales: {

            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255,255,255,.08)'
                }
            },

            y: {
                beginAtZero: true,

                ticks: {
                    color: 'white'
                },

                grid: {
                    color: 'rgba(255,255,255,.08)'
                }
            }

        }

    }

}); }  // <<< THIS WAS MISSING
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
const spotlight = document.getElementById("spotlight");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e)=>{

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animate(){

    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    spotlight.style.left = currentX + "px";
    spotlight.style.top = currentY + "px";

    requestAnimationFrame(animate);

}

animate();
