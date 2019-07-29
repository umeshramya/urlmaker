
module.exports = (sentance="", separator="-")=>{
    if(separator.length > 1  || separator.length == 0){
        throw `invalid separator ${separator}`
    }

    const words = sentance.toLowerCase().split(" ");
    let link ="";
    words.forEach(element => {
        if(element !== ""){
            link = `${link}${element}${separator}`;
        }
        
    });
    link=link.substr(0, link.length -1);
    return link;
}