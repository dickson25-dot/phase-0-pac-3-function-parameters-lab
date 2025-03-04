function introduction(Aki){
    return `Hi, my name is ${Aki}.`
}
function  introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage(Aki, Ember.js)
introductionWithLanguage(Samip, React)

function  introductionWithLanguageOptional(name= 'Gracie', language = 'JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
//introductionWithLanguageOptional(Gracie, Javascript)
//introductionWithLanguageOptional(Gracie, Python)