document.getElementById("redirectForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    // reaksi adp + p akan menghasilkan?
    if (answer === "a"  ) {
        window.location.href = "https://families.google.com/jp/WTLz1qLDZEkSfKYwWV7-N2PXoYr6IQ";
    } 
    // reaksi nadp + h akan menghasilkan?
     else if (answer === "j"  ){
        window.location.href = " https://families.google.com/jp/0eGj-ZNBKhbfzK0_mkNxhbcIENXG4Q";
    } 
    // apakah FOTOFOSFORILASI non siklik melibatkan P680?
    else if (answer === "7" || answer === 7 ){
        window.location.href = "https://families.google.com/jp/TZQUkVF6Fh1K7iu5E4JjaDzYs8hxrA";
    } else if (answer === "gita mutia puspita"){
        window.location.href = " https://families.google.com/jp/RUt5cKmppEx8KP-XuSHTjey5tBv5yQ";
    }else {
        alert("Jawaban salah. Coba lagi!");
    }
});
