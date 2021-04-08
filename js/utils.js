//Function pour séparer toutes les trois chiffres du 'price'
function numberWithSpace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};