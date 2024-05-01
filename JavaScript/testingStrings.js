# This should be the number of table rows
# It should be possible to grab every rows, but it is growing
for(var i = 5; i < 20; i++){
	# find the table row with the word "the"
    if (document.getElementsByTagName("tr")[i].getElementsByTagName("td")[2].innerText == "the") 
	{ 
		console.log("true");
		# Make sure the cell is hidden
		document.getElementsByTagName("tr")[i].style.display = ""
	} 
	else 
	{ 
		console.log("false");
		# Hide the cell
		document.getElementsByTagName("tr")[i].style.display = "none"
	}
}


<tr><td class="strongsnt" valign="top"><span class="strongsnt"><a href="https://biblehub.com/greek/3588.htm" title="Strong&#39;s Greek 3588: The, the definite article. Including the feminine he, and the neuter to in all their inflections; the definite article; the.">3588</a></span> <span class="strongsnt"><a href="https://biblehub.com/greek/strongs_3588.htm" title="Englishman&#39;s Greek: 3588">[e]</a></span></td><td class="greek2" valign="top">τὸ<span class="translit"><a href="https://biblehub.com/greek/to_3588.htm" title="to: the.">to</a></span></td><td class="eng" valign="top">the</td><td class="pos" valign="top"><span class="pos"><a href="https://biblehub.com/grammar/greek.htm" title="Article - Accusative Neuter Singular">Art-ANS</a></span></td></tr>
