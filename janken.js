// let hands = ['グー', 'チョキ', 'パー'];
let hands = ['☀', '☔', '🌤','🌀'];
let com_hands;

function judge(p_hands) {
    com_hands = Math.floor(Math.random() * 4);

    if (p_hands === com_hands) result_text = "💩足元注意💩";
    else if (p_hands === 0 && com_hands === 1) result_text = "⚡イライラが態度に出てしまいそう⚡";
    else if (p_hands === 1 && com_hands === 2) result_text = "★あいさつが吉★";
    else if (p_hands === 2 && com_hands === 3) result_text = "❤告白されるかも❤";
    else if (p_hands === 3 && com_hands === 0) result_text = "💣忘れ物注意💣";

    else result_text = "👀GEEKとの出会いがあるかも👀";

    document.getElementById("com").innerHTML = hands[com_hands];
    document.getElementById("me").innerHTML = hands[p_hands];
    document.getElementById("result").innerHTML = result_text;
}