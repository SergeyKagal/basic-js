function createDreamTeam(a) {
    var dreamT=[];
        a.forEach(element => {

            element=element.trim();
            dreamT.push(element[0].toUpperCase());  
                });
    dreamT.sort();    
        return dreamT.join('');    
            };



  var arr=[
    '   William Alston ',
    ' Paul Benacerraf',
    '  Ross Cameron',
    '       Gilles Deleuze',
    '  Arda Denkel ',
    '  Michael Devitt',
    '  Kit Fine',
    ' Nelson Goodman',
    'David Kolb',
    '   Saul Kripke',
    '  Trenton Merricks',
    '  Jay Rosenberg',
  ];

  console.log(createDreamTeam(arr));

  
