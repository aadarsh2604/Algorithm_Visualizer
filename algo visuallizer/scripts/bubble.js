async function bubble() {
    let t = 0;
    let n = totalBars;
    for (let i = totalBars - 2; i > 0; i--) {
        for (let j = 0; j <= i; j++) {
            selected(one_bar[j], bar_sizes[j], "red");
            selected(one_bar[j + 1], bar_sizes[j + 1], "red");
            await delay(currentSpeed);
            selected(one_bar[j], bar_sizes[j], "blue");
            selected(one_bar[j + 1], bar_sizes[j + 1], "blue");
            await delay(currentSpeed);
            if (bar_sizes[j] > bar_sizes[j + 1]) {
                t = bar_sizes[j];
                bar_sizes[j] = bar_sizes[j + 1];
                bar_sizes[j + 1] = t;
                selected(one_bar[j], bar_sizes[j], "yellow");
                selected(one_bar[j + 1], bar_sizes[j + 1], "yellow");
                await delay(currentSpeed);
                selected(one_bar[j], bar_sizes[j], "blue");
                selected(one_bar[j + 1], bar_sizes[j + 1], "blue");
                await delay(currentSpeed);
            }
        }
    }
}