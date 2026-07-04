// Qualification Form Logic

const qualificationForm = document.getElementById('qualification-form');

if (qualificationForm) {
    qualificationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const platform = document.getElementById('platform').value;
    const timeline = document.getElementById('timeline').value;
    const budget = document.getElementById('budget').value;
    const assets = document.getElementById('assets').value;
    
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