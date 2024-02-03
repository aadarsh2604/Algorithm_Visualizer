        let bars = document.getElementById("totalbars");
        let speed = document.getElementById("speed");
        let bars_generate = document.getElementById("bars_generate");
        let bubble_button = document.getElementById("bubble_button");
        let merge_button = document.getElementById("merge_button");
        let heap_button= document.getElementById("heap_button");
        let speed_button = document.getElementById("speed_button");
        let totalBars = bars.value;
        let currentSpeed = speed.value;
        let bar_sizes = [];
        let one_bar = [];
        let container = document.getElementById("bars_container");

        bars_generate.addEventListener("click", generate_bars);
        speed_button.addEventListener("click", speed_change);
        bubble_button.addEventListener("click", bubble);
        merge_button.addEventListener("click", mergeSortVisualizer);
        heap_button.addEventListener("click", heap);

        function generate_bars() {
            totalBars = parseInt(bars.value);
            container.innerHTML = "";
            for (let i = 0; i < totalBars; i++) {
                bar_sizes[i] = Math.floor(Math.random() * (bars.max - bars.min)) + 10;
                one_bar[i] = document.createElement("div");
                container.appendChild(one_bar[i]);
                let margin_size = 0.1;
                selected(one_bar[i], bar_sizes[i], "blue");
            }
        }

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function selected(a, b, c) {
            let margin_size = 0.1;
            a.style = "margin:0%" + margin_size + "%; background-color:" + c + "; width:" + (100 / totalBars - 2 * margin_size) + "%; height:" + b + "%; transition : all 0.1s;";
        }

        function speed_change() {
            currentSpeed = speed.value;
        }

        generate_bars();