const portfolioLink = document.querySelector('.portfolio-link')
const closeBtn = document.querySelector('.modal-close')

portfolioLink.addEventListener('click', (e) => {
    e.preventDefault()
    
    const modal = document.querySelector('.portfolio-modal')

    const openModal = () => {
        modal.classList.add('is-open')
        document.body.classList.add('body-overflow')
    }

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('is-open')
        document.body.classList.remove('body-overflow')
    })

    openModal();
})

