var input = "ASD123";
var character = [];
var characterCount = [];

for(i = 0; i < input.length; i++)
{
    character.push(input[i]);
    if(character.includes(input[i]))
    {
        var charId = null;
        for(y = 0; y < character.length; i++)
        {
            console.log(i);
            if(charId != null)
            {
               charId = character[y];
               console.log(charId);
               return;
            }
        }
        characterCount[charId]++;
    }else{
        character.push(input[i]);
        characterCount.push(1);
    }
}
for(i = 0; i < input.length; i++)
{
    console.log(input[i]);
}