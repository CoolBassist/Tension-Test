var question = -1;

var questions = ["There are no objective moral standards; moral judgements are merely an expression of the values of particular cultures.", "So long as they do not harm others, individuals should be free to persue their own ends.", "People should be allowed travel by car even if they can walk, cycle or take a train instead.", "It is always wrong to take another person's life.", "The right to life is so fundamental that financial considerations are irrelevant in any effort to save lives.", "Volantary euthanasia should remain illegal.", "Homosexuality is wrong because it is unnatural.", "It is not reasonable to believe in the existance of a thing without even the possibility of evidence for its existance.", "The possession of drugs for personal use should stay criminalised. ", "There exists an all-powerful, loving, and good God.", "The Second World War was a just war.", "Having made a choice, it is always possible that one might have chosen otherwise.", "It is okay to judge individuals solely on their merits.", "Judgements about works of art are purely matters of taste.", "On bodily death, a person continues to exist in a non-physical form.", "The government should not permit the sale of health treatments which have not been tested for efficacy or safety.", "There are no objective truths about matters of fact; 'truth' is always relative to particular culture and individuals.", "Athiesm is a faith just like any other, because it is not possible to prove the non-existance of God.", "Proper sanitation and medicines are generally good for a society.", "In certain circumstances, it might be disirable to discriminate positively in favour of a person as recompense for harms done to him/her in the past.", "Alternative and complementary medicines are as valuable as mainstream medicine.", "Severe brain damage can rob a person of all consciousness and selfhood.", "To allow an innocent child to suffer needlessly when one could easily prevent it is morally reprehensible.", "The environment should not be damaged unnecessarily in the persuit of human ends.", "Michelangelo is one of history's finest artists.", "Individuals have sole rights over their own bodies.", "Acts of genocide stand as a testament to man's ability to do great evil.", "The holocaust is a historical reality which took place more or less as the history books report.", "Governments should not be allowed to increase taxes sharply to save lives in the developing world.", "The future is fixed; how one's life unfolds is a matter of destiny."]

var answers = new Array(30);

function agree() {
    answers[question] = true;
    nextQuestion();
}

function disagree() {
    answers[question] = false;
    nextQuestion();
}

function nextQuestion() {
    question += 1;
    if (question < 30) {
        document.getElementById("questionNumber").innerHTML = "Question " + (question + 1);
        document.getElementById("questionContent").innerHTML = questions[question];
    } else {
        getTensions();
    }
}

function getTensions() {
    var tensions = new Array(15);
    tensions[0] = answers[0] && answers[26];
    tensions[1] = answers[4] && !answers[28];
    tensions[2] = answers[9] && answers[22];
    tensions[3] = answers[16] && answers[27];
    tensions[4] = answers[23] && !answers[2];


    tensions[5] = answers[1] && !answers[8];
    tensions[6] = answers[25] && answers[5];
    tensions[7] = answers[3] && answers[10];
    tensions[8] = answers[11] && answers[29];
    tensions[9] = answers[18] && answers[6];


    tensions[10] = answers[19] && !answers[12];
    tensions[11] = answers[21] && answers[14];
    tensions[12] = !answers[7] && answers[17];
    tensions[13] = answers[13] && answers[24];
    tensions[14] = answers[15] && answers[20];

    var noOfTensions = 0;

    for (let i = 0; i < 15; i++) {
        if (tensions[i]) {
            noOfTensions += 1
        }
    }

    document.getElementById("questionNumber").innerHTML = "Results";

    document.getElementById("questionContent").innerHTML = "You have " + noOfTensions + " tensions.";

    if (noOfTensions == 0) {
        document.getElementById("questionContent").innerHTML += " Your opinions on the issues we asked you about are totally consistent.<br>";
    } else if (noOfTensions < 3) {
        document.getElementById("questionContent").innerHTML += " You seem to be an admirably consistent thinker, if not entirely so.<br>";
    } else if (noOfTensions < 6) {
        document.getElementById("questionContent").innerHTML += " Like most people, your opinion probably don't hang together as they might.<br>";
    } else {
        document.getElementById("questionContent").innerHTML += " You're either an incredibly subtle thinker or a mass of contradictions!<br>";
    }

    var tensionList = ["You believe that morality is subjective, yet think that genocide is evil. The claim that it is evil seems to beyond all cultures and convention.",

        "You agree that life is so precious that any financial cost is irrelevant, yet dont agree with the government increasing taxes to save lives in the third world.",

        "You agree that there is an all-powerful, loving and good God, but also agree that anyone that causes child suffering is morally apprehensible. If God is all powerful, but doesn't stop child suffering, he is not loving. If God is loving, but cannot stop child suffering, he is not all-powerful.",

        "You agree that there are no objective truths about matters of fact, and that the holocaust happened more or less as the history books describe. If truth is subjective then nothing is straight-forwardly 'true' or 'false'. What is true for one person might not be true to another. ",

        "You agree that the environment should not be damaged in persuit of human ends, but you disagree that people should take public transport, or carbon neutral transport instead of driving.",

        "You agree that so long as they do not harm others, people should be free to persue their own ends, but disagree that possession of drugs for personal use should stay criminalised.",

        "You agree that people should have sole rights over their body, but that voluntary euthanasia should remain illegal.",

        "You agree that killing another person is wrong always, but that world war two was a just war.",

        "You agree that the future is fixed, but that people could have always chosen differently in a choice they made.",

        "You agree that homosexuality is wrong because it is unnatural, but think that unnatural medicine and proper sanitation is good for society. What is natural about sophisticated modern sewage systems, or the domestic supply of clean water?",

        "You think it is okay to positively discriminate against someone to recompense for harms done to them in the past, but disagree that is not always right to judge individuals on their merits.",

        "You agree that severe brain damage can rob a person of their self, but that the body lives on after death.",

        "You disagree that it is reasonable to live with the belief of something without even the possibility of evidence for that thing, but agree that athiesm is a faith just like any other due to the impossibility of disproving God. Athiesm does not make a claim about the existance of God, therefore it is the ones who do who have the burden of proof.",

        "You think that art is subjective, but think that Michelangelo is one the greatest artists of all time.",

        "You agree that medicine should not be on sale until it has proven its efficacy and safety. But also agree that alternative medicine is as valuable as main stream medicine. Alternative medicine that has been proven to work and is safe is called 'medicine'"
    ]

    console.log(tensionList.length)

    for (let i = 0; i < 15; i++) {
        if (tensions[i]) {
            document.getElementById("questionContent").innerHTML += "<br><br> Tension " + (i + 1) + ": " + tensionList[i];
        }
    }


}