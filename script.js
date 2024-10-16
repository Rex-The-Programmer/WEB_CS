function btn1() {
    resetChampionImages()
    document.querySelector('.main-image').src = "sources/top.jpg";
    document.querySelector('.lane-title').innerHTML = "TOP LANE";
    document.querySelector('.lane-description').innerHTML = "Champions in top lane are the tough solo fighters of the team. It's their job to protect their lane and focus on the enemy team's most powerful members.";

    document.querySelector('.champion-image2').src = "sources/morde.png";
    document.querySelector('.champion-image4').src = "sources/voli.png";
    document.querySelector('.champion-image3').src = "sources/urgot.png";
    document.querySelector('.champion-image5').src = "sources/olaf.png";
    document.querySelector('.champion-image6').src = "sources/Cho'gath.png";
    document.querySelector('.champion-image1').src = "sources/jax.png"; 
    document.querySelector('.champion-image7').src = "sources/Quinn_0.jpg";
    document.querySelector('.champion-name-centered2').innerHTML = "Mordekaiser";
    document.querySelector('.champion-name-centered3').innerHTML = "Urgot";
    document.querySelector('.champion-name-centered4').innerHTML = "Volibear";
    document.querySelector('.champion-name-centered5').innerHTML = "Olaf";
    document.querySelector('.champion-name-centered6').innerHTML = "Cho'gath";
    document.querySelector('.champion-name-centered1').innerHTML = "Jax"; 
    document.querySelector('.champion-name-centered7').innerHTML = "Quinn"; 
}

function btn2() {
    resetChampionImages()
    document.querySelector('.main-image').src = "sources/jungle.jpg";
    document.querySelector('.lane-title').innerHTML = "JUNGLE";
    document.querySelector('.lane-description').innerHTML = "Junglers live for the hunt. Stalking between lanes with stealth and skill, they keep a close eye on the most important neutral monsters and pounce the moment an opponent lets their guard down.";

    document.querySelector('.champion-image2').src = "sources/karthus.png";
    document.querySelector('.champion-image4').src = "sources/warwick.png";
    document.querySelector('.champion-image3').src = "sources/rammus.png";
    document.querySelector('.champion-image5').src = "sources/ivern.png";
    document.querySelector('.champion-image6').src = "sources/nunu.png";
    document.querySelector('.champion-image1').style.display = "none";
    document.querySelector('.champion-image7').style.display = "none";
    document.querySelector('.champion-name-centered2').innerHTML = "Karthus";
    document.querySelector('.champion-name-centered3').innerHTML = "Rammus";
    document.querySelector('.champion-name-centered4').innerHTML = "Warwick";
    document.querySelector('.champion-name-centered5').innerHTML = "Ivern";
    document.querySelector('.champion-name-centered6').innerHTML = "Nunu & Willump";
    document.querySelector('.champion-name-centered1').innerHTML = ""; 
    document.querySelector('.champion-name-centered7').innerHTML = ""; 
}

function btn3() {
    resetChampionImages()
    document.querySelector('.main-image').src = "sources/mid.jpg";
    document.querySelector('.lane-title').innerHTML = "MID LANE";
    document.querySelector('.lane-description').innerHTML = "Mid laners are your high burst damage champions who can do it all—solo and as a team. For them, combat is a dangerous dance where they're always looking for an opportunity to outplay their opponent.";
    document.querySelector('.champion-image1').src = ""; 
    document.querySelector('.champion-image1').style.display = "none";
    document.querySelector('.champion-image2').src = "sources/zed.png";
    document.querySelector('.champion-image4').src = "sources/sol.png";
    document.querySelector('.champion-image3').src = "sources/garen.png";
    document.querySelector('.champion-image5').src = "sources/smolder.png";
    document.querySelector('.champion-image6').src = "sources/yas.png";
    document.querySelector('.champion-image7').src = "sources/fizz.png";
    document.querySelector('.champion-name-centered2').innerHTML = "Zed";
    document.querySelector('.champion-name-centered3').innerHTML = "Garen";
    document.querySelector('.champion-name-centered4').innerHTML = "Aurelion Sol";
    document.querySelector('.champion-name-centered5').innerHTML = "Smolder";
    document.querySelector('.champion-name-centered6').innerHTML = "Yasuo";
    document.querySelector('.champion-name-centered1').innerHTML = ""; 
    document.querySelector('.champion-name-centered7').innerHTML = "Fizz"; 
}


function btn4() {
    resetChampionImages()
    document.querySelector('.main-image').src = "sources/bot.jpg";
    document.querySelector('.lane-title').innerHTML = "BOTTOM LANE";
    document.querySelector('.lane-description').innerHTML = "Bot lane champions are the dynamite of the team. As precious cargo, they need to be protected early on before amassing enough gold and experience to carry the team to victory.";

    document.querySelector('.champion-image2').src = "sources/ez.png";
    document.querySelector('.champion-image4').src = "sources/draven.png";
    document.querySelector('.champion-image3').src = "sources/twitch.png";
    document.querySelector('.champion-image5').style.display = "none";
    document.querySelector('.champion-image6').style.display = "none";
    document.querySelector('.champion-image1').style.display = "none";
    document.querySelector('.champion-image7').style.display = "none";
    document.querySelector('.champion-name-centered2').innerHTML = "Ezreal";
    document.querySelector('.champion-name-centered3').innerHTML = "Twitch";
    document.querySelector('.champion-name-centered4').innerHTML = "Draven";
    document.querySelector('.champion-name-centered5').innerHTML = "";
    document.querySelector('.champion-name-centered6').innerHTML = "";
    document.querySelector('.champion-name-centered1').innerHTML = ""; 
    document.querySelector('.champion-name-centered7').innerHTML = ""; 
}

function btn5() {
    resetChampionImages()
    document.querySelector('.main-image').src = "sources/support.jpg";
    document.querySelector('.lane-title').innerHTML = "SUPPORT";
    document.querySelector('.lane-description').innerHTML = "Support champions are team guardians. They help keep teammates alive and primarily focus on setting up kills, protecting their teammate in bot lane until they become stronger.";

    document.querySelector('.champion-image2').src = "sources/pantheon.png";
    document.querySelector('.champion-image4').src = "sources/blitz.png";
    document.querySelector('.champion-image3').src = "sources/lux.png";
    document.querySelector('.champion-image5').src = "sources/hiemer.png";
    document.querySelector('.champion-image1').style.display = "none";
    document.querySelector('.champion-image6').style.display = "none";
    document.querySelector('.champion-image7').style.display = "none";
    document.querySelector('.champion-name-centered2').innerHTML = "Pantheon";
    document.querySelector('.champion-name-centered3').innerHTML = "Lux";
    document.querySelector('.champion-name-centered4').innerHTML = "Blitzcrank";
    document.querySelector('.champion-name-centered5').innerHTML = "Hiemerdinger";
    document.querySelector('.champion-name-centered6').innerHTML = "";
    document.querySelector('.champion-name-centered1').innerHTML = ""; 
    document.querySelector('.champion-name-centered7').innerHTML = ""; 
    }

function resetChampionImages() {
    for (let i = 1; i <= 7; i++) {
        document.querySelector(`.champion-image${i}`).style.display = "block";
        document.querySelector(`.champion-image${i}`).src = "";
        document.querySelector(`.champion-name-centered${i}`).innerHTML = "";
    }
}

const signupBtn = document.getElementById('signup-btn');
const modal = document.getElementById('signup-modal');
const closeBtn = document.getElementById('close-btn');
const modalCloseBtn = document.getElementById('modal-close-btn');
    
signupBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function btn11() {
    document.querySelector('.nexus-image').src = "sources/blueNexus.jpg";
    document.getElementById('nexusTitle').innerHTML = "Blue Nexus";
    document.querySelector('.nexus-image').style.borderRadius = '25px';
    document.querySelector('.nexus-details').innerHTML = "Your Nexus is where minions spawn. Behind your Nexus is the Fountain, where you can quickly replenish health and mana and access the Shop.";
}

function btn22() {
    document.querySelector('.nexus-image').src = "sources/redNexus.jpg";
    document.getElementById('nexusTitle').innerHTML = "Red Nexus";
    document.querySelector('.nexus-image').style.borderRadius = '25px';
    document.querySelector('.nexus-details').innerHTML = "Located in the enemy team’s base, the enemy Nexus is just like yours. Destroying the enemy Nexus wins your team the game.";
}

function btn33() {
    document.querySelector('.turret-image').src = "sources/Turret.jpg";
    document.getElementById('structureTitle').innerHTML = "Turret";
    document.querySelector('.turret-image').style.borderRadius = '25px';
    document.querySelector('.turret-description').innerHTML = "Located in the enemy team’s base, the enemy Nexus is just like yours. Destroying the enemy Nexus wins your team the game.";
}

function btn44() {
    document.querySelector('.turret-image').src = "sources/inhib.jpg";
    document.getElementById('structureTitle').innerHTML = "Inhibitor";
    document.querySelector('.turret-image').style.borderRadius = '25px';
    document.querySelector('.turret-description').innerHTML = "Each Inhibitor is protected by a Turret. When destroyed, super minions will spawn in that lane for several minutes. Afterward, the Inhibitor will respawn and Super Minions will stop spawning.";
}

function btn55() {
    document.querySelector('.drake-image').src = "sources/dr.jpg";
    document.getElementById('objectives').innerHTML = "Drake";
    document.querySelector('.drake-image').style.borderRadius = '25px';
    document.querySelector('.drake-description').innerHTML = "Drakes, or dragons, are powerful monsters that grant unique bonuses depending on the element of the drake your team slays. There are five Elemental Drakes and one Elder Dragon.";
}

function btn66() {
    document.querySelector('.drake-image').src = "sources/br.jpg";
    document.getElementById('objectives').innerHTML = "Baron Nashor";
    document.querySelector('.drake-image').style.borderRadius = '25px';
    document.querySelector('.drake-description').innerHTML = "Baron Nashor is the most powerful monster in the jungle. Killing Baron grants the slayer’s team bonus attack damage, ability power, empowered recall, and greatly increases the power of nearby minions.";
}