async function mergeSortVisualizer() {
    await mergeSort(0, totalBars - 1);
    for (let i = 0; i < totalBars; i++) {
        selected(one_bar[i], bar_sizes[i], "green");
    }
}

async function mergeSort(start, end) {
    if (start >= end) return;
    let mid = Math.floor((start + end) / 2);

    await mergeSort(start, mid);
    await mergeSort(mid + 1, end);
    await merge(start, mid, end);
}

async function merge(start, mid, end) {
    let merged = [];
    let i = start;
    let j = mid + 1;
    let k=0;
    for( ; i<=mid && j<=end ; )
    {
        if (bar_sizes[i] <= bar_sizes[j]) {
            merged[k++]=bar_sizes[i++];
            selected(one_bar[i], bar_sizes[i], "red"); // Reset to blue
        await delay(currentSpeed * 4);
        } else {
            merged[k++]=bar_sizes[j++];
            selected(one_bar[i], bar_sizes[i], "red"); // Reset to blue
        await delay(currentSpeed * 4);
        }             
    }

    while (i <= mid) {
        merged[k++]=bar_sizes[i++];
        selected(one_bar[i], bar_sizes[i], "red"); // Reset to blue
        await delay(currentSpeed * 4);
    }

    while (j <= end) {
        merged[k++]=bar_sizes[j++];
        selected(one_bar[i], bar_sizes[i], "red"); // Reset to blue
        await delay(currentSpeed * 4);
    }

    // Update the bars with the sorted values
    for (let i = start; i <= end; i++) {
        bar_sizes[i] = merged[i - start];
        selected(one_bar[i], bar_sizes[i], "white"); // Reset to blue
        await delay(currentSpeed * 4);
    }
}