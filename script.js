document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop het herladen van de pagina
            
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('form-status');
            
            // 1. Directe visuele feedback
            btn.disabled = true;
            btn.innerHTML = 'Verzenden... <i class="fas fa-spinner fa-spin"></i>';
            
            // 2. Simuleer de verzending
            // We gebruiken een kortere tijd (1 seconde) om het vlotter te maken
            setTimeout(() => {
                // Toon het succesbericht in het status-veld
                status.innerHTML = `
                    <div style="color: #22c55e; background: #f0fdf4; padding: 15px; border-radius: 8px; margin-top: 20px; border: 1px solid #22c55e; font-weight: bold;">
                        &#9989; Uw bericht is succesvol verzonden!
                    </div>`;
                
                // Update de knop
                btn.innerHTML = 'Verzonden!';
                btn.style.backgroundColor = '#22c55e';
                
                // Maak het formulier leeg
                contactForm.reset();
                
                // Optioneel: herstel de knop na 5 seconden zodat ze opnieuw kunnen sturen
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = 'Verstuur Bericht';
                    btn.style.backgroundColor = ''; // Terug naar originele kleur
                }, 5000);

            }, 1000); 
        });
    }
});
