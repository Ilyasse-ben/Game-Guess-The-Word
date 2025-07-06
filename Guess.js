
// les varible
let var1=document.getElementsByClassName('inp');
// les varible aui afficher la description et les lettre
// l'element afficher description
let des=document.getElementById('des');
// l'element afficher les alphabet
let lettre=document.getElementById('let');
// l'elment qui doit afficher la vraite de le mots
let bolean=document.getElementById('afficher');
// l'inpute 
let inp=document.getElementsByTagName('input');
let occ_level=0;
// les element de level
let lev=document.getElementsByClassName('level');
// un contour qui calculer le numbre des case vert
let occGren=0;
// le numbre de essay globale
let globle_essay=0;
// le qui afficher le nubre de hant
let hint=document.getElementById('hint');

// object 
let bD={
   mot: [
  "bytes", "stack", "patch", "crypt", "token",
  "cache", "array", "queue", "cloud", "debug",
  "input", "login", "logic", "block", "float",
  "macro", "proxy", "query", "modal", "mutex"
],
Desc: [
  "Unité de mesure informatique",
  "Structure de données en LIFO",
  "Correctif d’un logiciel",
  "Chiffrement de données",
  "Jeton d’accès ou d’authentification",
  "Mémoire temporaire rapide",
  "Tableau de données",
  "File d’attente FIFO",
  "Stockage en ligne",
  "Correction des erreurs",
  "Donnée d’entrée",
  "Connexion à un système",
  "Traitement logique",
  "Unité de mémoire ou de données",
  "Nombre à virgule flottante",
  "Instruction raccourcie",
  "Serveur intermédiaire",
  "Requête de données",
  "Fenêtre contextuelle",
  "Contrôle d’accès concurrentiel"
],
    occ:0,
    resultat:[],
    
    // la fonction qui reformuler un mot
    tronsofrmuerMot:function(){
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        
        // choiser troi alghabiet au hasard
        for(let j=0;j<3;j++){
            let nombre = Math.floor(Math.random() * 24); 
            this.resultat+=alphabet.split("")[nombre];
            console.log(alphabet[nombre])
        }
        // ajouter tous les alphabet de mot a les alphabet choiser
        this.resultat+=this.mot[occ_level]
        // modifier les index de les lettre pour defucilte les chose
        console.log(this.resultat);
        return this.resultat.split("").sort(() => Math.random() - 0.5).join("")
    },
    // la fonction qui afficher les index
    afficherGuide:function(){
        des.innerHTML=this.Desc[occ_level];
        let mote=this.tronsofrmuerMot();
        lettre.innerHTML="";
        for(let i=0;i<mote.length;i++){
            lettre.innerHTML+=" "+ mote[i];
        }
    },
    // la fonction qui vedie la liste 
    
}
// les fonction 
// la fonction qui doit afficher est ce que vrai o non
// la fonction qui calculer le nombre de passge
// fonction level
function level(){
    lev[occ_level].style.background="var(--color-black)";
    occ_level++;
    bD.occ++;
    occGren=0;
    globle_essay=0;
    for(let i=0;i<20;i++){
        inp[i].style.background='var(--color-white)';
        inp[i].value="";
    }
    bD.resultat="";
    bD.afficherGuide();
    document.getElementById(0)?.focus();
    
}

function affichee_Ruslt(){
    if(occGren===5){
        bolean.innerHTML="Very goode";
        setTimeout(level,1500);
        return 1;
        
    }else{
        occGren=0;
        bolean.innerHTML="Agine";
        globle_essay++;
        hint.value=4-globle_essay +" Hint";
        if(globle_essay===4){
            setTimeout(()=>alert("Oups ! Vous n'avez pas réussi cette fois. Recommençons au niveau 1."),1000);
            setTimeout(()=>location.reload(),1500);
            
        }
        return 0;           
    }
}
// fonction 
function avancerSuivant(event, suivantId) {
    let champ = event.target;
    if (champ.value.length === 1) {
        ruslt=bD.mot[bD.occ];
        if(champ.value==ruslt[Number(champ.name)]){
            champ.style.background='var(--color-emerald-300)';
            occGren++;
        }
        else if(ruslt.indexOf(champ.value)!=-1){
            champ.style.background='var(--color-yellow-200)';
        }
        else {
            champ.style.background='var(--color-red-400)';
        }
        if(suivantId!="non"){
            document.getElementById(suivantId)?.focus();
        }
        else{
            if(affichee_Ruslt()>0){
            }else{
                document.getElementById(+champ.id+1)?.focus();
            }

        }
            
    }else{
        champ.style.background='var(--color-white)';
    }
} 

bD.afficherGuide();
document.getElementById(0)?.focus();




