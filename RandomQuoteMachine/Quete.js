$(document).ready (function() {
  $("body").load(generateQuote()); // loads the first quote
});

var theQuotes = [ //each subarray has quotation first, quoter second
 ["I tell you, we are here on Earth to fart around, and don't let anybody tell you different.", "Kurt Vonnegut"],
["I want to stay as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center.", "Kurt Vonnegut"],
["Laughter and tears are both responses to frustration and exhaustion. I myself prefer to laugh, since there is less cleaning up to do afterward.", "Kurt Vonnegut"],
["I urge you to please notice when you are happy, and exclaim or murmur or think at some point, 'If this isn’t nice, I don’t know what is.'","Kurt Vonnegut"],
["Here we are, trapped in the amber of the moment. There is no why.","Kurt Vonnegut"],
["Everything was beautiful and nothing hurt.","Kurt Vonnegut"],
["True terror is to wake up one morning and discover that your high school class is running the country.","Kurt Vonnegut"],
["A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.","Kurt Vonnegut"],
["One of the few good things about modern times: If you die horribly on television, you will not have died in vain. You will have entertained us.","Kurt Vonnegut"],
["How nice--to feel nothing, and still get full credit for being alive.","Kurt Vonnegut"],
["The only thing that could spoil a day was people. People were always the limiters of happiness except for the very few that were as good as spring itself.","Ernest Hemingway"],
["Happiness in intelligent people is the rarest thing I know.","Ernest Hemingway"],
["The best way to find out if you can trust somebody is to trust them.","Ernest Hemingway"],
["Courage is grace under pressure.","Ernest Hemingway"],
["There is nothing to writing. All you do is sit down at a typewriter and bleed.","Ernest Hemingway"],
["Every man's life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another.","Ernest Hemingway"],
["Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.","Ernest Hemingway"]
["Never mistake motion for action.","Ernest Hemingway"],
["I love sleep. My life has the tendency to fall apart when I'm awake, you know?","Ernest Hemingway"],
["When people talk, listen completely. Most people never listen.","Ernest Hemingway"],
["Emancipate yourself from mental slavery, none but ourself can free our mind", "Bob Marley"],
["Just do it, make your dreams come true", "Nike"],
["Don't gain the world and lose your soul, wisdom is better than silver or gold", "Bob Marley"],
["If she's amazing, she wont't be easy. If she's easy, she won't be amazing. If she's worth it, you won't give up. If you give up, you're not worthy. Thruth is, everbody is going to hurt you; you just gotta find the ones worth suffering for.", "Bob Marley"],
["Love the life you live. Live the life you love.", "Bob Marley"],
["One good thing about music, when it hits you, you feel no pain", "Bob Marley"],
["I don't stand for the Black man's side. I don't stand for the White man's side, I stand for God's side.", "Bob Marley"],
["Judge not, before you judge yourself. Judge not, if you're not ready for the jugdement.", "Bob Marley"],
["Don't forget your history, nor you destiny.", "Bob Marley"],
["Some people feel the rain. Others just get wet.", "Bob Marley"],
["The greatness of a man is not how much wealth he acquires, but in his intergity and his ability to affet those around him positively", "Bob Marley"],
["When one door is closed, don't you know, another is open.", "Bob Marley"],
]

var generateQuote = function() { //picks a random quote from theQuotes
var max = theQuotes.length; 
var min = 0;
var theNum = Math.floor(Math.random() * (max-min+1))-1;
document.getElementById("theMachine").innerHTML = '"'+theQuotes[theNum][0]+'"'+"<br /><div class='authors-name''>"+"-"+theQuotes[theNum][1]+"</div>";
  

}

var changeUrl = function() { //jquery function to change url of 'tweet this quote' button
$("#quoteButton").click($("#tweetLink").attr("href","http://www.twitter.com/home/?status="+$("#theMachine").text()));

changeUrl(); //updates the 'tweet this quote' url
}