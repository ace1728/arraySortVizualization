// Sample data: an array of numbers representing bar heights
let data = [90,6,56,82,33,16,34,41,80,10,24,74,67,27,54,49,19,1,25,98,89];

let originalData = [...data]; // Store the original data for resetting

// Variable to track the current size factor (1 represents the original size)
let sizeFactor = 1;

// Function to create and display the bars with animation
function createBarsWithAnimation() {
    const graphContainer = document.querySelector('.bar-graph');

    // Clear previous bars
    graphContainer.innerHTML = '';

    // Loop through the data array and create a bar for each element
    data.forEach((value, index) => {
        const barContainer = document.createElement('div');
        barContainer.className = 'bar-container';

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = value * sizeFactor + 'px'; // Adjust bar size
        // ... (existing bar styles) ...

        const barLabel = document.createElement('div');
        barLabel.className = 'bar-label';
        barLabel.textContent = value;

        // Add the bar and label to the container
        barContainer.appendChild(bar);
        barContainer.appendChild(barLabel);

        // Add the container to the graph
        graphContainer.appendChild(barContainer);

        // Delay the animation for each bar
        setTimeout(() => {
            bar.style.transform = 'translateY(0)';
            barLabel.style.opacity = '1';
            barLabel.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Function to shrink the bars and update the display
function changeSize() {
    sizeFactor = 0.5; // Adjust the size factor as needed (e.g., 0.5 for 50% size)
    createBarsWithAnimation();
}

// Function to shuffle the array randomly
function shuffleArray() {
    sizeFactor = 1;
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }
    createBarsWithAnimation();
}

// Function to perform the Bubble Sort algorithm
function bubbleSort() {
    let n = data.length;
    let swapped;
    sizeFactor = 1;
    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (data[i] > data[i + 1]) {
                // Swap elements
                let temp = data[i];
                data[i] = data[i + 1];
                data[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    createBarsWithAnimation();
}

function insertionSort() {
    sizeFactor = 1;
    const n = data.length;
    for (let i = 1; i < n; i++) {
        let current = data[i];
        let j = i - 1;
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j];
            j--;
        }
        data[j + 1] = current;
    }
    createBarsWithAnimation();
}

function quickSort() {
    sizeFactor = 1;
    // Implement the Quick Sort algorithm here
    // Update 'data' array during the sorting process
    data = quickSortRecursive(data);
    createBarsWithAnimation();
}
function quickSortRecursive(data) {
    if (data.length <= 1) {
        return data;
    }

    const pivot = data[0];
    const left = [];
    const right = [];

    for (let i = 1; i < data.length; i++) {
        if (data[i] < pivot) {
            left.push(data[i]);
        } else {
            right.push(data[i]);
        }
    }

    return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
}

function mergeSort() {
    // Implement the Merge Sort algorithm here
    // Update 'data' array during the sorting process
    sizeFactor = 1;
    data = mergeSortRecursive(data);
    createBarsWithAnimation();
}

function mergeSortRecursive(data) {
    if (data.length <= 1) {
        return data;
    }

    const middle = Math.floor(data.length / 2);
    const left = data.slice(0, middle);
    const right = data.slice(middle);

    return merge(mergeSortRecursive(left), mergeSortRecursive(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function shellSort() {
    sizeFactor = 1;
    const n = data.length;
    let gap = Math.floor(n / 2);
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = data[i];
            let j = i;
            while (j >= gap && data[j - gap] > temp) {
                data[j] = data[j - gap];
                j -= gap;
            }
            data[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
        createBarsWithAnimation();

}
// Function to perform the Selection Sort algorithm
function selectionSort() {
    for (let i = 0; i < data.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements in the array
            [data[i], data[minIndex]] = [data[minIndex], data[i]];
        }
    }
    // After sorting, reset the size to the original and recreate the bars
    sizeFactor = 1;
    createBarsWithAnimation();
}




// Call the function to create and display the bars with animation when the page loads
window.addEventListener('load', createBarsWithAnimation);

// Attach the Bubble Sort function to the button click event
const bubbleSortButton = document.getElementById('bubbleSortButton');
bubbleSortButton.addEventListener('click', () => {
    bubbleSort();
});

// Attach the Insertion Sort function to the button click event
const insertionSortButton = document.getElementById('insertionSortButton');
insertionSortButton.addEventListener('click', () => {
    insertionSort();
});

// Attach the Quick Sort function to the button click event
const quickSortButton = document.getElementById('quickSortButton');
quickSortButton.addEventListener('click', () => {
    quickSort();
});

// Attach the Merge Sort function to the button click event
const mergeSortButton = document.getElementById('mergeSortButton');
mergeSortButton.addEventListener('click', () => {
    mergeSort();
});

// Attach the Shell Sort function to the button click event
const shellSortButton = document.getElementById('shellSortButton');
shellSortButton.addEventListener('click', () => {
    shellSort();
});

const changeSizeButton = document.getElementById('changeSizeButton');
changeSizeButton.addEventListener('click', () => {
    changeSize();
});

const randomizeArrayButton = document.getElementById('randomizeArrayButton');
randomizeArrayButton.addEventListener('click', () => {
    shuffleArray();
});

// Attach the "Selection Sort" function to the button click event
const selectionSortButton = document.getElementById('selectionSortButton');
selectionSortButton.addEventListener('click', () => {
    selectionSort();
});
