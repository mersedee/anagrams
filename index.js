const words = [
    'rope',
    'pore',
    'repo',
    'red rum',
    'murder',
    'listen',
    'silent',
    'endeavour',
]

function findAnagrams() {
    let sortedWords = [];
    let similarIndices = new Map();
    let similarWords = [];

    for (let i = 0; i < words.length; i++) {
        sortedWords.push(`${words[i].split('').sort().join('').trim()}`);
    }

    for (let i = 0; i < sortedWords.length; i++) {
        const sortedString = sortedWords[i];

        if (similarIndices.has(sortedString)) {
            const group = similarIndices.get(sortedString);
            group.indices.push(i);
            group.words.push(words[i]);
        } else {
            const group = {
                indices: [i],
                words: [words[i]]
            };
            similarIndices.set(sortedString, group);
            similarWords.push(group.words);
        }
    }

    return similarWords;
}


const result = findAnagrams();

console.log(result)
