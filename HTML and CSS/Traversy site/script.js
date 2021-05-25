let theme = localStorage.getItem('theme')



let themeDots = document.getElementsByClassName('theme-dot')

for(let i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

const setTheme = (mode) => {
    if(mode === 'light') {
        document.getElementById('theme-style').href='default.css'
    } 
    if(mode === 'blue') {
        document.getElementById('theme-style').href='blue.css'
    } 
    if(mode === 'green') {
        document.getElementById('theme-style').href='green.css'
    } 
    if(mode === 'purple') {
        document.getElementById('theme-style').href='purple.css'
    } 

    localStorage.setItem('theme', mode)

}

if(theme === null) {
    setTheme('light')
} else {
    setTheme(theme)
}