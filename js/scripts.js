// Qualification Form Logic

const qualificationForm = document.getElementById('qualification-form');

if (qualificationForm) {
    qualificationForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(qualificationForm);

    // Submit to Netlify Forms
        try {
            await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });
        } catch (error) {
            console.error('Form submission error:', error);
            // Still redirect even if submission fails
        }
    
    // Get values for qualification logic
    const platform = formData.get('platform');
    const timeline = formData.get('timeline');
    const budget = formData.get('budget');
    const assets = formData.get('assets');
    
    /*    
    const platform = document.getElementById('platform').value;
    const timeline = document.getElementById('timeline').value;
    const budget = document.getElementById('budget').value;
    const assets = document.getElementById('assets').value; */
    
    // Disqualify conditions
    if (platform === 'custom' || 
        timeline === 'exploring' || 
        budget === 'under750' || 
        assets === 'no') {
        window.location.href = 'thank-you.html';
    } else {
        window.location.href = 'book.html';
    }
});
}



// Dynamic copyright year
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Lead Magnet Form Logic - Submit to Netlify then redirect
const leadMagnetForm = document.querySelector('form[name="lead-magnet"]');

if (leadMagnetForm) {
    leadMagnetForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(leadMagnetForm);
        
        // Submit to Netlify Forms
        try {
            await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });
        } catch (error) {
            console.error('Form submission error:', error);
        }
        
        // Redirect to download page
        window.location.href = '/download.html';
    });
}