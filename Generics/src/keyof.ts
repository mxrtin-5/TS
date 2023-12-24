function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return "value " + obj[key];
}

extractAndConvert({name: "Tarado"}, 'name')