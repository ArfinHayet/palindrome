function palindrome(word){
    const letter = [];
	var words = word;

	var reword = "";  

	for(i=0;i<words.length;i++){
		letter.push(words[i])
	}

	for(i=0;i<words.length;i++){
	    reword += letter.pop();
	}

	if(words == reword){
		return true
	} else {
		return false
	}

}

module.exports.palindrome = palindrome;  

