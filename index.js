var start = confirm(`praqramist olmaq istəyirsiniz ?`);

if (start) {
  alert(`indi qısa bir oyuna başlıyacıq səhv etsəniz birbaşa uduzacaqsınız
    səhv etmiyin praqramist olun`);
  var answer = Number(
    confirm(`Artıq başladıq | komputerinlə birlikdə yatırsan ?`)
  );
  if (answer) {
    answer = Number(confirm(`great | ingilis dili bilirsen?`));
    if (answer) {
      answer = Number(confirm(`GREAT| 4 saat bir yerdə otura bilirsen`));
      if (answer) {
        answer = Number( confirm(`GREAT | gelecekde ilk maaşınla mac alacaqsan ?`)); 
      if(answer){
        alert(`ƏLA səndən gələcəkdə çox güclü praqramist olacaq `)
      }
      else{alert(`yox senden praqramist olmağa az qalmışdı heyif olmadı`)}
      }
        else{
          alert(`yox senden hec praqramist olmaz`)
        }
    } else {
      alert(`yox senden hec montyor da olmaz`);
    }
  } else {
    alert(`yox senden praqramist olmaz`);
  }
} else {
  alert(`mminnətiniz olsun`);
}
