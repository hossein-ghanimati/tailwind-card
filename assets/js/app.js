const changeMoodBBtn = document.querySelector('#moods-wrapper')

changeMoodBBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark')
})