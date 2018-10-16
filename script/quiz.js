
var Answers = [
        {Question: "Wie hieß der 7. König Roms?",
        Answer1: "Servius Tullius",
        Answer2: "Lucius Tarquinius",
        Answer3: "Brutus Tarquinius",
        Answer4: "Es gab keinen 7. König Roms",
        Correct: 2},
        {Question: "Wie hieß Tarquinius Superbus 2. Frau?",
        Answer1: "Lucrezia",
        Answer2: "Sextia",
        Answer3: "Tarquinia",
        Answer4: "Tullia",
        Correct: 4},
        {Question: "Welche Aussage über Tarquinius Superbus stimmt nicht?",
        Answer1: "Er war ein grausamer Herrscher",
        Answer2: "Er wurde aus Rom vertrieben",
        Answer3: "Er misshandelte Lucrezia",
        Answer4: "Er schaffte den Senat ab",
        Correct: 3},
        {Question: "Wie viele Zurückeroberungsversuche unternahm Tarquinius Superbus?",
        Answer1: "Keinen",
        Answer2: "Zwei",
        Answer3: "Vier",
        Answer4: "Fünf",
        Correct: 4},
        {Question: "Wie hießen die ersten Konsuln der römischen Republik?",
        Answer1: "Tarquinius und Tullia",
        Answer2: "Brutus und Publius Valerius",
        Answer3: "Brutus und Lucrezius",
        Answer4: "Lucrezius und Publius Valerius",
        Correct: 3},
        {Question: "Was passierte bei dem Feldzug von Tarquinii und Veii gegen Rom?",
        Answer1: "Castor und Pollux erschienen am Himmel",
        Answer2: "Brutus starb",
        Answer3: "Juppiters Stimme verkündete den Sieg der Römer",
        Answer4: "Tarquinius Superbus starb",
        Correct: 2},
        {Question: "Wer verhinderte die Eroberung Roms bei dem Feldzug der Etrusker gegen Rom?",
        Answer1: "Horatius",
        Answer2: "Porsenna",
        Answer3: "Mucius",
        Answer4: "Brutus",
        Correct: 1},
        {Question: "Was geschah bei dem Mordanschlag auf den Etruskerkönig Porsenna?",
        Answer1: "Porsenna wurde ermordet",
        Answer2: "Tarquinius Superbus kam um",
        Answer3: "Der königliche Hofnarr wurde verletzt",
        Answer4: "Mucius legte seine Hand in ein Feuerbecken",
        Correct: 4},
        {Question: "Was tat der Etruskerkönig Porsenna?",
        Answer1: "Er ließ ein hölzernes Pferd an die Römer liefern, in dem sich seine Soldaten versteckt hatten. Nur weil die Römer das Friedensgeschenk ablehnten und anzündeten, wurde Rom nicht erobert",
        Answer2: "Er setzte Tarquinius Superbus als König ein",
        Answer3: "Er überließ den Römern die Nahrungsvorräte in seinen Feldlagern",
        Answer4: "Er lieferte Tarquinius Superbus an die Römer aus",
        Correct: 3},
        {Question: "Wie starb Tarquinius Superbus?",
        Answer1: "Er starb im Zweikampf",
        Answer2: "Er starb eines natürlichen Todes",
        Answer3: "Er wurde vergiftet",
        Answer4: "Er beging Selbstmord",
        Correct: 2}]
var c = 0
var correctcount = 0
var answer = ""
function SubmitQuestion(c){
        if (answer == "Newgame") {
                c = 0
                document.getElementById("innerform").style.display = "block";
                document.getElementById("submit").value = "Antworten";
                answer = ""
        }
        if (c == 10) {
                document.getElementById("iscorrect").innerHTML = "Du hast "+correctcount+" Fragen korrekt beantwortet";
                document.getElementById("innerform").style.display = "none";
                document.getElementById("submit").value = "Nochmal";
                answer = "Newgame"
                return;
        }
        var radios = document.getElementsByName('answers');
        for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                        answer = radios[i].value;
                        break;
                        }
                else{
                        document.getElementById("iscorrect").innerHTML = "Bitte beantworte die Frage:";
                }
                }
        document.getElementById("question").innerHTML = Answers[c]['Question'];
        document.getElementById("a1").innerHTML = Answers[c]['Answer1'];
        document.getElementById("a2").innerHTML = Answers[c]['Answer2'];
        document.getElementById("a3").innerHTML = Answers[c]['Answer3'];
        document.getElementById("a4").innerHTML = Answers[c]['Answer4'];
        c--
        if (answer != "Null") {
                var correct = Answers[c]['Correct']
                if (answer == Answers[c]['Correct']){
                        document.getElementById("iscorrect").innerHTML = "Richtig!";
                        ++ correctcount
                }
                else{
                        document.getElementById("iscorrect").innerHTML = "Das ist leider falsch. Die korrekte Antwort ist: <i>"+Answers[c]['Answer'+correct]+"</i>";
                }
        }
        c += 2
        document.getElementById("qnr").innerHTML = c;
}
SubmitQuestion(0)