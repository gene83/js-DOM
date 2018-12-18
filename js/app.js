/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
const getNameTaylor = document.getElementById('name1');
getNameTaylor.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
const getPosKhaled = document.getElementById('position2');
getPosKhaled.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
const getAliasPiko = document.getElementById('alias3');
getAliasPiko.innerHTML = 'Concatenation';



/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
const getProfPrince = document.getElementsByClassName('profile')[0];
getProfPrince.innerHTML = 'Sexy M.F.';


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
const getProfBruce = document.getElementsByClassName('profile')[1];
getProfBruce.innerHTML = '"Be like water my friend"';


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
const getAliasSam = document.getElementsByClassName('alias')[2];
getAliasSam.innerHTML = 'Big Kahuna';


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
const getNamePeter = document.createElement('div');
getNamePeter.id = 'name7';
getNamePeter.innerHTML = 'Peter Griffin';

const getNameParent = document.getElementById('nameParent');
getNameParent.appendChild(getNamePeter)

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
const getAliasTim = document.createElement('div');
getAliasTim.id = 'alias8';
getAliasTim.innerHTML = 'Old Man Riverwalk';

const getAliasParent = document.getElementById('aliasParent');
getAliasParent.appendChild(getAliasTim);


//Final Boss
/*9. Create your own profile.*/
const getMyBlock = document.getElementsByClassName('block3')[2];
const getMyImg = getMyBlock.childNodes[0];
getMyImg.src = 'https://i2.cdn.turner.com/dr/pga/sites/default/files/articles/Rob-Labritz-Nutrition.jpg'

const getMyName = document.createElement('div');
getMyName.innerHTML = 'Gene Hall'
getMyName.id = 'name9';
getMyBlock.appendChild(getMyName);

const getMyPosition = document.createElement('div');
getMyPosition.innerHTML = 'Course Pro';
getMyPosition.id = 'position9';
getMyBlock.appendChild(getMyPosition);

const getMyAlias = document.createElement('div');
getMyAlias.innerHTML = 'Mr. Pure';
getMyAlias.id = 'alias9';
getMyBlock.appendChild(getMyAlias);

const getMyBio = document.createElement('div');
getMyBio.innerHTML = 'ripping dingers since 2018';
getMyBio.id = 'bio9';
getMyBlock.appendChild(getMyBio);
