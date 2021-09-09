/**
 * Event handler for 'Statistics' button.
 * Calculates following values fot the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
//const txt = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function vowels_counter(str) {
    let v = str.match(/[aeiou]/gi);
    return v === null ? 0 : v.length;
}

function consonats_counter(str) {
    let v = str.match(/([^aeiou!,.?])/gi);
    return v === null ? 0 : v.length;
}

function onStatisticsClicked(event) {

    let count_spaces = 0;
    for (const l of txt) {
        if (l === ' ') {
            count_spaces++;
        }
    }
    let char_count = document.getElementById('valCharCount');
    char_count.value = txt.length;

    let spaces_count = document.getElementById('valSpacesCount');
    spaces_count.value = count_spaces;

    let vowels_count = document.getElementById('valVowelsCount');
    vowels_count.value = vowels_counter(txt);

    let consonants_count = document.getElementById('valConsonantsCount');
    consonants_count.value = consonats_counter(txt);

    let words_count = document.getElementById('valWordsCount');
    words_count.value = txt.split(' ').length;
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    let words = txt.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            words.splice(i, 1);
        }
    }
    let words_count = document.getElementById('valOddWords');
    words_count.value = words.join(' ');
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
