// Pair class for the value and its index
class Pair {
    constructor(v, p) {
        this.value = v;
        this.index = p;
    }

    compareTo(o) {
        // Two nodes are equal only when their indices are the same
        if (this.index === o.index) {
            return 0;
        } else if (this.value === o.value) {
            return this.index - o.index;
        } else {
            return this.value - o.value;
        }
    }

    value() {
        return this.value;
    }

    renew(v, p) {
        this.value = v;
        this.index = p;
    }
}

class GFG {


    // Function to print the median for the current window
    printMedian(minSet, maxSet, window) {
        if (window % 2 === 0) {
            console.log((minSet[minSet.length - 1].value() + maxSet[0].value()) / 2.0);
        } else {
            console.log(minSet.length > maxSet.length ? minSet[minSet.length - 1].value() : maxSet[0].value());
        }
    }

    // Function to find the median of every window of size k
    findMedian(arr, k) {
        const minSet = [];
        const maxSet = [];

        const windowPairs = new Array(k);

        for (let i = 0; i < k; i++) {
            windowPairs[i] = new Pair(arr[i], i);
        }

        for (let i = 0; i < k / 2; i++) {
            maxSet.push(windowPairs[i]);
        }

        for (let i = k / 2; i < k; i++) {


            if (arr[i] < maxSet[0].value()) { // TODO: fix
                minSet.push(windowPairs[i]);
            } else {
                minSet.push(maxSet.shift());
                maxSet.push(windowPairs[i]);
            }
        }

        this.printMedian(minSet, maxSet, k);

        for (let i = k; i < arr.length; i++) {
            const temp = windowPairs[i % k];

            if (temp.value() <= minSet[minSet.length - 1].value()) {
                minSet.pop();

                temp.renew(arr[i], i);

                if (temp.value() < maxSet[0].value()) {
                    minSet.push(temp);
                } else {
                    minSet.push(maxSet.shift());
                    maxSet.push(temp);
                }
            } else {
                maxSet.shift();
                temp.renew(arr[i], i);

                if (temp.value() > minSet[minSet.length - 1].value()) {
                    maxSet.push(temp);
                } else {
                    maxSet.push(minSet.pop());
                    minSet.push(temp);
                }
            }

            this.printMedian(minSet, maxSet, k);
        }
    }
}

// Driver code
const gfg = new GFG();
const arr = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5];
const k = 3;

gfg.findMedian(arr, k);
