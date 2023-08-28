document.getElementById("redirectForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    // reaksi adp + p akan menghasilkan?
    if (answer === "atp"  ) {
        window.location.href = "https://families.google.com/jp/yUf4xSFc83pyNAtdsi4keKvpjDPUcQ";
    } 
    // reaksi nadp + h akan menghasilkan?
     else if (answer === "nadph"  ){
        window.location.href = "https://families.google.com/jp/gzHJCPcg0G4YiIaaNocHb-6SLjU7Vg";
    } 
    // apakah FOTOFOSFORILASI non siklik melibatkan P680?
    else if (answer === "iya" || answer === "benar" || answer === "betul" || answer === "betull"  ){
        window.location.href = "https://families.google.com/jp/z7CCqAB3CaYniL8ZvKMyTpQcVY_gdw";
    } else {
        alert("Jawaban salah. Coba lagi!");
    }
});
