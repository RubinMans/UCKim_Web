function getMention(note) {
  for (const b of BAREME_LMD) {
    if (note >= b.min && note <= b.max) return b;
  }
  return BAREME_LMD[BAREME_LMD.length - 1];
}
function calculerMoyenneGenerale(ues) {
  let s=0,t=0;
  for(const u of ues){s+=u.moyenne*u.credits;t+=u.credits;}
  return t>0?s/t:0;
}
function deliberer(moy, ues) {
  const eg=ues.filter(u=>u.moyenne<5);
  const el=ues.filter(u=>u.moyenne>=5&&u.moyenne<10);
  if(eg.length>0)return{decision:"Ajourné",motif:"Échec grave (note < 5/20)"};
  if(moy>=10&&el.length===0)return{decision:"Admis",motif:"Réussite complète"};
  if(moy>=12&&el.length<=2)return{decision:"Admis avec dettes",motif:`${el.length} UE en dette légère`};
  if(moy>=10&&el.length<=1)return{decision:"Admis avec compensation",motif:"Compensation autorisée"};
  return{decision:"Ajourné",motif:`Moyenne ${moy.toFixed(2)}/20, ${ues.filter(u=>u.moyenne<10).length} UE(s) en échec`};
}
