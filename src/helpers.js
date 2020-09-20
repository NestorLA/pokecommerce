export function uppercaseFL(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function precioRandom() {
    return Math.round(Math.random()*1500);
}