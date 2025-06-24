// 28. Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


const strStr = (haystack, needle) => {
    if(haystack.includes(needle))
        return haystack.indexOf(needle)
    else
        return -1
};

const haystack= "sadbutsad"
const needle= "sada"

console.log(strStr(haystack, needle))