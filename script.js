function login() {

    const username =
        document.getElementById("username").value.trim();

    const pin =
        document.getElementById("pin").value.trim();

    if (username === "" || pin === "") {

        alert("Please enter username and demo PIN.");

        return;
    }

    document.getElementById("displayUsername").textContent =
        username;

    document.getElementById("loginPage")
        .classList.add("hidden");

    document.getElementById("dashboard")
        .classList.remove("hidden");

    loadHistory();
}


function runSimulation(type) {

    const terminal =
        document.getElementById("terminal");

    terminal.style.display = "block";

    addHistory(type);

    terminal.innerHTML = `

        <strong>
            ╔══ ZORVEXA ${type.toUpperCase()} SIMULATION ══╗
        </strong>

        <br><br>

        <div id="status">
            ● VIRTUAL SYSTEM STARTING...
        </div>

        <br>

        <div id="terminalText"></div>

        <div class="progress">

            <div
                class="progress-bar"
                id="progressBar">
            </div>

        </div>

        <br>

        <div id="result"></div>
    `;


    const textBox =
        document.getElementById("terminalText");

    const progressBar =
        document.getElementById("progressBar");

    const status =
        document.getElementById("status");

    const result =
        document.getElementById("result");


    let messages;

    if (type === "Instagram") {

        messages = [

            "> Opening fictional Instagram environment...",
            "> Loading demo profile interface...",
            "> Generating simulated profile data...",
            "> Processing fictional activity...",
            "> Analyzing virtual interface...",
            "> Finalizing Instagram simulation..."

        ];

    } else {

        messages = [

            `> Starting ${type} simulation...`,
            "> Loading virtual environment...",
            "> Creating fictional simulation session...",
            "> Connecting to demo interface...",
            "> Processing simulated data...",
            "> Running virtual analysis...",
            "> Finalizing simulation..."

        ];
    }


    let index = 0;

    let progress = 0;


    function nextStep() {

        if (index < messages.length) {

            const line =
                document.createElement("div");

            line.textContent =
                messages[index];

            textBox.appendChild(line);

            index++;

            progress +=
                Math.floor(100 / messages.length);

            progressBar.style.width =
                progress + "%";


            if (index === 2) {

                status.textContent =
                    "● VIRTUAL CONNECTION ACTIVE";
            }


            if (index === 4) {

                status.textContent =
                    "● PROCESSING SIMULATION...";
            }


            setTimeout(nextStep, 700);

        } else {

            progressBar.style.width =
                "100%";

            status.textContent =
                "● SIMULATION COMPLETE";


            if (type === "Instagram") {

                result.innerHTML = `

                    <br>

                    <strong>
                        ✓ INSTAGRAM SIMULATION COMPLETE
                    </strong>

                    <br><br>

                    ┌─ DEMO PROFILE ─┐
                    <br>
                    Username: demo_user
                    <br>
                    Followers: 1,250
                    <br>
                    Posts: 84
                    <br>
                    Status: SIMULATED
                    <br>
                    └────────────────┘

                    <br><br>

                    ⚠ FICTIONAL SIMULATION ONLY

                    <br>

                    No real Instagram account,
                    password or personal data
                    was accessed.

                `;

            } else {

                result.innerHTML = `

                    <br>

                    <strong>
                        ✓ ${type.toUpperCase()}
                        SIMULATION COMPLETE
                    </strong>

                    <br><br>

                    Fictional simulation completed
                    successfully.

                    <br><br>

                    ⚠ FICTIONAL SIMULATION ONLY

                    <br>

                    No real account, device,
                    phone number or personal data
                    was accessed.

                `;
            }
        }
    }


    nextStep();
}


/* =========================
   HISTORY SYSTEM
========================= */


function addHistory(type) {

    let history =
        JSON.parse(
            localStorage.getItem("zorvexaHistory")
        ) || [];


    const entry = {

        type: type,

        time: new Date().toLocaleTimeString()

    };


    history.unshift(entry);


    // Keep latest 20 entries

    history =
        history.slice(0, 20);


    localStorage.setItem(
        "zorvexaHistory",
        JSON.stringify(history)
    );


    loadHistory();
}



function loadHistory() {

    const historyList =
        document.getElementById("historyList");


    if (!historyList) return;


    const history =
        JSON.parse(
            localStorage.getItem("zorvexaHistory")
        ) || [];


    if (history.length === 0) {

        historyList.innerHTML = `

            <p class="empty-history">
                No simulations run yet.
            </p>

        `;

        return;
    }


    historyList.innerHTML = "";


    history.forEach(function(entry) {

        const item =
            document.createElement("div");


        item.className =
            "history-item";


        item.innerHTML = `

            <span>
                ● ${entry.type} Simulation
            </span>

            <small>
                ${entry.time}
            </small>

        `;


        historyList.appendChild(item);

    });
}



function clearHistory() {

    localStorage.removeItem(
        "zorvexaHistory"
    );


    loadHistory();
}


/* =========================
   LOGOUT
========================= */


function logout() {

    document.getElementById("dashboard")
        .classList.add("hidden");

    document.getElementById("loginPage")
        .classList.remove("hidden");


    document.getElementById("username").value =
        "";

    document.getElementById("pin").value =
        "";

    document.getElementById("displayUsername")
        .textContent = "DEMO USER";


    document.getElementById("terminal")
        .style.display = "none";
}
/* =========================
   LIVE SYSTEM CLOCK
========================= */

function updateClock() {

    const clock =
        document.getElementById("liveClock");

    if (!clock) return;

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString();

}

updateClock();

setInterval(updateClock, 1000);